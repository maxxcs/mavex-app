import * as monaco from 'monaco-editor';
import client from '../config/client';
import CrdtService from './crdt-service';
import ChangesWorker from 'worker-loader!./workers/Changes.worker';
import OperationsWorker from 'worker-loader!./workers/Operations.worker';

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
  const operationsWorker = new OperationsWorker();
  let preventEmit = false;

  editor.onDidChangeModelContent(event => {
    if (preventEmit) return;
    changesWorker.postMessage(event.changes);
  });

  changesWorker.onmessage = ({ data }) => {
    const op = storage.executeChange(data);
    client.emit('editor:contentChanged', op);
  };

  client.on('server:executeOperation', raw => {
    const op = storage.executeOperation(raw);
    const content = storage.getValue();
    //console.log(op);
    operationsWorker.postMessage({ char: op.char, index: op.index, content });
  });

  operationsWorker.onmessage = ({ data }) => {
    const { char, startLineNumber, startColumn, endLineNumber, endColumn } = data;

    preventEmit = true;
    model.applyEdits([{
      forceMoveMarkers: true,
      range: new monaco.Range(startLineNumber, startColumn, endLineNumber, endColumn),
      text: char
    }]);
    preventEmit = false;
    
    editor.focus();
  };

  client.on('server:sendFileContent', data => {
    try {
      preventEmit = true;
      editor.setValue(data);
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
