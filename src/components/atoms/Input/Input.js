import styled, { css } from 'styled-components';
import magnifier from 'icons/magnifier.svg';

const Input = styled.input`
  border: none;
  
  &:focus {
    outline: none;
  }
  
  ${({ icon }) => (
    icon && css`
      padding-left: 24px;
      background-image: url(${magnifier});
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: 6px 50%;
      }                          
    `
  )}
`;

export default Input;
