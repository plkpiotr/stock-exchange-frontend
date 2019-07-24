import axios from 'axios';
import url from 'routes/url';

const login = (email, password) => (dispatch) => {
  dispatch({ type: 'AUTHENTICATE_REQUEST' });
  return axios.post(`${url}/users/login`, {
    email,
    password,
  })
    .then((result) => {
      console.log(result);
      dispatch({ type: 'AUTHENTICATE_SUCCESS', result });
    })
    .catch((error) => {
      dispatch({ type: 'AUTHENTICATE_FAILURE' });
      console.log(error);
    });
};

export default login;
