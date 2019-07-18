import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 125px;
`;

const Notes = () => (
  <User>
    <Wrapper>
      <h1>Notes - template</h1>
    </Wrapper>
  </User>
);

export default Notes;