import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Icon from 'components/atoms/Icon';
import quotes from 'icons/quotes.svg';
import indicators from 'icons/indicators.svg';
import transactions from 'icons/transactions.svg';
import articles from 'icons/articles.svg';
import notes from 'icons/notes.svg';
import signOut from 'icons/signOut.svg';
import routes from 'constants/routes';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { logoutAction } from 'actions/logout';

const Wrapper = styled.ul`
  background-color: ${({ theme }) => (theme.quaternary)};
  position: fixed;
  height: 100%;
  list-style-type: none;
  width: 125px;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media(max-height: 560px) {
    width: 95px;
  }
`;

const Sidebar = ({ logout }) => (
  <Wrapper>
    <li>
      <Icon
        as={NavLink}
        to={routes.quotes}
        icon={quotes}
        activeclass="active"
      >
        Quotes
      </Icon>
    </li>
    <li>
      <Icon
        as={NavLink}
        to={routes.indicators}
        icon={indicators}
        activeclass="active"
      >
        Indicators
      </Icon>
    </li>
    <li>
      <Icon
        as={NavLink}
        to={routes.transactions}
        icon={transactions}
        activeclass="active"
      >
        Transactions
      </Icon>
    </li>
    <li>
      <Icon
        as={NavLink}
        to={routes.articles}
        icon={articles}
        activeclass="active"
      >
        Articles
      </Icon>
    </li>
    <li>
      <Icon
        as={NavLink}
        to={routes.notes}
        icon={notes}
        activeclass="active"
      >
        Notes
      </Icon>
    </li>
    <li>
      <Icon
        icon={signOut}
        onClick={logout}
      >
        Sign out
      </Icon>
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
