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
    display: grid;
    place-items: center;
    min-height: 100vh;
    padding: 3.2rem;
  }

  body,
  input,
  textarea,
  label,
  button {
    font-family: monospace;
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
