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
    <div id="terminal-screen" className="flex-column" onClick={handleClickContainer}>
      <div id="terminal-header" className="flex-row">
        <div style={{ width: 60, minWidth: 60 }}>
          <Icon icon="circle" style={{ color: '#852821', marginLeft: 10, marginRight: 6 }} />
          <Icon icon="circle" style={{ color: '#836a2e', marginRight: 6 }} />
          <Icon icon="circle" style={{ color: '#48533e' }} />
        </div>
        <div>
          <strong>home</strong>
        </div>
        <div className="flex-row" style={{ width: 60, minWidth: 60, justifyContent: 'flex-end' }}>
          <a>
            <Icon icon="toggle-down" style={{ marginRight: 10, color: '#919191' }} />
          </a>
        </div> 
      </div>
      <div id="terminal-stack" ref={terminalContentRef} className="full">
        <div  className="scrollable-parent">
          <div className="scrollable-child">

          </div>
        </div>
        <div id="terminal-controller" className="flex-row">
          <span style={{ marginRight: 10, minWidth: 'inherit' }}><strong>Fulano@home ~ $</strong></span>
          <input 
            id="terminal-input"
            ref={inputRef} 
            type="text" 
            autoFocus={true} 
            spellCheck={false} 
            value={command} 
            onChange={evt => setCommand(evt.target.value)} 
            onKeyDown={handleInput} 
          />
        </div>
      </div>
    </div>
  );
};

export default TerminalScreen;
