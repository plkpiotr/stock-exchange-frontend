import styled, { css } from 'styled-components';

const Link = styled.a`
  padding: 6px 14px;
  font-size: 14px;
  border: none;
  color: white;
  text-align: center;
  text-transform: uppercase;
  text-decoration: none;
  font-weight: ${({ theme }) => (theme.bold)};
  margin-right: 10px;
  transition: .3s ease;
  background-color: ${({ theme }) => (theme.primary)};
  
  &:hover {
    cursor: pointer; 
    transition: .3s ease;
    background-color: ${({ theme }) => (theme.secondary)};
  }
  
  &:focus {
    outline: none;
  }
  
  ${({ small }) => (
    small && css`
      margin-left: 8px;
      margin-right: 8px;
      color: ${({ theme }) => (theme.primary)};
      background-color: inherit;
      
      &:hover {
        color: ${({ theme }) => (theme.secondary)};
        background-color: inherit;
      }
    `
  )}
`;

export default Link;
