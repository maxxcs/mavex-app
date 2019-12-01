import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dropdown, Icon } from 'rsuite';

import { closeProject } from '@general/store/actions';

const ProjectMenu = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const project = useSelector(state => state.general.project);

  const handleCloseProject = () => {
    dispatch(closeProject());
    history.push('/dashboard');
  };

  return project ? (
    <Dropdown
      title={project.name}
      placement="bottomStart"
      icon={<Icon icon="folder" style={{ fontSize: '15px' }} />}
    >
      <Dropdown.Item
        icon={<Icon icon="share" />}
        onSelect={() => { }}
      >
        Share and Invite
      </Dropdown.Item>
      <Dropdown.Item
        icon={<Icon icon="setting" />}
        onSelect={() => { }}
      >
        Project Settings
      </Dropdown.Item>
      <Dropdown.Item
        icon={<Icon icon="close" />}
        onSelect={handleCloseProject}
      >
        Exit Project
      </Dropdown.Item>
    </Dropdown>
  ) : null;
};

export default ProjectMenu;
