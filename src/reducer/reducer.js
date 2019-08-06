import {
  ADD_SUCCESS,
  AUTHORIZE_SUCCESS,
  FETCH_ITEMS_REQUEST,
  FETCH_ITEMS_SUCCESS,
  FETCH_ITEM_REQUEST,
  FETCH_ITEM_SUCCESS,
  DELETE_SUCCESS,
  LOGOUT,
  EDIT_SUCCESS,
} from 'actions/actions';

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
    case ADD_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType], action.data],
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        [action.itemType]: [...state[action.itemType].filter(item => item._id !== action.id)],
      };
    case EDIT_SUCCESS: {
      const tempState = { ...state };
      const indexElementToUpdate = tempState[action.itemType].findIndex(i => i._id === action.id);
      tempState[action.itemType][indexElementToUpdate] = action.data;
      return tempState;
    }
    default:
      return state;
  }
};

export default reducer;
