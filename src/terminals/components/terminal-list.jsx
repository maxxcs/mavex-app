import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider } from 'rsuite';
import { displayTerminalForm } from '@terminals/store/actions';

import TerminalInstance from './terminal-instance';

const TerminalList = () => {
  const dispatch = useDispatch();
  return (
    <div id="terminal-list" className="flex-column full">
      <div>
        <Button
          id="create-terminal-btn"
          appearance="default"
          block
          onClick={() => dispatch(displayTerminalForm(true))}
        >
          New Terminal
        </Button>
        <Divider id="terminal-list-divider" />
      </div>
      <div className="scrollable-parent full">
        <div className="scrollable-child" style={{ height: '100%', overflow: 'auto' }}>
          <TerminalInstance id="1" actualId="1" name="home" msg="Showtime" msgColor="#5e6d50" />
          <TerminalInstance id="2" actualId="1" name="office" msg="Offline" msgColor="#a03a32" />
          <TerminalInstance
            id="3"
            actualId="1"
            name="server"
            msg="Waiting for sync"
            msgColor="#967f4b"
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalList;
