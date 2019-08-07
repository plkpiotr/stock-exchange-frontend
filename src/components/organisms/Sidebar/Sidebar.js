import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';
import dashboard from 'icons/dashboard.svg';
import quotes from 'icons/quotes.svg';
import indicators from 'icons/indicators.svg';
import transactions from 'icons/transactions.svg';
import articles from 'icons/articles.svg';
import notes from 'icons/notes.svg';
import exit from 'icons/exit.svg';
import { connect } from 'react-redux';
import { logoutAction } from 'actions/logout';
import routes from 'routes/routes';

const Wrapper = styled.ul`
  background-color: ${({ theme }) => (theme.tertiary)};
  position: fixed;
  height: 100%;
  list-style-type: none;
  width: 125px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Sidebar = ({ logout }) => (
  <Wrapper>
    <li>
      <Icon as={NavLink} to={routes.dashboard} icon={dashboard} activeclass="active">Dashboard</Icon>
    </li>
    <li>
      <Icon as={NavLink} to={routes.quotes} icon={quotes} activeclass="active">Quotes</Icon>
    </li>
    <li>
      <Icon as={NavLink} to={routes.indicators} icon={indicators} activeclass="active">Indicators</Icon>
    </li>
    <li>
      <Icon as={NavLink} to={routes.transactions} icon={transactions} activeclass="active">Transactions</Icon>
    </li>
    <li>
      <Icon as={NavLink} to={routes.articles} icon={articles} activeclass="active">Articles</Icon>
    </li>
    <li>
      <Icon as={NavLink} to={routes.notes} icon={notes} activeclass="active">Notes</Icon>
    </li>
    <li>
      <Icon icon={exit} onClick={logout}>Log out</Icon>
    </li>
  </Wrapper>
);

Sidebar.propTypes = {
  logout: PropTypes.func.isRequired,
};

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logoutAction()),
});

export default connect(null, mapDispatchToProps)(Sidebar);
