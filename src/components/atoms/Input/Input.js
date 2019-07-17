import styled, { css } from 'styled-components';
import magnifier from 'icons/magnifier.svg';

const Input = styled.input`
  width: 200px;
  border: 0 solid deeppink;

  &:focus {
    outline: none;
    border-right: 5px solid ${({ color }) => (color)};

  }
  
  &:hover {
    transition: .1s ease;
    border-right: 5px solid ${({ color }) => (color)};
  }
  
  ${({ icon }) => (
    icon && css`
      padding-left: 24px;
      background-image: url(${magnifier});
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: 5px 50%;                     
    `
  )}
`;

export default Input;
