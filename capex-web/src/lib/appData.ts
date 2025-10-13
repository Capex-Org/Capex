// Import all images
import pk1 from "@/assets/images/packages/pk1.webp";
import pk2 from "@/assets/images/packages/pk2.webp";
import pk3 from "@/assets/images/packages/pk3.webp";
import pk4 from "@/assets/images/packages/pk4.webp";
import bedroomImg from "@/assets/images/bedroom.webp";
import kitchenImg from "@/assets/images/kitchen.webp";
import aboutusImg from "@/assets/images/aboutus.webp";
import recentWork1 from "@/assets/images/recentWork1.webp";
import recentWork2 from "@/assets/images/recentWork2.webp";
import recentWork3 from "@/assets/images/recentWork3.webp";

export interface StepOption {
  id: number;
  name: string;
  description: string;
  image: string;
  price: number;
}

export interface ProjectStep {
  name: string;
  title: string;
  options: StepOption[];
}

export interface ProjectType {
  id: string;
  title: string;
  description?: string;
  steps: ProjectStep[];
}

// Unified project data structure
export const projectTypes: ProjectType[] = [
  {
    id: "Detached ADU",
    title: "Detached ADU",
    description:
      "Build a separate accessory dwelling unit on your property. Perfect for rental income or multi-generational living.",
    steps: [
      {
        name: "Package",
        title: "WHAT PACKAGE IS BEST FOR YOU?",
        options: [
          {
            id: 0,
            name: "Basic Package",
            description: "Essential features and standard materials",
            image: pk1,
            price: 25000,
          },
          {
            id: 1,
            name: "Standard Package",
            description: "Quality materials with modern finishes",
            image: pk2,
            price: 35000,
          },
          {
            id: 2,
            name: "Premium Package",
            description: "High-end materials and luxury finishes",
            image: pk3,
            price: 50000,
          },
          {
            id: 3,
            name: "Custom Package",
            description: "Fully customized to your specifications",
            image: pk4,
            price: 75000,
          },
          {
            id: 4,
            name: "Custom Package",
            description: "Fully customized to your specifications",
            image: pk1,
            price: 100000,
          },
        ],
      },
      {
        name: "Design",
        title: "WHICH DESIGN SERVICE DO YOU NEED?",
        options: [
          {
            id: 0,
            name: "Basic Design",
            description: "Simple layout with standard fixtures",
            image: bedroomImg,
            price: 2000,
          },
          {
            id: 1,
            name: "Modern Design",
            description: "Contemporary style with clean lines",
            image: kitchenImg,
            price: 4000,
          },
          {
            id: 2,
            name: "Luxury Design",
            description: "High-end finishes and premium materials",
            image: aboutusImg,
            price: 7000,
          },
          {
            id: 3,
            name: "Custom Design",
            description: "Personalized design tailored to your needs",
            image: recentWork1,
            price: 10000,
          },
        ],
      },
      {
        name: "Area",
        title: "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
        options: [
          {
            id: 0,
            name: "Small (400-600 sq ft)",
            description: "Compact living space",
            image: pk2,
            price: 0,
          },
          {
            id: 1,
            name: "Medium (600-800 sq ft)",
            description: "Comfortable living space",
            image: pk3,
            price: 5000,
          },
          {
            id: 2,
            name: "Large (800-1000 sq ft)",
            description: "Spacious living space",
            image: pk4,
            price: 10000,
          },
          {
            id: 3,
            name: "Extra Large (1000+ sq ft)",
            description: "Premium living space",
            image: pk1,
            price: 15000,
          },
        ],
      },
      {
        name: "Site Visit",
        title: "DO YOU REQUIRE A SITE VISIT?",
        options: [
          {
            id: 0,
            name: "No Site Visit",
            description: "Remote consultation only",
            image: recentWork1,
            price: 0,
          },
          {
            id: 1,
            name: "Basic Site Visit",
            description: "Standard on-site assessment",
            image: recentWork2,
            price: 500,
          },
          {
            id: 2,
            name: "Detailed Site Visit",
            description: "Comprehensive site analysis",
            image: recentWork3,
            price: 1000,
          },
          {
            id: 3,
            name: "Premium Site Visit",
            description: "Full site survey with recommendations",
            image: bedroomImg,
            price: 1500,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: kitchenImg,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: aboutusImg,
            price: 1000,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: pk1,
            price: 5000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: pk2,
            price: 10000,
          },
        ],
      },
    ],
  },
  {
    id: "Attached ADU",
    title: "Attached ADU",
    description:
      "Build an attached accessory dwelling unit to your existing home. Maximize your property's potential.",
    steps: [
      {
        name: "Package",
        title: "WHAT PACKAGE IS BEST FOR YOU?",
        options: [
          {
            id: 0,
            name: "Basic Package",
            description: "Essential features and standard materials",
            image: pk2,
            price: 20000,
          },
          {
            id: 1,
            name: "Standard Package",
            description: "Quality materials with modern finishes",
            image: pk3,
            price: 30000,
          },
          {
            id: 2,
            name: "Premium Package",
            description: "High-end materials and luxury finishes",
            image: pk4,
            price: 45000,
          },
          {
            id: 3,
            name: "Custom Package",
            description: "Fully customized to your specifications",
            image: pk1,
            price: 65000,
          },
        ],
      },
      {
        name: "Area",
        title: "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
        options: [
          {
            id: 0,
            name: "Small (300-500 sq ft)",
            description: "Compact attached unit",
            image: bedroomImg,
            price: 0,
          },
          {
            id: 1,
            name: "Medium (500-700 sq ft)",
            description: "Comfortable attached unit",
            image: kitchenImg,
            price: 3000,
          },
          {
            id: 2,
            name: "Large (700-900 sq ft)",
            description: "Spacious attached unit",
            image: aboutusImg,
            price: 6000,
          },
          {
            id: 3,
            name: "Extra Large (900+ sq ft)",
            description: "Premium attached unit",
            image: recentWork1,
            price: 9000,
          },
        ],
      },
      {
        name: "Site Visit",
        title: "DO YOU REQUIRE A SITE VISIT?",
        options: [
          {
            id: 0,
            name: "No Site Visit",
            description: "Remote consultation only",
            image: pk3,
            price: 0,
          },
          {
            id: 1,
            name: "Basic Site Visit",
            description: "Standard on-site assessment",
            image: pk4,
            price: 400,
          },
          {
            id: 2,
            name: "Detailed Site Visit",
            description: "Comprehensive site analysis",
            image: pk1,
            price: 800,
          },
          {
            id: 3,
            name: "Premium Site Visit",
            description: "Full site survey with recommendations",
            image: pk2,
            price: 1200,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: recentWork2,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: recentWork3,
            price: 2000,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: bedroomImg,
            price: 4000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: kitchenImg,
            price: 6000,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: aboutusImg,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: recentWork1,
            price: 800,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: pk3,
            price: 4000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: pk4,
            price: 8000,
          },
        ],
      },
    ],
  },
  {
    id: "Garage Conversion",
    title: "Garage Conversion",
    description:
      "Convert your garage into a functional living space or build on top of it. Take advantage of state regulations and affordable construction costs.",
    steps: [
      {
        name: "Type",
        title: "WHAT TYPE OF GARAGE CONVERSION DO YOU NEED?",
        options: [
          {
            id: 0,
            name: "Basic Conversion",
            description: "Simple garage to living space",
            image: pk3,
            price: 15000,
          },
          {
            id: 1,
            name: "Standard Conversion",
            description: "Quality conversion with modern finishes",
            image: pk4,
            price: 25000,
          },
          {
            id: 2,
            name: "Premium Conversion",
            description: "High-end conversion with luxury features",
            image: pk1,
            price: 35000,
          },
          {
            id: 3,
            name: "Custom Conversion",
            description: "Fully customized garage conversion",
            image: pk2,
            price: 50000,
          },
        ],
      },
      {
        name: "Area",
        title: "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
        options: [
          {
            id: 0,
            name: "Small (200-400 sq ft)",
            description: "Compact garage conversion",
            image: kitchenImg,
            price: 0,
          },
          {
            id: 1,
            name: "Medium (400-600 sq ft)",
            description: "Standard garage conversion",
            image: aboutusImg,
            price: 1000,
          },
          {
            id: 2,
            name: "Large (600-800 sq ft)",
            description: "Spacious garage conversion",
            image: recentWork1,
            price: 4000,
          },
          {
            id: 3,
            name: "Extra Large (800+ sq ft)",
            description: "Premium garage conversion",
            image: recentWork2,
            price: 6000,
          },
        ],
      },
      {
        name: "Site Visit",
        title: "DO YOU REQUIRE A SITE VISIT?",
        options: [
          {
            id: 0,
            name: "No Site Visit",
            description: "Remote consultation only",
            image: pk4,
            price: 0,
          },
          {
            id: 1,
            name: "Basic Site Visit",
            description: "Standard on-site assessment",
            image: pk1,
            price: 300,
          },
          {
            id: 2,
            name: "Detailed Site Visit",
            description: "Comprehensive site analysis",
            image: pk2,
            price: 600,
          },
          {
            id: 3,
            name: "Premium Site Visit",
            description: "Full site survey with recommendations",
            image: pk3,
            price: 900,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: recentWork3,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: bedroomImg,
            price: 1500,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: kitchenImg,
            price: 3000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: aboutusImg,
            price: 4500,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: recentWork1,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: pk4,
            price: 600,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: pk1,
            price: 3000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: pk2,
            price: 6000,
          },
        ],
      },
    ],
  },
  {
    id: "Single Family",
    title: "Single Family",
    description:
      "Build a new single-family home from the ground up. Create your dream home with modern design and quality construction.",
    steps: [
      {
        name: "Package",
        title: "WHAT PACKAGE IS BEST FOR YOU?",
        options: [
          {
            id: 0,
            name: "Basic Package",
            description: "Essential features and standard materials",
            image: pk4,
            price: 100000,
          },
          {
            id: 1,
            name: "Standard Package",
            description: "Quality materials with modern finishes",
            image: pk1,
            price: 150000,
          },
          {
            id: 2,
            name: "Premium Package",
            description: "High-end materials and luxury finishes",
            image: pk2,
            price: 200000,
          },
          {
            id: 3,
            name: "Custom Package",
            description: "Fully customized to your specifications",
            image: pk3,
            price: 300000,
          },
        ],
      },
      {
        name: "Area",
        title: "HOW MUCH AREA WILL BE UNDER CONSTRUCTION?",
        options: [
          {
            id: 0,
            name: "Small (1000-1500 sq ft)",
            description: "Compact family home",
            image: aboutusImg,
            price: 0,
          },
          {
            id: 1,
            name: "Medium (1500-2000 sq ft)",
            description: "Comfortable family home",
            image: recentWork1,
            price: 20000,
          },
          {
            id: 2,
            name: "Large (2000-2500 sq ft)",
            description: "Spacious family home",
            image: recentWork2,
            price: 40000,
          },
          {
            id: 3,
            name: "Extra Large (2500+ sq ft)",
            description: "Premium family home",
            image: recentWork3,
            price: 60000,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: bedroomImg,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: kitchenImg,
            price: 10000,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: pk4,
            price: 20000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: pk1,
            price: 30000,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: pk2,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: pk3,
            price: 5000,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: aboutusImg,
            price: 25000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: recentWork1,
            price: 50000,
          },
        ],
      },
    ],
  },
  {
    id: "Addition",
    title: "Addition",
    description:
      "Add square footage to your existing home. Expand your living space with a well-designed addition.",
    steps: [
      {
        name: "Square Footage",
        title: "HOW MUCH SQUARE FOOTAGE ARE YOU ADDING?",
        options: [
          {
            id: 0,
            name: "Small Addition (200-400 sq ft)",
            description: "Compact addition",
            image: pk1,
            price: 30000,
          },
          {
            id: 1,
            name: "Medium Addition (400-600 sq ft)",
            description: "Standard addition",
            image: pk2,
            price: 50000,
          },
          {
            id: 2,
            name: "Large Addition (600-800 sq ft)",
            description: "Spacious addition",
            image: pk3,
            price: 70000,
          },
          {
            id: 3,
            name: "Extra Large Addition (800+ sq ft)",
            description: "Premium addition",
            image: pk4,
            price: 100000,
          },
        ],
      },
      {
        name: "Remodeling",
        title: "ARE YOU ALSO REMODELING YOUR EXISTING HOME?",
        options: [
          {
            id: 0,
            name: "No Remodeling",
            description: "Addition only",
            image: recentWork1,
            price: 0,
          },
          {
            id: 1,
            name: "Basic Remodeling",
            description: "Minor updates to existing space",
            image: recentWork2,
            price: 10000,
          },
          {
            id: 2,
            name: "Standard Remodeling",
            description: "Moderate updates to existing space",
            image: recentWork3,
            price: 20000,
          },
          {
            id: 3,
            name: "Full Remodeling",
            description: "Complete renovation of existing space",
            image: bedroomImg,
            price: 35000,
          },
        ],
      },
      {
        name: "Site Visit",
        title: "DO YOU REQUIRE A SITE VISIT?",
        options: [
          {
            id: 0,
            name: "No Site Visit",
            description: "Remote consultation only",
            image: kitchenImg,
            price: 0,
          },
          {
            id: 1,
            name: "Basic Site Visit",
            description: "Standard on-site assessment",
            image: aboutusImg,
            price: 500,
          },
          {
            id: 2,
            name: "Detailed Site Visit",
            description: "Comprehensive site analysis",
            image: pk1,
            price: 1000,
          },
          {
            id: 3,
            name: "Premium Site Visit",
            description: "Full site survey with recommendations",
            image: pk2,
            price: 1500,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: pk3,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: pk4,
            price: 5000,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: recentWork1,
            price: 10000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: recentWork2,
            price: 15000,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: bedroomImg,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: kitchenImg,
            price: 2000,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: aboutusImg,
            price: 10000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: pk3,
            price: 20000,
          },
        ],
      },
    ],
  },
  {
    id: "Remodels",
    title: "Remodels",
    description:
      "Transform your existing home with a complete remodel. Update your space with modern design and functionality.",
    steps: [
      {
        name: "Room Count",
        title: "HOW MANY ROOMS ARE UNDER CONSTRUCTION?",
        options: [
          {
            id: 0,
            name: "1-2 Rooms",
            description: "Small remodel project",
            image: pk2,
            price: 20000,
          },
          {
            id: 1,
            name: "3-4 Rooms",
            description: "Medium remodel project",
            image: pk3,
            price: 40000,
          },
          {
            id: 2,
            name: "5-6 Rooms",
            description: "Large remodel project",
            image: pk4,
            price: 60000,
          },
          {
            id: 3,
            name: "7+ Rooms",
            description: "Full house remodel",
            image: pk1,
            price: 100000,
          },
        ],
      },
      {
        name: "Room Types",
        title: "WHICH ROOMS ARE YOU REMODELING?",
        options: [
          {
            id: 0,
            name: "Kitchen Only",
            description: "Kitchen renovation",
            image: recentWork2,
            price: 0,
          },
          {
            id: 1,
            name: "Bathroom Only",
            description: "Bathroom renovation",
            image: recentWork3,
            price: 0,
          },
          {
            id: 2,
            name: "Kitchen & Bathroom",
            description: "Kitchen and bathroom renovation",
            image: bedroomImg,
            price: 5000,
          },
          {
            id: 3,
            name: "Multiple Rooms",
            description: "Comprehensive room renovation",
            image: kitchenImg,
            price: 10000,
          },
        ],
      },
      {
        name: "Site Visit",
        title: "DO YOU REQUIRE A SITE VISIT?",
        options: [
          {
            id: 0,
            name: "No Site Visit",
            description: "Remote consultation only",
            image: aboutusImg,
            price: 0,
          },
          {
            id: 1,
            name: "Basic Site Visit",
            description: "Standard on-site assessment",
            image: recentWork1,
            price: 400,
          },
          {
            id: 2,
            name: "Detailed Site Visit",
            description: "Comprehensive site analysis",
            image: pk2,
            price: 800,
          },
          {
            id: 3,
            name: "Premium Site Visit",
            description: "Full site survey with recommendations",
            image: pk3,
            price: 1200,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: pk4,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: pk1,
            price: 3000,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: recentWork2,
            price: 6000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: recentWork3,
            price: 9000,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: bedroomImg,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: kitchenImg,
            price: 1500,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: aboutusImg,
            price: 7500,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: pk4,
            price: 15000,
          },
        ],
      },
    ],
  },
  {
    id: "What Can I Build",
    title: "What Can I Build",
    description:
      "Discover what you can build on your property. Get expert guidance on your construction possibilities.",
    steps: [
      {
        name: "User Type",
        title: "ARE YOU A CONTRACTOR OR A HOMEOWNER?",
        options: [
          {
            id: 0,
            name: "Homeowner",
            description: "Individual property owner",
            image: pk3,
            price: 0,
          },
          {
            id: 1,
            name: "Contractor",
            description: "Professional contractor",
            image: pk4,
            price: 0,
          },
          {
            id: 2,
            name: "Developer",
            description: "Property developer",
            image: pk1,
            price: 0,
          },
          {
            id: 3,
            name: "Investor",
            description: "Real estate investor",
            image: pk2,
            price: 0,
          },
        ],
      },
      {
        name: "Planning",
        title: "GET AHEAD OF THE GAME!",
        options: [
          {
            id: 0,
            name: "Basic Planning",
            description: "Initial project planning",
            image: recentWork3,
            price: 1000,
          },
          {
            id: 1,
            name: "Standard Planning",
            description: "Comprehensive project planning",
            image: bedroomImg,
            price: 2500,
          },
          {
            id: 2,
            name: "Advanced Planning",
            description: "Detailed project planning",
            image: kitchenImg,
            price: 5000,
          },
          {
            id: 3,
            name: "Premium Planning",
            description: "Complete project planning",
            image: aboutusImg,
            price: 10000,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: recentWork1,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: recentWork2,
            price: 2000,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: pk3,
            price: 4000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: pk4,
            price: 6000,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: pk1,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: pk2,
            price: 1000,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: recentWork3,
            price: 5000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: bedroomImg,
            price: 10000,
          },
        ],
      },
    ],
  },
  {
    id: "Pre Approved Plans",
    title: "Pre Approved Plans",
    description:
      "Choose from our pre-approved plans and get started quickly. Save time and money with ready-to-build designs.",
    steps: [
      {
        name: "Package",
        title: "WHAT PACKAGE IS BEST FOR YOU?",
        options: [
          {
            id: 0,
            name: "Basic Package",
            description: "Essential features and standard materials",
            image: pk4,
            price: 50000,
          },
          {
            id: 1,
            name: "Standard Package",
            description: "Quality materials with modern finishes",
            image: pk1,
            price: 75000,
          },
          {
            id: 2,
            name: "Premium Package",
            description: "High-end materials and luxury finishes",
            image: pk2,
            price: 100000,
          },
          {
            id: 3,
            name: "Custom Package",
            description: "Fully customized to your specifications",
            image: pk3,
            price: 150000,
          },
        ],
      },
      {
        name: "Location",
        title: "WHERE ARE YOU BUILDING?",
        options: [
          {
            id: 0,
            name: "Urban Area",
            description: "City center location",
            image: kitchenImg,
            price: 0,
          },
          {
            id: 1,
            name: "Suburban Area",
            description: "Residential neighborhood",
            image: aboutusImg,
            price: 10000,
          },
          {
            id: 2,
            name: "Rural Area",
            description: "Countryside location",
            image: recentWork1,
            price: 20000,
          },
          {
            id: 3,
            name: "Remote Area",
            description: "Isolated location",
            image: recentWork2,
            price: 30000,
          },
        ],
      },
      {
        name: "Additional",
        title: "ADDITIONAL SERVICES",
        options: [
          {
            id: 0,
            name: "No Additional Services",
            description: "Standard package only",
            image: recentWork3,
            price: 0,
          },
          {
            id: 1,
            name: "Permit Assistance",
            description: "Help with building permits",
            image: bedroomImg,
            price: 5000,
          },
          {
            id: 2,
            name: "Project Management",
            description: "Full project oversight",
            image: pk4,
            price: 25000,
          },
          {
            id: 3,
            name: "Premium Support",
            description: "Complete project support",
            image: pk1,
            price: 50000,
          },
        ],
      },
    ],
  },
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
  return project?.steps[stepIndex]?.title || "Select Options";
};

