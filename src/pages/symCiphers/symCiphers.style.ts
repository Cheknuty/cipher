import styled from "styled-components";

export const SymCiphersWrapper = styled.form`
    text-align: center;
    padding: 10px 0 40px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
`
export const SymCiphersInput = styled.textarea`
    width: 100%;
    height: 150px;
    max-width: 600px;
    min-width: 200px;
    max-height: 200px;
    min-height: 100px;
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.text};
    border: none;
    outline: none;
    margin: 0;
    padding: 4px;
    border-radius: 3px;

    &::placeholder {
        font-size: 16px;
    }
`

export const SymCiphersBox = styled.div`
    width: 100%;
`

export const SymCiphersKey = styled.input`
    max-width: 600px;
    width: 100%;
    border: none;
    outline: none;
    background-color: ${p => p.theme.colors.primary};
    color: ${p => p.theme.colors.text};
    border-radius: 3px;
    margin: 0;
    padding: 4px;
`

export const SymCiphersDropDown = styled.div`
    position: relative;
    width: max-content;
    margin: 0 auto;
    padding: 0 3px;
    width: 37px;

    .drop {
        display: block;
    }
`

export const SymCiphersSelect = styled.button`
    background-color: transparent;
    border: none;
    margin: 0;
    padding: 0;
    color: ${p => p.theme.colors.text};
`

export const SymCiphersDropDownList = styled.ul`
    display: none;
    list-style: none;
    margin: 0;
    padding: 0;
    position: absolute;
    left: 0;
    top: 26px;

    & .active-cipher {
        color: ${p => p.theme.colors.accent};
    }
`

export const SymCiphersDropDownItem  = styled.li`
    cursor: pointer;
    padding: 5px 3px;
    background-color: ${p => p.theme.colors.secondary};
`