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

const Notes = () => (
  <User>
    <Wrapper>
      <Header>Your notes</Header>
      <Paragraph>It this place will be number of notes</Paragraph>
      <Grid>
        <Card type="note" />
        <Card type="note" />
        <Card type="note" />
        <Card type="note" />
      </Grid>
    </Wrapper>
  </User>
);

export default Notes;
