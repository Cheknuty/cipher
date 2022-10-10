import { Link } from "react-router-dom"
import { ButtonPrimaryWrapper } from "./buttonPrimary.style"

interface IText {
    text: string;
    color?: string;
    backgroundColor?: string;
    link: string;
}
export function ButtonPrimary({text, color, backgroundColor, link}: IText) {
    return (
        <ButtonPrimaryWrapper style={{backgroundColor}}>
            <Link to={link} style={{color}}>{text}</Link>
        </ButtonPrimaryWrapper>
    )
}