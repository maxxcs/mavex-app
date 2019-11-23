import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';
import { showShareProjectModal } from '@dashboard/store/actions';

const ShareProjectForm = () => {
  const display = useSelector(state => state.dashboard.displayModal.shareProject);
  const dispatch = useDispatch();
  return (
    <Modal show={display} onHide={() => dispatch(showShareProjectModal(false))} size="xs">
      <Modal.Header style={{ textAlign: 'center' }}>
        <Modal.Title>
          <strong>Share project</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="user-plus" style={{ color: '#888' }} />
          </InputGroup.Addon>
          <Input
            placeholder="Type a username"
            type="text"
            autoFocus
            onPressEnter={() => dispatch(showShareProjectModal(false))}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer style={{ marginTop: 10 }}>
        <Button onClick={() => dispatch(showShareProjectModal(false))} appearance="primary">
          Submit
        </Button>
        <Button onClick={() => dispatch(showShareProjectModal(false))} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ShareProjectForm;
