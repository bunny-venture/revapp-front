import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    // outline: 1px solid red;
  }

  html,
  body {
    height: 100%;
    width: 100%;
    
  }

  body {
    font-family: 'Quicksand','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  input, select {
    font-family: inherit;
    font-size: inherit;
  }
`;
