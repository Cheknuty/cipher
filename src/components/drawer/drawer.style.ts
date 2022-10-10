import styled from "styled-components";

export const DrawerWrapper = styled.div`
    height: 100vh;
    min-width: 132px;
    background-color: ${p => p.theme.colors.secondary};
    border-left: 1px solid ${p => p.theme.colors.primary};
    position: fixed;
    top: 0;
    right: 0;
    transform: translateX(100%);
    transition: transform 100ms ease-in-out;
    padding: 35px 21px;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    


    &[data-active="true"] {
        transform: translateX(0);
    }

    @media screen and (min-width: 1000px) {
        display: none;
    }

    @media screen and (max-width: 600px) {
        padding: 30px 21px;
    }
`

export const DrawerNav = styled.nav`
    text-align: center;
    width: 100%;
    padding-top: 50px;
    & a {
        color: ${p => p.theme.colors.text};
        display: block;
        text-decoration: none;

        &:not(:last-child) {
            margin-bottom: 20px;
        }
    }

    & .active {
        color: ${p => p.theme.colors.accent};
    }
`