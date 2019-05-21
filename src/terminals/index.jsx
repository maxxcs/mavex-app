import React from 'react';

import TerminalScreen from './terminal-screen';
import TerminalList from './terminal-list';
import CreateTerminalForm from './create-terminal-form';

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
