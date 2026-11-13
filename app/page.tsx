
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import Carousel from "./components/Carousel";
import ContactSection from "./components/ContactSection";
import CtaSection from "./components/CtaSection";
import FeaturedServices from "./components/FeaturedServices";
import Highlights from "./components/Highlights";
import MarqueeText from "./components/MarqueeText";
import OurApproach from "./components/OurApproach";
import PathwaysSection from "./components/PathwaysSection";
import "./Home.css";

export default function Home() {
  return (
    <main>
      <Carousel/>
      <Highlights/>
      <AboutSection/>
      <MarqueeText/>
      <PathwaysSection/>
      <OurApproach/>
      <FeaturedServices/>
      <ContactSection/>
      <BlogSection/>
      <CtaSection/>

    </main>
  );
}
