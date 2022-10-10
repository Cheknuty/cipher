import styled from "styled-components";

export const ButtonPrimaryWrapper = styled.button`
    margin: 0;
    padding: 0;
    border: none;
    background-color: #FFF;
    border-radius: 7px;

    &:hover a {
        color: ${p => p.theme.colors.accent}!important;
    }

    & a {
        display: block;
        font-size: 17px;
        font-weight: 500;
        letter-spacing: 1.1px;
        transition: 300ms;
        text-decoration: none;
        color: #000;
        padding: 9px 35px;
    }
`