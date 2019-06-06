import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  Drawer,
  Divider,
  Icon,
  Whisper,
  Tooltip,
  Button,
  Input,
  InputGroup,
  Checkbox,
  Toggle,
} from 'rsuite';
import { displayProjectForm } from './actions';

const CreateProjectForm = ({ display, displayDrawer }) => (
  <Drawer placement="left" size="xs" show={display} onHide={() => displayDrawer(false)}>
    <Drawer.Header>
      <Drawer.Title>
        <strong>New Project</strong>
      </Drawer.Title>
    </Drawer.Header>
    <Drawer.Body>
      <div className="flex-column full">
        <div style={{ width: '100%', marginBottom: 15 }}>
          <div style={{ marginBottom: 5 }}>Project Name</div>
          <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
            <InputGroup style={{ width: 300, marginRight: 10 }}>
              <InputGroup.Addon>
                <Icon icon="folder" style={{ color: '#888' }} />
              </InputGroup.Addon>
              <Input type="text" autoFocus onPressEnter={() => displayDrawer(false)} />
            </InputGroup>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>Only characters allowed in traditional directories.</Tooltip>}
            >
              <Icon icon="help-o" style={{ color: '#666' }} />
            </Whisper>
          </div>
        </div>

        <div style={{ width: '100%' }}>
          <div style={{ marginBottom: 5 }}>Password</div>
          <div className="flex-row" style={{ width: '100%', alignItems: 'center' }}>
            <InputGroup style={{ width: 300, marginRight: 10 }}>
              <InputGroup.Addon>
                <Icon icon="key" style={{ color: '#888' }} />
              </InputGroup.Addon>
              <Input type="password" />
            </InputGroup>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>A password will be required to join the project.</Tooltip>}
            >
              <Icon icon="help-o" style={{ color: '#666' }} />
            </Whisper>
          </div>
        </div>

        <div className="flex-row" style={{ width: 230, minHeight: 50, alignItems: 'center' }}>
          <Checkbox value="public">Public</Checkbox>
          <Whisper
            placement="topLeft"
            trigger="hover"
            speaker={(
              <Tooltip>
                If public, the project will be publicly indexed to any user. Otherwise, only invited
                users could join the project.
              </Tooltip>
)}
          >
            <Icon icon="help-o" style={{ color: '#666', marginLeft: 5 }} />
          </Whisper>
        </div>

        <Divider style={{ marginTop: 5 }}>
          <span>Files Privileges</span>
          <Whisper
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Sets the Workspace permissions for new users.</Tooltip>}
          >
            <Icon icon="help-o" style={{ color: '#666', marginLeft: 5 }} />
          </Whisper>
        </Divider>

        <div style={{ width: '100%' }}>
          <div
            className="flex-row"
            style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>All new users can read the files by default.</Tooltip>}
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Read" unCheckedChildren="Read" defaultChecked />
            </Whisper>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>All new users can write to files by default.</Tooltip>}
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Write" unCheckedChildren="Write" defaultChecked />
            </Whisper>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={
                <Tooltip>All new users can create, change and remove files by default.</Tooltip>
              }
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Edit" unCheckedChildren="Edit" defaultChecked />
            </Whisper>
          </div>
        </div>

        <Divider>
          <span>Channels Privileges</span>
          <Whisper
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Sets the Channels permissions for new users.</Tooltip>}
          >
            <Icon icon="help-o" style={{ color: '#666', marginLeft: 5 }} />
          </Whisper>
        </Divider>

        <div style={{ width: '100%' }}>
          <div
            className="flex-row"
            style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>All new users can read the channels by default.</Tooltip>}
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Read" unCheckedChildren="Read" defaultChecked />
            </Whisper>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>All new users can write to channels by default.</Tooltip>}
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Write" unCheckedChildren="Write" defaultChecked />
            </Whisper>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={
                <Tooltip>All new users can create, change and remove channels by default.</Tooltip>
              }
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Edit" unCheckedChildren="Edit" defaultChecked />
            </Whisper>
          </div>
        </div>

        <Divider>
          <span>Terminals Privileges</span>
          <Whisper
            placement="topLeft"
            trigger="hover"
            speaker={<Tooltip>Sets the Terminals permissions for new users.</Tooltip>}
          >
            <Icon icon="help-o" style={{ color: '#666', marginLeft: 5 }} />
          </Whisper>
        </Divider>

        <div style={{ width: '100%' }}>
          <div
            className="flex-row"
            style={{ width: '100%', alignItems: 'center', justifyContent: 'space-between' }}
          >
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>All new users can read the terminals by default.</Tooltip>}
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Read" unCheckedChildren="Read" defaultChecked />
            </Whisper>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>All new users can write to terminals by default.</Tooltip>}
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Write" unCheckedChildren="Write" defaultChecked />
            </Whisper>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={
                <Tooltip>All new users can create, change and remove terminals by default.</Tooltip>
              }
              delayShow={300}
            >
              <Toggle size="lg" checkedChildren="Edit" unCheckedChildren="Edit" defaultChecked />
            </Whisper>
          </div>
        </div>
      </div>
    </Drawer.Body>
    <Drawer.Footer>
      <Button onClick={() => displayDrawer(false)} appearance="primary">
        Submit
      </Button>
      <Button onClick={() => displayDrawer(false)} appearance="subtle">
        Cancel
      </Button>
    </Drawer.Footer>
  </Drawer>
);

CreateProjectForm.propTypes = {
  display: PropTypes.bool.isRequired,
  displayDrawer: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  display: state.dashboard.displayProjectForm,
});
const mapDispatchToProps = dipastch => bindActionCreators(
  {
    displayDrawer: displayProjectForm,
  },
  dipastch,
);

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CreateProjectForm);
