import React from 'react';
import { Icon } from 'rsuite';

const ChannelInstance = ({ id, actualId, name }) => {
  const isActual = () => (id === actualId ? '#4179a8' : '#CCC');
  return (
    <div style={{ marginBottom: '3px', color: isActual() }}>
      <button type="button">
        <Icon icon="hashtag" style={{ marginRight: '5px' }} />
        {name}
      </button>
    </div>
  );
};

export default ChannelInstance;
