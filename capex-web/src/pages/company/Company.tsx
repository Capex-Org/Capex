import OurStorySection from "./components/OurStorySection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import TestimonialSection from "./components/TestimonialSection";

const Company = () => {
  return (
    <>
      <div className="section-content section-white bg-white">
        {/* Our Story Section */}
        <OurStorySection />

        {/* Services Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />
      </div>

      {/* Testimonial Section */}
      <TestimonialSection />
      <div className="section-content section-white">
        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default Company;
