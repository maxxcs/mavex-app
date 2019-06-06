import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from 'rsuite';

const UserInstance = ({ id, name }) => (
  <div style={{ marginBottom: '3px' }}>
    <button type="button">
      <Icon icon="circle" style={{ color: '#48533e', marginRight: '5px' }} />
      {name}
    </button>
  </div>
);

UserInstance.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default UserInstance;
