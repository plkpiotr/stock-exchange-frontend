import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Loader from 'components/atoms/Loader/Loader';
import Chart from 'components/organisms/Chart/Chart';
import List from 'components/molecules/List/List';
import { fetchQuoteAction } from 'actions/fetchQuote';

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
            <Chart
              data={quote.dataset.data}
              labels={quote.dataset.column_names}
              symbol={quote.dataset.dataset_code}
            />
            <List />
          </Board>
        </Wrapper>
      </Online>
    );
  }
}

Quotes.propTypes = {
  fetchQuote: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  quote: PropTypes.shape(PropTypes.string.isRequired),
};

Quotes.defaultProps = {
  quote: {},
  isLoading: true,
};

const mapStateToProps = ({ quote, isLoading }) => ({
  quote,
  isLoading,
});

const mapDispatchToProps = dispatch => ({
  fetchQuote: () => dispatch(fetchQuoteAction('ALIOR')),
});

export default connect(mapStateToProps, mapDispatchToProps)(Quotes);
