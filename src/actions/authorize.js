import axios from 'axios';
import jwt from 'jsonwebtoken';
import { setAuthorization } from 'utils/token';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';

export const authorizeAction = (email, password) => (dispatch) => {
  dispatch({
    type: AUTHORIZE_REQUEST,
  });
  const url = `${URLs.stockExchange}/users/login`;
  return axios.post(url, {
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
      toast('Welcome to Stock Exchange Application');
    })
    .catch((error) => {
      toast(`An error occurred when attempting to sign in\n${error}`);
      dispatch({
        type: AUTHORIZE_FAILURE,
      });
    });
};
