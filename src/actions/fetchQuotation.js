import axios from 'axios';
import URLs from 'routes/URLs';
import moment from 'moment';
import { toast } from 'react-toastify';

export const FETCH_QUOTATION_REQUEST = 'FETCH_QUOTATION_REQUEST';
export const FETCH_QUOTATION_SUCCESS = 'FETCH_QUOTATION_SUCCESS';
export const FETCH_QUOTATION_FAILURE = 'FETCH_QUOTATION_FAILURE';

export const fetchQuotationAction = (symbol, startDate, endDate) => (dispatch) => {
  dispatch({
    type: FETCH_QUOTATION_REQUEST,
  });
  const start = moment(startDate).format().substring(0, 10);
  const end = moment(endDate).format().substring(0, 10);
  const url = `${URLs.quandl}/${symbol}.json?start_date=${start}&end_date=${end}${URLs.key}`;
  return axios.get(url)
    .then(({ data }) => {
      dispatch({
        type: FETCH_QUOTATION_SUCCESS,
        data,
      });
    })
    .catch((error) => {
      toast(`An error occurred trying to fetch the quotation\n${error}`);
      dispatch({
        type: FETCH_QUOTATION_FAILURE,
      });
    });
};
