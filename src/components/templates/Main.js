import React from 'react';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import theme from 'theme/theme';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'theme/toasts.css';

const Main = ({ children }) => (
  <>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <>
        {children}
        <ToastContainer
          autoClose={5000}
          position="top-right"
          hideProgressBar
          draggable={false}
        />
      </>
    </ThemeProvider>
  </>
);

Main.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Main;
