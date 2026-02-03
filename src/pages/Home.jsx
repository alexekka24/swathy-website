import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
// import { SelectedWork } from "../components/SelectedWork";
import { ShowReelSection } from "../components/ShowReelSection";
import { SeeMoreWork } from "../components/SeeMoreWork";
import { MarqueeComponent } from "../components/MarqueeComponent";
import { HeroToShowreel } from "../components/HeroToShowReel";



export const Home = () => {
    return (
        <div className="cinematic-bg min-h-screen bg-background text-foreground overflow-x-hidden">
            <main>
                {/* <HeroSection /> */}
                {/* <ShowReelSection /> */}
                <HeroToShowreel />
                <MarqueeComponent direction="left" speed="20" />
                <MarqueeComponent direction="right" speed="40" />
                <AboutSection />
                <SeeMoreWork />
            </main>
        </div>
    );
}