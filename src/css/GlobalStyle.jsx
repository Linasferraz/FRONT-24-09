import styled, { createGlobalStyle } from 'styled-components'
const GlobalStyle = createGlobalStyle `

*{
    margin:0;
    padding:0;
    box-sizing: border-box;
    list-style:none;
    text-decoration: none;
}
html{
    scroll-behavior:smooth;
}

body{
    display:grid;
    grid-template-areas:
        'nav nav nav nav'
        'home home home home'
        'login login login login'
    grid-template-column:repeat(3, 1fr)
}
`
export default GlobalStyle