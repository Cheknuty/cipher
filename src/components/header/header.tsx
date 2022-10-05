import { HeaderBox, HeaderLogo, HeaderWrapper } from "./header.style";
import LogoLight from "../../assets/img/logoLight.png"
import LogoDark from "../../assets/img/logoDark.png"
import { useAppSelector } from "../../redux/hooks";
import { Container } from "../../common/container/container";
import { NavBar } from "../navBar/navBar";
import { ThemeToggler } from "../themeToggler/themeToggler";
import { Link } from "react-router-dom";
import { LangToggle } from "../langToggle/langToggle";

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
                </HeaderBox>
            </Container>
        </HeaderWrapper>
    )
}