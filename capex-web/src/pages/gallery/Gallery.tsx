import { useState, useMemo } from "react";
import { Button } from "@/components/ui/button";
import GalleryFilterBar from "./components/GalleryFilterBar";
import { getGalleryByCategory } from "@/lib/appData";
import { motion, AnimatePresence } from "framer-motion";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [showLoadMore, setShowLoadMore] = useState(true);
  const [visibleItems, setVisibleItems] = useState(9);
  const [isLoading, setIsLoading] = useState(false);

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

  const handleLoadMore = async () => {
    setIsLoading(true);

    // Simulate loading delay for better UX
    await new Promise((resolve) => setTimeout(resolve, 800));

    setVisibleItems((prev) => Math.min(prev + 9, filteredItems.length));
    if (visibleItems + 9 >= filteredItems.length) {
      setShowLoadMore(false);
    }

    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-white section-white ">
      {/* Filter Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2, ease: "easeOut", delay: 0.05 }}
      >
        <GalleryFilterBar
          selectedCategory={selectedCategory}
          onCategoryChange={handleCategoryChange}
        />
      </motion.div>

      {/* Gallery Grid */}
      <div className="py-8">
        <div>
          {displayItems.length > 0 ? (
            <>
              <AnimatePresence mode="wait">
                <motion.div
                  key={selectedCategory}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {displayItems.map((item, index) => (
                    <motion.div
                      key={item.id}
                      className="group bg-white rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{
                        duration: 0.2,
                        ease: "easeOut",
                        delay: 0.1 + index * 0.05,
                      }}
                    >
                      {/* Image Container */}
                      <div className="relative aspect-[4/3] overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        />

                        {/* Category Badge */}
                        <motion.div
                          className="absolute top-3 left-3"
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 0.2 + index * 0.05 }}
                        >
                          <span className="bg-white/90 text-gray-700 text-xs px-2 py-1 rounded-full font-medium">
                            {item.category}
                          </span>
                        </motion.div>

                        {/* Featured Badge */}
                        {item.featured && (
                          <motion.div
                            className="absolute top-3 right-3"
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.25 + index * 0.05 }}
                          >
                            <span className="bg-amber-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                              Featured
                            </span>
                          </motion.div>
                        )}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>

              {/* Load More Button */}
              {showLoadMore && filteredItems.length > visibleItems && (
                <motion.div
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button
                    onClick={handleLoadMore}
                    disabled={isLoading}
                    className="bg-amber-600 hover:bg-amber-700 disabled:bg-amber-400 disabled:cursor-not-allowed text-white px-8 py-3 rounded-lg transition-all duration-200"
                  >
                    {isLoading ? (
                      <div className="flex items-center gap-2">
                        <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        Loading...
                      </div>
                    ) : (
                      "Load More"
                    )}
                  </Button>
                </motion.div>
              )}
            </>
          ) : (
            <motion.div
              className="text-center py-16"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.2 }}
            >
              <div className="text-gray-400 text-6xl mb-4">📷</div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                No items found
              </h3>
              <p className="text-gray-500">Try adjusting your filters.</p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;
