import axios from 'axios';
import url from 'routes/url';

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

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
