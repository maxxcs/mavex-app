import React, { useState } from 'react';
import { Treebeard } from 'react-treebeard';

const files = {
  name: 'root',
  toggled: true,
  children: [
    {
      name: 'parent',
      children: [
        { name: 'child1' },
        { name: 'child2' }
      ]
    },
    {
      name: 'loading parent',
      loading: true,
      children: []
    },
    {
      name: 'parent',
      children: [
        {
          name: 'nested parent',
          children: [
            { name: 'nested child 1' },
            { name: 'nested child 2' }
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
    setData(Object.assign({}, data))
  }

  return (
    <div id="file-tree" className="flex-column full">
      <Treebeard data={data} onToggle={onToggle} style={style} />
    </div>
  )
}

export default FileTree;
