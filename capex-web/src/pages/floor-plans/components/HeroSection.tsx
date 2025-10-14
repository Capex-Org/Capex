import { Home, Building, Car, Users, Zap, Star } from "lucide-react";
import SectionWrapper from "@/pages/home/components/SectionWrapper";

const HeroSection = () => {
  const icons = [
    { icon: Home, label: "Studio" },
    { icon: Building, label: "ADU" },
    { icon: Car, label: "Garage" },
    { icon: Users, label: "Family" },
    { icon: Zap, label: "Modern" },
    { icon: Star, label: "Premium" },
  ];

  return (
    <div className="relative py-8">
      <SectionWrapper
        rotateLeft={25}
        rotateRight={60}
        leftX="-30%"
        leftY="-30%"
        rightX="40%"
        rightY="30%"
        leftWidth="600px"
        leftHeight="600px"
        rightWidth="600px"
        rightHeight="600px"
      >
        {/* Half Circle Decorations */}

        <div className="max-w-6xl mx-auto text-center relative z-10">
          {/* Main Title */}
          <h1 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Affordable ADU & Garage Conversion Plans
          </h1>

          {/* Description */}
          <p className="text-lg text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
            Browse our collection of pre-designed plans tailored for small
            spaces, studios and accessory dwelling units. Filter by size, type
            or price to find your perfect match.
          </p>

          {/* Icon Row */}
          <div className="flex flex-wrap justify-center gap-6">
            {icons.map((item, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-white"
              >
                <div className="w-12 h-12 flex items-center justify-center mb-2">
                  <item.icon className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
};

export default HeroSection;
