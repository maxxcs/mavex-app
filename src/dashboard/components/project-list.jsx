import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'rsuite';
import { displayProjectForm } from '@dashboard/store/actions';

import ProjectInstance from './project-instance';

const ProjectList = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.dashboard.projects);

  return (
    <div id="project-list" className="flex-column full">
      <div>
        <Button
          id="create-project-btn"
          appearance="default"
          block
          onClick={() => dispatch(displayProjectForm(true))}
        >
          New Project
        </Button>
        <Divider id="project-list-divider" />
      </div>
      <div className="scrollable-parent full">
        <div className="scrollable-child" style={{ height: '100%', overflow: 'auto' }}>
          {
            projects.map(project => <ProjectInstance
              id={project._id}
              key={project._id}
              actualId="343242"
              name={project.name}
              isPublic={project.isPublic}
            />)
          }
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
