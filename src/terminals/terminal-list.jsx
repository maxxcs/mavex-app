import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Button, Divider } from 'rsuite';
import { displayTerminalForm } from './actions';

import TerminalInstance from './terminal-instance';

const TerminalList = ({ displayModal }) => (
  <div id="terminal-list" className="flex-column full">
    <div>
      <Button
        id="create-terminal-btn"
        appearance="default"
        block
        onClick={() => displayModal(true)}
      >
        New Terminal
      </Button>
      <Divider id="terminal-list-divider" />
    </div>
    <div className="scrollable-parent full">
      <div className="scrollable-child" style={{ height: '100%', overflow: 'auto' }}>
        <TerminalInstance id="1" actual="1" name="home" msg="Showtime" color="#5e6d50" />
        <TerminalInstance id="2" actual="1" name="office" msg="Offline" color="#a03a32" />
        <TerminalInstance id="3" actual="1" name="server" msg="Waiting for sync" color="#967f4b" />
      </div>
    </div>
  </div>
);

const mapDispatchToProps = dispatch => bindActionCreators(
  {
    displayModal: displayTerminalForm,
  },
  dispatch,
);

export default connect(
  null,
  mapDispatchToProps,
)(TerminalList);
