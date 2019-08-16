import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const FETCH_ITEMS_REQUEST = 'FETCH_ITEMS_REQUEST';
export const FETCH_ITEMS_SUCCESS = 'FETCH_ITEMS_SUCCESS';
export const FETCH_ITEMS_FAILURE = 'FETCH_ITEMS_FAILURE';

export const fetchItemsAction = itemType => (dispatch) => {
  dispatch({
    type: FETCH_ITEMS_REQUEST,
  });
  const url = `${URLs.stockExchange}/${itemType}`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: FETCH_ITEMS_SUCCESS,
        itemType,
        data,
      });
    })
    .catch(() => {
      toast(`Not found any ${itemType}`);
      dispatch({
        type: FETCH_ITEMS_FAILURE,
      });
    });
};
