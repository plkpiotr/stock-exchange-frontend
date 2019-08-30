import styled, { css } from 'styled-components';
import magnifier from 'icons/magnifier.svg';

const Input = styled.input`
  width: 300px;
  border: 0 solid white;
  transition: .3s ease;
  font-size: 16px;
  padding-left: 5px;
  margin: 15px 0;

  &:focus {
    width: 300px;
    outline: none;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  &:hover {
    transition: .3s ease;
    width: 300px;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  &.invalid {
    border-right: 5px solid ${({ theme }) => (theme.red)};
  }
  
  ${({ search }) => (
    search && css`
      padding-left: 32px;
      padding-right: 12px;
      background-image: url(${magnifier});
      background-size: 12px;
      background-repeat: no-repeat;
      background-position: 10px 50%;
    `
  )}
  
  &[type="date"]::-webkit-inner-spin-button,
  &[type="date"]::-webkit-calendar-picker-indicator,
  &[type="date"]::-webkit-clear-button,
  &[type=number]::-webkit-inner-spin-button, 
  &[type=number]::-webkit-outer-spin-button {
    display: none;
    -webkit-appearance: none;
  }
`;

export default Input;
