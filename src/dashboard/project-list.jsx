import React from 'react';
import { useDispatch } from 'react-redux';
import { Button, Divider } from 'rsuite';
import { displayProjectForm } from './actions';

import ProjectInstance from './project-instance';

const ProjectList = () => {
  const dispatch = useDispatch();
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
          <ProjectInstance id="1" actualId="3" name="mavex-app" />
          <ProjectInstance id="2" actualId="3" name="iclovis" />
          <ProjectInstance id="3" actualId="3" name="engine-awesome" />
          <ProjectInstance id="4" actualId="3" name="college-project" />
        </div>
      </div>
    </div>
  );
};

export default ProjectList;
