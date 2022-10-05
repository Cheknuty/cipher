import { Container } from "../../common/container/container";
import { useAppSelector } from "../../redux/hooks";
import { FooterCopyright, FooterLink, FooterLogo, FooterSocial, FooterSocialItem, FooterWrapper } from "./footer.style";
import LogoDark from "../../assets/img/logoDark.png"
import LogoLight from "../../assets/img/logoLight.png"
import { BsTelegram, BsLinkedin, BsGithub } from "react-icons/bs"
import { AiFillInstagram } from "react-icons/ai"
import { FiGitlab } from "react-icons/fi"
export function Footer() {
    const theme = useAppSelector(state => state.theme)
    const color = theme === "light" ? "#000" : "#fff"
    return (
        <FooterWrapper>
            <Container>
                <FooterLink href="#header">
                    <FooterLogo src={theme === "light" ? LogoLight : LogoDark} width={150} />
                </FooterLink>
                <FooterSocial>

                    <FooterSocialItem href="https://t.me/Cheknuty" target={"_blank"}>
                        <BsTelegram color={color} fontSize={35} />
                    </FooterSocialItem>

                    <FooterSocialItem href="https://www.instagram.com/xikmatjon_/" target={"_blank"}>
                        <AiFillInstagram color={color} fontSize={35} />
                    </FooterSocialItem>

                    <FooterSocialItem href="https://www.linkedin.com/in/khikmatjon-azizov-1865b024a/" target={"_blank"}>
                        <BsLinkedin color={color} fontSize={35} />
                    </FooterSocialItem>

                    <FooterSocialItem href="https://github.com/Cheknuty" target={"_blank"}>
                        <BsGithub color={color} fontSize={35} />
                    </FooterSocialItem>

                    <FooterSocialItem href="https://gitlab.com/azizovxikmatjon04" target={"_blank"}>
                        <FiGitlab color={color} fontSize={35} />
                    </FooterSocialItem>

                </FooterSocial>
                <FooterCopyright>Copyright {`\u00A9`} 2022 Azizov Khikmatjon</FooterCopyright>
            </Container>
        </FooterWrapper>
    )
}