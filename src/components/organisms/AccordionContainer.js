import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import symbols from 'constants/symbols';
import AccordionElement from 'components/molecules/AccordionElement';

const DescriptionList = styled.dl`
  width: 54vw;
  
  @media (max-width: 1200px) {
    width: 75vw;
  }
`;

class AccordionContainer extends Component {
  state = { ...symbols.map(symbol => ({ [symbol]: false })) };

  toggleDescriptionDetails = symbol => () => {
    const { state: expanded } = this;
    this.setState({ [`${symbol}`]: !expanded[`${symbol}`] });
  };

  render() {
    const shortcuts = symbols;
    const { transactions } = this.props;
    const { state: expand } = this;

    return (
      <DescriptionList>
        {
          shortcuts.map(symbol => (
            <AccordionElement
              title={symbol}
              transactions={transactions.filter(transaction => transaction.symbol === symbol)}
              onClick={this.toggleDescriptionDetails(symbol)}
              expanded={expand[`${symbol}`]}
              key={symbol}
            />
          ))
        }
      </DescriptionList>
    );
  }
}

AccordionContainer.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    symbol: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
  })).isRequired,
};

export default AccordionContainer;
