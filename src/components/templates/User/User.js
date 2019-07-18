import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import Sidebar from 'components/organisms/Sidebar/Sidebar';

const Wrapper = styled.div`
  display: flex;
`;

const User = ({ children }) => (
  <Wrapper>
    <Sidebar />
    {children}
  </Wrapper>
);

User.propTypes = {
  children: PropTypes.element.isRequired,
};

export default User;
