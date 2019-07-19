import React from 'react';
import User from 'components/templates/User/User';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-left: 125px;
  padding: 0 0 1vh 3vw;
`;

const Dashboard = () => (
  <User>
    <Wrapper>
      <h1>Dashboard - template</h1>
    </Wrapper>
  </User>
);

export default Dashboard;
