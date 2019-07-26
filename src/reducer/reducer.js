import { AUTHORIZATION_SUCCESS } from 'actions/actions';

const initialState = {
  isAuthenticated: false,
  user: {},
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTHORIZATION_SUCCESS:
      return {
        isAuthenticated: true,
        decoded: action.decoded,
      };
    default:
      return state;
  }
};

export default reducer;
