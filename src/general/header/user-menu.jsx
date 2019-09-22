import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'rsuite';

const UserMenu = ({ username }) => (
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
      <Dropdown.Item icon={<Icon icon="star" />}>Your stars</Dropdown.Item>
      <Dropdown.Item divider />
      <Dropdown.Item icon={<Icon icon="help-o" />}>Help</Dropdown.Item>
      <Dropdown.Item icon={<Icon icon="gears2" />}>Settings</Dropdown.Item>
      <Dropdown.Item icon={<Icon icon="sign-out" />}>Sign out</Dropdown.Item>
    </Dropdown>
  </div>
);

UserMenu.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserMenu;
