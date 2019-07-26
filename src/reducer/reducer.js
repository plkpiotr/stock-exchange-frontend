import { AUTHORIZATION_SUCCESS, LOGOUT } from 'actions/actions';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return {
        isAuthenticated: true,
        user: action.user,
      };
    case LOGOUT:
      return {
        isAuthenticated: false,
        user: null,
      };
    default:
      return state;
  }
};

export default reducer;
