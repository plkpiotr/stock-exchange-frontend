import axios from 'axios';
import url from 'routes/url';

export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';

const login = (email, password) => (dispatch) => {
  dispatch({ type: LOGIN_REQUEST });
  return axios.post(`${url}/users/login`, {
    email,
    password,
  })
    .then((result) => {
      console.log(result);
      dispatch({ type: LOGIN_SUCCESS, result });
    })
    .catch((error) => {
      dispatch({ type: LOGIN_FAILURE });
      console.log(error);
    });
};

export default login;
