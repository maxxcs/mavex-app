const INITIAL_STATE = {
  displayActionModal: false,
  editor: {
    fileId: null,
    filename: null,
    language: ''
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTION_MODAL':
      return { ...state, displayActionModal: action.payload };
    case 'OPEN_FILE':
      return { ...state, editor: action.payload };
    default:
      return state;
  }
};
