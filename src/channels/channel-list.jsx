import React from 'react';
import { Icon, Divider } from 'rsuite';

import ChannelInstance from './channel-instance';
import UserInstance from './user-instance';

const ChannelList = () => (
  <div id="channel-list" className="flex-column scrollable-parent">
    <div
      className="scrollable-child"
      style={{ padding: '10px 15px 10px 15px', height: '100%', overflow: 'auto' }}
    >
      <div>
        <div style={{ marginBottom: '5px', fontSize: 22, color: '#BBB' }}>
          <strong>engine-awesome</strong>
        </div>
        <div>
          <div className="flex-row" style={{ justifyContent: 'space-between' }}>
            <button type="button">
              <Icon icon="circle" style={{ color: '#48533e', marginRight: '5px' }} />
              Fulano
            </button>
            <button type="button">
              <Icon icon="user-circle-o" />
            </button>
          </div>
        </div>
      </div>

      <Divider id="channel-list-divider" />

      <div>
        <div className="flex-row" style={{ fontSize: '15px', justifyContent: 'space-between' }}>
          <span>
            <strong>CHANNELS</strong>
          </span>
          <button type="button">
            <Icon icon="plus-square" />
          </button>
        </div>
        <div className="flex-column" style={{ padding: '5px 0px 0px 10px' }}>
          <ChannelInstance id="1" actualId="4" name="general" />
          <ChannelInstance id="2" actualId="4" name="roadmap" />
          <ChannelInstance id="3" actualId="4" name="bugs" />
          <ChannelInstance id="4" actualId="4" name="gambiarras" />
          <ChannelInstance id="5" actualId="4" name="tests" />
        </div>
      </div>

      <Divider id="channel-list-divider" />

      <div>
        <div className="flex-row" style={{ fontSize: '15px', justifyContent: 'space-between' }}>
          <span>
            <strong>USERS</strong>
          </span>
          <button type="button">
            <Icon icon="plus-square" />
          </button>
        </div>
        <div className="flex-column" style={{ padding: '5px 0px 0px 10px' }}>
          <UserInstance id="1" name="Fulano" />
          <UserInstance id="2" name="Beltrana" />
          <UserInstance id="3" name="Ciclana" />
          <UserInstance id="4" name="Mabot" />
        </div>
      </div>
    </div>
  </div>
);

export default ChannelList;
