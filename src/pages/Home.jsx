import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
// import { SelectedWork } from "../components/SelectedWork";
import { ShowReelSection } from "../components/ShowReelSection";
import { SeeMoreWork } from "../components/SeeMoreWork";



export const Home = () => {
    return (
        <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
            <main>
                <HeroSection />
                <ShowReelSection />
                {/* <SelectedWork items={categories?.movies?.items?.slice(0, 6)} /> */}
                <AboutSection />
                <SeeMoreWork />
            </main>
        </div>
    );
}