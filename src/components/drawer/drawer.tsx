import { NavLink } from "react-router-dom"
import { MenuButton } from "../../common/menuButton/menuButton"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { drawerToggle } from "../../redux/slice/drawerSlice"
import { DrawerNav, DrawerWrapper } from "./drawer.style"

interface IDrawer {
    active: boolean
}
export function Drawer({active}: IDrawer) {
    const lang = useAppSelector(state => state.lang)
    const dispatch = useAppDispatch()
    return (
        <DrawerWrapper data-active={active}>
            <MenuButton />
            <DrawerNav>
                <NavLink onClick={() => dispatch(drawerToggle(null))} end={true} to="/">{lang === "eng" ? "Home" : lang === "uzb" ? "Asosiy" : "Главная"}</NavLink>
                <NavLink onClick={() => dispatch(drawerToggle(null))} to="/ciphers">{lang === "eng" ? "Chipers" : lang === "uzb" ? "Shifrlar" : "Шифры"}</NavLink>
                <NavLink onClick={() => dispatch(drawerToggle(null))} to="about-us">{lang === "eng" ? "About Us" : lang === "uzb" ? "Biz haqimizda" : "О нас"}</NavLink>
            </DrawerNav>
        </DrawerWrapper>
    )
}