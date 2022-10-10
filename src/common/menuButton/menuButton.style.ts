import styled from "styled-components";

export const MenubuttonWrapper = styled.button`
    padding: 0;
    margin: 0;
    border: none;
    background-color: transparent;
    cursor: pointer;
    display: none;

    @media screen and (max-width: 1000px) {
        display: block;
    }

    @media screen and (max-width: 600px) {
        & svg {
            width: 20px;
        }
    }
`