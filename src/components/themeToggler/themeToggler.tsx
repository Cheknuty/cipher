import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { themeToggle } from "../../redux/slice/themeSlice";
import { ThemeTogglerWrapper } from "./themeToggler.style";
import { MdLightMode, MdDarkMode } from "react-icons/md"

export function ThemeToggler() {
    const dispatch = useAppDispatch()
    const theme = useAppSelector(state => state.theme)
    return (
        <ThemeTogglerWrapper onClick={() => dispatch(themeToggle("a"))}>
            {
                theme === "light" ?
                <MdLightMode color="#000" fontSize={20} /> :
                <MdDarkMode color="#FFF" fontSize={20} />
            }
        </ThemeTogglerWrapper>
    )
}