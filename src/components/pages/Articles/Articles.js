import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';
import Card from '../../molecules/Card/Card';

const Wrapper = styled.div`
  margin-left: 125px;
`;

const Articles = () => (
  <User>
    <Wrapper>
      <Card type="article" />
      <Card type="article" />
      <Card type="article" />
      <Card type="article" />
    </Wrapper>
  </User>
);

export default Articles;
