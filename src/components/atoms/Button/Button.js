import styled, { css } from 'styled-components';

const Button = styled.button`
  color: ${({ theme }) => (theme.green)};
  background-color: gold;
  border: none;
  border-radius: 2px;
  
  ${({ secondary }) => (
    secondary && css`
      background-color: aqua;
    `
  )}
`;

export default Button;
