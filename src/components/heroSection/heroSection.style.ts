import styled from "styled-components";

export const HeroSectionWrapper = styled.section`
    background-color: ${p => p.theme.colors.accent};
    padding: 50px 0;
    text-align: center;

    @media screen and (max-width: 1000px) {
        & img {
            width: 120px;
            height: 120px;
        }

        & h1 {
            font-size: 1.8em;
        }

        & p {
            max-width: 80%;
            margin-left: auto;
            margin-right: auto;
            font-size: 18px;
        }
    }
`

export const HeroSectionLogoIcon = styled.img`

`

export const HeroSectionLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 350px;
    width: 100%;
    margin: 0 auto 30px auto;

    @media screen and (max-width: 1000px) {
        max-width: 290px;
    }
`

export const HeroSectionLogoTitle = styled.h1`
    font-family: ${p => p.theme.fonts.secondary};
    color: #FFF;
    letter-spacing: 1.8px;
    margin: 0;
`

export const HeroSectionMessage = styled.p`
    color: #FFF;
    font-size: 20px;
    font-weight: 500;
    margin: 0;
    margin-bottom: 25px;
`