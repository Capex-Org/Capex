import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

const OurStorySection = () => {
  return (
    <div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Content */}
        <div className="space-y-6">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Our Story the Journey That's Shaped{" "}
            <span className="text-amber-600">Our Success</span>
          </h1>

          <p className="text-lg text-gray-600 leading-relaxed">
            Work directly with a principal architect. We blend award winning
            design with practical, on-site support and we show it all in 3D so
            you're confident before a single wall moves.
          </p>

          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg"
            size="lg"
          >
            <ArrowUpRight className="w-5 h-5 mr-2" />
            Book a Consultation
          </Button>
        </div>

        {/* Image */}
        <div className="relative">
          <div className="aspect-[4/3] rounded-lg overflow-hidden">
            <img
              src="/src/assets/images/aboutus.webp"
              alt="Modern architecture building"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStorySection;
