import moment from 'moment';
import URLs from 'constants/URLs';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CHANGE_QUOTES_REQUEST = 'CHANGE_QUOTES_REQUEST';
export const CHANGE_QUOTES_SUCCESS = 'CHANGE_QUOTES_SUCCESS';
export const CHANGE_QUOTES_FAILURE = 'CHANGE_QUOTES_FAILURE';

export const changeQuotesAction = (symbol, startDate) => (dispatch) => {
  dispatch({
    type: CHANGE_QUOTES_REQUEST,
  });
  const endDate = moment().format().substring(0, 10);
  const url = `${URLs.quandl}/${symbol}.json?start_date=${startDate}&end_date=${endDate}${URLs.key}`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: CHANGE_QUOTES_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred when attempting to change quotes\n${error}`);
      dispatch({
        type: CHANGE_QUOTES_FAILURE,
      });
    });
};
