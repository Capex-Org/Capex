import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import HeroSection from "./components/HeroSection";
import FilterBar from "./components/FilterBar";
import FloorPlanCard from "./components/FloorPlanCard";
import {
  floorPlans,
  getFloorPlansByType,
  getFloorPlansBySize,
  getFloorPlansByPriceRange,
  searchFloorPlans,
} from "@/lib/appData";
import type { FloorPlan } from "@/lib/appData";

const FloorPlans = () => {
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    type: "Any",
    size: "Any",
    price: "Any",
    sort: "Relevance",
    search: "",
  });

  // Filter and sort floor plans
  const filteredPlans = useMemo(() => {
    let result = floorPlans;

    // Apply filters
    if (filters.type !== "Any") {
      result = getFloorPlansByType(filters.type);
    }
    if (filters.size !== "Any") {
      result = result.filter((plan) =>
        filters.type === "Any"
          ? plan.size === filters.size
          : result.some((p) => p.id === plan.id && p.size === filters.size)
      );
    }
    if (filters.price !== "Any") {
      result = result.filter((plan) =>
        filters.type === "Any" && filters.size === "Any"
          ? getFloorPlansByPriceRange(filters.price).some(
              (p) => p.id === plan.id
            )
          : result.some(
              (p) =>
                p.id === plan.id &&
                getFloorPlansByPriceRange(filters.price).some(
                  (pricePlan) => pricePlan.id === p.id
                )
            )
      );
    }
    if (filters.search) {
      result = result.filter((plan) =>
        searchFloorPlans(filters.search).some((p) => p.id === plan.id)
      );
    }

    // Apply sorting
    switch (filters.sort) {
      case "Price Low to High":
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case "Price High to Low":
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case "Size Small to Large":
        result = [...result].sort((a, b) => a.sqft - b.sqft);
        break;
      case "Size Large to Small":
        result = [...result].sort((a, b) => b.sqft - a.sqft);
        break;
      default:
        // Keep original order for relevance
        break;
    }

    return result;
  }, [filters]);

  const handleFilterChange = (filterType: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [filterType]: value,
    }));
  };

  const handleClearAll = () => {
    setFilters({
      type: "Any",
      size: "Any",
      price: "Any",
      sort: "Relevance",
      search: "",
    });
  };

  const handleViewDetails = (plan: FloorPlan) => {
    // Navigate to plan details page or show modal
    console.log("View details for:", plan.name);
    // TODO: Implement plan details view
  };

  const handleStartEstimate = (plan: FloorPlan) => {
    // Navigate to pricing page with pre-selected plan
    navigate("/pricing", { state: { selectedPlan: plan } });
  };

  return (
    <section className="section-white">
      <div className="section-content">
        <div className="min-h-screen bg-gray-50">
          {/* Hero Section */}
          <HeroSection />

          {/* Filter Bar */}
          <FilterBar
            onTypeChange={(type) => handleFilterChange("type", type)}
            onSizeChange={(size) => handleFilterChange("size", size)}
            onPriceChange={(price) => handleFilterChange("price", price)}
            onSortChange={(sort) => handleFilterChange("sort", sort)}
            onSearchChange={(search) => handleFilterChange("search", search)}
            onClearAll={handleClearAll}
            searchQuery={filters.search}
          />

          {/* Main Content */}
          <div className="py-8">
            {/* Results Header */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                Floor Plans
              </h2>
              <p className="text-gray-600">
                Showing {filteredPlans.length} of {floorPlans.length} plans
              </p>
            </div>

            {/* Floor Plans Grid */}
            {filteredPlans.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPlans.map((plan) => (
                  <FloorPlanCard
                    key={plan.id}
                    plan={plan}
                    onViewDetails={handleViewDetails}
                    onStartEstimate={handleStartEstimate}
                  />
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <div className="text-gray-400 mb-4">
                  <svg
                    className="w-16 h-16 mx-auto"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1}
                      d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  No floor plans found
                </h3>
                <p className="text-gray-600 mb-6">
                  Try adjusting your filters or search terms to find what you're
                  looking for.
                </p>
                <Button
                  variant="default"
                  size="lg"
                  onClick={handleClearAll}
                  className="bg-amber-600 hover:bg-amber-700"
                >
                  Clear All Filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FloorPlans;
