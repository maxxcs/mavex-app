import axios from 'axios';
import { getToken } from '@config/auth';
import { BASE_URL } from '@settings';

export const displayProjectForm = display => ({
  type: 'TOGGLE_PROJECT_FORM',
  payload: display,
});

export const fetchProjects = () => async (dispatch, getState) => {
  try {
    const token = getToken();
    const { data } = await axios.post(`${BASE_URL}/dashboard`, { token });
    dispatch({
      type: 'FETCH_PROJECTS',
      payload: data.projects
    });
  } catch (err) {
    throw new Error(err);
  }
};
