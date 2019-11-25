import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';
import { showActionModal } from '@workspace/store/actions';

const ActionForm = ({ type, actualNode }) => {
  const dispatch = useDispatch();
  const display = useSelector(state => state.workspace.displayActionModal);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    console.log(type, input, actualNode);
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
            placeholder="Type a filename"
            type="text"
            autoFocus
            value={input}
            onChange={value => setInput(value)}
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
