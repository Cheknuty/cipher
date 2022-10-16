import { Container } from "../../common/container/container";
import { TopPrimary } from "../../common/topPrimary/topPrimary";
import { useAppSelector } from "../../redux/hooks";

export function AsymCiphers() {
    const lang = useAppSelector(state => state.lang)
    return (
        <Container>
            <TopPrimary
                text={lang === "eng" ? "Asymmetric Ciphers" :
                lang === "uzb" ? "Asimmetrik Shifral" : "Асиммтеричные шифры"}
            />
        </Container>
    )
}