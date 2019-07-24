import styled, { css } from 'styled-components';

const Button = styled.a`
  width: 120px;
  padding: 6px 13px;
  font-size: 14px;
  border: none;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${({ theme }) => (theme.bold)};
  margin-top: 15px;
  margin-bottom: 40px;
  margin-right: 25px;
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
  
  ${({ add }) => (
    add && css`
      position: fixed;
      top: 15px;
      right: 35px;
      z-index: 2;                            
    `
  )}
`;

export default Button;
