import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'rsuite';
import { isAuthenticated } from '../../config/auth';

import User from './user';

const HeaderCointainer = ({ history }) => {
  const renderProjectRef = () => (
    isAuthenticated() ? (
    <span style={{ color: '#818181' }}>Project Name</span>
    ) : null
  );

  const renderUserRef = () => (
    isAuthenticated() ? (
      <User username="Fulano" />
    ) : null
  );

  return (
    <div className="flex-row full center" style={styles.container}>
      <div style={styles.brand} onClick={() => history.push('/')}><Icon icon="cube" style={{ marginRight: 3 }} /><h1>Mavex</h1></div>
      <div>{renderProjectRef()}</div>
      <div>{renderUserRef()}</div>
    </div>
  );
};

const styles = {
  container: {
    justifyContent: 'space-between', 
    height: 40, 
    padding: '0px 15px', 
    backgroundColor: '#2B2B2B', 
    color: '#B1B1B1', 
    borderBottom: '5px solid #303030'
  },
  brand: {
    cursor: 'pointer', 
    WebkitUserSelect: 'none', 
    MozUserSelect: 'none', 
    msUserSelect: 'none',
    userSelect: 'none' 
  }
};

export default withRouter(HeaderCointainer);
