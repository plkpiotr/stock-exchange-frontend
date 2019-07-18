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

const List = styled.ul`
  list-style-type: none;
  background-color: white;
  margin: 0;
  padding: 0;
`;

const Sidebar = () => (
  <div>
    <div>
      <List>
        <li>
          <Icon as={NavLink} to="/dashboard" icon={dashboard}>Dashboard</Icon>
        </li>
        <li>
          <Icon as={NavLink} to="/quotes" icon={quotes}>Quotes</Icon>
        </li>
        <li>
          <Icon as={NavLink} to="/indicators" icon={indicators}>Indicators</Icon>
        </li>
        <li>
          <Icon as={NavLink} to="/transactions" icon={transactions}>Transactions</Icon>
        </li>
        <li>
          <Icon as={NavLink} to="/articles" icon={articles}>Articles</Icon>
        </li>
        <li>
          <Icon as={NavLink} to="/notes" icon={notes}>Notes</Icon>
        </li>
      </List>
    </div>
    <Icon as={NavLink} to="/logout" icon={logout}>Log out</Icon>
  </div>
);

export default Sidebar;
