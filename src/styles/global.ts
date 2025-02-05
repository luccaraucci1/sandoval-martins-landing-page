import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
  }

  body {  
    background: ${(props) => props.theme.colors.background};
    -webkit-font-smoothing: antialiased;
    color: #FFFFFF;
  }

  h1, h2{
    font-family: 'Finlandica', sans-serif;
    font-weight: 700;
  }

  p, span, li{
    font-family: 'Rubik', sans-serif;
    font-weight: 400;
    line-height: 185%;
  }

`
