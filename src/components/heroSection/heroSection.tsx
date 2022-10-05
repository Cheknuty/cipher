import { Container } from "../../common/container/container";
import { HeroSectionLogo, HeroSectionLogoIcon, HeroSectionLogoTitle, HeroSectionMessage, HeroSectionWrapper } from "./heroSection.style";
import Logo from "../../assets/img/logo.png"
import { ButtonPrimary } from "../buttonPrimary/buttonPrimary";
import { useAppSelector } from "../../redux/hooks";

export function HeroSection() {
    const lang = useAppSelector(state => state.lang)
    return (
        <HeroSectionWrapper>
            <Container>
                <HeroSectionLogo>
                    <HeroSectionLogoIcon width="150" src={Logo}  />
                    <HeroSectionLogoTitle>CIPHER</HeroSectionLogoTitle>
                </HeroSectionLogo>
                <HeroSectionMessage>
                    {
                        lang === "eng" ? 
                        `Hey! This application was created for 
                        the study and development of cryptography in particular ciphers` :
                        lang === "uzb" ?
                        `Salom! Ushbu ilova kriptografiyani, xususan, 
                        shifrlarni o'rganish va rivojlantirish uchun yaratilgan` :
                        `Привет! Это приложение было создано для
                        изучение и развитие криптографии в частности  шифров`
                    }
                </HeroSectionMessage>
                <ButtonPrimary text={
                    lang === "eng" ? "Get Started": 
                    lang === "uzb" ? "Boshlash" : "Начать"
                }/>
            </Container>
        </HeroSectionWrapper>
    )
}