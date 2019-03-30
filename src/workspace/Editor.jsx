import React, { useEffect, useRef } from 'react';
import * as monaco from 'monaco-editor';

const Editor = () => {
    const editorRef = useRef();
    
    useEffect(() => {
        if (editorRef.current) {
            const editor = monaco.editor.create(editorRef.current, {
                value: '\n',
                language: 'javascript',
                theme: 'vs-dark'
            });
            
            window.editor = editor;
            let preventEmmiter = false;

            editor.onDidChangeModelContent(event => {
                if (preventEmmiter) return;
                window.primus.emit('editor', event);
            });

            window.primus.on('editor:reflect', data => {
                try {
                    preventEmmiter = true;
                    editor.executeEdits('external', data.changes);
                } finally {
                    preventEmmiter = false;
                }  
            });
        }
    }, []);
    
    return (
        <div ref={editorRef} style={{ height: 600 + 'px', width: 800 + 'px' }}/>
    );
}

export default Editor;
