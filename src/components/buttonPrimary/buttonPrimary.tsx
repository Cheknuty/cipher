import { Link } from "react-router-dom"
import { ButtonPrimaryWrapper } from "./buttonPrimary.style"

interface IText {
    text: string
}
export function ButtonPrimary({text}: IText) {
    return (
        <ButtonPrimaryWrapper>
            <Link to="/ciphers">{text}</Link>
        </ButtonPrimaryWrapper>
    )
}