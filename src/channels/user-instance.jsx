import React from 'react';
import { Icon } from 'rsuite';

const UserInstance = ({ id, name }) => (
  <div style={{ marginBottom: '3px' }}>
    <button type="button">
      <Icon icon="circle" style={{ color: '#48533e', marginRight: '5px' }} />
      {name}
    </button>
  </div>
);

export default UserInstance;
