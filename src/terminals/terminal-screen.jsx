import React, { useState, useRef } from 'react';
import { Icon } from 'rsuite';

const TerminalScreen = () => {
  const inputRef = useRef();
  const terminalContentRef = useRef();
  const [command, setCommand] = useState('');
  
  const handleInput = evt => {
    if (evt.keyCode === 13 && command !== '') { 
      console.log(command);
      setCommand('');
      return false;
    }
  };

  const handleClickContainer = evt => {
    if (inputRef.current && evt.target === terminalContentRef.current) {
      inputRef.current.focus();
    }
  };

  return (
    <div className="flex-column" style={{ backgroundColor: '#2A2A31', width: 800, height: 600 }} onClick={handleClickContainer}>
      <div id="terminal-header" className="flex-row" style={{ alignItems: 'center', height: 30, backgroundColor: '#2E2E2E', padding: 1, borderTop: '5px solid #2E2E2E' }}>
        <Icon icon="circle" style={{ color: '#852821', marginLeft: 6, marginRight: 6 }} />
        <Icon icon="circle" style={{ color: '#836a2e', marginRight: 6 }} />
        <Icon icon="circle" style={{ color: '#48533e' }} />
      </div>
      <div ref={terminalContentRef} className="full" style={{ padding: 10, border: '5px solid #2E2E2E', cursor: 'text' }}>
        <div id="terminal-stack">

        </div>
        <div id="terminal-controller" className="flex-row" style={{ alignItems: 'center' }}>
          <span style={{ marginRight: 10, minWidth: 'inherit' }}><strong>Fulano@home ~ $</strong></span>
          <input ref={inputRef} type="text" id="terminal-input" autoFocus={true} spellCheck={false} value={command} onChange={evt => setCommand(evt.target.value)} onKeyDown={handleInput} />
        </div>
      </div>
    </div>
  );
};

export default TerminalScreen;
