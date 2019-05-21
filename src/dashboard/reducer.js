const INITIAL_STATE = {
  displayProjectForm: false,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_PROJECT_FORM':
      return { ...state, displayProjectForm: action.payload };
    default:
      return state;
  }
};
