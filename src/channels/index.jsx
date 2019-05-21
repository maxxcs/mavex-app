import React from 'react';

import Chat from './chat';
import ChannelList from './channel-list';

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
