export const userAuthenticate = (user) => ({
  type: 'USER_AUTHENTICATE',
  payload: user
});

export const userLogout = () => ({
  type: 'USER_LOGOUT'
});
