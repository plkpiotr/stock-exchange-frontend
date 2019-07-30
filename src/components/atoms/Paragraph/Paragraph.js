import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
`;

export default Paragraph;
