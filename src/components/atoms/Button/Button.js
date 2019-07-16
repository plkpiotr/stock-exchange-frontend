import styled, { css } from 'styled-components';

const Button = styled.button`
  padding: 10px 40px;
  border-radius: 50px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => (theme.bold)};
  margin: 15px;
  transition: .3s ease-in-out;
  
  &:focus {
    outline: none;
  }
  
  &:hover {
    cursor: pointer; 
    transition: .3s ease-in-out;
  }
  
  ${({ blue }) => (
    blue && css`
      background-color: ${({ theme }) => (theme.blue)};
        
        &:hover {
          background-color: ${({ theme }) => (theme.blueLight)};
        }                                 
    `
  )}
  
  ${({ pink }) => (
    pink && css`
      background-color: ${({ theme }) => (theme.pink)};
        
        &:hover {
          background-color: ${({ theme }) => (theme.pinkLight)};
        }
    `
  )}
  
  ${({ violet }) => (
    violet && css`
      background-color: ${({ theme }) => (theme.violet)};
                                         
      &:hover {
        background-color: ${({ theme }) => (theme.violetLight)};
      }
    `
  )}
`;

export default Button;
