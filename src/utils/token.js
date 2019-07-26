import axios from 'axios';
import jwt from 'jsonwebtoken';
import { AUTHORIZATION_SUCCESS } from 'actions/actions';
import store from 'store/store';

export const setAuthorization = (token) => {
  if (token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common.Authorization;
  }
};

export const checkAuthorization = () => {
  if (localStorage.token) {
    setAuthorization(localStorage.token);
    store.dispatch({
      type: AUTHORIZATION_SUCCESS,
      user: jwt.decode(localStorage.token),
    });
  }
};
