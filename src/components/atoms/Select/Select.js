import styled from 'styled-components';

const Select = styled.select`
  width: 300px;
  border: 0 solid white;
  border-right: 5px solid white;
  font-size: 16px;
  padding-left: 2px;
  margin: 15px 0;

  &:focus {
    width: 300px;
    outline: none;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
  
  &:hover {
    transition: .3s ease;
    width: 300px;
    border-right: 5px solid ${({ theme }) => (theme.primary)};
  }
`;

export default Select;
