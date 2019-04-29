import React from 'react';

import Editor from './editor';
import FileTree from './file-tree';
import FileTabs from './file-tabs';

const Workspace = () => {
  return (
    <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'row' }}>
      <div style={{ height: '100%', width: 280, backgroundColor: '#252525' }}>
        <FileTree />
      </div>
      <div style={{ height: '100%', width: '100%', display: 'flex', flexDirection: 'column' }}>
        <div style={{ height: 35, width: '100%', backgroundColor: '#202020' }}>
          <FileTabs />
        </div> 
        <div style={{ height: '100%', width: '100%' }}>
          <Editor />
        </div>
      </div>
    </div>
  );  
}

export default Workspace;
