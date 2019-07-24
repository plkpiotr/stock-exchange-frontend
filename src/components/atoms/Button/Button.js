import styled, { css } from 'styled-components';

const Button = styled.button`
  width: 120px;
  padding: 6px 13px;
  font-size: 14px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => (theme.bold)};
  transition: .3s ease;
  background-color: ${({ theme }) => (theme.primary)};
  margin-top: 10px;
  
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
      right: 60px;
      z-index: 2;                            
    `
  )}
`;

export default Button;
