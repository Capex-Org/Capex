import SectionHeader from "@/components/common/SectionHeader";
import ImageSection from "./components/ImageSection";
import MotionText from "@/components/common/MotionText";
import StatsSection from "./components/StatsSection";
import SolutionsSection from "./components/SolutionsSection";

export default function AboutUs() {
  return (
    <section id="about-us-section" className="section-white">
      <div className="section-content grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Text content */}
        <div>
          <SectionHeader
            eyebrow="ABOUT US"
            title="We help to bring your dream plan to reality"
          />
          <div className="hidden lg:block">
            <MotionText delay={0.2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </MotionText>

            <MotionText delay={0.3}>
              Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
              mauris posuere auctor justo. Habitant proin aliquet volutpat leo
              ultricies.
            </MotionText>
          </div>
        </div>

        <ImageSection />
        <div className="lg:hidden">
          <MotionText delay={0.2}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </MotionText>

          <MotionText delay={0.3}>
            Tempor dolor elementum tellus non ipsum faucibus. Justo, magna
            mauris posuere auctor justo. Habitant proin aliquet volutpat leo
            ultricies.
          </MotionText>
        </div>
      </div>
      <StatsSection />
      <SolutionsSection />
    </section>
  );
}
