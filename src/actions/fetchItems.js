import axios from 'axios';
import url from 'routes/url';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

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
