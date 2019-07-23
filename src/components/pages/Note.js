import React from 'react';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header/Header';
import Paragraph from 'components/atoms/Paragraph/Paragraph';
import Details from 'components/molecules/Details/Details';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Note = () => (
  <Online>
    <Wrapper>
      <Header>Your notes</Header>
      <Paragraph>One of them</Paragraph>
      <Details type="notes" />
    </Wrapper>
  </Online>
);

export default Note;
