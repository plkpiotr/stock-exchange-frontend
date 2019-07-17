import styled, { css } from 'styled-components';

const Icon = styled.button`
  padding-top: 60px;
  margin-bottom: 30px;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  width: 130px;
  height: 90px;
  background: white url(${({ icon }) => (icon)}) no-repeat 50% 25%;
  background-size: 40%;
  transition: .1s ease;
  border: 0 solid ${({ theme }) => (theme.primary)};

  &:focus {
    outline: none;
  }
  
  &:hover {
    width: 135px;
    transition: .1s ease;
    cursor: pointer;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  ${({ active }) => (
    active && css`
      width: 135px;
      outline: none;
      border-right: 5px solid ${({ theme }) => (theme.primary)};                             
    `
  )}
`;

export default Icon;
