import React from 'react';
import { Icon } from 'rsuite';

import User from './user';

const HeaderCointainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between', height: 40, padding: '0px 15px', backgroundColor: '#2B2B2B', color: '#B1B1B1', borderBottom: '5px solid #303030' }}>
      <span><Icon icon="cube" style={{ marginRight: 3 }} /><h1>Mavex</h1></span>
      <span style={{ color: '#818181' }}>Project Name</span>
      <User username="Fulano" />
    </div>
  );
};

export default HeaderCointainer;
