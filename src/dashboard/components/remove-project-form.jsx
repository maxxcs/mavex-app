import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';
import { showRemoveProjectModal } from '@dashboard/store/actions';

const RemoveProjectForm = () => {
  const display = useSelector(state => state.dashboard.displayModal.removeProject);
  const dispatch = useDispatch();
  return (
    <Modal show={display} onHide={() => dispatch(showRemoveProjectModal(false))} size="xs">
      <Modal.Header style={{ textAlign: 'center' }}>
        <Modal.Title>
          <strong>Remove project</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="key" style={{ color: '#888' }} />
          </InputGroup.Addon>
          <Input
            placeholder="Type your password"
            type="password"
            autoFocus
            onPressEnter={() => dispatch(showRemoveProjectModal(false))}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer style={{ marginTop: 10 }}>
        <Button onClick={() => dispatch(showRemoveProjectModal(false))} appearance="primary">
          <Icon icon="trash" style={{ marginRight: '3px', fontSize: '16px' }} />
          Delete
        </Button>
        <Button onClick={() => dispatch(showRemoveProjectModal(false))} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default RemoveProjectForm;
