import styled from "styled-components";

export const TopPrimaryWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
`

export const TopPrimaryTitle = styled.h1`
    margin: 0;
    max-width: 50%;
    width: 100%;
    text-align: left;
    font-weight: 700;
    font-size: 22px;

    @media screen and (max-width: 600px) {
        max-width: max-content;
        font-size: 20px;
        
    }
`