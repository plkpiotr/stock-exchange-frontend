import styled from 'styled-components';

const Error = styled.p`
  margin-top: -11px;
  margin-bottom: -9px;
  color: ${({ theme }) => (theme.red)};
  font-weight: ${({ theme }) => (theme.bold)};
`;

export default Error;
