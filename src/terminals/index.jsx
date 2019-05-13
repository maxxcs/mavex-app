import React from 'react';

import TerminalList from './terminal-list';
import CreateTerminalForm from './create-terminal-form';

const Terminals = () => {
  return (
    <>
      <div className="flex-row full">
        <TerminalList />
        <div className="flex-column full">
          <div>
            
          </div>
        </div>
      </div>
      <CreateTerminalForm />
    </>
  );  
};

export default Terminals;
