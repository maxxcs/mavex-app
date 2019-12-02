import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Treebeard } from 'react-treebeard';
import { Button, Icon } from 'rsuite';
import { showActionModal, openFile, closeFile, deleteFile } from '@workspace/store/actions';

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
  const editor = useSelector(state => state.workspace.editor);
  const [data, setData] = useState({});
  const [cursor, setCursor] = useState(null);

  useEffect(() => {
    if (project) {
      setData({
        name: project.name,
        toggled: true,
        id: project._id,
        kind: 'folder',
        children: handleFileStructure(project.files)
      });
    }
  }, [project]);

  const handleFileStructure = files => {
    return files.map(file => ({
      name: file.filename,
      kind: file.kind,
      id: file._id,
      parent: file.parent
    }));
  }

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

    if (node.kind === 'file') {
      if (editor.file.id) dispatch(closeFile(editor.file.id));
      dispatch(openFile(project._id, node));
    }
  };

  const handleActionModal = (action) => {
    switch (action) {
      case 'create-file':
        return dispatch(showActionModal(true));
      case 'create-folder':
        return dispatch(showActionModal(true));
      case 'remove':
        return dispatch(deleteFile(project._id, cursor.id));
      default:
        return;
    }
  };

  return (
    <>
      <div className="flex-column full file-tree">
        <div className="flex-row file-tree-actions" style={{ backgroundColor: "#222" }}>
          <Button appearance="subtle" onClick={() => handleActionModal('create-file')}>
            <span style={{ margin: '0px 3px' }}>
              <Icon icon="file" />
            </span>
            <span style={{ margin: '0px 3px', fontSize: '12px' }}>New file</span>
          </Button>
          <Button appearance="subtle" onClick={() => handleActionModal('create-folder')}>
            <span style={{ margin: '0px 3px' }}>
              <Icon icon="folder" />
            </span>
            <span style={{ margin: '0px 3px', fontSize: '12px' }}>New folder</span>
          </Button>
          <Button appearance="subtle" onClick={() => handleActionModal('remove')}>
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
