import axios from 'axios';
import url from 'routes/url';

export const DELETE_ITEM_REQUEST = 'DELETE_ITEM_REQUEST';
export const DELETE_ITEM_SUCCESS = 'DELETE_ITEM_SUCCESS';
export const DELETE_ITEM_FAILURE = 'DELETE_ITEM_FAILURE';

export const deleteItemAction = (itemType, id) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM_REQUEST,
  });
  axios.delete(`${url}/${itemType}/${id}`)
    .then(() => {
      dispatch({
        type: DELETE_ITEM_SUCCESS,
        itemType,
        id,
      });
    })
    .catch((error) => {
      console.log(error);
      dispatch({
        type: DELETE_ITEM_FAILURE,
      });
    });
};
