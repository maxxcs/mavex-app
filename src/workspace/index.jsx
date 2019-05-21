import React from 'react';

import Editor from './editor';
import FileTree from './file-tree';
import FileTabs from './file-tabs';

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
