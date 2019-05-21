import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'rsuite';
import { isAuthenticated } from '../../config/auth';

import UserMenu from './user-menu';
import ProjectMenu from './project-menu';

const styles = {
  container: {
    justifyContent: 'space-between',
    height: 40,
    padding: '0px 15px',
    backgroundColor: '#2B2B2B',
    color: '#B1B1B1',
    borderBottom: '5px solid #303030',
  },
  brand: {
    minWidth: 60,
    cursor: 'pointer',
    WebkitUserSelect: 'none',
    MozUserSelect: 'none',
    msUserSelect: 'none',
    userSelect: 'none',
  },
};

const HeaderCointainer = ({ history }) => {
  const renderProjectMenu = () => (isAuthenticated() ? <ProjectMenu projectName="engine-awesome" /> : null);
  const renderUserMenu = () => (isAuthenticated() ? <UserMenu username="Fulano" /> : null);

  return (
    <div className="flex-row full center" style={styles.container}>
      <div style={styles.brand} onClick={() => history.push('/')}>
        <Icon icon="cube" style={{ marginRight: 3 }} />
        <h1>Mavex</h1>
      </div>
      <div>{renderProjectMenu()}</div>
      <div>{renderUserMenu()}</div>
    </div>
  );
};

export default withRouter(HeaderCointainer);
