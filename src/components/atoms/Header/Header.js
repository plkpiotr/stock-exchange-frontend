import styled from 'styled-components';

const Header = styled.h1`
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.primary)};
  cursor: default;
  margin-bottom: 0;
`;

export default Header;
