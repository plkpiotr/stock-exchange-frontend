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
        <Button color={theme.blue} hover={theme.blueLight}>Violet Button</Button>
        <Button color={theme.pink} hover={theme.pinkLight}>Blue Button</Button>
        <Button color={theme.violet} hover={theme.violetLight}>Pink Button</Button>
      </>
    </ThemeProvider>
  </div>
);

export default Root;
