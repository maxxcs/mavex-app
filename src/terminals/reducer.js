const INITIAL_STATE = {
  displayTerminalForm: false
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'TOGGLE_TERMINAL_FORM':
      return { ...state, displayTerminalForm: action.payload };
    default:
      return state;
  }
};
