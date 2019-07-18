import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Titillium+Web:400,700&display=swap');
  
  *, *::before, *::after {
    font-family: 'Titillium Web', sans-serif;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  
  body {
    background-color: hsl(245, 5%, 95%);
    padding-left: 125px;
    margin: 0;
  }
`;

export default GlobalStyle;
