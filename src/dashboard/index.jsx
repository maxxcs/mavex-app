import React from 'react';
import { Icon } from 'rsuite';

import ProjectList from './project-list';
import CreateProjectForm from './create-project-form';

const Dashboard = () => {
  return (
    <>
      <div style={{  display: 'flex', flexDirection: 'row', height: '100%', width: '100%' }}>
        <ProjectList />
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: '100%', alignItems: 'center', justifyContent: 'center' }}>
            <Icon icon="cube" size="5x" style={{ color: '#2A2A2A', fontSize: 200, marginBottom: 250 }} />
          </div>
        </div>
      </div>
      <CreateProjectForm />
    </>
  );  
};

export default Dashboard;
