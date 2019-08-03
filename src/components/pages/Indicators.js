import React from 'react';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Animation from 'utils/Animation';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
  animation: ${Animation} .3s ease;
`;

const Indicators = () => (
  <Online>
    <Wrapper>
      <h1>Indicators - template</h1>
    </Wrapper>
  </Online>
);

export default Indicators;
