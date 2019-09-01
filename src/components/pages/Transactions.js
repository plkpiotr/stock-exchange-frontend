import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Header from 'components/atoms/Header';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import Loader from 'components/atoms/Loader';
import AccordionContainer from 'components/organisms/AccordionContainer';
import AddTransactionPanel from 'components/organisms/AddTransactionPanel';
import { connect } from 'react-redux';
import { fetchTransactionsAction } from 'actions/fetchTransactions';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

class Transactions extends Component {
  state = {
    isPanelVisible: false,
    searchYear: '',
  };

  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  togglePanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  handleChange = (event) => {
    this.setState({ searchYear: event.target.value });
  };

  render() {
    const { transactions, isLoading } = this.props;
    const { isPanelVisible, searchYear } = this.state;

    let items = transactions;
    const year = searchYear;
    if (year !== '') {
      items = items.filter(item => new Date(item.date).getFullYear().toString() === year);
    }

    if (isLoading) {
      return (
        <Online>
          <Loader />
        </Online>
      );
    }
    return (
      <Online>
        <Wrapper>
          <Header>Transactions</Header>
          <Input
            search
            value={searchYear}
            onChange={this.handleChange}
            placeholder="Find by year…"
          />
          <Button fixed onClick={this.togglePanel}>
            {isPanelVisible ? 'Close' : 'New'}
          </Button>
          <AccordionContainer transactions={items} />
          <AddTransactionPanel
            itemType="articles"
            isVisible={isPanelVisible}
            handleClose={this.togglePanel}
          />
        </Wrapper>
      </Online>
    );
  }
}

Transactions.propTypes = {
  fetchTransactions: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  transactions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })),
};

Transactions.defaultProps = {
  transactions: [],
  isLoading: true,
};

const mapStateToProps = ({ transactions, isLoading }) => ({ transactions, isLoading });

const mapDispatchToProps = dispatch => ({
  fetchTransactions: () => dispatch(fetchTransactionsAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Transactions);
