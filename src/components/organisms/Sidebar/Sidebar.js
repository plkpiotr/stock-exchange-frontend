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
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;

const Sidebar = () => (
  <Wrapper>
    <li>
      <Icon as={NavLink} to="/dashboard" icon={dashboard} activeClass="active">Dashboard</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/quotes" icon={quotes} activeClass="active">Quotes</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/indicators" icon={indicators} activeClass="active">Indicators</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/transactions" icon={transactions} activeClass="active">Transactions</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/articles" icon={articles} activeClass="active">Articles</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/notes" icon={notes} activeClass="active">Notes</Icon>
    </li>
    <li>
      <Icon as={NavLink} to="/logout" icon={logout}>Log out</Icon>
    </li>
  </Wrapper>
);

export default Sidebar;
