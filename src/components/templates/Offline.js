import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import dollar from 'icons/dollar.svg';

const Wrapper = styled.div`
  background-color: white;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Logo = styled.img`
  width: 90px;
  margin-bottom: 15px;
  height: auto;
`;

const Frame = styled.div`
  background-color: ${({ theme }) => (theme.tertiary)};
  min-width: 400px;
  min-height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 30px;
  padding-bottom: 30px;
`;

const Offline = ({ children }) => (
  <Wrapper>
    <Frame>
      <Logo src={dollar} alt="dollar" />
      <Header>Stock Exchange App</Header>
      {children}
    </Frame>
  </Wrapper>
);

Offline.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Offline;
