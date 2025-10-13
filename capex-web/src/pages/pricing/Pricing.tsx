import { useState, useEffect } from "react";
import PricingNavigation from "./components/PricingNavigation";
import PackageSelection from "./components/PackageSelection";
import OrderSummary from "./components/OrderSummary";
import { getProjectTypeById } from "@/lib/appData";

const Pricing = () => {
  const [selectedProjectType, setSelectedProjectType] =
    useState<string>("Detached ADU");
  const [currentStep, setCurrentStep] = useState<number>(0);
  const [selectedItems, setSelectedItems] = useState<{
    [stepName: string]: number;
  }>({});

  // Set default selections when project type changes
  useEffect(() => {
    const project = getProjectTypeById(selectedProjectType);
    if (project) {
      // Set default selection for Package step (first step)
      const packageStep = project.steps[0];
      if (packageStep && !selectedItems[packageStep.name]) {
        setSelectedItems((prev) => ({
          ...prev,
          [packageStep.name]: 0, // Select first item (Basic Package)
        }));
      }
    }
  }, [selectedProjectType]);

  const handleItemSelect = (stepName: string, itemId: number) => {
    setSelectedItems((prev) => {
      const newItems = { ...prev };

      if (itemId === -1) {
        // Remove the step from selectedItems (unselect)
        delete newItems[stepName];
      } else {
        // Add or update the selection
        newItems[stepName] = itemId;
      }

      return newItems;
    });
  };

  return (
    <section className="section-white">
      <div className="section-content">
        <div className="min-h-screen bg-gray-50">
          {/* Mobile Layout */}
          <div className="block lg:hidden">
            {/* Top Configuration Section */}
            <PricingNavigation
              selectedProjectType={selectedProjectType}
              setSelectedProjectType={setSelectedProjectType}
              currentStep={currentStep}
              setCurrentStep={setCurrentStep}
              selectedItems={selectedItems}
            />

            {/* Package Selection */}
            <PackageSelection
              selectedProjectType={selectedProjectType}
              currentStep={currentStep}
              onItemSelect={handleItemSelect}
              selectedItems={selectedItems}
            />

            {/* Order Summary */}
            <OrderSummary
              selectedItems={selectedItems}
              selectedProjectType={selectedProjectType}
            />
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:flex min-h-screen">
            {/* Left Panel - Navigation */}
            <div className="w-1/4 bg-white border-r border-gray-200 min-h-screen">
              <PricingNavigation
                selectedProjectType={selectedProjectType}
                setSelectedProjectType={setSelectedProjectType}
                currentStep={currentStep}
                setCurrentStep={setCurrentStep}
                selectedItems={selectedItems}
              />
            </div>

            {/* Center Panel - Package Selection */}
            <div className="w-1/2 bg-white min-h-screen">
              <PackageSelection
                selectedProjectType={selectedProjectType}
                currentStep={currentStep}
                onItemSelect={handleItemSelect}
                selectedItems={selectedItems}
              />
            </div>

            {/* Right Panel - Order Summary */}
            <div className="w-1/4 bg-white border-l border-gray-200 min-h-screen">
              <OrderSummary
                selectedItems={selectedItems}
                selectedProjectType={selectedProjectType}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
