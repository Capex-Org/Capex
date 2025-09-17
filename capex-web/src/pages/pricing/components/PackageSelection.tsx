import { useState } from "react";
import {
  getStepTitle,
  getCurrentStepItems,
  getProjectTypeById,
} from "@/lib/appData";

interface PackageSelectionProps {
  selectedProjectType: string;
  currentStep: number;
  onItemSelect: (stepName: string, itemId: number) => void;
  selectedItems: { [stepName: string]: number };
}

const PackageSelection = ({
  selectedProjectType,
  currentStep,
  onItemSelect,
  selectedItems,
}: PackageSelectionProps) => {
  const [selectedPackage, setSelectedPackage] = useState<number>(0);

  const handlePackageSelect = (pkgId: number) => {
    // Get current step name
    const project = getProjectTypeById(selectedProjectType);
    const stepName = project?.steps[currentStep]?.name;

    if (stepName) {
      // Check if this item is already selected for this step
      const isCurrentlySelected = currentStepSelectedItem === pkgId;

      if (isCurrentlySelected) {
        // Unselect the item by calling onItemSelect with -1 (or remove from selectedItems)
        onItemSelect(stepName, -1); // Use -1 to indicate unselection
        setSelectedPackage(-1);
      } else {
        // Select the item
        onItemSelect(stepName, pkgId);
        setSelectedPackage(pkgId);
      }
    }
  };

  // Get current step name and check if there's a selected item for this step
  const project = getProjectTypeById(selectedProjectType);
  const currentStepName = project?.steps[currentStep]?.name;
  const currentStepSelectedItem = currentStepName
    ? selectedItems[currentStepName]
    : undefined;

  // Get items for current step
  const currentItems = getCurrentStepItems(selectedProjectType, currentStep);
  const displayItems = currentItems.length > 0 ? currentItems : [];

  return (
    <div className="bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          {getStepTitle(selectedProjectType, currentStep)}
        </h2>

        {/* Mobile: Single Column Grid */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {displayItems.map((pkg: any) => (
            <div
              key={pkg.id}
              onClick={() => handlePackageSelect(pkg.id)}
              className={`relative cursor-pointer transition-all duration-300 ${
                currentStepSelectedItem === pkg.id ? "mt-2" : ""
              }`}
            >
              <div
                className={`rounded-lg p-4 shadow-lg transition-all duration-300 ${
                  currentStepSelectedItem === pkg.id
                    ? "bg-primary-100 shadow-xl"
                    : "bg-gray-200 hover:shadow-xl"
                }`}
              >
                <div className="flex gap-4">
                  <div className="w-24 h-24 rounded-lg flex-shrink-0 overflow-hidden">
                    <img
                      key={`${pkg.id}-${currentStep}-${selectedProjectType}`}
                      src={pkg.image}
                      alt={pkg.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs">{pkg.description}</p>
                    <p className="text-primary-600 font-semibold text-sm mt-1">
                      ${pkg.price?.toLocaleString() || "0"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Desktop Layout */}
      <div className="hidden lg:flex h-full flex-col">
        {/* Header - Fixed */}
        <div className="flex-shrink-0 p-8 pb-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">
              {getStepTitle(selectedProjectType, currentStep)}
            </h2>
          </div>
        </div>

        {/* Package Grid - Scrollable with Max Height */}
        <div className="flex-1 overflow-y-auto px-8">
          <div className="max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto pb-4">
              {displayItems.map((pkg: any) => (
                <div
                  key={pkg.id}
                  onClick={() => handlePackageSelect(pkg.id)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    currentStepSelectedItem === pkg.id ? "mt-2" : ""
                  }`}
                >
                  <div
                    className={`rounded-lg p-4 shadow-lg transition-all duration-300 ${
                      currentStepSelectedItem === pkg.id
                        ? "bg-primary-100 shadow-xl"
                        : "bg-gray-200 hover:shadow-xl"
                    }`}
                  >
                    <div className="aspect-square rounded-lg mb-3 overflow-hidden">
                      <img
                        key={`desktop-${pkg.id}-${currentStep}-${selectedProjectType}`}
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1">
                      {pkg.description}
                    </p>
                    <p className="text-primary-600 font-semibold text-sm mt-2">
                      ${pkg.price?.toLocaleString() || "0"}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Step Indicators - Fixed */}
        <div className="flex-shrink-0 flex justify-center items-center space-x-2 p-8 pt-4">
          {[0, 1, 2, 3, 4].map((index: number) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === 0
                  ? "bg-green-500"
                  : index <= selectedPackage
                  ? "bg-primary-500"
                  : "bg-gray-300"
              }`}
            >
              {index === 0 && (
                <div className="w-full h-full flex items-center justify-center">
                  <svg
                    className="w-2 h-2 text-white"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageSelection;
