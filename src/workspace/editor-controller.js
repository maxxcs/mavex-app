import * as monaco from 'monaco-editor';
import client from '../config/client';
import CrdtService from './crdt-service';
import ChangesWorker from 'worker-loader!./workers/changes.worker';

function editorController(editorRef) {
  const editor = monaco.editor.create(editorRef.current, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true
  });
  const model = editor.getModel();
  const storage = new CrdtService(Date.now().toString());
  const changesWorker = new ChangesWorker();
  let preventEmit = false;

  model.onDidChangeContent(event => {
    if (preventEmit) return;
    //console.log(event);
    const changes = event.changes;
    changesWorker.postMessage(changes);
  });

  changesWorker.onmessage = ({ data }) => {
    const op = storage.executeChange(data);
    client.emit('editor:contentChanged', op);
  };

  client.on('server:executeOperation', raw => {
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
    model.applyEdits([{
      forceMoveMarkers: true,
      range,
      text: char
    }]);
    preventEmit = false;
    editor.focus();
  });

  client.on('server:sendFileContent', data => {
    try {
      preventEmit = true;
      model.setValue(data);
    } finally {
      preventEmit = false;
      editor.focus();
    }
  });

  if (!model.isDisposed()) {
    //client.emit('editor:requestSync', {});
    editor.focus();
  }

  return editor;
}

export default editorController;
