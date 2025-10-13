import { Home, Ruler, Users } from "lucide-react";
import type { FloorPlan } from "@/lib/appData";

interface FloorPlanDetailsProps {
  plan: FloorPlan;
}

const FloorPlanDetails = ({ plan }: FloorPlanDetailsProps) => {
  return (
    <div className="space-y-6">
      {/* Main Image */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-full object-cover"
        />

        {/* Type Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-white/90 text-gray-700 text-sm px-3 py-1 rounded-full font-medium">
            {plan.type}
          </span>
        </div>

        {/* Price Badge */}
        <div className="absolute top-4 right-4">
          <span className="bg-amber-500 text-white text-sm px-3 py-1 rounded-full font-medium">
            ${plan.price.toLocaleString()}
          </span>
        </div>
      </div>

      {/* Navigation Dots */}
      <div className="flex justify-center space-x-2">
        <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
        <div className="w-2 h-2 bg-gray-300 rounded-full"></div>
      </div>

      {/* Specifications - Horizontal Layout */}
      <div className="flex items-center justify-center space-x-8">
        <div className="flex items-center gap-2 text-gray-600">
          <Home className="w-5 h-5" />
          <span className="text-sm font-medium">{plan.sqft} sqft</span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Users className="w-5 h-5" />
          <span className="text-sm font-medium">
            Beds/Bath {plan.beds}/{plan.bathrooms}
          </span>
        </div>
        <div className="flex items-center gap-2 text-gray-600">
          <Ruler className="w-5 h-5" />
          <span className="text-sm font-medium">20'-0" x 20'-0"</span>
        </div>
      </div>

      {/* Description */}
      <div className="text-center">
        <p className="text-gray-700 leading-relaxed">
          A top seller, this studio offers a spacious common area with a closet,
          living room, and kitchenette, along with a full bathroom and laundry
          closet, all while utilizing existing garage plumbing.
        </p>
      </div>
    </div>
  );
};

export default FloorPlanDetails;
