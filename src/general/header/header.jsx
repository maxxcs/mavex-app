import React from 'react';
import PropTypes from 'prop-types';
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
        <Icon icon="cube" style={{ marginRight: '3px', fontSize: '15px' }} />
        <h1>Mavex</h1>
      </div>
      <div>{renderProjectMenu()}</div>
      <div>{renderUserMenu()}</div>
    </div>
  );
};

HeaderCointainer.propTypes = {
  history: PropTypes.shape({
    action: PropTypes.string,
    block: PropTypes.func,
    createHref: PropTypes.func,
    go: PropTypes.func,
    goBack: PropTypes.func,
    goForward: PropTypes.func,
    length: PropTypes.number,
    listen: PropTypes.func,
    location: PropTypes.object,
    push: PropTypes.func,
    replace: PropTypes.func,
  }).isRequired,
};

export default withRouter(HeaderCointainer);
