import { HeaderBox, HeaderLogo, HeaderMenu, HeaderWrapper } from "./header.style";
import LogoLight from "../../assets/img/logoLight.png"
import LogoDark from "../../assets/img/logoDark.png"
import { useAppSelector } from "../../redux/hooks";
import { Container } from "../../common/container/container";
import { NavBar } from "../navBar/navBar";
import { ThemeToggler } from "../themeToggler/themeToggler";
import { Link } from "react-router-dom";
import { LangToggle } from "../langToggle/langToggle";
import { Burger } from "../../common/burger/burger";

export function Header() {
    const theme = useAppSelector(state => state.theme)
    return (
        <HeaderWrapper id="header">
            <Container>
                <Link to="/">
                    <HeaderLogo src={theme === "light" ? LogoLight : LogoDark} width={100} />
                </Link>
                <HeaderBox>
                    <NavBar />
                    <ThemeToggler />
                    <LangToggle />
                    <HeaderMenu>
                        <Burger width={30} color={theme === "light" ? "#000" : "#FFF"} />
                    </HeaderMenu>
                </HeaderBox>
            </Container>
        </HeaderWrapper>
    )
}