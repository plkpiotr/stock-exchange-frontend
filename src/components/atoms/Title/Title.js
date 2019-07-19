import styled from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  font-weight: ${({ theme }) => (theme.normal)};
  color: ${({ theme }) => (theme.primary)};
  margin-bottom: 0;
`;

export default Title;
