import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header';
import Loader from 'components/atoms/Loader';
import Tabs from 'components/molecules/Tabs';
import BarChart from 'components/molecules/BarChart';
import { connect } from 'react-redux';
import { countAwesomeOscillators } from 'indicators/awesomeOscillator';
import { countCommodityChannelIndexes } from 'indicators/commodityChannel';
import { countDetrendedPriceOscillators } from 'indicators/detrendedPrice';
import { countEaseOfMovementIndicators } from 'indicators/easeMovement';
import { countMoneyFlowIndexes } from 'indicators/moneyFlow';
import { countRateOfChangesIndicators } from 'indicators/rateChange';
import { countRelativeStrengthIndexes } from 'indicators/relativeStrength';
import { countUltimateOscillators } from 'indicators/ultimateOscillator';
import { countWilliamsPercentRanges } from 'indicators/williamsRange';
import { fetchQuotesAction } from 'actions/fetchQuotes';

export const QUOTES = 30;
export const DAYS = '131';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  margin-top: 3vh;
`;

class Indicators extends Component {
  componentDidMount() {
    const { fetchQuotes } = this.props;
    fetchQuotes();
  }

  render() {
    const { quotes, isLoading } = this.props;
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
          <Tabs />
          {quotes.dataset && (
            <Board>
              <BarChart
                name="Awesome Oscillator"
                abbreviation="AO"
                data={countAwesomeOscillators(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Commodity Channel Index"
                abbreviation="CCI"
                data={countCommodityChannelIndexes(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Detrended Price Oscillator"
                abbreviation="DPO"
                data={countDetrendedPriceOscillators(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Ease of Movement"
                abbreviation="EMV"
                data={countEaseOfMovementIndicators(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Money Flow"
                abbreviation="MFI"
                data={countMoneyFlowIndexes(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Rate of Change"
                abbreviation="ROC"
                data={countRateOfChangesIndicators(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Relative Strength Index"
                abbreviation="RSI"
                data={countRelativeStrengthIndexes(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Ultimate Oscillator"
                abbreviation="UO"
                data={countUltimateOscillators(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
              <BarChart
                name="Williams %R"
                abbreviation="%R"
                data={countWilliamsPercentRanges(quotes.dataset.data)}
                labels={quotes.dataset.data.map(column => column[0])
                  .slice(0, QUOTES)
                  .reverse()}
              />
            </Board>
          )}
        </Wrapper>
      </Online>
    );
  }
}

Indicators.propTypes = {
  fetchQuotes: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  quotes: PropTypes.shape(PropTypes.string.isRequired),
};

Indicators.defaultProps = {
  quotes: {},
  isLoading: true,
};

const mapStateToProps = ({ quotes, isLoading }) => ({
  quotes,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuotes: () => dispatch(fetchQuotesAction('ALIOR', moment()
    .subtract(DAYS, 'days')
    .format()
    .substring(0, 10))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Indicators);
