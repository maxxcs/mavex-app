import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';
import { displayTerminalForm } from './actions';

const CreateTerminalForm = () => {
  const display = useSelector(state => state.terminals.displayTerminalForm);
  const dispatch = useDispatch();
  return (
    <Modal show={display} onHide={() => dispatch(displayTerminalForm(false))} size="xs">
      <Modal.Header>
        <Modal.Title>
          <strong>New Terminal</strong>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="terminal" style={{ color: '#888' }} />
          </InputGroup.Addon>
          <Input
            placeholder="Terminal name"
            type="text"
            autoFocus
            onPressEnter={() => dispatch(displayTerminalForm(false))}
          />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer style={{ marginTop: 10 }}>
        <Button onClick={() => dispatch(displayTerminalForm(false))} appearance="primary">
          Submit
        </Button>
        <Button onClick={() => dispatch(displayTerminalForm(false))} appearance="subtle">
          Cancel
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreateTerminalForm;
