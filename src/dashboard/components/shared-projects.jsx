import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Divider } from 'rsuite';

import ProjectInstance from './project-instance';

const SharedProjects = () => {
  const dispatch = useDispatch();
  // const projects = useSelector(state => state.dashboard.projects);

  return (
    <div className="flex-column full project-list">
      <div>
        <Button
          className="check-invites-btn"
          appearance="default"
          block
          onClick={() => { }}
        >
          Check Invites
        </Button>
        <Divider className="project-list-divider">Shared Projects</Divider>
      </div>
      <div className="scrollable-parent full">
        <div className="scrollable-child" style={{ height: '100%', overflow: 'auto' }}>
          {
            // projects.map(project => <ProjectInstance
            //   key={project._id}
            //   project={project}
            //   actual="343242"
            // />)
          }
        </div>
      </div>
    </div>
  );
};

export default SharedProjects;
