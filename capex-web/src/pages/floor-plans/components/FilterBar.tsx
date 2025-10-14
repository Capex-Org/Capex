import { useState } from "react";
import { Search, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { CustomInput } from "@/components/ui/custom-input";
import { CustomSelect } from "@/components/ui/custom-select";

interface FilterBarProps {
  onTypeChange: (type: string) => void;
  onSizeChange: (size: string) => void;
  onPriceChange: (price: string) => void;
  onSortChange: (sort: string) => void;
  onSearchChange: (query: string) => void;
  onClearAll: () => void;
  searchQuery: string;
}

const FilterBar = ({
  onTypeChange,
  onSizeChange,
  onPriceChange,
  onSortChange,
  onSearchChange,
  onClearAll,
  searchQuery,
}: FilterBarProps) => {
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setLocalSearchQuery(value);
    onSearchChange(value);
  };

  const clearSearch = () => {
    setLocalSearchQuery("");
    onSearchChange("");
  };

  return (
    <div className="bg-white border-b border-gray-200 py-4">
      <div className="max-w-7xl mx-auto">
        {/* Desktop Layout */}
        <div className="hidden lg:grid grid-cols-12 gap-4 items-end w-full justify-between">
          {/* Type Filter - 2/12 */}
          <div className="col-span-2 justify-between">
            <CustomSelect
              label="Type"
              onChange={(e) => onTypeChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Any", label: "Any" },
                { value: "Studio", label: "Studio" },
                { value: "1 Bedroom", label: "1 Bedroom" },
                { value: "2 Bedroom", label: "2 Bedroom" },
                { value: "3 Bedroom", label: "3 Bedroom" },
                { value: "Custom", label: "Custom" },
              ]}
            />
          </div>

          {/* Size Filter - 2/12 */}
          <div className="col-span-2">
            <CustomSelect
              label="Size"
              onChange={(e) => onSizeChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Any", label: "Any" },
                { value: "Small", label: "Small" },
                { value: "Medium", label: "Medium" },
                { value: "Large", label: "Large" },
              ]}
            />
          </div>

          {/* Price Filter - 2/12 */}
          <div className="col-span-2">
            <CustomSelect
              label="Price"
              onChange={(e) => onPriceChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Any", label: "Any" },
                { value: "Under $25k", label: "Under $25k" },
                { value: "$25k - $35k", label: "$25k - $35k" },
                { value: "$35k - $50k", label: "$35k - $50k" },
                { value: "Over $50k", label: "Over $50k" },
              ]}
            />
          </div>

          {/* Sort Filter - 2/12 */}
          <div className="col-span-2">
            <CustomSelect
              label="Sort By"
              onChange={(e) => onSortChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Relevance", label: "Relevance" },
                { value: "Price Low to High", label: "Price Low to High" },
                { value: "Price High to Low", label: "Price High to Low" },
                { value: "Size Small to Large", label: "Size Small to Large" },
                { value: "Size Large to Small", label: "Size Large to Small" },
              ]}
            />
          </div>

          {/* Search Bar - 3/12 */}
          <div className="col-span-3">
            <div className="relative">
              <CustomInput
                label="Search Floor Plans"
                type="text"
                placeholder="Search Floor Plans"
                value={localSearchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-10"
              />
              <Search className="absolute left-3 top-8 w-4 h-4 text-gray-400 pointer-events-none" />
              {localSearchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>

          {/* Clear All Button - 1/12 */}
          <div className="col-span-1">
            <Button variant="outline" size="sm" className="w-full" onClick={onClearAll}>
              Clear All
            </Button>
          </div>
        </div>

        {/* Mobile Layout */}
        <div className="lg:hidden">
          <div className="bg-white rounded-lg shadow-lg p-6 space-y-4">
            {/* Type Filter */}
            <CustomSelect
              label="Type"
              onChange={(e) => onTypeChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Any", label: "Any" },
                { value: "Studio", label: "Studio" },
                { value: "1 Bedroom", label: "1 Bedroom" },
                { value: "2 Bedroom", label: "2 Bedroom" },
                { value: "3 Bedroom", label: "3 Bedroom" },
                { value: "Custom", label: "Custom" },
              ]}
            />

            {/* Size Filter */}
            <CustomSelect
              label="Size"
              onChange={(e) => onSizeChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Any", label: "Any" },
                { value: "Small", label: "Small" },
                { value: "Medium", label: "Medium" },
                { value: "Large", label: "Large" },
              ]}
            />

            {/* Price Filter */}
            <CustomSelect
              label="Price"
              onChange={(e) => onPriceChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Any", label: "Any" },
                { value: "Under $25k", label: "Under $25k" },
                { value: "$25k - $35k", label: "$25k - $35k" },
                { value: "$35k - $50k", label: "$35k - $50k" },
                { value: "Over $50k", label: "Over $50k" },
              ]}
            />

            {/* Sort Filter */}
            <CustomSelect
              label="Sort By"
              onChange={(e) => onSortChange(e.target.value)}
              containerClassName="w-full"
              options={[
                { value: "Relevance", label: "Relevance" },
                { value: "Price Low to High", label: "Price Low to High" },
                { value: "Price High to Low", label: "Price High to Low" },
                { value: "Size Small to Large", label: "Size Small to Large" },
                { value: "Size Large to Small", label: "Size Large to Small" },
              ]}
            />

            {/* Search Bar */}
            <div className="relative">
              <CustomInput
                label="Search"
                type="text"
                placeholder="Search Floor Plans"
                value={localSearchQuery}
                onChange={handleSearchChange}
                className="pl-10 pr-10"
              />
              <Search className="absolute left-3 top-8 w-4 h-4 text-gray-400 pointer-events-none" />
              {localSearchQuery && (
                <button
                  onClick={clearSearch}
                  className="absolute right-3 top-8 text-gray-400 hover:text-gray-600"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Clear All Button */}
            <div className="flex justify-end pt-2">
              <Button variant="outline" size="sm" onClick={onClearAll}>
                Clear All
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
