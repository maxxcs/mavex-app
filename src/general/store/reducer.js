const INITIAL_STATE = {
  user: null,
  project: null,
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'USER_AUTHENTICATE':
      return { ...state, user: { ...action.payload } };
    case 'USER_LOGOUT':
      return { ...state, user: null };
    default:
      return state;
  }
};
