import React from 'react';

import Editor from './editor';
import FileTree from './file-tree';
import FileTabs from './file-tabs';

const Workspace = () => {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
        <FileTree />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <FileTabs />
          <Editor />
        </div>
      </div>
    </>
  );  
};

export default Workspace;
