import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory, useLocation } from 'react-router-dom';
import { Sidebar, Sidenav, Nav, Icon, Alert } from 'rsuite';

const Menu = () => {
  const user = useSelector(state => state.general.user);
  const project = useSelector(state => state.general.project);
  const history = useHistory();
  const location = useLocation();
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    setSelected(location.pathname);
  });

  const handleRoute = (route) => {
    if (!user) {
      Alert.warning('Login before to access');
    }
    if (!project && (route === '/workspace' || route === '/channels' || route === '/terminals')) {
      Alert.warning('You must be in a project');
      return;
    } else {
      history.push(route);
    }
  };

  return (
    <Sidebar width={56}>
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
    </Sidebar>
  );
};

export default Menu;
