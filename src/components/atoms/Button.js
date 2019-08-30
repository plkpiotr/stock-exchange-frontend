import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 120px;
  margin-top: 10px;
  padding: 6px 13px;
  font-size: 14px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => (theme.bold)};
  transition: .3s ease;
  background-color: ${({ theme }) => (theme.primary)};
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    cursor: pointer; 
    transition: .3s ease;
    background-color: ${({ theme }) => (theme.secondary)};
  }
  
  ${({ fixed }) => (
    fixed && css`
      position: fixed;
      top: 20px;
      right: 57px;
      z-index: 2;
    `
  )}
  
  ${({ column }) => (
    column && css`
    width: auto;
    text-align: center;
    margin: 0;
    padding: 5px 0;
    font-weight: ${({ theme }) => (theme.normal)};
  `
  )}
  
  ${({ line }) => (
    line && css`
    width: auto;
    padding: 6px 13px;                             
    margin: -4px 10px 0 0;
    font-weight: ${({ theme }) => (theme.normal)};
    `
  )}
`;

export default Button;
