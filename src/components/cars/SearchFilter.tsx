import { useState, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Slider } from "@/components/ui/slider";
import { Search, SlidersHorizontal, X } from "lucide-react";
import { fine } from "@/lib/fine";
import { useIsMobile } from "@/hooks/use-mobile";
import { CarFilters } from "@/lib/db-types";

export function SearchFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const isMobile = useIsMobile();
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [carTypes, setCarTypes] = useState<string[]>([]);
  const [carMakes, setCarMakes] = useState<string[]>([]);
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 300]);
  const [filters, setFilters] = useState<CarFilters>({
    type: searchParams.get("type") || undefined,
    make: searchParams.get("make") || undefined,
    minPrice: searchParams.get("minPrice") ? Number(searchParams.get("minPrice")) : undefined,
    maxPrice: searchParams.get("maxPrice") ? Number(searchParams.get("maxPrice")) : undefined,
  });
  const [searchQuery, setSearchQuery] = useState(searchParams.get("query") || "");

  // Fetch car types and makes for filter options
  useEffect(() => {
    const fetchFilterOptions = async () => {
      try {
        const cars = await fine.table("cars").select();
        
        // Extract unique types and makes
        const types = [...new Set(cars.map(car => car.type))];
        const makes = [...new Set(cars.map(car => car.make))];
        
        setCarTypes(types);
        setCarMakes(makes);
        
        // Set price range based on min and max prices
        const prices = cars.map(car => car.daily_rate);
        const minPrice = Math.floor(Math.min(...prices));
        const maxPrice = Math.ceil(Math.max(...prices));
        setPriceRange([minPrice, maxPrice]);
        
      } catch (error) {
        console.error("Failed to fetch filter options:", error);
      }
    };
    
    fetchFilterOptions();
  }, []);

  const handleFilterChange = (key: keyof CarFilters, value: string | number | undefined) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handlePriceChange = (value: number[]) => {
    setFilters(prev => ({
      ...prev,
      minPrice: value[0],
      maxPrice: value[1]
    }));
  };

  const applyFilters = () => {
    const params = new URLSearchParams();
    
    if (searchQuery) params.set("query", searchQuery);
    if (filters.type) params.set("type", filters.type);
    if (filters.make) params.set("make", filters.make);
    if (filters.minPrice !== undefined) params.set("minPrice", filters.minPrice.toString());
    if (filters.maxPrice !== undefined) params.set("maxPrice", filters.maxPrice.toString());
    
    setSearchParams(params);
    if (isMobile) setIsFilterOpen(false);
  };

  const clearFilters = () => {
    setFilters({});
    setSearchQuery("");
    setSearchParams({});
    if (isMobile) setIsFilterOpen(false);
  };

  const toggleFilters = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleSearchKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      applyFilters();
    }
  };

  return (
    <div className="mb-8 w-full">
      <div className="mb-4 flex items-center gap-2">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input
            type="text"
            placeholder="Search by make, model, or color..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyDown={handleSearchKeyDown}
            className="pl-10"
            aria-label="Search cars"
          />
        </div>
        <Button onClick={() => applyFilters()}>Search</Button>
        {isMobile && (
          <Button variant="outline" size="icon" onClick={toggleFilters}>
            <SlidersHorizontal className="h-4 w-4" />
          </Button>
        )}
      </div>

      {/* Desktop Filters */}
      {(!isMobile || isFilterOpen) && (
        <div className={`${isMobile ? "border rounded-lg p-4 mb-4" : "flex flex-wrap gap-4"}`}>
          {isMobile && (
            <div className="mb-4 flex items-center justify-between">
              <h3 className="font-medium">Filters</h3>
              <Button variant="ghost" size="icon" onClick={toggleFilters}>
                <X className="h-4 w-4" />
              </Button>
            </div>
          )}

          <div className={isMobile ? "space-y-4" : "flex flex-wrap gap-4"}>
            <div className={isMobile ? "" : "w-[180px]"}>
              <Label htmlFor="type">Car Type</Label>
              <Select
                value={filters.type || "all-types"}
                onValueChange={(value) => handleFilterChange("type", value === "all-types" ? undefined : value)}
              >
                <SelectTrigger id="type">
                  <SelectValue placeholder="All Types" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-types">All Types</SelectItem>
                  {carTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className={isMobile ? "" : "w-[180px]"}>
              <Label htmlFor="make">Make</Label>
              <Select
                value={filters.make || "all-makes"}
                onValueChange={(value) => handleFilterChange("make", value === "all-makes" ? undefined : value)}
              >
                <SelectTrigger id="make">
                  <SelectValue placeholder="All Makes" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all-makes">All Makes</SelectItem>
                  {carMakes.map((make) => (
                    <SelectItem key={make} value={make}>
                      {make}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className={isMobile ? "pt-2" : "w-[250px]"}>
              <Label>Price Range ($/day)</Label>
              <div className="pt-4">
                <Slider
                  defaultValue={[priceRange[0], priceRange[1]]}
                  min={priceRange[0]}
                  max={priceRange[1]}
                  step={5}
                  value={[
                    filters.minPrice !== undefined ? filters.minPrice : priceRange[0],
                    filters.maxPrice !== undefined ? filters.maxPrice : priceRange[1],
                  ]}
                  onValueChange={handlePriceChange}
                />
              </div>
              <div className="mt-2 flex items-center justify-between text-sm">
                <span>${filters.minPrice !== undefined ? filters.minPrice : priceRange[0]}</span>
                <span>${filters.maxPrice !== undefined ? filters.maxPrice : priceRange[1]}</span>
              </div>
            </div>

            <div className={`flex gap-2 ${isMobile ? "mt-6" : "items-end ml-auto"}`}>
              <Button variant="outline" onClick={clearFilters}>
                Clear
              </Button>
              <Button onClick={applyFilters}>Apply Filters</Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}