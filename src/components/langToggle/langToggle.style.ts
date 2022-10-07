import styled from "styled-components";

export const LangToggleWrapper = styled.div`
    position: relative;

    .active {
        display: grid;
    }

    .true {
        color: ${p => p.theme.colors.accent};
    }
`

export const LangToggleButton = styled.button`
    border: none;
    margin: 0;
    padding: 0;
    background-color: #FFF;
    padding: 4px 10px;
    cursor: pointer;
`

export const LangToggleList = styled.div`
    position: absolute;
    left: -8px;
    top: 50px;
    grid-template-rows: repeat(3, 30px);
    border-radius: 3px;
    overflow: hidden;
    display: none;

`