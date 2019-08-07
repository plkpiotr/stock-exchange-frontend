import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setAuthorization } from 'utils/token';
import url from 'routes/url';

export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';

export const authorizeAction = (email, password) => (dispatch) => {
  dispatch({
    type: AUTHORIZE_REQUEST,
  });
  return axios.post(`${url}/users/login`, {
    email,
    password,
  })
    .then(({ data }) => {
      const { token } = data;
      localStorage.setItem('token', token);
      setAuthorization(token);
      dispatch({
        type: AUTHORIZE_SUCCESS,
        user: jwt.decode(token),
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: AUTHORIZE_FAILURE,
      });
    });
};
