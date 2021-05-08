import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    html {
        font-size: 62.5%;
    }

    body {
        height: 100vh;
        margin: 0 auto;
        overscroll-behavior: none;
        witdh: 100%;
        display: grid;
        grid-template-rows: repeat(auto-fit, minmax(384px, 1fr));
        grid-gap: 16px;
    }

`