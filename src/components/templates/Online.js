import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;
`;

const Online = ({ children }) => (
  <Wrapper>
    <Sidebar />
    {children}
  </Wrapper>
);

export default Online;
