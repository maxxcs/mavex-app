import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'rsuite';
import { showCreateProjectModal } from '@dashboard/store/actions';

import ProjectInstance from './project-instance';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.dashboard.projects);

  return (
    <div className="flex-column full project-list">
      <div>
        <Button
          className="create-project-btn"
          appearance="default"
          block
          onClick={() => dispatch(showCreateProjectModal(true))}
        >
          New Project
        </Button>
        <Divider className="project-list-divider">My Projects</Divider>
      </div>
      <div className="scrollable-parent full">
        <div className="scrollable-child" style={{ height: '100%', overflow: 'auto' }}>
          {
            projects.map(project => <ProjectInstance
              key={project._id}
              project={project}
              actual="343242"
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
