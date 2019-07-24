import styled from 'styled-components';

const Icon = styled.a`
  padding-top: 55px;
  margin: 5px 0;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  height: 80px;
  background: ${({ theme }) => (theme.tertiary)} url(${({ icon }) => (icon)}) no-repeat 50% 25%;
  background-size: 40%;
  transition: .3s ease;
  border: 0 solid white;
  display: block;
  width: 120px;
  text-decoration: none;
  font-size: 16px;
  text-align: center;
  
  &:hover {
    width: 125px;
    transition: .3s ease;
    cursor: pointer;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  &.active {
    width: 125px;
    outline: none;
    border-right: 5px solid ${({ theme }) => (theme.primary)};    
  }
`;

export default Icon;
