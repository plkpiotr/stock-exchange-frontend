import moment from 'moment';
import URLs from 'constants/URLs';
import axios from 'axios';
import { toast } from 'react-toastify';

export const CHANGE_QUOTE_REQUEST = 'CHANGE_QUOTE_REQUEST';
export const CHANGE_QUOTE_SUCCESS = 'CHANGE_QUOTE_SUCCESS';
export const CHANGE_QUOTE_FAILURE = 'CHANGE_QUOTE_FAILURE';

export const changeQuoteAction = symbol => (dispatch) => {
  dispatch({
    type: CHANGE_QUOTE_REQUEST,
  });
  const startDate = moment().subtract('1', 'years').format().substring(0, 10);
  const endDate = moment().format().substring(0, 10);
  const url = `${URLs.quandl}/${symbol}.json?start_date=${startDate}&end_date=${endDate}${URLs.key}`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: CHANGE_QUOTE_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred trying to change the quote\n${error}`);
      dispatch({
        type: CHANGE_QUOTE_FAILURE,
      });
    });
};
