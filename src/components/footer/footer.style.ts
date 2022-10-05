import styled from "styled-components";

export const FooterWrapper = styled.footer`
    background-color: ${p => p.theme.colors.primary};
    padding: 40px 0 10px 0;
    text-align: center;
`

export const FooterLogo = styled.img`

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
    grid-column-gap: 25px;
    margin-bottom: 50px;
`

export const FooterSocialItem = styled.a`
    
`

export const FooterCopyright = styled.p`
    font-size: 13px;
`