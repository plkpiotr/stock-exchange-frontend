import axios from 'axios';
import URLs from 'constants/URLs';
import moment from 'moment';
import { toast } from 'react-toastify';

export const FETCH_QUOTE_REQUEST = 'FETCH_QUOTE_REQUEST';
export const FETCH_QUOTE_SUCCESS = 'FETCH_QUOTE_SUCCESS';
export const FETCH_QUOTE_FAILURE = 'FETCH_QUOTE_FAILURE';

export const fetchQuoteAction = (symbol, startDate) => (dispatch) => {
  dispatch({
    type: FETCH_QUOTE_REQUEST,
  });
  const endDate = moment().format().substring(0, 10);
  const url = `${URLs.quandl}/${symbol}.json?start_date=${startDate}&end_date=${endDate}${URLs.key}`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: FETCH_QUOTE_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred trying to fetch the quote\n${error}`);
      dispatch({
        type: FETCH_QUOTE_FAILURE,
      });
    });
};
