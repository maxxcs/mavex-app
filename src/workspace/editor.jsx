import React, { useEffect, useRef } from 'react';
import editorController from './editor-controller';

const Editor = () => {
  const editorRef = useRef();
  let editor = null;
  
  useEffect(() => {
    if (editorRef.current) {
      editor = editorController(editorRef);
      editorRef.current.addEventListener('onresize', () => {
        console.log('resize');
      });
    }
    return () => {
      editor.dispose();
    };
  }, []);

  return (
      <div ref={editorRef} style={{ height: '100%', width: '100%' }} />
  );
}

export default Editor;
