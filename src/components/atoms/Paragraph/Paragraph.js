import styled from 'styled-components';

const Paragraph = styled.p`
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  margin-top: 0;
  margin-bottom: 3vh;
`;

export default Paragraph;
