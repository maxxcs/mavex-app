import axios from 'axios';
import { getToken } from '@config/auth';
import { BASE_URL } from '@settings';

export const showCreateProjectModal = display => ({
  type: 'TOGGLE_CREATE_PROJECT_MODAL',
  payload: display,
});

export const showShareProjectModal = display => ({
  type: 'TOGGLE_SHARE_PROJECT_MODAL',
  payload: display,
});

export const showConfigProjectModal = display => ({
  type: 'TOGGLE_CONFIG_PROJECT_MODAL',
  payload: display,
});

export const showRemoveProjectModal = display => ({
  type: 'TOGGLE_REMOVE_PROJECT_MODAL',
  payload: display,
});

export const fetchProjects = () => async (dispatch, getState) => {
  try {
    const token = getToken();
    const { data } = await axios.post(`${BASE_URL}/dashboard`, { token });
    dispatch({
      type: 'FETCH_PROJECTS',
      payload: data
    });
  } catch (err) {
    throw new Error(err);
  }
};