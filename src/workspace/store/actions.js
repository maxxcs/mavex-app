import axios from 'axios';
import client from '@config/client';
import { getToken } from '@config/auth';
import { BASE_URL } from '@settings';

export const showActionModal = display => ({
  type: 'TOGGLE_ACTION_MODAL',
  payload: display
});

export const addFile = () => async (dispatch, getState) => {
  try {
    const token = getToken();
    //client.emit('file:create');

    dispatch({
      type: 'CREATE_FILE',
      payload: null
    });
  } catch (err) {
    throw new Error(err);
  }
}