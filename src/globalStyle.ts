import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    color: ${({
      theme: {
        palette: { common },
      },
    }) => common.dark};
    background-color:${({
      theme: {
        palette: { common },
      },
    }) => common.light};
    font-family: ${({
      theme: {
        typography: { body },
      },
    }) => body.fontFamily};
    line-height: 1.5;  
    }
`;

export default GlobalStyle;
