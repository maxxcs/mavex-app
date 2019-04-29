import React from 'react';

import { Link } from 'react-router-dom';
import { Sidenav, Nav, Icon } from 'rsuite';

const Menu = () => {
  return (
    <>
      <Sidenav expanded={false} style={{ backgroundColor: '#303030', height: '100%' }}>
        <Sidenav.Body style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
          <Nav>
            <Nav.Item icon={<Icon icon="dashboard" />} componentClass={Link} to="/dashboard">
              Dashboard
            </Nav.Item>
            <Nav.Item icon={<Icon icon="code" />} componentClass={Link} to="/workspace">
              Workspace
            </Nav.Item>
            <Nav.Item icon={<Icon icon="group" />} componentClass={Link} to="/channels">
              Channels
            </Nav.Item>
            <Nav.Item icon={<Icon icon="terminal" />} componentClass={Link} to="/terminals">
              Terminals
            </Nav.Item>
          </Nav>
          <Nav>
            <Nav.Item icon={<Icon icon="gear-circle" />}>
              Settings
            </Nav.Item>
          </Nav>
        </Sidenav.Body>
      </Sidenav>
    </>
  );
};

export default Menu;
