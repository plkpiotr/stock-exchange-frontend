import React from 'react';
import styled from 'styled-components';
import Sidebar from 'components/organisms/Sidebar';

const Wrapper = styled.div`
  display: flex;
`;

// eslint-disable-next-line react/prop-types
const Online = ({ children }) => (
  <Wrapper>
    <Sidebar />
    {children}
  </Wrapper>
);

export default Online;
