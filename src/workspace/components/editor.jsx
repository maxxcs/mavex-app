import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import editorController from '@workspace/editor/controller';

const Editor = () => {
  const user = useSelector(state => state.general.user);
  const editorRef = useRef();
  const settings = {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true,
    automaticLayout: true,
  };
  let editor = null;

  useEffect(() => {
    if (editorRef.current) {
      editor = editorController(editorRef, settings, user);
    }
    return () => {
      editor.dispose();
    };
  }, []);

  return (
    <div className="scrollable-parent full">
      <div ref={editorRef} className="scrollable-child full" role="application" />
    </div>
  );
};

export default Editor;
