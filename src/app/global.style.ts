import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html,body { 
    height: 100%; 
    margin: 0px; 
    padding: 0px; 
  }
  div, a, p, span {
    font-family: -apple-system, 'Manrope', sans-serif;
    line-height: normal;
  }
  a {
    text-decoration: none;
  }

  h1, p {
    margin: 0;
  }
  
  #root {
    height: 100%;
  }
`
