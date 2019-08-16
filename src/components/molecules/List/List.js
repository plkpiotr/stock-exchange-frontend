import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { changeQuoteAction } from 'actions/changeQuote';
import symbols from 'constants/symbols';

const UnorderedList = styled.ul`
  background-color: ${({ theme }) => (theme.tertiary)};
  list-style-type: none;
  margin: 0;
  padding: 0;
  text-align: center;
  width: 120px;
`;

const ListItem = styled.li`
  color: ${({ theme }) => (theme.gray)};
  font-weight: ${({ theme }) => (theme.bold)};
  font-size: 16px;
  width: 115px;
  border: 0 solid ${({ theme }) => (theme.tertiary)};
  transition: .3s ease;
  margin-bottom: 1.9px;
  
  ${({ active }) => (
    active && css`
      width: 120px;
      border-right: 5px solid ${({ theme }) => (theme.primary)};           
    `
  )}
  
  &:hover {
    width: 120px;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
    cursor: pointer;
    transition: .3s ease;
  }
  
  @media (max-width: 1360px) {
    font-size: 11px;
  }
  
  @media (max-width: 1100px) {
    font-size: 9px;
  }
  
  @media (max-width: 900px) {
    font-size: 7px;
  }
`;

class List extends Component {
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

List.propTypes = {
  changeQuote: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeQuote: symbol => dispatch(changeQuoteAction(symbol)),
});

export default connect(null, mapDispatchToProps)(List);
