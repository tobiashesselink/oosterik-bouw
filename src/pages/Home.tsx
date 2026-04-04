import AboutStatsSection from "../components/AboutStatsSection";
import ClosingCtaSection from "../components/ClosingCtaSection";
import ContactSection from "../components/ContactSection";
import DienstenSection from "../components/DienstenSection";
import HeroSection from "../components/HeroSection";
import ProjectenSliderSection from "../components/ProjectenSliderSection";
import WaaromOosterikSection from "../components/WaaromOosterikSection";
import WerkwijzeSection from "../components/WerkwijzeSection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <WaaromOosterikSection />
      <DienstenSection />
      <AboutStatsSection />
      <ProjectenSliderSection />
      <WerkwijzeSection />
      <ClosingCtaSection />
      <ContactSection />
    </>
  );
}
