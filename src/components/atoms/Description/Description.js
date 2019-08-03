import styled, { css } from 'styled-components';

const Description = styled.p`
  margin-top: 5px;
  margin-bottom: 20px;
  text-align: justify;
  
  ${({ secondary }) => (
    secondary && css`
      color: ${({ theme }) => (theme.primary)};
      margin-top: -10px;
      
      a {
        color: ${({ theme }) => (theme.secondary)};
        text-decoration: none;
      }
    `
  )}
`;

export default Description;
