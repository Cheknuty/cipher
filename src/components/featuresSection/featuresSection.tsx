import { Container } from "../../common/container/container";
import { Icon1 } from "../../common/icon1/icon1";
import { Icon2 } from "../../common/icon2/icon2";
import { Icon3 } from "../../common/icon3/icon3";
import { Icon4 } from "../../common/icon4/icon4";
import { useAppSelector } from "../../redux/hooks";
import { FeaturesSectionItem, FeaturesSectionItemDesc, FeaturesSectionItemTitle, FeaturesSectionList, FeaturesSectionTitle, FeaturesSectionWrapper } from "./featuresSection.style";

export function FeaturesSection() {
    const theme = useAppSelector(state => state.theme)
    const lang = useAppSelector(state => state.lang)
    return (
        <FeaturesSectionWrapper>
            <FeaturesSectionTitle>
                {
                    lang === "eng" ? "Features":
                    lang === "uzb" ? "Xususiyatlari" : "Фишки"
                }
                
            </FeaturesSectionTitle>
            <Container>
                <FeaturesSectionList>

                    <FeaturesSectionItem>
                        <Icon1 height={60} color={theme === "light" ? "#000" : "#FFF"}/>
                        <FeaturesSectionItemTitle>
                            {
                                lang === "eng" ? "Simple" :
                                lang === "uzb" ? "Sodda" : "Простой"
                            }  
                        </FeaturesSectionItemTitle>
                        <FeaturesSectionItemDesc>
                            {
                                lang === "eng" ?
                                `Due to the fact that the cipher generator is not loaded 
                                with various functions, it is easy to use.` :
                                lang === "uzb" ? 
                                `Shifr generatori turli funktsiyalari bilan 
                                yuklanmaganligi sababli undan foydalanish oson.` :
                                `Из-за того, что шифрогенератор не загружен
                                с различными функциями, он прост в использовании.`

                            }
                        </FeaturesSectionItemDesc>
                    </FeaturesSectionItem>

                    <FeaturesSectionItem>
                        <Icon2 height={60} color={theme === "light" ? "#000" : "#FFF"} />
                        <FeaturesSectionItemTitle>
                            {
                                lang === "eng" ? "Thoughtful" :
                                lang === "uzb" ? "Qulay" : "Продуманный"
                            }  
                        </FeaturesSectionItemTitle>
                        <FeaturesSectionItemDesc>
                            {
                                lang === "eng" ?
                                `A well-thought-out interface allows you to use 
                                the application on an intuitive level.` :
                                lang === "uzb" ? 
                                `Yaxshi o'ylangan interfeys ilovadan intuitiv 
                                darajada foydalanish imkonini beradi.` :
                                `Продуманный интерфейс позволяет пользоваться 
                                приложением на интуитивном уровне.`

                            }
                        </FeaturesSectionItemDesc>
                    </FeaturesSectionItem>

                    <FeaturesSectionItem>
                        <Icon3 height={60} color={theme === "light" ? "#000" : "#FFF"} />
                        <FeaturesSectionItemTitle>
                            {
                                lang === "eng" ? "Powerful" :
                                lang === "uzb" ? "Kuchli" : "Мощный"
                            }    
                        </FeaturesSectionItemTitle>
                        <FeaturesSectionItemDesc>
                            {
                                lang === "eng" ?
                                `Sophisticated encryption algorithm 
                                allows you to work quickly and reliably.` :
                                lang === "uzb" ? 
                                `Murakkab shifrlash algoritmi tez va 
                                ishonchli ishlash imkonini beradi.` :
                                `Сложный алгоритм шифрования позволяет 
                                работать быстро и надежно.`
                            }
                        </FeaturesSectionItemDesc>
                    </FeaturesSectionItem>

                    <FeaturesSectionItem>
                        <Icon4 height={60} color={theme === "light" ? "#000" : "#FFF"} />
                        <FeaturesSectionItemTitle>
                            {
                                lang === "eng" ? "Free" :
                                lang === "uzb" ? "Tekin" : "Бесплатный"
                            }  
                        </FeaturesSectionItemTitle>
                        <FeaturesSectionItemDesc>
                            {
                                lang === "eng" ?
                                `Just a cool feature.` :
                                lang === "uzb" ? 
                                `Shunchaki zo'r xususiyat` :
                                `Просто крутая фишка`
                            }
                        </FeaturesSectionItemDesc>
                    </FeaturesSectionItem>

                </FeaturesSectionList>
            </Container>
        </FeaturesSectionWrapper>
    )
}