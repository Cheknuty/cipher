import styled from "styled-components";

export const HeaderWrapper = styled.header`
    background-color: ${p => p.theme.colors.primary};
    transition: 150ms;
    & #container {
        display: flex;
        align-items: center;
        justify-content: space-between;
    }
`

export const HeaderLogo = styled.img`
    width: 100px;
`

export const HeaderBox = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
`