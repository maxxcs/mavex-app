import axios from 'axios';

const TOKEN_KEY = 'jwt';

export const login = () => {
  localStorage.setItem(TOKEN_KEY, 'TestLogin');
};

export const logout = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const isAuthenticated = () => {
  if (localStorage.getItem(TOKEN_KEY)) {
    return true;
  }
  return true;
};