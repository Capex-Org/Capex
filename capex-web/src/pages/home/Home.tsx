import AboutUs from "../about-us/AboutUs";
import HeroSection from "./components/HeroSection";
import SectionWrapper from "./components/SectionWrapper";

const Home = () => {
  return (
    <>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <AboutUs />
    </>
  );
};

export default Home;
