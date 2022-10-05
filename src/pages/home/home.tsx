import { FeaturesSection } from "../../components/featuresSection/featuresSection";
import { HeroSection } from "../../components/heroSection/heroSection";
import { HomeWrapper } from "./home.style";
export function Home() {
    return (
        <HomeWrapper>
            <HeroSection />
            <FeaturesSection />
        </HomeWrapper>
    )
}