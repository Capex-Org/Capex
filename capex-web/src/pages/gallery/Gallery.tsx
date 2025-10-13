import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import GalleryFilterBar from "./components/GalleryFilterBar";
import { getGalleryByCategory } from "@/lib/appData";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [visibleItems, setVisibleItems] = useState(9);

  // Filter gallery items
  const filteredItems = useMemo(() => {
    return getGalleryByCategory(selectedCategory);
  }, [selectedCategory]);

  // Get visible items for display
  const displayItems = filteredItems.slice(0, visibleItems);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setVisibleItems(9);
    setShowLoadMore(true);
  };

  const handleLoadMore = () => {
    setVisibleItems((prev) => Math.min(prev + 9, filteredItems.length));
    if (visibleItems + 9 >= filteredItems.length) {
      setShowLoadMore(false);
    }
  };

  return (
    <div className="min-h-screen bg-white  py-16 lg:py-24">
      {/* Filter Bar */}
      <GalleryFilterBar
        selectedCategory={selectedCategory}
        onCategoryChange={handleCategoryChange}
      />

      {/* Gallery Grid */}
      <div className="py-8">
        <div className="max-w-7xl mx-auto px-6">
          {displayItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {displayItems.map((item) => (
                  <div
                    key={item.id}
                    className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                  >
                    {/* Image Container */}
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                      />

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
                  </div>
                ))}
              </div>

              {/* Load More Button */}
              {showLoadMore && filteredItems.length > visibleItems && (
                <div className="text-center">
                  <Button
                    onClick={handleLoadMore}
                    className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 rounded-lg"
                  >
                    Load More
                  </Button>
                </div>
              )}
            </>
          ) : (
            <div className="text-center py-16">
              <div className="text-gray-400 text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
