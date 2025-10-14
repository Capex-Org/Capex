import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import MotionText from "@/components/common/MotionText";
import gallery10 from "@/assets/images/gallery/gallery-10.webp";

const OurStorySection = () => {
  const handleBookConsultation = () => {
    // Scroll to the contact section on the same page
    const contactSection = document.getElementById("contact-section");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <motion.h1
            className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: "easeOut",
              delay: 0.2,
            }}
            viewport={{ once: true }}
          >
            Our Story the Journey That's Shaped{" "}
            <span className="text-primary-600">Our Success</span>
          </motion.h1>

          <MotionText
            delay={0.4}
            className="text-lg text-gray-600 leading-relaxed"
          >
            Work directly with a principal architect. We blend award winning
            design with practical, on-site support and we show it all in 3D so
            you're confident before a single wall moves.
          </MotionText>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              ease: "easeOut",
              delay: 0.6,
            }}
            viewport={{ once: true }}
          >
            <Button onClick={handleBookConsultation} size="lg">
              <ArrowUpRight className="w-5 h-5 mr-2" />
              Book a Consultation
            </Button>
          </motion.div>
        </div>

        {/* Image */}
        <motion.div
          className="relative"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
            delay: 0.3,
          }}
          viewport={{ once: true }}
        >
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src={gallery10}
              alt="Modern architecture building"
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default OurStorySection;