export const getCurrentStepItems = (
  projectTypeId: string,
  stepIndex: number
): StepOption[] => {
  const project = getProjectTypeById(projectTypeId);
  return project?.steps[stepIndex]?.options || [];
};

export const calculateTotalPrice = (
  selectedItems: { [stepName: string]: number },
  projectTypeId: string
): number => {
  let total = 0;

  // Get the project type to know which steps are relevant
  const project = getProjectTypeById(projectTypeId);
  if (!project) return 0;

  // Calculate total based on selected items
  Object.entries(selectedItems).forEach(([stepName, itemId]) => {
    const step = project.steps.find((s) => s.name === stepName);
    if (step) {
      const option = step.options.find((o) => o.id === itemId);
      if (option) {
        total += option.price;
      }
    }
  });

  return total;
};

export const getSelectedItemPrice = (
  stepName: string,
  itemId: number,
  projectTypeId: string
): number => {
  const project = getProjectTypeById(projectTypeId);
  if (!project) return 0;

  const step = project.steps.find((s) => s.name === stepName);
  if (!step) return 0;

  const option = step.options.find((o) => o.id === itemId);
  return option?.price || 0;
};

export const getRelevantOrderItems = (
  selectedItems: { [stepName: string]: number },
  projectTypeId: string
): Array<{ stepName: string; itemId: number; price: number; name: string }> => {
  const project = getProjectTypeById(projectTypeId);
  if (!project) return [];

  const orderItems: Array<{
    stepName: string;
    itemId: number;
    price: number;
    name: string;
  }> = [];

  Object.entries(selectedItems).forEach(([stepName, itemId]) => {
    const step = project.steps.find((s) => s.name === stepName);
    if (step) {
      const option = step.options.find((o) => o.id === itemId);
      if (option && option.price > 0) {
        orderItems.push({
          stepName,
          itemId,
          price: option.price,
          name: option.name,
        });
      }
    }
  });

  return orderItems;
};

