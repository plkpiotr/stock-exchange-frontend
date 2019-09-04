import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const FETCH_ITEM_REQUEST = 'FETCH_ITEM_REQUEST';
export const FETCH_ITEM_SUCCESS = 'FETCH_ITEM_SUCCESS';
export const FETCH_ITEM_FAILURE = 'FETCH_ITEM_FAILURE';

export const fetchItemAction = (itemType, id) => (dispatch) => {
  dispatch({
    type: FETCH_ITEM_REQUEST,
  });
  const url = `${URLs.stockExchange}/${itemType}/${id}`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: FETCH_ITEM_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred when attempting to fetch an item\n${error}`);
      dispatch({
        type: FETCH_ITEM_FAILURE,
      });
    });
};
