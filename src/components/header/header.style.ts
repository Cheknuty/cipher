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

    @media screen and (max-width: 600px) {
        width: 80px;
    }
`

export const HeaderBox = styled.div`
    max-width: 500px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media screen and (max-width: 1000px) {
        max-width: 120px;
    }
`