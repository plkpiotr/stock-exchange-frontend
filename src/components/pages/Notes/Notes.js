import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';
import Card from '../../molecules/Card/Card';

const Wrapper = styled.div`
  margin-left: 125px;
`;

const Notes = () => (
  <User>
    <Wrapper>
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
      <Card type="note" />
    </Wrapper>
  </User>
);

export default Notes;
