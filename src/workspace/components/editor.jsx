import React, { useEffect, useRef } from 'react';
import { useSelector } from 'react-redux';
import editorController from '@workspace/editor/controller';

const Editor = () => {
  let editor = null;
  const file = useSelector(state => state.workspace.editor);
  const user = useSelector(state => state.general.user);
  const editorRef = useRef();
  const settings = {
    value: '',
    language: 'javascript',
    theme: 'vs-dark',
    renderFinalNewline: true,
    automaticLayout: true,
  };

  useEffect(() => {
    if (file.kind === 'file') {
      if (editorRef.current) {
        editor = editorController(editorRef, settings, user);
      }
    }
    return () => {
      if (editor) editor.dispose();
    };
  }, [file]);

  return (
    <div className="scrollable-parent full">
      <div ref={editorRef} className="scrollable-child full" role="application" />
    </div>
  );
};

export default Editor;
