import decoder from 'jwt-decode';
import store from '@config/store';
import { userAuthenticate, userLogout } from '@general/store/actions';

const TOKEN_KEY = 'token';

export const login = token => {
  localStorage.setItem(TOKEN_KEY, token);
  store.dispatch(userAuthenticate(decoder(token)));
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
  store.dispatch(userLogout());
};

export const isAuthenticated = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) {
    if (!store.getState().general.user)
      store.dispatch(userAuthenticate(decoder(token)));
    return true;
  }
  return false;
};

export const getToken = () => {
  const token = localStorage.getItem(TOKEN_KEY);
  if (token) return token;
  else store.dispatch(userLogout());
};