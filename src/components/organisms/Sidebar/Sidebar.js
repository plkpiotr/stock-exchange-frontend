import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon/Icon';
import dashboard from 'icons/dashboard.svg';
import quotes from 'icons/quotes.svg';
import indicators from 'icons/indicators.svg';
import transactions from 'icons/transactions.svg';
import articles from 'icons/articles.svg';
import notes from 'icons/notes.svg';
import logout from 'icons/logout.svg';

const Wrapper = styled.ul`
  background-color: white;
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

const Sidebar = () => (
  <Wrapper>
    <li>
      <Icon as={NavLink} to="/dashboard" icon={dashboard} activeclass="active">Dashboard</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/quotes" icon={quotes} activeclass="active">Quotes</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/indicators" icon={indicators} activeclass="active">Indicators</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/transactions" icon={transactions} activeclass="active">Transactions</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/articles" icon={articles} activeclass="active">Articles</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/notes" icon={notes} activeclass="active">Notes</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/logout" icon={logout}>Log out</Icon>
    </li>
  </Wrapper>
);

export default Sidebar;
