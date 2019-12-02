import * as monaco from 'monaco-editor';
import client from '@config/client';
import DataModel from './data-model';
import AdapterWorker from './adapter-worker';

function editorController(editorRef, settings, user, file) {
  const editor = monaco.editor.create(editorRef.current, settings);
  const model = editor.getModel();
  const storage = new DataModel(user.id);
  const adapter = new AdapterWorker();
  let preventEmit = false;

  const closeEditor = () => {
    model.dispose();
    adapter.terminate();
    client.removeListener('file:userWrite');
    client.removeListener('file:data');
  };

  const handleInputFromEditorToAdapter = evt => {
    if (preventEmit) return;
    console.log(evt);
    const { changes } = evt;
    adapter.postMessage(changes);
  };

  const handleDataFromAdaptar = ({ data }) => {
    console.log(data);
    const change = storage.executeChange(data);
    client.emit('file:write', { change, fileId: file.id });
  };

  const handleOperationFromReplicas = data => {
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
        range = new monaco.Range(lineNumber, column, lineNumber + 1, column + 1);
        break;
      default:
        return;
    }
    console.log(char)
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
  };

  const handleBatchOperation = data => {
    for (let i = 0; i < data.length; i++) {
      storage.executeOperation(data[i].op);
    }
    preventEmit = true;
    model.setValue(storage.getValue());
    preventEmit = false;
  }

  editor.onDidDispose(closeEditor);
  model.onDidChangeContent(handleInputFromEditorToAdapter);
  adapter.onmessage = handleDataFromAdaptar;
  client.on('file:userWrite', handleOperationFromReplicas);
  client.on('file:data', handleBatchOperation);

  if (!model.isDisposed()) editor.focus();
  return editor;
}

export default editorController;
