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

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const ADD_REQUEST = 'ADD_REQUEST';
export const ADD_SUCCESS = 'ADD_SUCCESS';
export const ADD_FAILURE = 'ADD_FAILURE';

export const DELETE_REQUEST = 'DELETE_REQUEST';
export const DELETE_SUCCESS = 'DELETE_SUCCESS';
export const DELETE_FAILURE = 'DELETE_FAILURE';

export const EDIT_REQUEST = 'EDIT_REQUEST';
export const EDIT_SUCCESS = 'EDIT_SUCCESS';
export const EDIT_FAILURE = 'EDIT_FAILURE';

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
  if (localStorage.getItem('token') !== null) {
    localStorage.removeItem('token');
  }
  setAuthorization(false);
  dispatch({
    type: LOGOUT,
  });
};

export const fetchItemsAction = itemType => (dispatch) => {
  dispatch({
    type: FETCH_ITEMS_REQUEST,
  });
  return axios.get(`${url}/${itemType}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        itemType,
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_ITEMS_FAILURE,
      });
    });
};

export const fetchItemAction = (itemType, id) => (dispatch) => {
  dispatch({
    type: FETCH_ITEM_REQUEST,
  });
  return axios.get(`${url}/${itemType}/${id}`)
    .then(({ data }) => {
      dispatch({
        type: FETCH_ITEM_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: FETCH_ITEM_FAILURE,
      });
    });
};

export const addAction = (itemType, itemContent) => (dispatch) => {
  dispatch({
    type: ADD_REQUEST,
  });
  return axios.post(`${url}/${itemType}`, {
    ...itemContent,
  })
    .then(({ data }) => {
      console.log(data);
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

export const deleteAction = (itemType, id) => (dispatch) => {
  dispatch({
    type: DELETE_REQUEST,
  });
  axios.delete(`${url}/${itemType}/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_SUCCESS,
        itemType,
        id,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: DELETE_FAILURE,
      });
    });
};

export const editAction = (itemType, itemContent, id) => (dispatch) => {
  dispatch({
    type: EDIT_REQUEST,
  });
  return axios.put(`${url}/${itemType}/${id}`, {
    itemType,
    ...itemContent,
  })
    .then(({ data }) => {
      dispatch({
        type: EDIT_SUCCESS,
        itemType,
        data,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: EDIT_FAILURE,
      });
    });
};
