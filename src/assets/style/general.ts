import { createGlobalStyle } from "styled-components";

export const GeneralStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        height: 100%;
        scroll-behavior: smooth;
    }
    
    *,
    *::before,
    *::after {
        box-sizing: inherit;
    }
    
    body {
        padding: 0;
        margin: 0;
        font-family: ${p => p.theme.fonts.primary};
        color: ${p => p.theme.colors.text};
        background-color: ${p => p.theme.colors.secondary};
        transition: 150ms;
        height: 100%;

        #root {
            display: flex;
            flex-direction: column;
            height: 100%;
        }

        & main {
            flex-grow: 1;
        }
    }
`

