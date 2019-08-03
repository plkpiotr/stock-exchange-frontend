import React from 'react';
import styled from 'styled-components';
import Online from 'components/templates/Online';
import Header from 'components/atoms/Header/Header';
import Details from 'components/molecules/Details/Details';
import Animation from 'utils/Animation';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
  animation: ${Animation} .3s ease;
`;

const Article = props => (
  <Online>
    <Wrapper>
      <Header>Your article</Header>
      <Details type="articles" {...props} />
    </Wrapper>
  </Online>
);

export default Article;
