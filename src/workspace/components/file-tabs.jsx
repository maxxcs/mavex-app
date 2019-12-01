import React from 'react';
import { useSelector } from 'react-redux';

import Tab from './tab';

const FileTabs = () => {
  const editor = useSelector(state => state.workspace.editor);

  return (
    <div className="flex-row full file-tabs-container">
      {(editor.file.id) ? (<Tab fileId={editor.file.id} actualId={editor.file.id} filename={editor.file.name} />) : null}
    </div>
  );
}


export default FileTabs;
