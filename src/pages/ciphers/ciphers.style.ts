import styled from "styled-components";

export const CiphersWrapper = styled.main`

`

export const CiphersTitle = styled.h1`
    position: absolute;
    white-space: nowrap;
    width: 1px;
    height: 1px;
    overflow: hidden;
    border: 0;
    padding: 0;
    clip: rect(0 0 0 0);
    clip-path: inset(50%);
    margin: -1px;
`

export const CiphersList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 40px;

    @media screen and (max-width: 1000px) {
        grid-template-columns: 1fr;
    }
`

export const CiphersItem = styled.li`
    padding: 25px 0;
`

export const CiphersItemTitle = styled.h2`
    font-size: 20px;

    @media screen and (max-width: 1000px) {
        font-size: 18px;
    }
`

export const CiphersItemDesc = styled.p`
    font-size: 16px;
    @media screen and (max-width: 1000px) {
        font-size: 15px;
    }
`

export const CiphersItemLogoList = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
`

export const CiphersItemLogo = styled.li`
    display: flex;
    align-items: center;

    &:not(:last-child) {
        margin-right: 15px;
    }
`

export const CiphersItemLogoIcon = styled.img`
`

export const CiphersItemLogoTitle = styled.h3`
    font-size: 14px;
    margin: 0;
    font-weight: 450;
    margin-left: 3px;
`