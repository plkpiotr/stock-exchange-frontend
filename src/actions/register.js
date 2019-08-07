import axios from 'axios';
import url from 'routes/url';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_REQUEST';

export const registerAction = (email, password) => (dispatch) => {
  dispatch({
    type: REGISTER_REQUEST,
  });
  return axios.post(`${url}/users/register`, {
    email,
    password,
  })
    .then(() => {
      dispatch({
        type: REGISTER_SUCCESS,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: REGISTER_FAILURE,
      });
    });
};
