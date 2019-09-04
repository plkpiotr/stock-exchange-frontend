import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const ADD_TRANSACTION_REQUEST = 'ADD_TRANSACTION_REQUEST';
export const ADD_TRANSACTION_SUCCESS = 'ADD_TRANSACTION_SUCCESS';
export const ADD_TRANSACTION_FAILURE = 'ADD_TRANSACTION_FAILURE';

export const addTransactionAction = itemContent => (dispatch) => {
  dispatch({
    type: ADD_TRANSACTION_REQUEST,
  });
  const url = `${URLs.stockExchange}/transactions`;
  return axios.post(url, {
    ...itemContent,
  })
    .then(({ data }) => {
      toast('Transaction has been added successfully');
      dispatch({
        type: ADD_TRANSACTION_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred when attempting to change a transaction\n${error}`);
      dispatch({
        type: ADD_TRANSACTION_FAILURE,
      });
    });
};
