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
    <div className="scrollable-parent full">
      <div ref={editorRef} className="scrollable-child full" />
    </div>
  );
};

export default Editor;
