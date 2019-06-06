import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import { Sidenav, Nav, Icon } from 'rsuite';

const Menu = ({ history, location }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(location.pathname);
  });

  const handleRoute = (route) => {
    history.push(route);
  };

  return (
    <Sidenav
      expanded={false}
      activeKey={selected}
      style={{ height: '100%', backgroundColor: '#303030', overflow: 'hidden' }}
    >
      <Sidenav.Body
        className="flex-column"
        style={{ justifyContent: 'space-between', height: '100%' }}
      >
        <Nav>
          <Nav.Item
            eventKey="/dashboard"
            icon={<Icon icon="dashboard" />}
            onClick={() => handleRoute('/dashboard')}
          >
            Dashboard
          </Nav.Item>
          <Nav.Item
            eventKey="/workspace"
            icon={<Icon icon="code" />}
            onClick={() => handleRoute('/workspace')}
          >
            Workspace
          </Nav.Item>
          <Nav.Item
            eventKey="/channels"
            icon={<Icon icon="group" />}
            onClick={() => handleRoute('/channels')}
          >
            Channels
          </Nav.Item>
          <Nav.Item
            eventKey="/terminals"
            icon={<Icon icon="terminal" />}
            onClick={() => handleRoute('/terminals')}
          >
            Terminals
          </Nav.Item>
        </Nav>
        <Nav>
          <Nav.Item icon={<Icon icon="gear-circle" />}>Settings</Nav.Item>
        </Nav>
      </Sidenav.Body>
    </Sidenav>
  );
};

Menu.propTypes = {
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
  location: PropTypes.shape({
    hash: PropTypes.string,
    key: PropTypes.string,
    pathname: PropTypes.string,
    search: PropTypes.string,
    state: PropTypes.object,
  }).isRequired,
};

export default withRouter(Menu);
