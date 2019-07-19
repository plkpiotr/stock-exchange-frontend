import styled from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  font-weight: ${({ theme }) => (theme.normal)};
  color: ${({ theme }) => (theme.primary)};
`;

export default Title;
