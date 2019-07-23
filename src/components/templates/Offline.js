import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
`;

const Offline = ({ children }) => (
  <Wrapper>
    {children}
  </Wrapper>
);

Offline.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Offline;
