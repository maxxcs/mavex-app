import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayProjectForm } from './actions';
import { Drawer, Button } from 'rsuite';

const CreateProjectForm = ({ display, displayProjectForm }) => {
  return (
    <Drawer 
      placement="left" 
      size="xs" 
      show={display} 
      onHide={() => displayProjectForm(false)}
    >
      <Drawer.Header>
        <Drawer.Title><strong>New Project</strong></Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <span>A lot inputs here, wow so much inputs</span>
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={() => displayProjectForm(false)} appearance="primary">Submit</Button>
        <Button onClick={() => displayProjectForm(false)} appearance="subtle">Cancel</Button>
      </Drawer.Footer>
    </Drawer>
  );
};

const mapStateToProps = state => ({
  display: state.dashboard.displayProjectForm
});
const mapDispatchToProps = dipastch => bindActionCreators({ displayProjectForm }, dipastch);

export default connect(mapStateToProps, mapDispatchToProps)(CreateProjectForm);
