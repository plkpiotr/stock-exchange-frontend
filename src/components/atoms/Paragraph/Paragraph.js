import styled from 'styled-components';

const Paragraph = styled.p`
  font-size: 16px;
  font-weight: ${({ theme }) => (theme.bold)};
  color: ${({ theme }) => (theme.gray)};
  margin-bottom: 3vh;
  margin-right: 74px;
  display: inline-block;
`;

export default Paragraph;
