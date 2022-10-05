import { useAppDispatch } from "../../redux/hooks";
import { langToggle } from "../../redux/slice/langSlice";
import { LangToggleButton, LangToggleWrapper } from "./langToggle.style";

export function LangToggle() {
    const dispatch = useAppDispatch()
    return (
        <LangToggleWrapper>
            <LangToggleButton onClick={() => dispatch(langToggle("eng"))}>ENG</LangToggleButton>
            <LangToggleButton onClick={() => dispatch(langToggle("uzb"))}>UZB</LangToggleButton>
            <LangToggleButton onClick={() => dispatch(langToggle("rus"))}>RUS</LangToggleButton>
        </LangToggleWrapper>
    )
}