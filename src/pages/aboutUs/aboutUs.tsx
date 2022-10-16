import { Container } from "../../common/container/container";
import { TopPrimary } from "../../common/topPrimary/topPrimary";
import { useAppSelector } from "../../redux/hooks";
import { AboutUsWrapper } from "./aboutUs.style";

export function AboutUs() {
    const lang = useAppSelector(state => state.lang)
    return (
        <AboutUsWrapper>
            <Container>
                <TopPrimary
                    text={
                        lang === "eng" ? "About us" :
                        lang === "uzb" ? "Biz haqimizda" : "О нас"
                    }
                />
            </Container>
        </AboutUsWrapper>
    )
}