import { Container } from "../../common/container/container";
import { TopPrimary } from "../../common/topPrimary/topPrimary";
import { useAppSelector } from "../../redux/hooks";
import { AboutUsDesc, AboutUsWrapper } from "./aboutUs.style";

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
                <AboutUsDesc>
                    {
                        lang === "eng" ?
                        `Greetings, I am a highly skilled frontend developer and I am mostly working with React.
                        I have one year of experience, and I have done a lot of projects.
                        Some of them were just static webpages, and most of them were highly dynamic with a lot of updates, I used Redux to control my application state.
                        I am writing in TypeScript and my code is always clean.
                        I follow all the rules of clean code - variable naming, function length, decomposition of big structures, and reusable rules`
                        :
                        lang === "rus" ?
                        `Приветствую, я высококвалифицированный разработчик интерфейса и в основном работаю с React.
                        У меня есть один год опыта, и я сделал много проектов.
                        Некоторые из них были просто статическими веб-страницами, а большинство из них были очень динамичными с множеством обновлений. Я использовал Redux для управления состоянием своего приложения.
                        Я пишу на TypeScript, и мой код всегда чистый.
                        Я соблюдаю все правила чистого кода: имена переменных, длина функции, декомпозиция больших структур и правила повторного использования.`
                        :
                        `Assalomu alaykum, men yuqori malakali frontend dasturchisiman va men asosan React bilan ishlayman.
                        Mening bir yillik tajribam bor va ko'plab loyihalarni amalga oshirganman.
                        Ulardan ba'zilari shunchaki statik veb-sahifalar edi, men dastur holatini boshqarish uchun Redux-dan foydalanganman.
                        Men TypeScript-da yozaman va mening kodim har doim toza.
                        Men toza kodning barcha qoidalariga rioya qilaman - o'zgaruvchilarni nomlash, funktsiya uzunligi, katta tuzilmalarning parchalanishi va qayta foydalanish qoidalari`
                    }
                </AboutUsDesc>
            </Container>
        </AboutUsWrapper>
    )
}