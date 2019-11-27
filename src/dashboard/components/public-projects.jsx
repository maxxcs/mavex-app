import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'rsuite';

import ProjectInstance from './project-instance';

const PublicProjects = () => {
  const dispatch = useDispatch();
  const projects = useSelector(state => state.dashboard.publicProjects);

  return (
    <div className="flex-column full project-list">
      <div>
        <Button
          className="search-projects-btn"
          appearance="default"
          block
          onClick={() => { }}
        >
          Search Projects
        </Button>
        <Divider className="project-list-divider">Public Projects</Divider>
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

export default PublicProjects;
