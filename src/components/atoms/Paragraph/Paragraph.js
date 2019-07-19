import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 18px;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  margin-bottom: 3vh;
  margin-right: 60px;
  display: inline-block;
`;

export default Paragraph;