// Floor Plan Interfaces
export interface FloorPlan {
  id: string;
  name: string;
  description: string;
  image: string;
  sqft: number;
  beds: number;
  bathrooms: number;
  price: number;
  type: "Studio" | "1 Bedroom" | "2 Bedroom" | "3 Bedroom" | "Custom";
  size: "Small" | "Medium" | "Large";
}

// Floor Plan Data
export const floorPlans: FloorPlan[] = [
  {
    id: "studio-plan-1",
    name: "Studio Plan",
    description:
      "Compact studio optimized for garage conversions with efficient plumbing wall.",
    image: bedroomImg,
    sqft: 400,
    beds: 0,
    bathrooms: 1,
    price: 23500,
    type: "Studio",
    size: "Small",
  },
  {
    id: "1-bedroom-plan-1",
    name: "1 Bedroom Plan",
    description:
      "Compact studio optimized for garage conversions with efficient plumbing wall.",
    image: kitchenImg,
    sqft: 600,
    beds: 1,
    bathrooms: 1,
    price: 28500,
    type: "1 Bedroom",
    size: "Small",
  },
  {
    id: "2-bedroom-plan-1",
    name: "2 Bedroom Plan",
    description:
      "Compact studio optimized for garage conversions with efficient plumbing wall.",
    image: recentWork1,
    sqft: 800,
    beds: 2,
    bathrooms: 1,
    price: 35000,
    type: "2 Bedroom",
    size: "Medium",
  },
  {
    id: "studio-plan-2",
    name: "Studio Plan Plus",
    description:
      "Enhanced studio design with modern amenities and smart storage solutions.",
    image: recentWork2,
    sqft: 450,
    beds: 0,
    bathrooms: 1,
    price: 26500,
    type: "Studio",
    size: "Small",
  },
  {
    id: "1-bedroom-plan-2",
    name: "1 Bedroom Deluxe",
    description:
      "Spacious one-bedroom layout perfect for long-term living arrangements.",
    image: recentWork3,
    sqft: 700,
    beds: 1,
    bathrooms: 1,
    price: 32500,
    type: "1 Bedroom",
    size: "Medium",
  },
  {
    id: "2-bedroom-plan-2",
    name: "2 Bedroom Family",
    description:
      "Family-friendly design with separate living and sleeping areas.",
    image: aboutusImg,
    sqft: 950,
    beds: 2,
    bathrooms: 2,
    price: 42000,
    type: "2 Bedroom",
    size: "Large",
  },
  {
    id: "3-bedroom-plan-1",
    name: "3 Bedroom Suite",
    description:
      "Luxurious three-bedroom layout with premium finishes and amenities.",
    image: pk1,
    sqft: 1200,
    beds: 3,
    bathrooms: 2,
    price: 55000,
    type: "3 Bedroom",
    size: "Large",
  },
  {
    id: "custom-plan-1",
    name: "Custom Design",
    description:
      "Tailored floor plan designed specifically for your unique requirements.",
    image: pk2,
    sqft: 0,
    beds: 0,
    bathrooms: 0,
    price: 75000,
    type: "Custom",
    size: "Large",
  },
];

