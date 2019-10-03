const INITIAL_STATE = {
  displayProjectForm: false,
  projects: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_PROJECT_FORM':
      return { ...state, displayProjectForm: action.payload };
    case 'FETCH_PROJECTS':
      return { ...state, projects: action.payload };
    default:
      return state;
  }
};
