import styled, { css } from 'styled-components';

const Description = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: justify;
  white-space: pre;
  
  ${({ secondary }) => (
    secondary && css`
      color: ${({ theme }) => (theme.primary)};
      margin-top: -10px;
    `
  )}
`;

export default Description;
