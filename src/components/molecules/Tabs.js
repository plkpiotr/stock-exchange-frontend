import React, { Component } from 'react';
import PropTypes from 'prop-types';
import symbols from 'constants/symbols';
import moment from 'moment';
import styled, { css } from 'styled-components';
import { connect } from 'react-redux';
import { DAYS } from 'components/pages/Indicators';
import { changeQuotesAction } from 'actions/changeQuotes';

const UnorderedList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin-top: 3vh;
`;

const ListItem = styled.li`
  color: ${({ theme }) => (theme.gray)};
  background-color: ${({ theme }) => (theme.quaternary)};
  font-weight: ${({ theme }) => (theme.bold)};
  text-align: center;
  display: inline-block;
  font-size: 15px;
  padding-right: 5.5px;
  padding-left: 5.5px;
  transition: .3s ease;
  
  ${({ active }) => (
    active && css`
      background-color: ${({ theme }) => (theme.primary)};
      color: white;
    `
  )}
  
  &:hover {
    background-color: ${({ theme }) => (theme.primary)};
    color: white;
    cursor: pointer;
    transition: .3s ease;
  }
  
  @media (max-width: 1360px) {
    font-size: 13px;
  }
  
  @media (min-width: 1920px) {
    font-size: 16px;
    padding-right: 17.5px;
    padding-left: 17.5px;
  }
`;

class Tabs extends Component {
  state = {
    shortcuts: symbols,
    active: 'ALIOR',
  };

  handleClick = (symbol) => {
    this.setState({ active: symbol });
  };

  render() {
    const { changeQuotes } = this.props;
    const { shortcuts, active } = this.state;
    return (
      <UnorderedList>
        {shortcuts.map(symbol => (
          <ListItem
            key={symbol}
            onClick={() => {
              this.handleClick(symbol);
              changeQuotes(symbol);
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

Tabs.propTypes = {
  changeQuotes: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  changeQuotes: symbol => dispatch(changeQuotesAction(symbol, moment()
    .subtract(DAYS, 'days')
    .format()
    .substring(0, 10))),
});

export default connect(null, mapDispatchToProps)(Tabs);
