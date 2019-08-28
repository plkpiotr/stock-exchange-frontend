import styled from 'styled-components';

const Header = styled.h1`
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.primary)};
  margin-bottom: 3px;
`;

export default Header;
