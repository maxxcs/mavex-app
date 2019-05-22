import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'rsuite';

const UserMenu = ({ username }) => (
  <Dropdown title={username} placement="bottomRight" icon={<Icon icon="user" />}>
    <Dropdown.Item panel style={{ padding: 10, width: 160 }}>
      <span>
        Signed in as
        {' '}
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
);

UserMenu.propTypes = {
  username: PropTypes.string.isRequired,
};

export default UserMenu;
