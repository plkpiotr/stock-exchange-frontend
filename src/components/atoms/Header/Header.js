import styled, { css } from 'styled-components';

const Header = styled.h1`
  font-weight: ${({ theme }) => (theme.bold)};

  ${({ blue }) => (
    blue && css`
      color: ${({ theme }) => (theme.blue)};
    `
  )}

  ${({ pink }) => (
    pink && css`
      color: ${({ theme }) => (theme.pink)};
    `
  )}
  
  ${({ violet }) => (
    violet && css`
      color: ${({ theme }) => (theme.violet)};
    `
  )}
`;

export default Header;
