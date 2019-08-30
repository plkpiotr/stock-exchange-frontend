import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import Loader from 'components/atoms/Loader';
import LineChart from 'components/molecules/LineChart';
import List from 'components/molecules/List';
import moment from 'moment';
import { connect } from 'react-redux';
import { fetchQuotesAction } from 'actions/fetchQuotes';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 3vw 1vh 3vw;
`;

const Board = styled.div`
  margin-top: 5vh;
  display: grid;
  grid-template-columns: 17fr 1fr;
`;

class Quotes extends Component {
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
            <Header>Quotes</Header>
          </Wrapper>
        </Online>
      );
    }
    return (
      <Online>
        <Wrapper>
          <Header>Quotes</Header>
          <Board>
            {quotes.dataset && (
              <LineChart
                symbol={quotes.dataset.dataset_code}
                labels={quotes.dataset.column_names}
                data={quotes.dataset.data}
              />
            )}
            <List />
          </Board>
        </Wrapper>
      </Online>
    );
  }
}

Quotes.propTypes = {
  fetchQuotes: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  quotes: PropTypes.shape(PropTypes.string.isRequired),
};

Quotes.defaultProps = {
  quotes: {},
  isLoading: true,
};

const mapStateToProps = ({ quotes, isLoading }) => ({
  quotes,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuotes: () => dispatch(fetchQuotesAction('ALIOR', moment()
    .subtract('1', 'years')
    .format()
    .substring(0, 10))),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
