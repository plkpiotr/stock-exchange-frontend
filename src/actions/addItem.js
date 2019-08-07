import axios from 'axios';
import url from 'routes/url';
import { toast } from 'react-toastify';

export const ADD_ITEM_REQUEST = 'ADD_ITEM_REQUEST';
export const ADD_ITEM_SUCCESS = 'ADD_ITEM_SUCCESS';
export const ADD_ITEM_FAILURE = 'ADD_ITEM_FAILURE';

export const addItemAction = (itemType, itemContent) => (dispatch) => {
  dispatch({
    type: ADD_ITEM_REQUEST,
  });
  return axios.post(`${url}/${itemType}`, {
    ...itemContent,
  })
    .then(({ data }) => {
      toast('Item has been added successfully');
      dispatch({
        type: ADD_ITEM_SUCCESS,
        itemType,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred trying to add the item\n${error}`);
      dispatch({
        type: ADD_ITEM_FAILURE,
      });
    });
};
