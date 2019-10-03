import React from 'react';

import Editor from './components/editor';
import FileTree from './components/file-tree';
import FileTabs from './components/file-tabs';

const Workspace = () => (
  <>
    <div className="flex-row full">
      <FileTree />
      <div className="flex-column full">
        <FileTabs />
        <Editor />
      </div>
    </div>
  </>
);

export default Workspace;
