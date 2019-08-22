import styled, { css } from 'styled-components';

const Span = styled.div`
  ${({ center }) => (
    center && css`
      text-align: center;
      vertical-align: center;
    `
  )}
  
  ${({ right }) => (
    right && css`
      text-align: right;                              
    `
  )}
  
  ${({ primary }) => (
    primary && css`
      color: ${({ theme }) => (theme.primary)};
      font-weight: ${({ theme }) => (theme.bold)};
    `
  )}
`;

export default Span;
