import styled from 'styled-components';

const Title = styled.h2`
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.primary)};
`;

export default Title;
