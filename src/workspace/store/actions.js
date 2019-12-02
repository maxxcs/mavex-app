import axios from 'axios';
import client from '@config/client';
import { getToken } from '@config/auth';
import { BASE_URL } from '@settings';

export const showActionModal = display => ({
  type: 'TOGGLE_ACTION_MODAL',
  payload: display
});

export const openFile = (projectId, file) => async (dispatch, getState) => {
  try {
    const token = getToken();
    client.emit('file:open', { projectId, file, token });
    dispatch({
      type: 'OPEN_FILE',
      payload: file
    });
  } catch (err) {
    throw new Error(err);
  }
}

export const closeFile = fileId => async (dispatch, getState) => {
  try {
    const token = getToken();
    client.emit('file:close', { token, fileId });
    dispatch({ type: 'CLOSE_FILE' });

  } catch (err) {
    throw new Error(err);
  }
}

export const deleteFile = (projectId, fileId) => async (dispatch, getState) => {
  try {
    const token = getToken();
    client.emit('file:delete', { token, projectId, fileId });
    dispatch({ type: 'CLOSE_FILE' });

  } catch (err) {
    throw new Error(err);
  }
}