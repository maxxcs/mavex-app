import * as monaco from 'monaco-editor';
import { KSeq, InsertOp, RemoveOp } from './crdt/kseq/index';
import { Ident } from './crdt/kseq/idents/Ident';

function editorSettings(editorRef) {
  const editor = monaco.editor.create(editorRef.current, {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true
  });
  const state = new KSeq('state'); //this need to be a unique id
  const model = editor.getModel();
  window.state = state;
  window.editor = editor;
  let preventEmit = false;
  
  /*
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
  */

 editor.onDidChangeModelContent(event => {
  if (preventEmit) return;
  //console.log(event);
  for (let i = 0; i < event.changes.length; i++) {
    if (event.changes[i].text !== '') {
      const characters = event.changes[i].text.split('');
      let initialRangeOffset = event.changes[i].rangeOffset;
      for (let c = 0; c < characters.length; c++) {
        const operation = state.insert(characters[c], initialRangeOffset++);
        client.emit('editor:contentChanged', operation);
        //console.log(operation);
      }
    } else {
      const operation = state.remove(event.changes[i].rangeOffset);
      client.emit('editor:contentChanged', operation);
    }    
  } 
});

  client.on('server:executeOperation', raw => {
    console.log(raw);
    const id = new Ident(raw.id.time, raw.id.path);
    let operation;
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
  }

  return editor;
}

export default editorSettings;
