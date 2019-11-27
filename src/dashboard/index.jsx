import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import ProjectList from './components/project-list';
import SharedProjects from './components/shared-projects';
import PublicProjects from './components/public-projects';
import CreateProjectForm from './components/modals/create-project-form';
import ShareProjectForm from './components/modals/share-project-form';
import ConfigProjectForm from './components/modals/config-project-form';
import RemoveProjectForm from './components/modals/remove-project-form';

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
        <SharedProjects />
        <PublicProjects />
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
