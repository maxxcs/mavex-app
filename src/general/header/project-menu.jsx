import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Dropdown, Icon } from 'rsuite';

const ProjectMenu = () => {
  const project = useSelector(state => state.general.project);

  return project ? (
    <Dropdown
      title={project.name}
      placement="bottomStart"
      icon={<Icon icon="folder" style={{ fontSize: '15px' }} />}
    >
      <Dropdown.Item icon={<Icon icon="share" />}>Share and Invite</Dropdown.Item>
      <Dropdown.Item icon={<Icon icon="setting" />}>Project Settings</Dropdown.Item>
      <Dropdown.Item icon={<Icon icon="close" />}>Exit Project</Dropdown.Item>
    </Dropdown>
  ) : null;
};

export default ProjectMenu;
