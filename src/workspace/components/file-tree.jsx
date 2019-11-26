import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Treebeard } from 'react-treebeard';
import { Button, Icon } from 'rsuite';
import { showActionModal } from '@workspace/store/actions';

import ActionModal from './action-modal';

const style = {
  tree: {
    base: {
      padding: '1px 0 0 1px',
      backgroundColor: '#252525',
    }
  }
};

const FileTree = () => {
  const dispatch = useDispatch();
  const project = useSelector(state => state.general.project);
  const [data, setData] = useState({});
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    if (project) {
      setData({
        name: project.name,
        toggled: true,
        id: "56d4a2344as4dcv76b6cxz4",
        children: [
          {
            name: 'index.js',
            id: "56d4a6d5as4dcv76b65vc8",
            parent: "56d4a2344as4dcv76b6cxz4"
          },
          {
            name: 'app.js',
            id: "56d4a6d5as4dcv76b65v23434234",
            parent: "56d4a2344as4dcv76b6cxz4"
          }
        ]
      });
    }
  }, [project]);


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
  };

  const handleActionModal = () => {
    dispatch(showActionModal(true));
  };

  return (
    <>
      <div className="flex-column full file-tree">
        <div className="flex-row file-tree-actions" style={{ backgroundColor: "#222" }}>
          <Button appearance="subtle" onClick={() => handleActionModal()}>
            <span style={{ margin: '0px 3px' }}>
              <Icon icon="file" />
            </span>
            <span style={{ margin: '0px 3px', fontSize: '12px' }}>New file</span>
          </Button>
          <Button appearance="subtle">
            <span style={{ margin: '0px 3px' }}>
              <Icon icon="folder" />
            </span>
            <span style={{ margin: '0px 3px', fontSize: '12px' }}>New folder</span>
          </Button>
          <Button appearance="subtle">
            <span style={{ margin: '0px 3px' }}>
              <Icon icon="close" />
            </span>
            <span style={{ margin: '0px 3px', fontSize: '12px' }}>Remove</span>
          </Button>
        </div>
        <Treebeard data={data} onToggle={onToggle} style={style} />
      </div>
      <ActionModal type="file" actualNode={cursor} projectId={(project) ? project._id : null} />
    </>
  )
}

export default FileTree;
