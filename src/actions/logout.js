import { setAuthorization } from 'utils/token';

export const LOGOUT = 'LOGOUT';

export const logoutAction = () => (dispatch) => {
  if (localStorage.getItem('token') !== null) {
    localStorage.removeItem('token');
  }
  setAuthorization(false);
  dispatch({
    type: LOGOUT,
  });
};