// Filter functions for floor plans
export const getFloorPlansByType = (type: string) => {
  if (type === "Any") return floorPlans;
  return floorPlans.filter((plan) => plan.type === type);
};

export const getFloorPlansBySize = (size: string) => {
  if (size === "Any") return floorPlans;
  return floorPlans.filter((plan) => plan.size === size);
};

export const getFloorPlansByPriceRange = (priceRange: string) => {
  if (priceRange === "Any") return floorPlans;

  switch (priceRange) {
    case "Under $25k":
      return floorPlans.filter((plan) => plan.price < 25000);
    case "$25k - $35k":
      return floorPlans.filter(
        (plan) => plan.price >= 25000 && plan.price <= 35000
      );
    case "$35k - $50k":
      return floorPlans.filter(
        (plan) => plan.price > 35000 && plan.price <= 50000
      );
    case "Over $50k":
      return floorPlans.filter((plan) => plan.price > 50000);
    default:
      return floorPlans;
  }
};

export const searchFloorPlans = (query: string) => {
  if (!query.trim()) return floorPlans;

  const lowercaseQuery = query.toLowerCase();
  return floorPlans.filter(
    (plan) =>
      plan.name.toLowerCase().includes(lowercaseQuery) ||
      plan.description.toLowerCase().includes(lowercaseQuery) ||
      plan.type.toLowerCase().includes(lowercaseQuery)
  );
};

