import React, { useEffect, useRef } from 'react';
import editorSettings from './editorSettings';

const Editor = () => {
    const editorRef = useRef();

    useEffect(() => {
        if (editorRef.current) 
            editorSettings(editorRef);
    }, []);
    
    const typingChecker = event => {
        //console.log(event);
    };

    return (
        <div ref={editorRef} style={{ height: 600, width: 800 }} onInput={typingChecker} />
    );
}

export default Editor;
