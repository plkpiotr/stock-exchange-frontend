import styled, { css } from 'styled-components';

const Icon = styled.a`
  padding-top: 65px;
  margin: 0 0 30px;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  height: 90px;
  background: white url(${({ icon }) => (icon)}) no-repeat 50% 25%;
  background-size: 40%;
  transition: .3s ease;
  border: 0 solid white;
  display: block;
  width: 120px;
  text-decoration: none;
  font-size: 13px;
  text-align: center;
  
  //border-right: 5px solid white;

  &:focus {
    outline: none;
  }
  
  &:hover {
    width: 125px;
    transition: .3s ease;
    cursor: pointer;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  ${({ active }) => (
    active && css`
      width: 125px;
      outline: none;
      border-right: 5px solid ${({ theme }) => (theme.primary)};                             
    `
  )}
`;

export default Icon;
