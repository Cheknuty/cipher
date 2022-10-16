import React, { useState } from "react";
import { Container } from "../../common/container/container";
import { TopPrimary } from "../../common/topPrimary/topPrimary";
import { useAppSelector } from "../../redux/hooks";
import { ROT } from "../../utils/sym/ROT";
import { SymCiphersBox, SymCiphersDropDown, SymCiphersDropDownItem, SymCiphersDropDownList, SymCiphersInput, SymCiphersKey, SymCiphersSelect, SymCiphersWrapper } from "./symCiphers.style";

export function SymCiphers() {
    const lang = useAppSelector(state => state.lang)
    const [value, setValue] = useState("")
    const [specValue, setSpecValue] = useState("")
    const [cipher, setCipher] = useState<"ROT" | "AES">("ROT")
    const [key, setKey] = useState("")
    const [drop, setDrop] = useState(false)

    function inputHandle(e: React.FormEvent<HTMLTextAreaElement>) {
        setValue(e.currentTarget.value)
        setSpecValue(ROT(e.currentTarget.value, Number(key), "encrypt"))
    }

    function keyHandle(e: React.FormEvent<HTMLInputElement>) {
        setSpecValue(ROT(value, Number(e.currentTarget.value), "encrypt"))
        setKey(e.currentTarget.value)
    }

    function cipherHandle(e: React.MouseEvent<HTMLLIElement, MouseEvent>) {
        switch(e.currentTarget.textContent) {
            case "AES": setCipher("AES"); break
            case "ROT": setCipher("ROT"); break
        }
        
    }

    function dropHandle(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
        setDrop(!drop)
    }

    return (
        <Container>
            <TopPrimary
                text={lang === "eng" ? "Symmetric Ciphers" :
                lang === "uzb" ? "Simmetrik Shifral" : "Cиммтеричные шифры"}
            />
            <SymCiphersWrapper>
                <SymCiphersBox>
                    <SymCiphersKey placeholder="key" value={key} onInput={keyHandle} />
                </SymCiphersBox>
                <SymCiphersInput onChange={inputHandle} value={value} placeholder="Text" />
                <SymCiphersDropDown>
                    <SymCiphersSelect type="button" onClick={dropHandle}>{cipher}</SymCiphersSelect>
                    <SymCiphersDropDownList className={drop ? "drop" : ""}>
                        <SymCiphersDropDownItem className={cipher === "ROT" ? "active-cipher" : ""} onClick={cipherHandle}>ROT</SymCiphersDropDownItem>
                        {/* <SymCiphersDropDownItem className={cipher === "AES" ? "active-cipher" : ""} onClick={cipherHandle}>AES</SymCiphersDropDownItem> */}
                    </SymCiphersDropDownList>
                </SymCiphersDropDown>
                <SymCiphersInput readOnly value={specValue} />
            </SymCiphersWrapper>
        </Container>
    )
}