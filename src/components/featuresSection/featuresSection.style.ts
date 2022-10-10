import styled from "styled-components";

export const FeaturesSectionWrapper = styled.section`
    padding: 50px 0;

    @media screen and (max-width: 1000px) {
        & ul {
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 30px;
        }
    }

    @media screen and (max-width: 600px) {
        & ul {
            grid-template-columns: 1fr;
        }

        & li {
            max-width: 80%;
        }

        & p {
            font-size: 16px;
        }
    }
`

export const FeaturesSectionTitle = styled.h2`
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

export const FeaturesSectionList = styled.ul`
    list-style: none;
    padding: 0;
    margin: 0;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 25px;
`

export const FeaturesSectionItem = styled.li`
    text-align: center;
    margin: 0 auto;

`

export const FeaturesSectionItemTitle = styled.h3`
    font-size: 20px;
`

export const FeaturesSectionItemDesc = styled.p`
    font-size: 18px;
`