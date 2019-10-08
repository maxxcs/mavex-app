import * as monaco from 'monaco-editor';
import client from '@config/client';
import DataModel from './data-model';
import AdapterWorker from './adapter-worker';

function editorController(editorRef, settings, user) {
  const editor = monaco.editor.create(editorRef.current, settings);
  const model = editor.getModel();
  const storage = new DataModel(user.id);
  const adapter = new AdapterWorker();
  let preventEmit = false;

  editor.onDidDispose(() => {
    model.dispose();
    adapter.terminate();
    client.removeListener('file:userWrite');
    client.removeListener('file:data');
  });

  model.onDidChangeContent((evt) => {
    if (preventEmit) return;
    // console.log(evt);
    const { changes } = evt;
    adapter.postMessage(changes);
  });

  adapter.onmessage = ({ data }) => {
    const op = storage.executeChange(data);
    client.emit('file:write', op);
  };

  client.on('file:userWrite', data => {
    const { char, index } = storage.executeOperation(data.op);
    const { lineNumber, column } = model.getPositionAt(index);
    let range;
    switch (data.type) {
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
        return;
    }
    // console.log(range);
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

  client.on('file:data', (data) => {
    try {
      preventEmit = true;
      model.setValue(data);
    } finally {
      preventEmit = false;
      editor.focus();
    }
  });

  if (!model.isDisposed()) {
    // client.emit('editor:requestSync', {});
    editor.focus();
  }

  return editor;
}

export default editorController;
