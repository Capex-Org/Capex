import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";

const PricingNavigation = () => {
  const [expandedItem, setExpandedItem] = useState<string>("Detached ADU");

  const projectTypes = [
    {
      id: "Detached ADU",
      title: "Detached ADU",
      description:
        "Convert your garage into a functional living space or build on top of it. Take advantage of state regulations and affordable construction costs.",
      subItems: ["Package", "Design", "Area", "Site Visit", "Additional"],
      isExpanded: expandedItem === "Detached ADU",
    },
    { id: "Attached ADU", title: "Attached ADU" },
    { id: "Garage Conversion", title: "Garage Conversion" },
    { id: "Addition", title: "Addition" },
    { id: "Single Family", title: "Single Family" },
    { id: "Remodels", title: "Remodels" },
    { id: "What Can I Build", title: "What Can I Build" },
    { id: "Pre Approved Plans", title: "Pre Approved Plans" },
  ];

  const toggleExpanded = (itemId: string) => {
    setExpandedItem(expandedItem === itemId ? "" : itemId);
  };

  return (
    <div className="bg-white">
      {/* Mobile: Horizontal Tabs */}
      <div className="lg:hidden">
        <div className="flex overflow-x-auto border-b border-gray-200">
          {projectTypes.slice(0, 3).map((item) => (
            <button
              key={item.id}
              onClick={() => toggleExpanded(item.id)}
              className={`flex-shrink-0 px-6 py-4 text-sm font-medium border-b-2 transition-colors ${
                expandedItem === item.id
                  ? "border-primary-600 text-primary-600 bg-primary-50"
                  : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>

        {/* Mobile: Description */}
        <div className="p-4 bg-gray-50">
          <p className="text-gray-600 text-sm leading-relaxed">
            {projectTypes.find((item) => item.id === expandedItem)
              ?.description ||
              "Convert your garage into a functional living space or build on top of it. Take advantage of state regulations and affordable construction costs."}
          </p>
        </div>

        {/* Mobile: Progress Steps */}
        <div className="p-4 bg-white border-b border-gray-200">
          <div className="flex items-center justify-between">
            {projectTypes
              .find((item) => item.id === expandedItem)
              ?.subItems?.map((step, index) => (
                <div key={index} className="flex flex-col items-center">
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center mb-2 ${
                      index === 0 ? "bg-primary-600" : "bg-gray-200"
                    }`}
                  >
                    {index === 0 ? (
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
                    ) : (
                      <span className="text-gray-500 text-xs">{index + 1}</span>
                    )}
                  </div>
                  <span className="text-xs text-gray-600 text-center">
                    {step}
                  </span>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Desktop: Vertical Navigation */}
      <div className="hidden lg:block h-full overflow-y-auto p-6">
        {projectTypes.map((item) => (
          <div key={item.id} className="mb-4">
            <button
              onClick={() => toggleExpanded(item.id)}
              className={`w-full text-left p-4 rounded-lg transition-colors duration-200 ${
                item.isExpanded
                  ? "bg-amber-100 text-gray-900"
                  : "text-gray-700 hover:bg-gray-50"
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="font-semibold text-lg">{item.title}</span>
                {item.subItems ? (
                  item.isExpanded ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )
                ) : null}
              </div>
            </button>

            {item.isExpanded && item.description && (
              <div className="mt-3 px-4">
                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                  {item.description}
                </p>

                {item.subItems && (
                  <div className="space-y-2">
                    {item.subItems.map((subItem, index) => (
                      <div key={index} className="flex items-center">
                        <div className="w-4 h-4 flex items-center justify-center mr-3">
                          {index < item.subItems.length - 1 && (
                            <div className="w-px h-6 bg-gray-300 absolute"></div>
                          )}
                        </div>
                        <span className="text-gray-600 text-sm">{subItem}</span>
                      </div>
                    ))}
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
