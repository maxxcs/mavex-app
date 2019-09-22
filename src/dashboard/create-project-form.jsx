import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

const CreateProjectForm = () => {
  const display = useSelector(state => state.dashboard.displayProjectForm);
  const dispatch = useDispatch();

  return (
    <Drawer
      placement="left"
      size="xs"
      show={display}
      onHide={() => dispatch(displayProjectForm(false))}
    >
      <Drawer.Header>
        <Drawer.Title>
          <strong>New Project</strong>
        </Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <div className="flex-column full">
          <Divider style={{ marginTop: '5px' }}>
            <span>Project General</span>
          </Divider>

          <div
            className="flex-row"
            style={{ width: '100%', alignItems: 'center', marginBottom: '20px' }}
          >
            <InputGroup style={{ width: '300px', marginRight: '10px' }}>
              <InputGroup.Addon>
                <Icon icon="folder" style={{ color: '#888' }} />
              </InputGroup.Addon>
              <Input
                type="text"
                placeholder="Project name"
                autoFocus
                onPressEnter={() => dispatch(displayProjectForm(false))}
              />
            </InputGroup>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>Only characters allowed in traditional directories.</Tooltip>}
            >
              <Icon icon="help-o" style={{ color: '#666' }} />
            </Whisper>
          </div>

          <div
            className="flex-row"
            style={{ width: '100%', alignItems: 'center', marginBottom: '15px' }}
          >
            <InputGroup style={{ width: '300px', marginRight: '10px' }}>
              <InputGroup.Addon>
                <Icon icon="key" style={{ color: '#888' }} />
              </InputGroup.Addon>
              <Input
                type="password"
                placeholder="Project password"
                onPressEnter={() => dispatch(displayProjectForm(false))}
              />
            </InputGroup>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>A password will be required to join the project.</Tooltip>}
            >
              <Icon icon="help-o" style={{ color: '#666' }} />
            </Whisper>
          </div>

          <div
            className="flex-row"
            style={{ width: '230px', alignItems: 'center', marginBottom: '15px' }}
          >
            <Checkbox value="public">
              {'Make this a '}
              <strong>public</strong>
              {' project.'}
            </Checkbox>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={(
                <Tooltip>
                  If public, the project will be publicly indexed to any user. Otherwise, only
                  invited users could join the project.
                </Tooltip>
              )}
            >
              <Icon icon="help-o" style={{ color: '#666', marginLeft: '5px' }} />
            </Whisper>
          </div>

          <Divider style={{ marginTop: '5px' }}>
            <span>Files Privileges</span>
            <Whisper
              placement="topLeft"
              trigger="hover"
              speaker={<Tooltip>Sets the Workspace permissions for new users.</Tooltip>}
            >
              <Icon icon="help-o" style={{ color: '#666', marginLeft: '5px' }} />
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
                <Toggle
                  size="lg"
                  checkedChildren="Write"
                  unCheckedChildren="Write"
                  defaultChecked
                />
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
              <Icon icon="help-o" style={{ color: '#666', marginLeft: '5px' }} />
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
                <Toggle
                  size="lg"
                  checkedChildren="Write"
                  unCheckedChildren="Write"
                  defaultChecked
                />
              </Whisper>
              <Whisper
                placement="topLeft"
                trigger="hover"
                speaker={(
                  <Tooltip>
                    All new users can create, change and remove channels by default.
                  </Tooltip>
                )}
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
              <Icon icon="help-o" style={{ color: '#666', marginLeft: '5px' }} />
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
                <Toggle
                  size="lg"
                  checkedChildren="Write"
                  unCheckedChildren="Write"
                  defaultChecked
                />
              </Whisper>
              <Whisper
                placement="topLeft"
                trigger="hover"
                speaker={(
                  <Tooltip>
                    All new users can create, change and remove terminals by default.
                  </Tooltip>
                )}
                delayShow={300}
              >
                <Toggle size="lg" checkedChildren="Edit" unCheckedChildren="Edit" defaultChecked />
              </Whisper>
            </div>
          </div>
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={() => dispatch(displayProjectForm(false))} appearance="primary">
          Submit
        </Button>
        <Button onClick={() => dispatch(displayProjectForm(false))} appearance="subtle">
          Cancel
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
};

export default CreateProjectForm;
