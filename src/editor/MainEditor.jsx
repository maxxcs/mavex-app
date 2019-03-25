import React from 'react';
import * as monaco from 'monaco-editor';

class AnotherEditor extends React.Component {
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
        }
    }

    render() {
        return (
            <div ref={this.editorRef} style={{ height: 600 + 'px', width: 800 + 'px' }}/>
        );
    }
}

export default AnotherEditor;
