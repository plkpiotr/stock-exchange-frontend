import axios from 'axios';
import { setAuthorization } from 'utils/token';
import url from 'routes/url';
import jwt from 'jsonwebtoken';

export const AUTHORIZATION_REQUEST = 'AUTHORIZATION_REQUEST';
export const AUTHORIZATION_SUCCESS = 'AUTHORIZATION_SUCCESS';
export const AUTHORIZATION_FAILURE = 'AUTHORIZATION_FAILURE';

export const LOGOUT = 'LOGOUT';

export const loginAction = (email, password) => (dispatch) => {
  dispatch({ type: AUTHORIZATION_REQUEST });
  return axios.post(`${url}/users/login`, {
    email,
    password,
  })
    .then((result) => {
      console.log(result);
      const { token } = result.data;
      localStorage.setItem('token', token);
      setAuthorization(token);
      dispatch({
        type: AUTHORIZATION_SUCCESS,
        user: jwt.decode(token),
      });
    })
    .catch((error) => {
      dispatch({
        type: AUTHORIZATION_FAILURE,
      });
      console.log(error);
    });
};

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthorization(false);
  dispatch({
    type: LOGOUT,
  });
};
