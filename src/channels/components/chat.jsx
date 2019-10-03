import React, { useState, useEffect, useRef } from 'react';
import { Input, InputGroup, Icon } from 'rsuite';

import Message from './message';

const Chat = () => {
  const startContentRef = useRef();
  const endContentRef = useRef();
  const [messageValue, setMessageValue] = useState('');

  const handleSendMsg = (evt) => {
    if (evt.keyCode === 13 && !evt.shiftKey) {
      evt.preventDefault();
      if (messageValue !== '') console.log(messageValue);
      setMessageValue('');
      return false;
    }
    return true;
  };

  const handleScroll = () => {
    if (endContentRef.current) {
      endContentRef.current.scrollIntoView();
    }
  };

  useEffect(() => {
    handleScroll();
  }, []);

  return (
    <div className="flex-column full">
      <div id="chat-header" className="flex-row">
        <div>
          <span style={{ fontSize: 20, color: '#999' }}>
            <strong>#gambiarras</strong>
          </span>
        </div>
      </div>
      <div className="scrollable-parent full">
        <div id="chat-content" className="scrollable-child">
          <div ref={startContentRef} />

          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor et libero mollis pretium vitae quis nisl. Cras quis turpis lobortis, pretium ante et, tempor diam. Morbi eu orci et tellus dictum faucibus. Nunc tincidunt sed leo ac viverra. Maecenas volutpat cursus volutpat. Nullam varius volutpat lacus sit amet vestibulum. Vivamus nec orci vel enim consequat dictum ut ut leo."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Aliquam ut elit egestas, porta magna non, sagittis urna. Quisque lacinia pellentesque ante, et efficitur ex efficitur et. Mauris rutrum, ante in accumsan volutpat, dolor est commodo ex, ac porta augue dui nec sem. Integer mollis tincidunt interdum. Nam eu purus luctus, porttitor neque ut, suscipit sem. Nulla tellus ipsum, vehicula in tincidunt in, laoreet ultricies orci. Donec ex elit, ultricies vel ornare ac, eleifend ac ex. In posuere et eros sed venenatis. Donec non sollicitudin elit. Sed scelerisque justo quis diam aliquet, id fermentum nulla molestie. Proin ante enim, mollis in urna non, dictum porta felis. Cras non mi sollicitudin, eleifend enim nec, lobortis nunc. Phasellus nec augue maximus, mattis tortor ac, feugiat ligula. Nunc sagittis ipsum at libero convallis, egestas ornare augue condimentum. Proin ex enim, ultrices id felis euismod, semper vulputate ante. Donec vitae vulputate lorem, eget laoreet ex."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc sed tortor et libero mollis pretium vitae quis nisl. Cras quis turpis lobortis, pretium ante et, tempor diam. Morbi eu orci et tellus dictum faucibus. Nunc tincidunt sed leo ac viverra. Maecenas volutpat cursus volutpat. Nullam varius volutpat lacus sit amet vestibulum. Vivamus nec orci vel enim consequat dictum ut ut leo."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />
          <Message
            msgId="1"
            userId="1"
            avatar="5626"
            username="Fulano"
            content="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus porttitor facilisis nunc a fermentum. Nulla facilisi."
            date="12:33 PM"
          />

          <div ref={endContentRef} />
        </div>
      </div>
      <div id="chat-controller" className="flex-row center">
        <InputGroup id="chat-controller-group">
          <InputGroup.Addon
            style={{ borderRight: '1px solid #666', backgroundColor: 'inherit', cursor: 'pointer' }}
          >
            <Icon icon="plus" style={{ color: '#666' }} />
          </InputGroup.Addon>
          <Input
            id="chat-controller-input"
            componentClass="textarea"
            placeholder=""
            autoFocus
            value={messageValue}
            onChange={value => setMessageValue(value)}
            onKeyDown={evt => handleSendMsg(evt)}
          />
          <InputGroup.Addon
            style={{ backgroundColor: 'inherit', paddingRight: 6, cursor: 'pointer' }}
          >
            <Icon icon="at" style={{ color: '#666', fontSize: 18 }} />
          </InputGroup.Addon>
          <InputGroup.Addon
            style={{ backgroundColor: 'inherit', paddingLeft: 6, cursor: 'pointer' }}
          >
            <Icon icon="smile-o" style={{ color: '#666', fontSize: 18 }} />
          </InputGroup.Addon>
        </InputGroup>
      </div>
    </div>
  );
};

export default Chat;
