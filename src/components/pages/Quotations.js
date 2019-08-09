import React from 'react';
import Online from 'components/templates/Online';
import styled from 'styled-components';
import Header from 'components/atoms/Header/Header';
import Chart from 'components/molecules/Chart/Chart';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Board = styled.div`
  margin-top: 3vh;
  display: flex;
  flex-wrap: wrap;
`;


const Quotations = () => (
  <Online>
    <Wrapper>
      <Header>Quotations</Header>
      <Board>
        <Chart />
      </Board>
    </Wrapper>
  </Online>
);

export default Quotations;
