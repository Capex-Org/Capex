export interface ProjectType {
  id: string;
  title: string;
  description?: string;
  steps: string[];
  stepTitles: string[];
}

export interface Package {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface StepItem {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export const projectTypes: ProjectType[] = [
  {
    id: "Detached ADU",
    title: "Detached ADU",
    description:
      "Convert your garage into a functional living space or build on top of it. Take advantage of state regulations and affordable construction costs.",
    steps: ["Package", "Design", "Area", "Site Visit", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "WHAT PACKAGE IS BEST FOR YOU?",
      "WHICH DESIGN SERVICE DO YOU NEED?",
      "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
      "DO YOU REQUIRE A SITE VISIT?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "Attached ADU",
    title: "Attached ADU",
    description:
      "Build an attached accessory dwelling unit to your existing home.",
    steps: ["Package", "Area", "Site Visit", "Location", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "WHAT PACKAGE IS BEST FOR YOU?",
      "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
      "DO YOU REQUIRE A SITE VISIT?",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "Garage Conversion",
    title: "Garage Conversion",
    description: "Transform your garage into a functional living space.",
    steps: ["Type", "Area", "Site Visit", "Location", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "WHAT TYPE OF GARAGE CONVERSION DO YOU NEED?",
      "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
      "DO YOU REQUIRE A SITE VISIT?",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "Single Family",
    title: "Single Family",
    description: "Complete single family home construction project.",
    steps: ["Package", "Area", "Location", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "WHAT PACKAGE IS BEST FOR YOU?",
      "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "Addition",
    title: "Addition",
    description: "Add square footage to your existing home.",
    steps: [
      "Square Footage",
      "Remodeling",
      "Site Visit",
      "Location",
      "Additional",
    ],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "HOW MUCH SQUARE FOOTAGE ARE YOU ADDING?",
      "ARE YOU ALSO REMODELING YOUR EXISTING HOME?",
      "DO YOU REQUIRE A SITE VISIT?",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "Remodels",
    title: "Remodels",
    description: "Renovate and improve your existing home.",
    steps: ["Room Count", "Room Types", "Site Visit", "Location", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "HOW MANY ROOMS ARE UNDER CONSTRUCTION?",
      "WHICH ROOMS ARE YOU REMODELING?",
      "DO YOU REQUIRE A SITE VISIT?",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "What Can I Build",
    title: "What Can I Build",
    description: "Explore what you can build on your property.",
    steps: ["User Type", "Planning", "Location", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "ARE YOU A CONTRACTOR OR A HOMEOWNER?",
      "GET AHEAD OF THE GAME!",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
  {
    id: "Pre Approved Plans",
    title: "Pre Approved Plans",
    description: "Choose from pre-approved architectural plans.",
    steps: ["Package", "Location", "Additional"],
    stepTitles: [
      "WHAT ARE YOU BUILDING?",
      "WHAT PACKAGE IS BEST FOR YOU?",
      "WHERE ARE YOU BUILDING?",
      "ADDITIONAL SERVICES",
    ],
  },
];

export const packages: Package[] = [
  {
    id: 0,
    name: "Bedroom Package",
    description: "Complete bedroom design with furniture and decor",
    image: "/api/placeholder/300/200",
    price: 15000,
  },
  {
    id: 1,
    name: "Living Room Package",
    description: "Modern living room with seating and entertainment",
    image: "/api/placeholder/300/200",
    price: 20000,
  },
  {
    id: 2,
    name: "Family Room Package",
    description: "Spacious family room for gatherings and relaxation",
    image: "/api/placeholder/300/200",
    price: 25000,
  },
  {
    id: 3,
    name: "Kitchen Package",
    description: "Complete kitchen renovation with modern appliances",
    image: "/api/placeholder/300/200",
    price: 30000,
  },
  {
    id: 4,
    name: "Bathroom Package",
    description: "Luxury bathroom with premium fixtures and finishes",
    image: "/api/placeholder/300/200",
    price: 18000,
  },
  {
    id: 5,
    name: "Office Package",
    description: "Professional home office setup with ergonomic furniture",
    image: "/api/placeholder/300/200",
    price: 12000,
  },
  {
    id: 6,
    name: "Outdoor Package",
    description: "Outdoor living space with patio and landscaping",
    image: "/api/placeholder/300/200",
    price: 22000,
  },
  {
    id: 7,
    name: "Complete Home Package",
    description: "Full home renovation with all rooms included",
    image: "/api/placeholder/300/200",
    price: 100000,
  },
];

// Step-specific items
export const stepItems: { [key: string]: StepItem[] } = {
  Package: [
    {
      id: 0,
      name: "Basic Package",
      description: "Essential features and standard materials",
      image: "/api/placeholder/300/200",
      price: 25000,
    },
    {
      id: 1,
      name: "Standard Package",
      description: "Quality materials with modern finishes",
      image: "/api/placeholder/300/200",
      price: 35000,
    },
    {
      id: 2,
      name: "Premium Package",
      description: "High-end materials and luxury finishes",
      image: "/api/placeholder/300/200",
      price: 50000,
    },
    {
      id: 3,
      name: "Custom Package",
      description: "Fully customized to your specifications",
      image: "/api/placeholder/300/200",
      price: 75000,
    },
  ],
  Design: [
    {
      id: 0,
      name: "Basic Design",
      description: "Simple layout with standard fixtures",
      image: "/api/placeholder/300/200",
      price: 2000,
    },
    {
      id: 1,
      name: "Modern Design",
      description: "Contemporary style with clean lines",
      image: "/api/placeholder/300/200",
      price: 4000,
    },
    {
      id: 2,
      name: "Luxury Design",
      description: "High-end finishes and premium materials",
      image: "/api/placeholder/300/200",
      price: 7000,
    },
    {
      id: 3,
      name: "Custom Design",
      description: "Personalized design tailored to your needs",
      image: "/api/placeholder/300/200",
      price: 10000,
    },
  ],
  Area: [
    {
      id: 0,
      name: "Small (500-800 sq ft)",
      description: "Compact space, efficient layout",
      image: "/api/placeholder/300/200",
      price: 15000,
    },
    {
      id: 1,
      name: "Medium (800-1200 sq ft)",
      description: "Comfortable living space",
      image: "/api/placeholder/300/200",
      price: 25000,
    },
    {
      id: 2,
      name: "Large (1200-1800 sq ft)",
      description: "Spacious with multiple rooms",
      image: "/api/placeholder/300/200",
      price: 40000,
    },
    {
      id: 3,
      name: "Extra Large (1800+ sq ft)",
      description: "Maximum space and luxury",
      image: "/api/placeholder/300/200",
      price: 60000,
    },
  ],
  "Site Visit": [
    {
      id: 0,
      name: "No Site Visit",
      description: "Remote consultation only",
      image: "/api/placeholder/300/200",
      price: 0,
    },
    {
      id: 1,
      name: "Basic Site Visit",
      description: "Standard on-site assessment",
      image: "/api/placeholder/300/200",
      price: 500,
    },
    {
      id: 2,
      name: "Detailed Site Visit",
      description: "Comprehensive analysis and planning",
      image: "/api/placeholder/300/200",
      price: 1200,
    },
    {
      id: 3,
      name: "Multiple Visits",
      description: "Ongoing support throughout project",
      image: "/api/placeholder/300/200",
      price: 2500,
    },
  ],
  Additional: [
    {
      id: 0,
      name: "No Additional Services",
      description: "Basic package only",
      image: "/api/placeholder/300/200",
      price: 0,
    },
    {
      id: 1,
      name: "Permit Assistance",
      description: "Help with permits and approvals",
      image: "/api/placeholder/300/200",
      price: 1500,
    },
    {
      id: 2,
      name: "Project Management",
      description: "Full project oversight and coordination",
      image: "/api/placeholder/300/200",
      price: 5000,
    },
    {
      id: 3,
      name: "Warranty & Support",
      description: "Extended warranty and ongoing support",
      image: "/api/placeholder/300/200",
      price: 3000,
    },
  ],
};

export const orderItems = [
  { name: "Package", amount: 31.9 },
  { name: "Design", amount: 31.9 },
  { name: "Area", amount: 31.9 },
  { name: "Site Visit", amount: 0.0 },
  { name: "Additional", amount: 0.0 },
];

// Helper functions
export const getProjectTypeById = (id: string): ProjectType | undefined => {
  return projectTypes.find((project) => project.id === id);
};

export const getStepTitle = (
  projectTypeId: string,
  stepIndex: number
): string => {
  const project = getProjectTypeById(projectTypeId);
  return project?.stepTitles[stepIndex] || "WHAT ARE YOU BUILDING?";
};

export const getTotalAmount = (): number => {
  return orderItems.reduce((total, item) => total + item.amount, 0);
};

export const getCurrentStepItems = (
  projectTypeId: string,
  stepIndex: number
): StepItem[] => {
  const project = getProjectTypeById(projectTypeId);
  const stepName = project?.steps[stepIndex];
  return stepName ? stepItems[stepName] || [] : [];
};

export const calculateTotalPrice = (
  selectedItems: {
    [stepName: string]: number;
  },
  projectTypeId: string
): number => {
  let total = 0;

  // Get the project type to know which steps are relevant
  const project = getProjectTypeById(projectTypeId);
  if (!project) return 0;

  // Only calculate for steps that exist in the current project type
  Object.entries(selectedItems).forEach(([stepName, itemId]) => {
    // Check if this step exists in the current project type
    if (project.steps.includes(stepName)) {
      const stepItemsList = stepItems[stepName];
      if (stepItemsList) {
        const item = stepItemsList.find((item) => item.id === itemId);
        if (item) {
          total += item.price;
        }
      }
    }
  });

  return total;
};

export const getSelectedItemPrice = (
  stepName: string,
  itemId: number
): number => {
  const stepItemsList = stepItems[stepName];
  if (stepItemsList) {
    const item = stepItemsList.find((item) => item.id === itemId);
    return item ? item.price : 0;
  }
  return 0;
};

export const getRelevantOrderItems = (
  selectedItems: { [stepName: string]: number },
  projectTypeId: string
): { name: string; amount: number }[] => {
  const project = getProjectTypeById(projectTypeId);
  if (!project) return [];

  return Object.entries(selectedItems)
    .filter(([stepName]) => project.steps.includes(stepName))
    .map(([stepName, itemId]) => {
      const price = getSelectedItemPrice(stepName, itemId);
      return {
        name: stepName,
        amount: price,
      };
    })
    .filter((item) => item.amount > 0); // Only include items with price > 0
};
