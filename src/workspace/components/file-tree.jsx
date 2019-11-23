import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';

const files = {
  name: 'project',
  toggled: true,
  children: [
    {
      name: 'src',
      children: [
        { name: 'index.js' },
        { name: 'app.js' }
      ]
    },
    {
      name: 'async',
      loading: true,
      children: [
        { name: 'multi.js' }
      ]
    },
    {
      name: 'public',
      children: [
        {
          name: 'static',
          children: [
            { name: 'index.html' },
            { name: 'main.css' }
          ]
        }
      ]
    }
  ]
};

const style = {
  tree: {
    base: {
      backgroundColor: '#252525',
    }
  }
};

const FileTree = () => {
  const [data, setData] = useState(files);
  const [cursor, setCursor] = useState(false);

  const onToggle = (node, toggled) => {
    if (cursor) {
      cursor.active = false;
    }
    node.active = true;
    if (node.children) {
      node.toggled = toggled;
    }
    setCursor(node);
    setData(Object.assign({}, data));
    console.log(node);
    // console.log(data);
  }

  return (
    <div id="file-tree" className="flex-column full">
      <Treebeard data={data} onToggle={onToggle} style={style} />
    </div>
  )
}

export default FileTree;
