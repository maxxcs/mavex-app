import React from 'react';

import TerminalScreen from './components/terminal-screen';
import TerminalList from './components/terminal-list';
import CreateTerminalForm from './components/create-terminal-form';

const Terminals = () => (
  <>
    <div className="flex-row full">
      <TerminalList />
      <div className="flex-column center full">
        <TerminalScreen />
      </div>
    </div>
    <CreateTerminalForm />
  </>
);

export default Terminals;
