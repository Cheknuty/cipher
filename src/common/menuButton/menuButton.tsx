import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { drawerToggle } from "../../redux/slice/drawerSlice";
import { Burger } from "../burger/burger";
import { MenubuttonWrapper } from "./menuButton.style";

export function MenuButton() {
    const theme = useAppSelector(state => state.theme)
    const dispatch = useAppDispatch()
    return (
        <MenubuttonWrapper onClick={() => dispatch(drawerToggle(null))}>
            <Burger width={30} color={theme === "light" ? "#000" : "#FFF"} />
        </MenubuttonWrapper>
    )
}