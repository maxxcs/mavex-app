import React from 'react';
import { Icon } from 'rsuite';

const FooterCointainer = () => {
  return (
    <div className="flex-row full center" style={styles.container}>
      <span>Alpha version<Icon icon="realtime" style={{ marginLeft: 3 }} /></span>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'flex-end', 
    height: 25, 
    fontSize: 12, 
    padding: '0px 5px', 
    backgroundColor: '#2B2B2B', 
    color: '#B1B1B1', 
    borderTop: '5px solid #303030',
  }
};

export default FooterCointainer;
