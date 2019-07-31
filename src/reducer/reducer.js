import {
  AUTHORIZATION_SUCCESS,
  LOGOUT,
  FETCH_SUCCESS,
  FETCH_REQUEST,
} from 'actions/actions';
import { REMOVE_SUCCESS } from '../actions/actions';

const initialState = {
  isAuthenticated: false,
  user: {},
  isLoading: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user,
        isLoading: false,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: {},
      };
    case FETCH_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case FETCH_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...action.data],
        isLoading: false,
      };
    case REMOVE_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType].filter(item => item._id !== action.id)],
      };
    default:
      return state;
  }
};

export default reducer;
