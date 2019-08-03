import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,600&display=swap');
  
  body {
    margin: 0;
    overflow-y: hidden;
  }
  
  *, *::before, *::after {
    font-family: 'Titillium Web', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

export default GlobalStyle;
