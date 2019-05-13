import React, { useEffect, useRef } from 'react';
import editorController from './editor-controller';

const Editor = () => {
  const editorRef = useRef();
  let editor = null;
  
  useEffect(() => {
    if (editorRef.current) {
      editor = editorController(editorRef);
    }
    return () => {
      editor.dispose();
    };
  }, []);

  return (
      <div ref={editorRef} className="flex-column full" />
  );
};

export default Editor;
