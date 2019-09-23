import React from 'react';
import { Icon } from 'rsuite';

import ProjectList from './project-list';
import CreateProjectForm from './create-project-form';

const Dashboard = () => (
  <>
    <div className="flex-row full">
      <ProjectList />
      <div className="flex-column full center">
        {/* <div>
          <Icon icon="cube" style={{ color: '#2A2A2A', fontSize: 200, marginBottom: 60 }} />
        </div> */}
      </div>
    </div>
    <CreateProjectForm />
  </>
);

export default Dashboard;
