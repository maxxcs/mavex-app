import React from 'react';

import Chat from './components/chat';
import ChannelList from './components/channel-list';

const Channels = () => (
  <>
    <div className="flex-row full">
      <ChannelList />
      <div className="flex-column center full">
        <Chat />
      </div>
    </div>
  </>
);

export default Channels;
