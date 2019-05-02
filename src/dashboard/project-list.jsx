import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayProjectForm } from './actions';
import { Button, Divider } from 'rsuite';

const ProjectList = ({ displayProjectForm }) => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', height: '100%', width: 500, backgroundColor: '#252525', padding: 10 }}>
      <Button appearance='default' block style={{ backgroundColor: '#334433', color: '#CCC' }} onClick={() => displayProjectForm(true)}>New Project</Button>
      <Divider style={{ backgroundColor: '#333', margin: '10px 0px'}} />
    </div>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators({ displayProjectForm }, dispatch);

export default connect(null, mapDispatchToProps)(ProjectList);
