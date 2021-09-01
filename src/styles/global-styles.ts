import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    min-height: 100vh;
  }

  body {
    font-family: 'Quicksand','Helvetica Neue', Helvetica, Arial, sans-serif;
  }

  #root {
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  input, select, button {
    font-family: inherit;
  }

  .custom-scroll {
    ::-webkit-scrollbar {
      width: 0.6rem;
    }
    ::-webkit-scrollbar-track {
      background-color: #a4a5a759;
      border-radius: 100px;
    }
    ::-webkit-scrollbar-thumb {
      background-color: #5c5c5c8c;
      border-radius: 100px;
    }
  }
`;
