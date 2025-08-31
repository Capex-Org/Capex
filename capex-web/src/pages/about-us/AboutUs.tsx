import SectionHeader from "@/components/common/SectionHeader";
import ImageSection from "./components/ImageSection";
import MotionText from "@/components/common/MotionText";
import StatsSection from "./components/StatsSection";

export default function AboutUs() {
  return (
    <section className="bg-white py-16 w-full mx-auto px-4 sm:px-5 md:px-10 lg:px-12">
      <div className="w-full max-w-[1559px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10">
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
    </section>
  );
}
