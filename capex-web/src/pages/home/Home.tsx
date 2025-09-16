import AboutUs from "../about-us/AboutUs";
import RecentWork from "../recent-work/recent-work";
import HeroSection from "./components/HeroSection";
import SectionWrapper from "./components/SectionWrapper";

const Home = () => {
  return (
    <>
      <SectionWrapper>
        <HeroSection />
      </SectionWrapper>
      <AboutUs />
      <RecentWork />
    </>
  );
};

export default Home;
