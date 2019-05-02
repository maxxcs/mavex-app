const INITIAL_STATE = { 
  displayProjectForm: false,
  projectForm: {
    name: '',
    isListed: false,
    isPrivate: false,
    password: null,
    privilegeSchema: {
      general: 1,
      files: 1,
      channels: 1,

    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_PROJECT_FORM':
      return { ...state, displayProjectForm: action.payload };
    default:
      return state;
  }
};
