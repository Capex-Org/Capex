import { useState } from "react";

const PackageSelection = () => {
  const [selectedPackage, setSelectedPackage] = useState<number>(0);

  const packages = [
    {
      id: 0,
      name: "Bedroom Package",
      image: "/api/placeholder/300/200",
      description: "Complete bedroom design with furniture and decor",
    },
    {
      id: 1,
      name: "Living Room Package",
      image: "/api/placeholder/300/200",
      description: "Modern living room with seating and entertainment",
    },
    {
      id: 2,
      name: "Family Room Package",
      image: "/api/placeholder/300/200",
      description: "Comfortable family space with TV and seating",
    },
    {
      id: 3,
      name: "Kitchen & Dining Package",
      image: "/api/placeholder/300/200",
      description: "Complete kitchen and dining area design",
    },
    {
      id: 4,
      name: "Master Suite Package",
      image: "/api/placeholder/300/200",
      description: "Luxurious master bedroom with ensuite bathroom",
    },
    {
      id: 5,
      name: "Office Package",
      image: "/api/placeholder/300/200",
      description: "Professional home office with modern furniture",
    },
    {
      id: 6,
      name: "Guest Room Package",
      image: "/api/placeholder/300/200",
      description: "Comfortable guest accommodation with storage",
    },
    {
      id: 7,
      name: "Kids Room Package",
      image: "/api/placeholder/300/200",
      description: "Fun and functional children's room design",
    },
  ];

  return (
    <div className="bg-white">
      {/* Mobile Layout */}
      <div className="lg:hidden p-4">
        <h2 className="text-xl font-bold text-gray-900 mb-6 text-center">
          What package is best for you?
        </h2>

        {/* Mobile: Single Column Grid */}
        <div className="space-y-4 max-h-[60vh] overflow-y-auto">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              onClick={() => setSelectedPackage(pkg.id)}
              className={`relative cursor-pointer transition-all duration-300 ${
                selectedPackage === pkg.id ? "scale-102" : ""
              }`}
            >
              <div className="bg-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex gap-4">
                  <div className="w-24 h-24 bg-gray-300 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-gray-500 text-xs">3D</span>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 text-sm mb-1">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs">{pkg.description}</p>
                  </div>
                </div>
              </div>

              {selectedPackage === pkg.id && (
                <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
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
                </div>
              )}
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
              What package is best for you?
            </h2>
          </div>
        </div>

        {/* Package Grid - Scrollable with Max Height */}
        <div className="flex-1 overflow-y-auto px-8">
          <div className="max-h-[60vh] overflow-y-auto">
            <div className="grid grid-cols-2 gap-6 max-w-2xl mx-auto pb-4">
              {packages.map((pkg) => (
                <div
                  key={pkg.id}
                  onClick={() => setSelectedPackage(pkg.id)}
                  className={`relative cursor-pointer transition-all duration-300 ${
                    selectedPackage === pkg.id ? "scale-105" : "hover:scale-102"
                  }`}
                >
                  <div className="bg-gray-200 rounded-lg p-4 shadow-lg hover:shadow-xl transition-shadow duration-300">
                    <div className="aspect-square bg-gray-300 rounded-lg mb-3 flex items-center justify-center">
                      <span className="text-gray-500 text-sm">3D Render</span>
                    </div>
                    <h3 className="font-semibold text-gray-900 text-sm">
                      {pkg.name}
                    </h3>
                    <p className="text-gray-600 text-xs mt-1">
                      {pkg.description}
                    </p>
                  </div>

                  {selectedPackage === pkg.id && (
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
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
                    </div>
                  )}
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
