import { setAuthorization } from 'utils/token';
import { toast } from 'react-toastify';

export const LOGOUT = 'LOGOUT';

export const logoutAction = () => (dispatch) => {
  if (localStorage.getItem('token') !== null) {
    localStorage.removeItem('token');
  }
  setAuthorization(false);
  toast('You have been logged out successfully');
  dispatch({
    type: LOGOUT,
  });
};
