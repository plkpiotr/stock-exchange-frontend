import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const DELETE_TRANSACTION_REQUEST = 'DELETE_TRANSACTION_REQUEST';
export const DELETE_TRANSACTION_SUCCESS = 'DELETE_TRANSACTION_SUCCESS';
export const DELETE_TRANSACTION_FAILURE = 'DELETE_TRANSACTION_FAILURE';

export const deleteTransactionAction = id => (dispatch) => {
  dispatch({
    type: DELETE_TRANSACTION_REQUEST,
  });
  const url = `${URLs.stockExchange}/transactions/${id}`;
  axios.delete(url)
    .then(() => {
      toast('Transaction has been removed successfully');
      dispatch({
        type: DELETE_TRANSACTION_SUCCESS,
        id,
      });
    })
    .catch((error) => {
      toast(`An error occurred when attempting to delete a transaction\n${error}`);
      dispatch({
        type: DELETE_TRANSACTION_FAILURE,
      });
    });
};
