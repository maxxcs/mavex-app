import React from 'react';

import TerminalList from './terminal-list';
import CreateTerminalForm from './create-terminal-form';

const Terminals = () => {
  return (
    <>
      <div style={{  display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
        <TerminalList />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <div style={{ height: '100%', width: '100%' }}>
            
          </div>
        </div>
      </div>
      <CreateTerminalForm />
    </>
  );  
};

export default Terminals;
