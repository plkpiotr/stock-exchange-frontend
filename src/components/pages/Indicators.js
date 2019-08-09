import React from 'react';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Indicators = () => (
  <Online>
    <Wrapper>
      <Header>Indicators</Header>
    </Wrapper>
  </Online>
);

export default Indicators;
