import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import { ThemeProvider } from 'styled-components';
import theme from 'theme/theme';

const Main = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      {children}
    </ThemeProvider>
  </>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
