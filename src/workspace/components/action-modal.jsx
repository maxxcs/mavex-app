import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';

import client from '@config/client';
import { getToken } from '@config/auth';
import { showActionModal, addFile } from '@workspace/store/actions';

const ActionForm = ({ type, actualNode, projectId }) => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.workspace.displayActionModal);
  const [filename, setFilename] = useState('');

  const handleSubmit = () => {
    console.log(type, filename, actualNode);
    const token = getToken();
    client.emit('file:create', { token, filename, actualNode, projectId });
    setFilename('');
    dispatch(showActionModal(false));
  };

  return (
    <Modal show={display} onHide={() => dispatch(showActionModal(false))} size="xs">
      <Modal.Header style={{ textAlign: 'center' }}>
        <Modal.Title>
          <strong>Create file</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="file" style={{ color: '#888' }} />
          </InputGroup.Addon>
          <Input
            placeholder="Filename"
            type="text"
            autoFocus
            value={filename}
            onChange={value => setFilename(value)}
            onPressEnter={() => handleSubmit()}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer style={{ marginTop: 10 }}>
        <Button onClick={() => handleSubmit()} appearance="primary">
          Submit
        </Button>
        <Button onClick={() => dispatch(showActionModal(false))} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ActionForm;
