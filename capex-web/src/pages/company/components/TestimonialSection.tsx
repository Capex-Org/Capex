import { useState } from "react";
import {
  companyRvBg,
  recentWork1,
  recentWork2,
  recentWork3,
} from "@/lib/appData";
import TestimonialCard from "./TestimonialCard";
import { motion } from "framer-motion";

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

const TestimonialSection = () => {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0);

  const testimonials: Testimonial[] = [
    {
      name: "Arlene McCoy",
      company: "Сарах",
      rating: 5,
      avatar: recentWork1,
      text: "Mixed feelings but adequate results. Pros: technical skills & Intuition about colors, fonts, & layout styles. Cons: Communication, English, Detail Orientation, Creativity, Following the Brief (Style guide, sample website, text requested). Off the mark 2 day delivery, and 5-days of revision for one landing (good) page.",
    },
    {
      name: "John Smith",
      company: "TechCorp",
      rating: 5,
      avatar: recentWork2,
      text: "Excellent work! The team delivered exactly what we needed with great attention to detail. Highly recommended for any architectural project.",
    },
    {
      name: "Sarah Johnson",
      company: "DesignStudio",
      rating: 4,
      avatar: recentWork3,
      text: "Professional service and creative solutions. The 3D visualization really helped us understand the final design before construction.",
    },
  ];

  const nextTestimonial = () => {
    setSelectedTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setSelectedTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section
      className="py-16 lg:py-24 relative h-full min-h-[550px] bg-gray-800"
      style={{
        backgroundImage: `url(${companyRvBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="section-content">
        <div className="relative w-full mx-auto px-4 sm:px-5 md:px-10 lg:px-12 h-full flex items-center justify-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
            {/* Left Side - Heading */}
            <div className="text-white text-center lg:text-left">
              <motion.h3
                className="text-3xl lg:text-4xl font-bold leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  ease: "easeOut",
                  delay: 0.2,
                }}
              >
                What our client says about our services.
              </motion.h3>
            </div>

            {/* Right Side - Testimonial Card */}
            <div className="flex justify-center lg:justify-start">
              <div className="w-full">
                <TestimonialCard
                  testimonials={testimonials}
                  selectedTestimonial={selectedTestimonial}
                  onPrev={prevTestimonial}
                  onNext={nextTestimonial}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
