import React from 'react';
import { useHistory } from 'react-router-dom';
import { Icon } from 'rsuite';
import { isAuthenticated } from '@config/auth';

import UserMenu from './user-menu';
import ProjectMenu from './project-menu';

const HeaderCointainer = () => {
  const history = useHistory();
  const renderProjectMenu = () => (isAuthenticated() ? <ProjectMenu /> : null);
  const renderUserMenu = () => (isAuthenticated() ? <UserMenu /> : null);

  return (
    <div id="header" className="flex-row full center">
      <div id="brand" onClick={() => history.push('/')} role="presentation">
        <Icon icon="cube" style={{ marginRight: '3px', fontSize: '15px' }} />
        <h1>Mavex</h1>
      </div>
      <div>{renderProjectMenu()}</div>
      <div>{renderUserMenu()}</div>
    </div>
  );
};

export default HeaderCointainer;
