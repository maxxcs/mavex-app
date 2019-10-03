import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProjectList from './components/project-list';
import CreateProjectForm from './components/create-project-form';

import { fetchProjects } from './store/actions';

const Dashboard = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProjects());
  }, []);

  return (
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
};

export default Dashboard;
