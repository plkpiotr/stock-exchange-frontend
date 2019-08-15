import { ADD_ITEM_SUCCESS } from 'actions/addItem';
import { ADD_TRANSACTION_SUCCESS } from 'actions/addTransaction';
import { AUTHORIZE_SUCCESS } from 'actions/authorize';
import { CHANGE_QUOTE_SUCCESS } from 'actions/changeQuote';
import { EDIT_ITEM_SUCCESS } from 'actions/editItem';
import { DELETE_ITEM_SUCCESS } from 'actions/deleteItem';
import { DELETE_TRANSACTION_SUCCESS } from 'actions/deleteTransaction';
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS } from 'actions/fetchItems';
import { FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS } from 'actions/fetchItem';
import { FETCH_QUOTE_REQUEST, FETCH_QUOTE_SUCCESS } from 'actions/fetchQuote';
import { FETCH_TRANSACTIONS_REQUEST, FETCH_TRANSACTIONS_SUCCESS } from 'actions/fetchTransactions';
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
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.data,
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
    case FETCH_QUOTE_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.data,
        isLoading: false,
      };
    case ADD_ITEM_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType], action.data],
      };
    case ADD_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: [...state.transactions, action.data],
      };
    case DELETE_TRANSACTION_SUCCESS:
      return {
        ...state,
        transactions: [...state.transactions.filter(item => item._id !== action.id)],
      };
    case DELETE_ITEM_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType].filter(item => item._id !== action.id)],
      };
    case CHANGE_QUOTE_SUCCESS:
      return {
        ...state,
        quote: action.data,
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
