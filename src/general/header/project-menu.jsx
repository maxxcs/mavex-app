import React from 'react';
import { Dropdown, Icon } from 'rsuite';

const ProjectMenu = ({ projectName }) => (
  <Dropdown
    title={projectName}
    placement="bottomStart"
    icon={<Icon icon="folder" style={{ fontSize: '15px' }} />}
  >
    <Dropdown.Item icon={<Icon icon="share" />}>Share and Invite</Dropdown.Item>
    <Dropdown.Item icon={<Icon icon="setting" />}>Project Settings</Dropdown.Item>
    <Dropdown.Item icon={<Icon icon="close" />}>Close</Dropdown.Item>
  </Dropdown>
);

export default ProjectMenu;
