import React from 'react';
import * as monaco from 'monaco-editor';

class Editor extends React.Component {
    constructor(props) {
        super(props); 
        this.editorRef = React.createRef();
    }

    componentDidMount() {    
        this.nodeRef = this.editorRef.current;
        if (this.nodeRef) {
            this.editor = monaco.editor.create(this.nodeRef, {
                value: '\n',
                language: 'javascript',
                theme: 'vs-dark'
            });

            window.editor = this.editor;

            this.editor.onDidChangeModelContent(event => {
                console.log(event);
                window.primus.emit('editor', event);
            });

            window.primus.on('editor:reflect', data => {
                //this.editor.executeEdits('external', data.changes);
            });
        }
    }

    render() {
        return (
            <div ref={this.editorRef} style={{ height: 600 + 'px', width: 800 + 'px' }}/>
        );
    }
}

export default Editor;
