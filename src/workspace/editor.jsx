import React, { useState, useEffect, useRef } from 'react';
import editorController from './editor-controller';

const Editor = () => {
  const editorRef = useRef();
  const [editor, setEditor] = useState(null);
  
  useEffect(() => {
    if (editorRef.current) 
      setEditor(editorController(editorRef));
    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <div ref={editorRef} style={{ height: 600, width: 800 }} />
  );
}

export default Editor;
