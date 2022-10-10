import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: ${p => p.theme.colors.primary};
    padding: 40px 0 10px 0;
    text-align: center;
`

export const FooterLogo = styled.img`
    @media screen and (max-width: 600px){
        width: 130px;
    }
`

export const FooterLink = styled.a`
    margin-bottom: 20px;
    display: inline-block;
`

export const FooterSocial = styled.div`
    display: grid;
    grid-template-columns: repeat(5, max-content);
    justify-content: center;
    align-items: center;
    grid-gap: 25px;
    margin-bottom: 50px;

    @media screen and (max-width: 600px) {
        grid-column-gap: 7px;
        grid-row-gap: 10px;
        grid-template-columns: none;
        grid-template-areas: "a b b c" "d d e e";
    }
`

export const FooterSocialItem = styled.a`

    @media screen and (max-width: 600px) {
        &:nth-child(1) {
            grid-area: a;
        }
        &:nth-child(2) {
            grid-area: b;
        }
        &:nth-child(3) {
            grid-area: c;
        }
        &:nth-child(4) {
            grid-area: d;
        }
        &:nth-child(5) {
            grid-area: e;
        } 
    }
`

export const FooterCopyright = styled.p`
    font-size: 13px;
`