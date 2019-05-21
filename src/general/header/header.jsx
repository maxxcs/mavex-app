import React from 'react';
import { withRouter } from 'react-router-dom';
import { Icon } from 'rsuite';
import { isAuthenticated } from '../../config/auth';

import UserMenu from './user-menu';
import ProjectMenu from './project-menu';

const HeaderCointainer = ({ history }) => {
  const renderProjectMenu = () => (isAuthenticated() ? <ProjectMenu projectName="engine-awesome" /> : null);
  const renderUserMenu = () => (isAuthenticated() ? <UserMenu username="Fulano" /> : null);

  return (
    <div id="header" className="flex-row full center">
      <div id="brand" onClick={() => history.push('/')} role="presentation">
        <Icon icon="cube" style={{ marginRight: 3 }} />
        <h1>Mavex</h1>
      </div>
      <div>{renderProjectMenu()}</div>
      <div>{renderUserMenu()}</div>
    </div>
  );
};

export default withRouter(HeaderCointainer);
