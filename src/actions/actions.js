import axios from 'axios';
import { setAuthorization } from 'utils/token';
import url from 'routes/url';
import jwt from 'jsonwebtoken';

export const REGISTER_REQUEST = 'REGISTER_REQUEST';
export const REGISTER_SUCCESS = 'REGISTER_REQUEST';
export const REGISTER_FAILURE = 'REGISTER_REQUEST';

export const AUTHORIZE_REQUEST = 'AUTHORIZE_REQUEST';
export const AUTHORIZE_SUCCESS = 'AUTHORIZE_SUCCESS';
export const AUTHORIZE_FAILURE = 'AUTHORIZE_FAILURE';

export const FETCH_REQUEST = 'FETCH_REQUEST';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const REMOVE_REQUEST = 'REMOVE_REQUEST';
export const REMOVE_SUCCESS = 'REMOVE_SUCCESS';
export const REMOVE_FAILURE = 'REMOVE_FAILURE';

export const LOGOUT = 'LOGOUT';

export const loginAction = (email, password) => (dispatch) => {
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

export const logoutAction = () => (dispatch) => {
  localStorage.removeItem('token');
  setAuthorization(false);
  dispatch({
    type: LOGOUT,
  });
};

export const fetchAction = itemType => (dispatch) => {
  dispatch({
    type: FETCH_REQUEST,
  });
  return axios.get(`${url}/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_SUCCESS,
        itemType,
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_FAILURE,
      });
    });
};

export const addAction = (itemType, itemContent) => (dispatch) => {
  dispatch({
    type: ADD_REQUEST,
  });
  return axios.post(`${url}/${itemType}`, {
    type: itemType,
    ...itemContent,
  })
    .then(({ data }) => {
      dispatch({
        type: ADD_SUCCESS,
        itemType,
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: ADD_FAILURE,
      });
    });
};

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

export const removeAction = (itemType, id) => (dispatch) => {
  dispatch({
    type: REMOVE_REQUEST,
  });
  axios.delete(`${url}/${itemType}/${id}`)
    .then(() => {
      dispatch({
        type: REMOVE_SUCCESS,
        itemType,
        id,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: REMOVE_FAILURE,
      });
    });
};
