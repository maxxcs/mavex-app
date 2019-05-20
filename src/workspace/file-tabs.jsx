import React from 'react';

import Tab from './tab';

const FileTabs = () => {
  return (
    <div id="file-tabs" className="flex-row full">
      <Tab fileId="1" actual="2" filename="app.cpp" />
      <Tab fileId="2" actual="2" filename="routes.js" />
      <Tab fileId="3" actual="2" filename="index.py" />
      <Tab fileId="4" actual="2" filename="auth.php" />
      <Tab fileId="5" actual="2" filename="README.md" />
    </div>
  );
};

export default FileTabs;
