import { Button } from "@/components/ui/button";

interface GalleryFilterBarProps {
  onCategoryChange: (category: string) => void;
  selectedCategory: string;
}

const categories = [
  "All",
  "Vision-Driven Designs",
  "3D Visualisation",
  "Personalised Collaboration",
];

const GalleryFilterBar = ({
  onCategoryChange,
  selectedCategory,
}: GalleryFilterBarProps) => {
  return (
    <div className="bg-white  py-4">
      <div className=" ">
        {/* Desktop Layout */}
        <div className="hidden lg:flex justify-center">
          <div className="flex gap-2 bg-gray-100 p-1 rounded-lg">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "ghost"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className={`px-4 py-2 rounded-md transition-all ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white shadow-sm"
                    : "text-gray-600 hover:text-gray-900 hover:bg-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="flex gap-2 overflow-x-auto pb-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                onClick={() => onCategoryChange(category)}
                className={`whitespace-nowrap flex-shrink-0 ${
                  selectedCategory === category
                    ? "bg-primary-600 text-white border-primary-600"
                    : "text-gray-600 border-gray-300"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryFilterBar;
