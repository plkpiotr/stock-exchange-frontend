import { ADD_ITEM_SUCCESS } from 'actions/addItem';
import { ADD_TRANSACTION_SUCCESS } from 'actions/addTransaction';
import { AUTHORIZE_SUCCESS } from 'actions/authorize';
import { CHANGE_QUOTES_SUCCESS } from 'actions/changeQuotes';
import { EDIT_ITEM_SUCCESS } from 'actions/editItem';
import { DELETE_ITEM_SUCCESS } from 'actions/deleteItem';
import { DELETE_TRANSACTION_SUCCESS } from 'actions/deleteTransaction';
import { LOGOUT } from 'actions/logout';
import { FETCH_ITEMS_REQUEST, FETCH_ITEMS_SUCCESS, FETCH_ITEMS_FAILURE } from 'actions/fetchItems';
import { FETCH_ITEM_REQUEST, FETCH_ITEM_SUCCESS, FETCH_ITEM_FAILURE } from 'actions/fetchItem';
import {
  FETCH_QUOTES_REQUEST,
  FETCH_QUOTES_SUCCESS,
  FETCH_QUOTES_FAILURE,
} from 'actions/fetchQuotes';
import {
  FETCH_TRANSACTIONS_REQUEST,
  FETCH_TRANSACTIONS_SUCCESS,
  FETCH_TRANSACTIONS_FAILURE,
} from 'actions/fetchTransactions';

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
    case FETCH_ITEMS_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...action.data],
        isLoading: false,
      };
    case FETCH_TRANSACTIONS_SUCCESS:
      return {
        ...state,
        transactions: action.data,
        isLoading: false,
      };
    case FETCH_ITEM_SUCCESS:
      return {
        ...state,
        item: action.data,
        isLoading: false,
      };
    case FETCH_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.data,
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
    case CHANGE_QUOTES_SUCCESS:
      return {
        ...state,
        quotes: action.data,
      };
    case EDIT_ITEM_SUCCESS:
      return {
        ...state,
        item: action.data,
      };
    case FETCH_ITEM_REQUEST:
    case FETCH_QUOTES_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_ITEMS_REQUEST:
      return {
        ...state,
        isLoading: true,
        notes: [],
        articles: [],
      };
    case FETCH_TRANSACTIONS_REQUEST:
      return {
        ...state,
        isLoading: true,
        transactions: [],
      };
    case FETCH_ITEMS_FAILURE:
    case FETCH_ITEM_FAILURE:
    case FETCH_QUOTES_FAILURE:
    case FETCH_TRANSACTIONS_FAILURE:
      return {
        ...state,
        isLoading: false,
      };
    default:
      return state;
  }
};

export default reducer;
