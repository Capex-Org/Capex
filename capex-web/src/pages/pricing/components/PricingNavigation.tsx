import React, { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { projectTypes } from "@/lib/appData";

interface PricingNavigationProps {
  selectedProjectType: string;
  setSelectedProjectType: (type: string) => void;
  currentStep: number;
  setCurrentStep: (step: number) => void;
  selectedItems: { [stepName: string]: number };
}

const PricingNavigation = ({
  selectedProjectType,
  setSelectedProjectType,
  currentStep,
  setCurrentStep,
  selectedItems,
}: PricingNavigationProps) => {
  const [expandedItem, setExpandedItem] = useState<string>("");

  const toggleExpanded = (itemId: string) => {
    if (expandedItem === itemId) {
      // If clicking on the currently expanded item, collapse it
      setExpandedItem("");
    } else {
      // If clicking on a different item, expand it and select it
      setExpandedItem(itemId);
      setSelectedProjectType(itemId);
      setCurrentStep(0); // Reset to first step when changing project type
    }
  };

  // Sync expandedItem with selectedProjectType only when selectedProjectType changes externally
  React.useEffect(() => {
    if (selectedProjectType && selectedProjectType !== expandedItem) {
      setExpandedItem(selectedProjectType);
    }
  }, [selectedProjectType]);

  // Auto-expand when there are selected items
  React.useEffect(() => {
    if (Object.keys(selectedItems).length > 0 && !expandedItem) {
      setExpandedItem(selectedProjectType);
    }
  }, [selectedItems, selectedProjectType, expandedItem]);

  return (
    <div className="bg-white">
      {/* Mobile: Horizontal Tabs */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {projectTypes.map((item) => (
            <button
              key={item.id}
              onClick={() =>
                expandedItem !== item.id && toggleExpanded(item.id)
              }
              disabled={expandedItem === item.id}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                expandedItem === item.id
                  ? "border-primary-600 text-primary-600 bg-primary-50 cursor-default"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300 cursor-pointer"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Mobile: Project Info */}
        <div
          className={`p-4 transition-colors ${
            expandedItem ? "bg-primary-50" : "bg-gray-50"
          }`}
        >
          {expandedItem ? (
            <div>
              <h3 className="text-lg font-semibold text-primary-600 mb-2">
                {projectTypes.find((item) => item.id === expandedItem)?.title}
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                {projectTypes.find((item) => item.id === expandedItem)
                  ?.description ||
                  "Convert your garage into a functional living space or build on top of it. Take advantage of state regulations and affordable construction costs."}
              </p>
            </div>
          ) : (
            <p className="text-gray-600 text-sm leading-relaxed">
              Select a project type above to see details and configure your
              options.
            </p>
          )}
        </div>

        {/* Mobile: Progress Steps */}
        <div
          className={`p-4 border-b border-gray-200 transition-colors ${
            expandedItem ? "bg-primary-50" : "bg-white"
          }`}
        >
          {expandedItem ? (
            <div className="relative flex items-center justify-between">
              {/* Horizontal connecting line */}
              <div className="absolute top-4 left-0 right-0 h-px bg-gray-200"></div>

              {projectTypes
                .find((item) => item.id === expandedItem)
                ?.steps?.map((step, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentStep(index)}
                    className="relative flex flex-col items-center cursor-pointer hover:opacity-80 transition-opacity z-10"
                  >
                    <div
                      className={`w-8 h-8 rounded-full border-2 flex items-center justify-center mb-2 transition-all duration-300 ${
                        index <= currentStep
                          ? "bg-primary-600 border-primary-600"
                          : "bg-white border-gray-300"
                      }`}
                    >
                      {index < currentStep ? (
                        <svg
                          className="w-4 h-4 text-white"
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                          />
                        </svg>
                      ) : index === currentStep ? (
                        <div className="w-3 h-3 bg-white rounded-full"></div>
                      ) : (
                        <span className="text-gray-500 text-xs font-medium">
                          {index + 1}
                        </span>
                      )}
                    </div>
                    <span
                      className={`text-xs text-center transition-colors ${
                        index === currentStep
                          ? "text-primary-600 font-semibold"
                          : index < currentStep
                          ? "text-gray-700"
                          : "text-gray-500"
                      }`}
                    >
                      {step}
                    </span>
                  </button>
                ))}
            </div>
          ) : (
            <div className="text-center py-8">
              <p className="text-gray-500 text-sm">
                Select a project type to see configuration steps
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Desktop: Vertical Navigation */}
      <div className="hidden lg:block h-full overflow-y-auto p-6">
        {projectTypes.map((item) => (
          <div key={item.id} className="mb-4">
            <button
              onClick={() =>
                expandedItem !== item.id && toggleExpanded(item.id)
              }
              disabled={expandedItem === item.id}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                expandedItem === item.id
                  ? "bg-amber-100 text-gray-900 cursor-default"
                  : "text-gray-700 hover:bg-gray-50 cursor-pointer"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">{item.title}</span>
                {item.steps ? (
                  expandedItem === item.id ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )
                ) : null}
              </div>
            </button>

            {expandedItem === item.id && item.description && (
              <div className="mt-3 px-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.steps && (
                  <div className="relative">
                    {/* Vertical connecting line - centered with circles */}
                    <div className="absolute left-4 top-2 bottom-2 w-px bg-gray-200"></div>

                    <div className="space-y-4">
                      {item.steps.map((step, index) => (
                        <button
                          key={index}
                          onClick={() => setCurrentStep(index)}
                          className="w-full text-left flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded transition-colors relative"
                        >
                          {/* Step circle with connecting line */}
                          <div className="relative flex items-center justify-center mr-4 w-4 h-4">
                            {/* Circle */}
                            <div
                              className={`w-4 h-4 rounded-full border-2 transition-all duration-300 ${
                                index <= currentStep
                                  ? "bg-primary-600 border-primary-600"
                                  : "bg-white border-gray-300"
                              }`}
                            >
                              {/* Checkmark or number inside circle */}
                              {index < currentStep ? (
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
                              ) : index === currentStep ? (
                                <div className="w-full h-full flex items-center justify-center">
                                  <div className="w-2 h-2 bg-white rounded-full"></div>
                                </div>
                              ) : (
                                <div className="w-full h-full flex items-center justify-center">
                                  <span className="text-xs text-gray-500 font-medium">
                                    {index + 1}
                                  </span>
                                </div>
                              )}
                            </div>
                          </div>

                          {/* Step text */}
                          <span
                            className={`text-sm transition-colors ${
                              index === currentStep
                                ? "text-primary-600 font-semibold"
                                : index < currentStep
                                ? "text-gray-700"
                                : "text-gray-500"
                            }`}
                          >
                            {step}
                          </span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingNavigation;
