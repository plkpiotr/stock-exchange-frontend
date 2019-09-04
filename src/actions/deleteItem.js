import axios from 'axios';
import URLs from 'constants/URLs';
import { toast } from 'react-toastify';

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const deleteItemAction = (itemType, id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_REQUEST,
  });
  const url = `${URLs.stockExchange}/${itemType}/${id}`;
  axios.delete(url)
    .then(() => {
      toast('Item has been removed successfully');
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        itemType,
        id,
      });
    })
    .catch((error) => {
      toast(`An error occurred when attempting to delete an item\n${error}`);
      dispatch({
        type: DELETE_ITEM_FAILURE,
      });
    });
};
