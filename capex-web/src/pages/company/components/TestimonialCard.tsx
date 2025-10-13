import { ChevronLeft, ChevronRight } from "lucide-react";
import StarRating from "@/components/common/StarRating";

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
    <div className="bg-white rounded-lg p-8 shadow-lg min-h-[300px] flex flex-col">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="w-16 h-16 rounded-full overflow-hidden mr-4 border-2 border-yellow-400">
            <img
              key={selectedTestimonial}
              src={testimonials[selectedTestimonial].avatar}
              alt={testimonials[selectedTestimonial].name}
              className="w-full h-full object-cover transition-opacity duration-300"
            />
          </div>
          <div>
            <h4
              key={`name-${selectedTestimonial}`}
              className="font-semibold text-gray-900 text-lg transition-opacity duration-300"
            >
              {testimonials[selectedTestimonial].name}
            </h4>
            <p
              key={`company-${selectedTestimonial}`}
              className="text-gray-600 text-sm transition-opacity duration-300"
            >
              {testimonials[selectedTestimonial].company}
            </p>
          </div>
        </div>

        {/* Star Rating */}
        <StarRating
          rating={testimonials[selectedTestimonial].rating}
          key={`rating-${selectedTestimonial}`}
        />
      </div>

      {/* Review Text */}
      <div className="flex-1 flex items-center">
        <p
          key={`text-${selectedTestimonial}`}
          className="text-gray-700 leading-relaxed text-left transition-opacity duration-300"
        >
          {testimonials[selectedTestimonial].text}
        </p>
      </div>

      {/* Navigation */}
      <div className="flex justify-center space-x-4 mt-6">
        <button
          onClick={onPrev}
          className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 text-gray-600" />
        </button>
        <button
          onClick={onNext}
          className="w-10 h-10 rounded-full border border-gray-300 bg-white hover:bg-gray-50 transition-colors flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 text-gray-600" />
        </button>
      </div>
    </div>
  );
};

export default TestimonialCard;
