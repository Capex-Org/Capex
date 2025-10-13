import { ArrowUpRight, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { FloorPlan } from "@/lib/appData";

interface FloorPlanCardProps {
  plan: FloorPlan;
  onViewDetails: (plan: FloorPlan) => void;
  onStartEstimate: (plan: FloorPlan) => void;
}

const FloorPlanCard = ({
  plan,
  onViewDetails,
  onStartEstimate,
}: FloorPlanCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      {/* Image */}
      <div className="aspect-[4/3] overflow-hidden">
        <img
          src={plan.image}
          alt={plan.name}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* Content */}
      <div className="p-6">
        {/* Plan Name */}
        <h3 className="text-xl font-bold text-gray-900 mb-2">{plan.name}</h3>

        {/* Description */}
        <p className="text-gray-600 text-sm mb-4 leading-relaxed">
          {plan.description}
        </p>

        {/* Specifications */}
        <div className="flex items-center gap-4 mb-4">
          <div className="flex items-center gap-1">
            <Home className="w-4 h-4 text-gray-500" />
            <span className="text-sm text-gray-700">{plan.sqft} sqft</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-700">{plan.beds} Beds</span>
          </div>
          <div className="flex items-center gap-1">
            <span className="text-sm text-gray-700">
              {plan.bathrooms} Bathroom
            </span>
          </div>
        </div>

        {/* Price */}
        <div className="mb-6">
          <span className="text-lg font-bold text-gray-900">
            $ {plan.price.toLocaleString()} est.
          </span>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            size="default"
            onClick={() => onViewDetails(plan)}
            className="flex-1 border-amber-600 text-amber-600 hover:bg-amber-50"
          >
            View Details
            <ArrowUpRight />
          </Button>
          <Button
            variant="default"
            size="default"
            onClick={() => onStartEstimate(plan)}
            className="flex-1 bg-amber-600 hover:bg-amber-700"
          >
            Start Estimate
            <Home />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FloorPlanCard;
