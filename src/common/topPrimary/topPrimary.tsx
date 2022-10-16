import { useAppSelector } from "../../redux/hooks"
import { BackButton } from "../backButton/backButton"
import { TopPrimaryTitle, TopPrimaryWrapper } from "./topPrimary.style"

interface text {
    text: string
}
export function TopPrimary({text}: text) {
    const theme = useAppSelector(state =>  state.theme)
    return (
        <TopPrimaryWrapper>
            <BackButton color={theme === "light" ? "#000" : "#fff"} width="20px" />
            <TopPrimaryTitle>{text}</TopPrimaryTitle>
        </TopPrimaryWrapper>
    )
}
