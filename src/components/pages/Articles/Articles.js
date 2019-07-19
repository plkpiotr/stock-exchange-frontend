import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import Header from 'components/atoms/Header/Header';

const Wrapper = styled.div`
  margin-left: 125px;
`;

const Articles = () => (
  <User>
    <Wrapper>
      <Header>Your articles</Header>
      <Card type="article" />
      <Card type="article" />
      <Card type="article" />
      <Card type="article" />
    </Wrapper>
  </User>
);

export default Articles;
