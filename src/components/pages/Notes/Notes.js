import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';
import Card from 'components/molecules/Card/Card';
import Header from 'components/atoms/Header/Header';

const Wrapper = styled.div`
  margin-left: 125px;
`;

const Notes = () => (
  <User>
    <Wrapper>
      <Header>Your notes</Header>
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
    </Wrapper>
  </User>
);

export default Notes;
