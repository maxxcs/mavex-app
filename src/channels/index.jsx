import React from 'react';

import ChannelList from './channel-list';

const Channels = () => {
  return (
    <>
      <div style={{  display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
        <ChannelList />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%' }}>
          <div style={{ height: '100%', width: '100%' }}>
            
          </div>
        </div>
      </div>
    </>
  );  
};

export default Channels;
