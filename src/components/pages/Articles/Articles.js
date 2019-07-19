import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Card from 'components/molecules/Card/Card';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 1vh 4vw;
`;

const Grid = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Articles = () => (
  <User>
    <Wrapper>
      <Header>Your articles</Header>
      <Paragraph>It this place will be number of articles</Paragraph>
      <Grid>
        <Card type="article" />
        <Card type="article" />
        <Card type="article" />
        <Card type="article" />
      </Grid>
    </Wrapper>
  </User>
);

export default Articles;
