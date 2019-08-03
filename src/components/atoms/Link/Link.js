import styled, { css } from 'styled-components';

const Link = styled.a`
  padding: 6px 13px;
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
  
  ${({ light }) => (
    light && css`
      font-weight: ${({ theme }) => (theme.normal)};                      
    `
  )}
  
  ${({ center }) => (
    center && css`
      margin-left: 21px;
      margin-right: 21px;
      display: inline-block;
      width: 120px;
    `
  )}
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    cursor: pointer; 
    transition: .3s ease;
    background-color: ${({ theme }) => (theme.secondary)};
  }
`;

export default Link;
