const INITIAL_STATE = {
  displayActionModal: false,
  editor: {
    file: {
      id: null,
      name: null,
      parent: null,
      kind: null
    },
    settings: {
      value: '',
      language: 'javascript',
      theme: 'vs-dark',
      renderFinalNewline: true,
      automaticLayout: true
    }
  }
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_ACTION_MODAL':
      return { ...state, displayActionModal: action.payload };
    case 'OPEN_FILE':
      return { ...state, editor: { ...state.editor, file: action.payload } };
    case 'CLOSE_FILE':
      return { ...state, editor: INITIAL_STATE.editor };
    default:
      return state;
  }
};
