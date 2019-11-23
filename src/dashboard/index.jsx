import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProjectList from './components/project-list';
import CreateProjectForm from './components/create-project-form';
import ShareProjectForm from './components/share-project-form';
import ConfigProjectForm from './components/config-project-form';
import RemoveProjectForm from './components/remove-project-form';

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
        </div>
      </div>
      <CreateProjectForm />
      <ShareProjectForm />
      <ConfigProjectForm />
      <RemoveProjectForm />
    </>
  );
};

export default Dashboard;
