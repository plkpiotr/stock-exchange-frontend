import styled, { css } from 'styled-components';
import magnifier from 'icons/magnifier.svg';

const Input = styled.input`
  width: 200px;
  border: 0 solid ${({ theme }) => (theme.primary)};
  transition: .1s ease;

  &:focus {
    width: 205px;
    outline: none;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  &:hover {
    transition: .1s ease;
    width: 205px;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
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
