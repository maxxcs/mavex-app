import * as monaco from 'monaco-editor';
import client from '../config/client';

function editorSettings(editorRef) {
    let preventEmit = false;
    const editor = monaco.editor.create(editorRef.current, {
        value: '',
        language: 'javascript',
        theme: 'vs-dark'
    });
    window.editor = editor;
    editor.focus();
    editor.onDidChangeModelContent(event => {
        if (preventEmit) return;
        client.emit('editor:contentChanged', event);
    });

    client.on('server:executeEdits', data => {
        const time = Date.now();
        const selection = editor.getSelection();
        try {
            preventEmit = true;
            editor.executeEdits('external', data.changes,);
        } finally {
            preventEmit = false;
            editor.setSelection(selection);
            editor.focus();
            console.log(Date.now() - time);
        }  
    });
}

export default editorSettings;
