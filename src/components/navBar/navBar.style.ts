import styled from "styled-components";

export const NavBarWrapper = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 300px;
    width: 100%;

    @media screen and (max-width: 1000px) {
        display: none;
    }
`

export const NavBarItem = styled.span`

    & a {
        display: block;
        color: ${p => p.theme.colors.text};
        text-decoration: none;
        padding: 5px;
        border-bottom: 2px solid transparent;
    }

    & .active {
        color: ${p => p.theme.colors.accent};
        border-bottom-color: ${p => p.theme.colors.accent};
    }

    

`