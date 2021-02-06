const { createGlobalStyle } = require('styled-components')

export const GlobalStyle = createGlobalStyle`
  *,
  *::after,
  *::before {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    font-size: 62.5%;
  }

  body {
    font-size: 1.6rem;
  }

  img {
    display: block;
    max-width: 100%;
  }

  ul {
    list-style: none;
  }

  a,
  a:link,
  a:visited {
    text-decoration: none;
    color: #333;
  }
`