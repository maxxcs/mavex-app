import * as monaco from 'monaco-editor'; // eslint-disable-line import/no-unresolved
import client from '../config/client';
import CrdtService from './crdt-service';
import MonacoAdapterWorker from './workers/monaco-adapter.wk';

function editorController(editorRef) {
  const editor = monaco.editor.create(editorRef.current, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true,
    automaticLayout: true,
  });
  const model = editor.getModel();
  const storage = new CrdtService(Date.now().toString());
  const adapter = new MonacoAdapterWorker();
  let preventEmit = false;

  model.onDidChangeContent((evt) => {
    if (preventEmit) return;
    // console.log(evt);
    const { changes } = evt;
    adapter.postMessage(changes);
  });

  adapter.onmessage = ({ data }) => {
    const op = storage.executeChange(data);
    client.emit('editor:broadcastOperation', op);
  };

  client.on('server:executeOperation', (raw) => {
    const { char, index } = storage.executeOperation(raw.op);
    const { lineNumber, column } = model.getPositionAt(index);
    let range;
    switch (raw.type) {
      case 1:
        console.log('INSERT', index);
        range = new monaco.Range(lineNumber, column, lineNumber, column);
        break;
      case 0:
        console.log('REMOVE COLUMN', index);
        range = new monaco.Range(lineNumber, column, lineNumber, column + 1);
        break;
      case -1:
        console.log('REMOVE LINE', index);
        range = new monaco.Range(lineNumber, column, lineNumber + 1, column);
        break;
      default:
        console.log('ERROR');
    }
    console.log(range);
    preventEmit = true;
    model.applyEdits([
      {
        forceMoveMarkers: true,
        range,
        text: char,
      },
    ]);
    preventEmit = false;
    editor.focus();
  });

  client.on('server:sendFileContent', (data) => {
    try {
      preventEmit = true;
      model.setValue(data);
    } finally {
      preventEmit = false;
      editor.focus();
    }
  });

  editor.onDidDispose(() => {
    model.dispose();
    adapter.terminate();
    client.removeListener('server:executeOperation');
    client.removeListener('server:sendFileContent');
  });

  if (!model.isDisposed()) {
    // client.emit('editor:requestSync', {});
    editor.focus();
  }

  return editor;
}

export default editorController;
