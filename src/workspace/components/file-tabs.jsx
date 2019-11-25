import React from 'react';

import Tab from './tab';

const FileTabs = () => (
  <div className="flex-row full file-tabs-container">
    <Tab fileId="1" actualId="2" filename="app.cpp" />
    <Tab fileId="2" actualId="2" filename="routes.js" />
    <Tab fileId="3" actualId="2" filename="index.py" />
    <Tab fileId="4" actualId="2" filename="auth.php" />
    <Tab fileId="5" actualId="2" filename="README.md" />
  </div>
);

export default FileTabs;
