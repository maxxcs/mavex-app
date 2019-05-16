import React from 'react';
import { Icon } from 'rsuite';

const FooterCointainer = () => {
  return (
    <div className="flex-row full center" style={styles.container}>
      <span><Icon icon="bug" style={{ marginLeft: 3 }} /> Alpha version</span>
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
