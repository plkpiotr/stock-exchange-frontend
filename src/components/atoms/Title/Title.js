import styled, { css } from 'styled-components';

const Title = styled.h2`
  font-size: 22px;
  font-weight: ${({ theme }) => (theme.normal)};
  color: ${({ theme }) => (theme.primary)};
  margin-block-start: 0;
  margin-bottom: 0;
  
  ${({ panel }) => (
    panel && css`
      margin-top: 10px;
      margin-bottom: 10px;
    `
  )}
`;

export default Title;
