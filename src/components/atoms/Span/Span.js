import styled, { css } from 'styled-components';

const Span = styled.div`
  ${({ center }) => (
    center && css`
      text-align: center;                              
    `
  )}
  
  ${({ right }) => (
    right && css`
      text-align: right;                              
    `
  )}
`;

export default Span;
