import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayTerminalForm } from './actions';
import { Modal, Button, Input, InputGroup, Icon } from 'rsuite';

const CreateTerminalForm = ({ display, displayTerminalForm }) => {
  return (
    <Modal 
      show={display} 
      onHide={() => displayTerminalForm(false)}
      size="xs"
    >
      <Modal.Header>
        <Modal.Title><strong>New Terminal</strong></Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <InputGroup>
          <InputGroup.Addon>
            <Icon icon="terminal" style={{ color: '#888' }} />
          </InputGroup.Addon>
          <Input placeholder="Terminal name" type="text" autoFocus={true} />
        </InputGroup>
      </Modal.Body>
      <Modal.Footer style={{ marginTop: 10 }}>
        <Button onClick={() => displayTerminalForm(false)} appearance="primary">Submit</Button>
        <Button onClick={() => displayTerminalForm(false)} appearance="subtle">Cancel</Button>
      </Modal.Footer>
    </Modal>
  );
};

const mapStateToProps = state => ({ display: state.terminals.displayTerminalForm });
const mapDispatchToProps = dispatch => bindActionCreators({ displayTerminalForm }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateTerminalForm);
