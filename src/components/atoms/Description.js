import styled, { css } from 'styled-components';

const Description = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: justify;
  white-space: pre-wrap;
  
  ${({ secondary }) => (
    secondary && css`
      color: ${({ theme }) => (theme.primary)};
      margin-top: -5px;
      margin-bottom: 10px;
      
      a {
        color: ${({ theme }) => (theme.secondary)};
        text-decoration: none;
      }
    `
  )}
  
  ${({ panel }) => (
    panel && css`
      color: ${({ theme }) => (theme.primary)};
      margin: 0;
    `
  )}
`;

export default Description;
