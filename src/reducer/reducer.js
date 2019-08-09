import { ADD_ITEM_SUCCESS } from 'actions/addItem';
import { AUTHORIZE_SUCCESS } from 'actions/authorize';
import { EDIT_ITEM_SUCCESS } from 'actions/editItem';
import { DELETE_ITEM_SUCCESS } from 'actions/deleteItem';
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from 'actions/fetchItems';
import { FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS } from 'actions/fetchItem';
import { FETCH_QUOTATION_REQUEST, FETCH_QUOTATION_SUCCESS } from 'actions/fetchQuotation';
import { LOGOUT } from 'actions/logout';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZE_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: {},
      };
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...action.data],
        isLoading: false,
      };
    case FETCH_ITEM_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        item: action.data,
        isLoading: false,
      };
    case FETCH_QUOTATION_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_QUOTATION_SUCCESS:
      return {
        ...state,
        quotation: action.data,
        isLoading: false,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType], action.data],
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType].filter(item => item._id !== action.id)],
      };
    case EDIT_ITEM_SUCCESS:
      return {
        ...state,
        item: action.data,
      };
    default:
      return state;
  }
};

export default reducer;
