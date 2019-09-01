import styled from 'styled-components';

const Icon = styled.a`
  padding-top: 55px;
  margin: 5px 0;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  height: 80px;
  background: ${({ theme }) => (theme.quaternary)} url(${({ icon }) => (icon)}) no-repeat 50% 25%;
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
  
  @media(max-height: 560px) {
    width: 90px;
    height: 60px;
    padding-top: 40px;
    font-size: 13px;
    
    &:hover {
      width: 95px;
    }
  
    &.active {
      width: 95px;
    }
`;

export default Icon;
