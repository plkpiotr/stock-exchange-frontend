import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const FETCH_TRANSACTIONS_REQUEST = 'FETCH_TRANSACTIONS_REQUEST';
export const FETCH_TRANSACTIONS_SUCCESS = 'FETCH_TRANSACTIONS_SUCCESS';
export const FETCH_TRANSACTIONS_FAILURE = 'FETCH_TRANSACTIONS_FAILURE';

export const fetchTransactionsAction = () => (dispatch) => {
  dispatch({
    type: FETCH_TRANSACTIONS_REQUEST,
  });
  const url = `${URLs.stockExchange}/transactions`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: FETCH_TRANSACTIONS_SUCCESS,
        data,
      });
    })
    .catch(() => {
      toast('Not found any transactions');
      dispatch({
        type: FETCH_TRANSACTIONS_FAILURE,
      });
    });
};
