import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Modal, Button, Input, InputGroup, Icon,
} from 'rsuite';
import { displayTerminalForm } from './actions';

const CreateTerminalForm = ({ display, displayModal }) => (
  <Modal show={display} onHide={() => displayModal(false)} size="xs">
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
          onPressEnter={() => displayModal(false)}
        />
      </InputGroup>
    </Modal.Body>
    <Modal.Footer style={{ marginTop: 10 }}>
      <Button onClick={() => displayModal(false)} appearance="primary">
        Submit
      </Button>
      <Button onClick={() => displayModal(false)} appearance="subtle">
        Cancel
      </Button>
    </Modal.Footer>
  </Modal>
);

CreateTerminalForm.propTypes = {
  display: PropTypes.bool.isRequired,
  displayModal: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({ display: state.terminals.displayTerminalForm });
const mapDispatchToProps = dispatch => bindActionCreators(
  {
    displayModal: displayTerminalForm,
  },
  dispatch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateTerminalForm);
