const INITIAL_STATE = {
  user: null,
  project: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATE':
      return { ...state, user: { ...action.payload } };
    case 'USER_LOGOUT':
      return { ...state, user: null, project: null };
    case 'JOIN_PROJECT':
      return {
        ...state,
        project: action.payload
      };
    case 'UPDATE_PROJECT_FILES':
      return {
        ...state,
        project: {
          ...state.project,
          files: action.payload
        }
      }
    default:
      return state;
  }
};
