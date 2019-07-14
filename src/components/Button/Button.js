import styled, { css } from 'styled-components';

const Button = styled.button`
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
