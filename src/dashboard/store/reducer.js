const INITIAL_STATE = {
  displayModal: {
    createProject: false,
    shareProject: false,
    configProject: false,
    removeProject: false,
  },
  projects: [],
  publicProjects: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'FETCH_PROJECTS':
      return {
        ...state,
        projects: action.payload.projects,
        publicProjects: action.payload.publicProjects
      };
    case 'TOGGLE_CREATE_PROJECT_MODAL':
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          createProject: action.payload
        }
      };
    case 'TOGGLE_SHARE_PROJECT_MODAL':
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          shareProject: action.payload
        }
      };
    case 'TOGGLE_CONFIG_PROJECT_MODAL':
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          configProject: action.payload
        }
      };
    case 'TOGGLE_REMOVE_PROJECT_MODAL':
      return {
        ...state,
        displayModal: {
          ...state.displayModal,
          removeProject: action.payload
        }
      };
    default:
      return state;
  }
};
