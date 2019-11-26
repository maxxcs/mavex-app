import axios from 'axios';
import client from '@config/client';
import { getToken } from '@config/auth';
import { BASE_URL } from '@settings';

export const userAuthenticate = (user) => ({
  type: 'USER_AUTHENTICATE',
  payload: user
});

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});

export const joinProject = (projectId) => async (dispatch, getState) => {
  try {
    const token = getToken();
    const { data } = await axios.post(`${BASE_URL}/dashboard/join-project`, { projectId, token });
    client.emit('project:join', { projectId, token });
    dispatch({
      type: 'JOIN_PROJECT',
      payload: data.project
    });
  } catch (err) {
    throw new Error(err);
  }
};

export const updateProjectFiles = files => ({
  type: 'UPDATE_PROJECT_FILES',
  payload: files
});