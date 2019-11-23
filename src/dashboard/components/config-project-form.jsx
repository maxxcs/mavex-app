import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';
import { showConfigProjectModal } from '@dashboard/store/actions';

const ConfigProjectForm = () => {
  const display = useSelector(state => state.dashboard.displayModal.configProject);
  const dispatch = useDispatch();
  return (
    <Modal show={display} onHide={() => dispatch(showConfigProjectModal(false))} size="xs">
      <Modal.Header style={{ textAlign: 'center' }}>
        <Modal.Title>
          <strong>Config project</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div>Settings</div>
      </Modal.Body>
      <Modal.Footer style={{ marginTop: 10 }}>
        <Button onClick={() => dispatch(showConfigProjectModal(false))} appearance="primary">
          Save
        </Button>
        <Button onClick={() => dispatch(showConfigProjectModal(false))} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default ConfigProjectForm;
