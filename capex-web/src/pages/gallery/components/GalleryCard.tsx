import { Button } from "@/components/ui/button";
import { ArrowUpRight, Eye } from "lucide-react";
import type { GalleryItem } from "@/lib/appData";

interface GalleryCardProps {
  item: GalleryItem;
  onViewDetails?: (item: GalleryItem) => void;
}

const GalleryCard = ({ item, onViewDetails }: GalleryCardProps) => {
  return (
    <div className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <Button
            variant="outline"
            size="sm"
            className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 hover:bg-white"
            onClick={() => onViewDetails?.(item)}
          >
            <Eye className="w-4 h-4 mr-2" />
            View Details
          </Button>
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
            {item.category}
          </span>
        </div>

        {/* Featured Badge */}
        {item.featured && (
          <div className="absolute top-3 right-3">
            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
              Featured
            </span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-gray-900 text-lg mb-2 group-hover:text-amber-600 transition-colors">
          {item.title}
        </h3>

        <p className="text-gray-600 text-sm mb-3 line-clamp-2">
          {item.description}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-4">
          {item.tags.slice(0, 3).map((tag, index) => (
            <span
              key={index}
              className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full"
            >
              {tag}
            </span>
          ))}
          {item.tags.length > 3 && (
            <span className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded-full">
              +{item.tags.length - 3}
            </span>
          )}
        </div>

        {/* Action Button */}
        <Button
          variant="outline"
          size="sm"
          className="w-full group-hover:bg-amber-50 group-hover:border-amber-200 group-hover:text-amber-700 transition-all"
          onClick={() => onViewDetails?.(item)}
        >
          View Project
          <ArrowUpRight className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};

export default GalleryCard;
