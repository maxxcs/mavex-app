import React, { useState, useEffect, useRef } from 'react';
import editorSettings from './editor-settings';

const Editor = () => {
  const editorRef = useRef();
  const [editor, setEditor] = useState(null);
  
  useEffect(() => {
    if (editorRef.current) 
      setEditor(editorSettings(editorRef));
    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <div ref={editorRef} style={{ height: 600, width: 800 }} />
  );
}

export default Editor;
