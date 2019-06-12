import React from 'react';
import PropTypes from 'prop-types';
import { Dropdown, Icon } from 'rsuite';

const ProjectMenu = ({ projectName }) => (
  <Dropdown
    title={projectName}
    placement="bottomLeft"
    icon={<Icon icon="folder" style={{ fontSize: '15px' }} />}
  >
    <Dropdown.Item icon={<Icon icon="share" />}>Share and Invite</Dropdown.Item>
    <Dropdown.Item icon={<Icon icon="setting" />}>Project Settings</Dropdown.Item>
    <Dropdown.Item icon={<Icon icon="close" />}>Close</Dropdown.Item>
  </Dropdown>
);

ProjectMenu.propTypes = {
  projectName: PropTypes.string.isRequired,
};

export default ProjectMenu;
