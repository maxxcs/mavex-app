import * as monaco from 'monaco-editor';
import client from '../config/client';

function editorSettings(editorRef) {
  let preventEmit = false;
  const editor = monaco.editor.create(editorRef.current, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true
  });
  const model = editor.getModel();
  window.editor = editor;
  editor.focus();
  
  if (!model.isDisposed()) {
    client.emit('editor:isReady', {});
  }

  editor.onDidChangeModelContent(event => {
    if (preventEmit) return;
    const position = editor.getPosition();
    for (let i = 0; i < event.changes.length; i++)
      event.changes[i].forceMoveMarkers = true;
    client.emit('editor:contentChanged', { event, position });
    client.emit('editor:sendFileContent', editor.getValue());
  });

  client.on('server:executeEdits', data => {
    const time = Date.now();
    const position = editor.getPosition();
    try {
      preventEmit = true;
      //editor.executeEdits('external', data.event.changes);
      model.applyEdits(data.event.changes);
    } finally {
      preventEmit = false;
      if (position.equals(data.position)) editor.setPosition(position);
      editor.focus();
      console.log(Date.now() - time);
    }
  });

  client.on('server:setFileContent', data => {
    try {
      preventEmit = true;
      editor.setValue(data);
    } finally {
      preventEmit = false;
    }
  });
}

export default editorSettings;
