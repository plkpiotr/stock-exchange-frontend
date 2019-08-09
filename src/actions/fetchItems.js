import axios from 'axios';
import URLs from 'routes/URLs';
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
    .catch((error) => {
      toast(`An error occurred trying to fetch items\n${error}`);
      dispatch({
        type: FETCH_ITEMS_FAILURE,
      });
    });
};
