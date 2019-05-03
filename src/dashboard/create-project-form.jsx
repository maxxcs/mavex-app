import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displayProjectForm } from './actions';
import { 
  Drawer, 
  Button, 
  Form, 
  FormGroup, 
  FormControl, 
  ControlLabel, 
  HelpBlock, 
  CheckboxGroup, 
  Checkbox 
} from 'rsuite';

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
        
        <Form autocomplete="off">
          <FormGroup>
            <ControlLabel>Project Name</ControlLabel>
            <FormControl name="name" autofocus="true" />
            <HelpBlock tooltip>Required.</HelpBlock>
          </FormGroup>
          <FormGroup >
            <FormControl accepter={CheckboxGroup} inline>
              <Checkbox value={'Listed'}>Listed</Checkbox>
              <HelpBlock tooltip>If listed, the project can be found by the search engine.</HelpBlock>
            </FormControl>
          </FormGroup>
          <FormGroup >
            <FormControl accepter={CheckboxGroup} inline>
              <Checkbox value={'Private'}>Private</Checkbox>
              <HelpBlock tooltip>If private, a password will be required to join the project.</HelpBlock>
            </FormControl>
          </FormGroup>
          <FormGroup>
            <ControlLabel>Password</ControlLabel>
            <FormControl name="password" type="password" disabled />
            <HelpBlock tooltip>Password used by other users to join the project.</HelpBlock>
          </FormGroup>
        </Form>

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
