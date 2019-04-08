import * as monaco from 'monaco-editor';

function editorSettings(editorRef) {
  const editor = monaco.editor.create(editorRef.current, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true
  });
  const model = editor.getModel();
  window.editor = editor;
  let preventEmit = false;
  let sendContentTimeout;
  let requestSyncTimeout;

  editor.onDidChangeModelContent(event => {
    if (preventEmit) return;
    for (let i = 0; i < event.changes.length; i++) {
      console.log([event.changes[i].rangeOffset, event.changes[i].text, event.changes[i].range]);
      client.emit('editor:contentChanged', [event.changes[i].rangeOffset, event.changes[i].text, event.changes[i].range]);
    } 
  });

  client.on('server:executeOperation', operation => {
    console.log(operation);
    const [offset, text, range] = operation;
    preventEmit = true;
    model.applyEdits([{
      forceMoveMarkers: true,
      range,
      text
    }]);
    preventEmit = false;
    editor.focus();
  });

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
  }

  return editor;
}

export default editorSettings;
