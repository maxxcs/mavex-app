import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayProjectForm } from './actions';
import { Button, Divider } from 'rsuite';

import ProjectInstance from './project-instance';

const ProjectList = ({ displayProjectForm }) => {
  return (
    <div id="project-list" className="flex-column full">
      <div>
        <Button 
          id="create-project-btn" 
          appearance='default' 
          block 
          onClick={() => displayProjectForm(true)}
        >
          New Project
        </Button>
        <Divider id="project-list-divider" />
      </div>
      <div className="scrollable-parent full">
        <div className="scrollable-child" style={{ height: '100%', overflow: 'auto' }}>
          <ProjectInstance id="1" actual="3" name="mavex-app" />
          <ProjectInstance id="2" actual="3" name="iclovis" />
          <ProjectInstance id="3" actual="3" name="engine-awesome" />
          <ProjectInstance id="4" actual="3" name="college-project" />
        </div>
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ displayProjectForm }, dispatch);

export default connect(null, mapDispatchToProps)(ProjectList);
