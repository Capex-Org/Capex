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
    { id: "Ached ADU", title: "Ached ADU" },
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
    <div className="p-6 h-full overflow-y-auto">
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
  );
};

export default PricingNavigation;
