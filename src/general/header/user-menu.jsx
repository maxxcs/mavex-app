import React from 'react';
import { withRouter } from 'react-router-dom';
import { Dropdown, Icon, Alert } from 'rsuite';
import { logout } from '@config/auth';

const UserMenu = ({ username, history }) => {
  const exit = () => {
    logout();
    history.push('/');
    Alert.info('Successfully logged out.');
  };

  return (
    <div className="flex-row center">
      <button className="highlight" type="button">
        <Icon icon="bell-o" style={{ marginRight: '2px', color: '#8e8e93', fontSize: '15px' }} />
      </button>
      <Dropdown
        title={username}
        placement="bottomEnd"
        icon={<Icon icon="user" style={{ fontSize: '15px' }} />}
      >
        <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
          <span>
            {'Signed in as '}
            <strong>{username}</strong>
          </span>
        </Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item icon={<Icon icon="user-circle" />}>Your profile</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="history" />}>Project history</Dropdown.Item>
        <Dropdown.Item divider />
        <Dropdown.Item icon={<Icon icon="help-o" />}>Help</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="gears2" />}>Settings</Dropdown.Item>
        <Dropdown.Item icon={<Icon icon="sign-out" />} onSelect={() => exit()}>Sign out</Dropdown.Item>
      </Dropdown>
    </div>
  );
}

export default withRouter(UserMenu);
