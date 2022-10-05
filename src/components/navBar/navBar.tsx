import { NavLink } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import { NavBarItem, NavBarWrapper } from "./navBar.style";

export function NavBar() {
    const lang = useAppSelector(state => state.lang)
    return (
        <NavBarWrapper>
            <NavBarItem>
                <NavLink end={true} to="/">{lang === "eng" ? "Home" : lang === "uzb" ? "Asosiy" : "Главная"}</NavLink>
            </NavBarItem>
            <NavBarItem>
                <NavLink to="/ciphers">{lang === "eng" ? "Chipers" : lang === "uzb" ? "Shifrlar" : "Шифры"}</NavLink>
            </NavBarItem>
            <NavBarItem>
                <NavLink to="about-us">{lang === "eng" ? "About Us" : lang === "uzb" ? "Biz haqimizda" : "О нас"}</NavLink>
            </NavBarItem>
        </NavBarWrapper>
    )
}