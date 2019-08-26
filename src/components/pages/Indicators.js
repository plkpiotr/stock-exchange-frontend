import React, { Component } from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Loader from 'components/atoms/Loader/Loader';
import Chart from 'components/organisms/Chart/Chart';
import Bar from 'components/molecules/Bar/Bar';
import { connect } from 'react-redux';
import { countAwesomeOscillators } from 'indicators/awesomeOscillator';
import { countCommodityChannelIndexes } from 'indicators/commodityChannel';
import { countDetrendedPriceOscillators } from 'indicators/detrendedPrice';
import { fetchQuoteAction } from 'actions/fetchQuote';

export const QUOTES = 30;
const DAYS = '131';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  margin-top: 5vh;
`;

class Indicators extends Component {
  componentDidMount() {
    const { fetchQuote } = this.props;
    fetchQuote();
  }

  render() {
    const { quote, isLoading } = this.props;
    if (isLoading) {
      return (
        <Online>
          <Loader />
          <Wrapper>
            <Header>Indicators</Header>
          </Wrapper>
        </Online>
      );
    }
    return (
      <Online>
        <Wrapper>
          <Header>Indicators</Header>
          {quote.dataset && (
            <Board>
              <Bar />
              <Chart
                name="Awesome Oscillator"
                abbreviation="AO"
                labels={quote.dataset.data.map(column => column[0])
                  .reverse()
                  .slice(-(QUOTES))}
                data={countAwesomeOscillators(quote.dataset.data)}
              />
              <Chart
                name="Commodity Channel Index"
                abbreviation="CCI"
                labels={quote.dataset.data.map(column => column[0])
                  .reverse()
                  .slice(-(QUOTES))}
                data={countCommodityChannelIndexes(quote.dataset.data)}
              />
              <Chart
                name="Detrended Price Oscillator"
                abbreviation="DPO"
                labels={quote.dataset.data.map(column => column[0])
                  .reverse()
                  .slice(-(QUOTES))}
                data={countDetrendedPriceOscillators(quote.dataset.data)}
              />
            </Board>
          )}
        </Wrapper>
      </Online>
    );
  }
}

Indicators.propTypes = {
  fetchQuote: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  quote: PropTypes.shape(PropTypes.string.isRequired),
};

Indicators.defaultProps = {
  quote: {},
  isLoading: true,
};

const mapStateToProps = ({ quote, isLoading }) => ({
  quote,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuoteAction('ALIOR', moment()
    .subtract(DAYS, 'days')
    .format()
    .substring(0, 10))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Indicators);
