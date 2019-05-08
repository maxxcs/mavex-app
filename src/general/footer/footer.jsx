import React from 'react';
import { Icon } from 'rsuite';

const FooterCointainer = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'flex-end', height: 25, padding: '0px 5px', fontSize: 12, backgroundColor: '#2B2B2B', color: '#B1B1B1', borderTop: '5px solid #303030' }}>
      <span>Alpha version<Icon icon="realtime" style={{ marginLeft: 3 }} /></span>
    </div>
  );
};

export default FooterCointainer;
