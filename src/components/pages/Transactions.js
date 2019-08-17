import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import { connect } from 'react-redux';
import Header from 'components/atoms/Header/Header';
import Input from 'components/atoms/Input/Input';
import Button from 'components/atoms/Button/Button';
import Loader from 'components/atoms/Loader/Loader';
import Accordion from 'components/organisms/Accordion/Accordion';
import { fetchTransactionsAction } from 'actions/fetchTransactions';
import AddTransactionPanel from 'components/organisms/AddTransactionPanel/AddTransactionPanel';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

class Transactions extends Component {
  state = {
    isPanelVisible: false,
  };

  componentDidMount() {
    const { fetchTransactions } = this.props;
    fetchTransactions();
  }

  toggleButtonPanel = () => this.setState(prevState => ({
    isPanelVisible: !prevState.isPanelVisible,
  }));

  render() {
    const { transactions, isLoading } = this.props;
    const { isPanelVisible } = this.state;
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
          <Input search placeholder="Find by title…" />
          <Button fixed onClick={this.toggleButtonPanel}>
            {isPanelVisible ? 'Close' : 'New'}
          </Button>
          <Accordion transactions={transactions} />
          <AddTransactionPanel
            itemType="articles"
            isVisible={isPanelVisible}
            handleClose={this.toggleButtonPanel}
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
    datePurchase: PropTypes.string.isRequired,
    pricePurchase: PropTypes.number.isRequired,
    dateSale: PropTypes.string.isRequired,
    priceSale: PropTypes.number.isRequired,
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
