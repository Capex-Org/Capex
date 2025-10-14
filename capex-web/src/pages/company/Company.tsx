import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import OurStorySection from "./components/OurStorySection";
import ServicesSection from "./components/ServicesSection";
import TeamSection from "./components/TeamSection";
import ContactSection from "./components/ContactSection";
import TestimonialSection from "./components/TestimonialSection";

const Company = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if there's a hash in the URL and scroll to that section
    if (location.hash === "#contact-section") {
      // Small delay to ensure the page has loaded
      setTimeout(() => {
        const contactSection = document.getElementById("contact-section");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100);
    }
  }, [location.hash]);

  return (
    <>
      <div className=" section-white bg-white">
        {/* Our Story Section */}
        <OurStorySection />

        {/* Services Section */}
        <ServicesSection />

        {/* Team Section */}
        <TeamSection />
      </div>

      {/* Testimonial Section */}
      <TestimonialSection />
      <div className=" section-white">
        {/* Contact Section */}
        <ContactSection />
      </div>
    </>
  );
};

export default Company;
