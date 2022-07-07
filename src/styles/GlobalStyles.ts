import { createGlobalStyle, css } from 'styled-components';
// @ts-ignore
import { reset } from 'styled-reset-advanced';

const GlobalStyles = createGlobalStyle`
${({ theme }) => css`
  ${reset}

  html {
    font-size: 62.5%;
  }

  body {
    min-width: 28rem;
    font-family: ${theme.font.family};
    font-size: 1.3rem;
    background-color: ${theme.colors.bg.mainBg};
  }
`}

`;

export default GlobalStyles;