// Gallery Data
export interface GalleryItem {
  id: string;
  title: string;
  description: string;
  image: string;
  category:
    | "All"
    | "Vision-Driven Designs"
    | "3D Visualisation"
    | "Personalised Collaboration";
  tags: string[];
  featured: boolean;
}

export const galleryItems: GalleryItem[] = [
  {
    id: "1",
    title: "Modern Living Room",
    description:
      "Bright open-plan living space with contemporary furniture and natural lighting",
    image: "/src/assets/images/recentWork1.webp",
    category: "Vision-Driven Designs",
    tags: ["Living Room", "Modern", "Open Plan"],
    featured: true,
  },
  {
    id: "2",
    title: "Luxury Living Space",
    description:
      "Elegant living room with white sofas, built-in shelving, and decorative ceiling",
    image: "/src/assets/images/recentWork2.webp",
    category: "Vision-Driven Designs",
    tags: ["Living Room", "Luxury", "White"],
    featured: true,
  },
  {
    id: "3",
    title: "Minimalist Dining",
    description:
      "Clean dining area with wooden floors and contemporary furniture",
    image: "/src/assets/images/recentWork3.webp",
    category: "Vision-Driven Designs",
    tags: ["Dining", "Minimalist", "Wood"],
    featured: false,
  },
  {
    id: "4",
    title: "Modern Kitchen Design",
    description:
      "Contemporary kitchen with sleek appliances and modern fixtures",
    image: "/src/assets/images/kitchen.webp",
    category: "3D Visualisation",
    tags: ["Kitchen", "Modern", "Appliances"],
    featured: true,
  },
  {
    id: "5",
    title: "About Us Showcase",
    description: "Professional interior design showcase with elegant finishes",
    image: "/src/assets/images/aboutus.webp",
    category: "3D Visualisation",
    tags: ["Showcase", "Professional", "Elegant"],
    featured: false,
  },
  {
    id: "6",
    title: "Luxury Bedroom Suite",
    description: "Premium bedroom design with sophisticated styling",
    image: "/src/assets/images/bedroom.webp",
    category: "3D Visualisation",
    tags: ["Bedroom", "Luxury", "Premium"],
    featured: true,
  },
  {
    id: "7",
    title: "Package Design 1",
    description: "Custom interior package with modern aesthetic",
    image: "/src/assets/images/packages/pk1.webp",
    category: "Personalised Collaboration",
    tags: ["Package", "Custom", "Modern"],
    featured: false,
  },
  {
    id: "8",
    title: "Package Design 2",
    description: "Elegant interior package with premium finishes",
    image: "/src/assets/images/packages/pk2.webp",
    category: "Personalised Collaboration",
    tags: ["Package", "Elegant", "Premium"],
    featured: true,
  },
  {
    id: "9",
    title: "Package Design 3",
    description: "Contemporary package design with clean lines",
    image: "/src/assets/images/packages/pk3.webp",
    category: "Personalised Collaboration",
    tags: ["Package", "Contemporary", "Clean"],
    featured: false,
  },
  {
    id: "10",
    title: "Package Design 4",
    description: "Luxury package with sophisticated styling",
    image: "/src/assets/images/packages/pk4.webp",
    category: "Personalised Collaboration",
    tags: ["Package", "Luxury", "Sophisticated"],
    featured: true,
  },
  {
    id: "11",
    title: "Contemporary Living",
    description: "Modern living space with clean design principles",
    image: "/src/assets/images/recentWork1.webp",
    category: "Vision-Driven Designs",
    tags: ["Living", "Contemporary", "Clean"],
    featured: false,
  },
  {
    id: "12",
    title: "Elegant Dining Room",
    description: "Sophisticated dining area with premium materials",
    image: "/src/assets/images/recentWork2.webp",
    category: "Vision-Driven Designs",
    tags: ["Dining", "Elegant", "Premium"],
    featured: false,
  },
  {
    id: "13",
    title: "Modern Kitchen Island",
    description: "Contemporary kitchen with central island design",
    image: "/src/assets/images/kitchen.webp",
    category: "3D Visualisation",
    tags: ["Kitchen", "Island", "Contemporary"],
    featured: false,
  },
  {
    id: "14",
    title: "Professional Office",
    description: "Modern workspace design for productivity",
    image: "/src/assets/images/aboutus.webp",
    category: "3D Visualisation",
    tags: ["Office", "Professional", "Productivity"],
    featured: false,
  },
  {
    id: "15",
    title: "Master Bedroom",
    description: "Spacious master bedroom with luxury amenities",
    image: "/src/assets/images/bedroom.webp",
    category: "Personalised Collaboration",
    tags: ["Bedroom", "Master", "Spacious"],
    featured: false,
  },
  {
    id: "16",
    title: "Custom Package A",
    description: "Tailored interior design package for modern living",
    image: "/src/assets/images/packages/pk1.webp",
    category: "Personalised Collaboration",
    tags: ["Custom", "Tailored", "Modern"],
    featured: false,
  },
  {
    id: "17",
    title: "Premium Package B",
    description: "High-end design package with luxury finishes",
    image: "/src/assets/images/packages/pk2.webp",
    category: "Personalised Collaboration",
    tags: ["Premium", "High-end", "Luxury"],
    featured: false,
  },
  {
    id: "18",
    title: "Design Package C",
    description: "Comprehensive design solution for contemporary homes",
    image: "/src/assets/images/packages/pk3.webp",
    category: "Personalised Collaboration",
    tags: ["Design", "Comprehensive", "Contemporary"],
    featured: false,
  },
];

// Gallery utility functions
export const getGalleryByCategory = (category: string): GalleryItem[] => {
  if (category === "All") return galleryItems;
  return galleryItems.filter((item) => item.category === category);
};

export const getFeaturedGalleryItems = (): GalleryItem[] => {
  return galleryItems.filter((item) => item.featured);
};

export const searchGalleryItems = (query: string): GalleryItem[] => {
  if (!query.trim()) return galleryItems;

  const lowercaseQuery = query.toLowerCase();
  return galleryItems.filter(
    (item) =>
      item.title.toLowerCase().includes(lowercaseQuery) ||
      item.description.toLowerCase().includes(lowercaseQuery) ||
      item.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
};
