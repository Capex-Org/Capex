import { ChevronLeft, ChevronRight } from "lucide-react";
import StarRating from "@/components/common/StarRating";
import { motion, AnimatePresence } from "framer-motion";

interface Testimonial {
  name: string;
  company: string;
  rating: number;
  text: string;
  avatar: string;
}

interface TestimonialCardProps {
  testimonials: Testimonial[];
  selectedTestimonial: number;
  onPrev: () => void;
  onNext: () => void;
}

const TestimonialCard = ({
  testimonials,
  selectedTestimonial,
  onPrev,
  onNext,
}: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 sm:p-8 shadow-lg min-h-[320px] flex flex-col w-full max-w-[640px] mx-auto overflow-hidden">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-yellow-400">
            <AnimatePresence mode="wait">
              <motion.img
                key={selectedTestimonial}
                src={testimonials[selectedTestimonial].avatar}
                alt={testimonials[selectedTestimonial].name}
                className="w-full h-full object-cover"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              />
            </AnimatePresence>
          </div>
          <div>
            <AnimatePresence mode="wait">
              <motion.h4
                key={`name-${selectedTestimonial}`}
                className="font-semibold text-gray-900 text-lg"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                {testimonials[selectedTestimonial].name}
              </motion.h4>
            </AnimatePresence>
            <AnimatePresence mode="wait">
              <motion.p
                key={`company-${selectedTestimonial}`}
                className="text-gray-600 text-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3, ease: "easeInOut", delay: 0.1 }}
              >
                {testimonials[selectedTestimonial].company}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>

        {/* Star Rating */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`rating-${selectedTestimonial}`}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut", delay: 0.2 }}
          >
            <StarRating rating={testimonials[selectedTestimonial].rating} />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Review Text */}
      <div className="flex-1 flex items-center">
        <AnimatePresence mode="wait">
          <motion.p
            key={`text-${selectedTestimonial}`}
            className="text-gray-700 leading-relaxed text-left break-words text-sm sm:text-base"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeInOut", delay: 0.3 }}
          >
            {testimonials[selectedTestimonial].text}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Navigation */}
      <div className="flex justify-center gap-4 mt-6 flex-wrap">
        <motion.button
          onClick={onPrev}
          className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </motion.button>
        <motion.button
          onClick={onNext}
          className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </motion.button>
      </div>
    </div>
  );
};

export default TestimonialCard;
