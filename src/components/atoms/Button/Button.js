import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 200px;
  min-height: 100px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => (theme.bold)};
  
  ${({ blue }) => (
    blue && css`
      background: linear-gradient(30deg, ${({ theme }) => (theme.blueLight)} 0%,
                                         ${({ theme }) => (theme.blue)} 100%);
    `
  )}
  
  ${({ pink }) => (
    pink && css`
      background: linear-gradient(30deg, ${({ theme }) => (theme.pinkLight)} 0%,
                                         ${({ theme }) => (theme.pink)} 100%);
    `
  )}
  
  ${({ violet }) => (
    violet && css`
      background: linear-gradient(30deg, ${({ theme }) => (theme.violetLight)} 0%,
                                         ${({ theme }) => (theme.violet)} 100%);
    `
  )}
`;

export default Button;
