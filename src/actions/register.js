import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_REQUEST';

export const registerAction = (email, password) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  const url = `${URLs.stockExchange}/users/register`;
  return axios.post(url, {
    email,
    password,
  })
    .then(() => {
      toast('You have been join the Stock Exchange Community');
      dispatch({
        type: REGISTER_SUCCESS,
      });
    })
    .catch((error) => {
      toast(`An error occurred when attempting to register\n${error}`);
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};
