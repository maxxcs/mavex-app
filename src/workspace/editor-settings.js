import * as monaco from 'monaco-editor';
import { KSeq, InsertOp, RemoveOp } from './crdt/kseq/index';
import { Ident } from './crdt/kseq/idents/Ident';

import { handleChanges } from './editor-utils';

function editorSettings(editorRef) {
  const editor = monaco.editor.create(editorRef.current, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true
  });
  const state = new KSeq(Date.now().toString()); //this need to be a unique id
  const model = editor.getModel();
  window.state = state;
  window.editor = editor;
  let preventEmit = false;

 editor.onDidChangeModelContent(event => {
  if (preventEmit) return;
  const changes = handleChanges(event.changes);
  for (let i = 0; i < changes.length; i++) {
    if (changes[i].type === 1) {
      const op = state.insert(changes[i].char, changes[i].index);
      client.emit('editor:contentChanged', op);
    } else if (changes[i].type === 0) {
      const op = state.remove(changes[i].index);
      client.emit('editor:contentChanged', op);
    } else {
      console.log('This shouldn\'t to be happen.');
    }
  }
});

  client.on('server:executeOperation', raw => {
    //console.log(raw);
    let operation;
    const id = new Ident(raw.id.time, raw.id.path);
    if (raw.kind === 1)
      operation = new InsertOp(raw.replica, raw.timestamp, id, raw.value);
    else 
      operation = new RemoveOp(raw.replica, raw.timestamp, id);
    //console.log(operation);
    state.apply(operation);
    preventEmit = true;
    model.setValue(state.toArray().join(''));
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
    editor.focus();
  }

  return editor;
}

export default editorSettings;
