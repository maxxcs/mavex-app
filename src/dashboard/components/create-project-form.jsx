import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import axios from 'axios';
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
  Alert
} from 'rsuite';

import { showCreateProjectModal, fetchProjects } from '@dashboard/store/actions';
import { getToken } from '@config/auth';
import { BASE_URL } from '@settings';

const CreateProjectForm = () => {
  const display = useSelector(state => state.dashboard.displayModal.createProject);
  const dispatch = useDispatch();

  const [name, setName] = useState("");
  const [isPublic, setIsPublic] = useState(false);
  const [usersFilesRead, setUsersFilesRead] = useState(true);
  const [usersFilesWrite, setUsersFilesWrite] = useState(true);
  const [usersFilesEdit, setUsersFilesEdit] = useState(true);
  const [usersChannelsRead, setUsersChannelsRead] = useState(true);
  const [usersChannelsWrite, setUsersChannelsWrite] = useState(true);
  const [usersChannelsEdit, setUsersChannelsEdit] = useState(true);
  const [usersTerminalsRead, setUsersTerminalsRead] = useState(true);
  const [usersTerminalsWrite, setUsersTerminalsWrite] = useState(true);
  const [usersTerminalsEdit, setUsersTerminalsEdit] = useState(true);
  const [busy, setBusy] = useState(false);

  const clearForm = () => {
    setName("");
    setIsPublic(false);
    setUsersFilesRead(true);
    setUsersFilesWrite(true);
    setUsersFilesEdit(true);
    setUsersChannelsRead(true);
    setUsersChannelsWrite(true);
    setUsersChannelsEdit(true);
    setUsersTerminalsRead(true);
    setUsersTerminalsWrite(true);
    setUsersTerminalsEdit(true);
  };

  const closeForm = () => {
    clearForm();
    dispatch(showCreateProjectModal(false));
  };

  const createProject = async (evt) => {
    try {
      if (evt) evt.preventDefault();
      setBusy(true);
      if (!name) {
        setBusy(false);
        Alert.warning('Name cannot be empty.');
      } else {
        const token = getToken();
        const project = {
          name,
          isPublic,
          usersFilesRead,
          usersFilesWrite,
          usersFilesEdit,
          usersChannelsRead,
          usersChannelsWrite,
          usersChannelsEdit,
          usersTerminalsRead,
          usersTerminalsWrite,
          usersTerminalsEdit
        };
        const { data } = await axios.post(`${BASE_URL}/dashboard/create-project`, { project, token });

        if (data.created) {
          dispatch(fetchProjects());
          setBusy(false);
          Alert.success('Project successfully created.');
          closeForm();
        } else {
          setBusy(false);
          Alert.warning('Something unexpected has occurred.');
          throw new Error(data);
        }
      }
    } catch ({ response }) {
      setBusy(false);
      if (response) Alert.warning(response.data.message);
    }
  };

  return (
    <Drawer
      placement="left"
      size="xs"
      show={display}
      onHide={() => closeForm()}
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
                value={name}
                onChange={value => setName(value)}
                onPressEnter={() => createProject()}
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
            style={{ width: '230px', alignItems: 'center', marginBottom: '15px' }}
          >
            <Checkbox checked={isPublic} onChange={(val, checked) => setIsPublic(checked)}>
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
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Read"
                  unCheckedChildren="Read"
                  checked={usersFilesRead}
                  onChange={value => setUsersFilesRead(value)}
                />
              </Whisper>
              <Whisper
                placement="topLeft"
                trigger="hover"
                speaker={<Tooltip>All new users can write to files by default.</Tooltip>}
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Write"
                  unCheckedChildren="Write"
                  checked={usersFilesWrite}
                  onChange={value => setUsersFilesWrite(value)}
                />
              </Whisper>
              <Whisper
                placement="topLeft"
                trigger="hover"
                speaker={
                  <Tooltip>All new users can create, change and remove files by default.</Tooltip>
                }
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Edit"
                  unCheckedChildren="Edit"
                  checked={usersFilesEdit}
                  onChange={value => setUsersFilesEdit(value)}
                />
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
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Read"
                  unCheckedChildren="Read"
                  checked={usersChannelsRead}
                  onChange={value => setUsersChannelsRead(value)}
                />
              </Whisper>
              <Whisper
                placement="topLeft"
                trigger="hover"
                speaker={<Tooltip>All new users can write to channels by default.</Tooltip>}
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Write"
                  unCheckedChildren="Write"
                  checked={usersChannelsWrite}
                  onChange={value => setUsersChannelsWrite(value)}

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
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Edit"
                  unCheckedChildren="Edit"
                  checked={usersChannelsEdit}
                  onChange={value => setUsersChannelsEdit(value)}
                />
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
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Read"
                  unCheckedChildren="Read"
                  checked={usersTerminalsRead}
                  onChange={value => setUsersTerminalsRead(value)}
                />
              </Whisper>
              <Whisper
                placement="topLeft"
                trigger="hover"
                speaker={<Tooltip>All new users can write to terminals by default.</Tooltip>}
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Write"
                  unCheckedChildren="Write"
                  checked={usersTerminalsWrite}
                  onChange={value => setUsersTerminalsWrite(value)}
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
                delayShow={360}
              >
                <Toggle
                  size="lg"
                  checkedChildren="Edit"
                  unCheckedChildren="Edit"
                  checked={usersTerminalsEdit}
                  onChange={value => setUsersTerminalsEdit(value)}
                />
              </Whisper>
            </div>
          </div>
        </div>
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={() => createProject()} appearance="primary" type="submit" loading={busy}>
          Submit
        </Button>
        <Button onClick={() => closeForm()} appearance="subtle">
          Cancel
        </Button>
      </Drawer.Footer>
    </Drawer>
  );
};

export default CreateProjectForm;
