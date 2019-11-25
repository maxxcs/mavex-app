const INITIAL_STATE = {
  displayActionModal: false,
  editor: {},
  files: []
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTION_MODAL':
      return { ...state, displayActionModal: action.payload };
    default:
      return state;
  }
};
