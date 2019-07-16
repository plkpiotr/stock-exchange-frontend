import React from 'react';
import Button from 'components/atoms/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

const Root = () => (
  <div>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        <Button blue>Big Button</Button>
        <Button pink>Pink Button</Button>
        <Button violet>Violet Button</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
