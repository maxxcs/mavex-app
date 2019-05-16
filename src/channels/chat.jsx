import React, { useState } from 'react';
import { Input, InputGroup, Icon } from 'rsuite';

const Chat = () => {
  const [messageValue, setMessageValue] = useState('');

  const handleSendMsg = evt => {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      evt.preventDefault();
      if (messageValue !== '') 
        console.log(messageValue);    
      setMessageValue('');
      return false;
    }
  };

  return (
    <div className="flex-column full">
      <div id="chat-header" className="flex-row" style={{ alignItems: 'center', height: 60, minHeight: 40, backgroundColor: '#202020', boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)', zIndex: 3, padding: '0px 25px' }}>
        <div>
          <span style={{ fontSize: 22, color: '#999' }}><strong>#gambiarras</strong></span>
        </div>
      </div>
      <div id="chat-content" style={{ height: '100%' }}>

      </div>
      <div id="chat-controller" className="flex-row center" style={{ height: 50, minHeight: 40, padding: 20, zIndex: 3, paddingBottom: 35 }}>
        <InputGroup style={{ border: '2px solid #666', boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.5)', backgroundColor: '#282828' }}>
          <InputGroup.Addon style={{ borderRight: '2px solid #666', backgroundColor: 'inherit', cursor: 'pointer' }}>
            <Icon icon="plus" style={{ color: '#666' }} />
          </InputGroup.Addon>
          <Input 
            componentClass="textarea" 
            style={{ width: '100%', height: 36, minHeight: 36, maxHeight: 36, backgroundColor: 'inherit' }} 
            placeholder="" 
            autoFocus={true}
            value={messageValue}
            onChange={value => setMessageValue(value)}
            onKeyDown={handleSendMsg}
          />
          <InputGroup.Addon style={{ backgroundColor: 'inherit', paddingRight: 6, cursor: 'pointer' }}>
            <Icon icon="at" style={{ color: '#666', fontSize: 18 }} />
          </InputGroup.Addon>
          <InputGroup.Addon style={{ backgroundColor: 'inherit', paddingLeft: 6, cursor: 'pointer' }}>
            <Icon icon="smile-o" style={{ color: '#666', fontSize: 18 }} />
          </InputGroup.Addon>
        </InputGroup>
      </div>
    </div>
  );
};

export default Chat;
