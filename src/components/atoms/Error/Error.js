import styled from 'styled-components';

const Error = styled.p`
  margin-top: -10px;
  margin-bottom: -10px;
  color: ${({ theme }) => (theme.red)};
  font-weight: ${({ theme }) => (theme.bold)};
`;

export default Error;
