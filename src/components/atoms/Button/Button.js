import styled from 'styled-components';

const Button = styled.button`
  padding: 10px 40px;
  border-radius: 50px;
  border: none;
  color: white;
  text-transform: uppercase;
  font-weight: ${({ theme }) => (theme.bold)};
  margin: 15px;
  transition: .3s ease;
  background-color: ${({ color }) => (color)};

  
  &:focus {
    outline: none;
  }
  
  &:hover {
    cursor: pointer; 
    transition: .3s ease;
    background-color: ${({ hover }) => (hover)};
  }
`;

export default Button;
