const INITIAL_STATE = {
  user: {
    username: '',
    token: '',
  },
  project: {
    token: '',
  },
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATE':
      return { ...state, user: { username: action.payload.username, token: action.payload.token } };
    default:
      return state;
  }
};
