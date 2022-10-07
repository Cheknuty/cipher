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

    @media screen and (max-width: 1000px) {
        max-width: 150px;
    }
`

export const HeaderMenu = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1000px) {
        display: block;
    }
`