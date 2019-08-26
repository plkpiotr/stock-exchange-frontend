import React, { Component } from 'react';
import PropTypes from 'prop-types';
import symbols from 'constants/symbols';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { changeQuoteAction } from 'actions/changeQuote';

const UnorderedList = styled.ul`
  background-color: ${({ theme }) => (theme.quaternary)};  
  list-style-type: none;
  text-align: center;
  padding: 0;
`;

const ListItem = styled.li`
  color: ${({ theme }) => (theme.gray)};
  font-weight: ${({ theme }) => (theme.bold)};
  display: inline-block;
  font-size: 16px;
  padding-right: 4px;
  padding-left: 4px;
  
  ${({ active }) => (
    active && css`
      color: ${({ theme }) => (theme.primary)};
    `
  )}
`;

class Bar extends Component {
  state = {
    shortcuts: symbols,
    active: 'ALIOR',
  };

  handleClick = (symbol) => {
    this.setState({ active: symbol });
  };

  render() {
    const { changeQuote } = this.props;
    const { shortcuts, active } = this.state;
    return (
      <UnorderedList>
        {shortcuts.map(symbol => (
          <ListItem
            key={symbol}
            onClick={() => {
              this.handleClick(symbol);
              changeQuote(symbol);
            }}
            active={symbol === active}
          >
            {symbol}
          </ListItem>
        ))}
      </UnorderedList>
    );
  }
}

Bar.propTypes = {
  changeQuote: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeQuote: symbol => dispatch(changeQuoteAction(symbol)),
});

export default connect(null, mapDispatchToProps)(Bar);
