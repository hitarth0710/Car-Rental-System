import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CarCard } from "@/components/cars/CarCard";
import { SearchFilter } from "@/components/cars/SearchFilter";
import { CompareDrawer } from "@/components/cars/CompareDrawer";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { fine } from "@/lib/fine";
import { Car } from "@/lib/db-types";
import { Loader2, SlidersHorizontal } from "lucide-react";

const CarsPage = () => {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchParams] = useSearchParams();
  const [compareMode, setCompareMode] = useState(false);
  const [selectedCars, setSelectedCars] = useState<number[]>([]);
  const [isCompareDrawerOpen, setIsCompareDrawerOpen] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      setIsLoading(true);
      try {
        // Start building the query
        let query = fine.table("cars").select();
        
        // Apply filters from search params
        const type = searchParams.get("type");
        const make = searchParams.get("make");
        const minPrice = searchParams.get("minPrice");
        const maxPrice = searchParams.get("maxPrice");
        const searchQuery = searchParams.get("query");
        
        if (type) {
          query = query.eq("type", type);
        }
        
        if (make) {
          query = query.eq("make", make);
        }
        
        if (minPrice) {
          query = query.gt("daily_rate", parseFloat(minPrice));
        }
        
        if (maxPrice) {
          query = query.lt("daily_rate", parseFloat(maxPrice));
        }
        
        // Execute the query
        let carsData = await query;
        
        // Handle search query (client-side filtering for text search)
        if (searchQuery && searchQuery.trim() !== "") {
          const lowerQuery = searchQuery.toLowerCase();
          carsData = carsData.filter(car => 
            car.make.toLowerCase().includes(lowerQuery) ||
            car.model.toLowerCase().includes(lowerQuery) ||
            car.color.toLowerCase().includes(lowerQuery) ||
            car.description.toLowerCase().includes(lowerQuery)
          );
        }
        
        // Parse the specifications JSON string for each car
        const parsedCars = carsData.map(car => ({
          ...car,
          specifications: JSON.parse(car.specifications)
        }));
        
        setCars(parsedCars);
      } catch (error) {
        console.error("Error fetching cars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchCars();
  }, [searchParams]);

  const toggleCarSelection = (carId: number) => {
    setSelectedCars(prev => {
      if (prev.includes(carId)) {
        return prev.filter(id => id !== carId);
      } else {
        if (prev.length < 3) {
          return [...prev, carId];
        } else {
          return prev;
        }
      }
    });
  };

  const handleCompareClick = () => {
    if (selectedCars.length > 0) {
      setIsCompareDrawerOpen(true);
    }
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
            <h1 className="text-3xl font-bold">Available Cars</h1>
            
            <div className="flex items-center gap-4">
              <Button 
                variant={compareMode ? "default" : "outline"}
                className="flex items-center gap-2"
                onClick={() => {
                  setCompareMode(!compareMode);
                  if (!compareMode) {
                    setSelectedCars([]);
                  }
                }}
              >
                <SlidersHorizontal className="h-4 w-4" />
                {compareMode ? "Exit Compare" : "Compare Cars"}
              </Button>
              
              {compareMode && (
                <Button 
                  onClick={handleCompareClick}
                  disabled={selectedCars.length < 2}
                >
                  Compare ({selectedCars.length})
                </Button>
              )}
            </div>
          </div>
          
          <SearchFilter />
          
          {compareMode && (
            <div className="mb-4 rounded-md border bg-muted/50 p-4">
              <p className="mb-2 text-sm">
                Select up to 3 cars to compare their specifications side by side.
              </p>
              <p className="text-sm text-muted-foreground">
                {selectedCars.length === 0 
                  ? "No cars selected" 
                  : `${selectedCars.length} car${selectedCars.length > 1 ? 's' : ''} selected`}
              </p>
            </div>
          )}
          
          {isLoading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          ) : cars.length > 0 ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {cars.map((car) => (
                <div key={car.id} className="relative">
                  {compareMode && (
                    <div className="absolute left-2 top-2 z-10">
                      <Checkbox 
                        checked={selectedCars.includes(car.id as number)}
                        onCheckedChange={() => toggleCarSelection(car.id as number)}
                        disabled={!selectedCars.includes(car.id as number) && selectedCars.length >= 3}
                        className="h-5 w-5 border-2 bg-white"
                      />
                    </div>
                  )}
                  <CarCard car={car} />
                </div>
              ))}
            </div>
          ) : (
            <div className="rounded-lg border bg-muted/50 p-8 text-center">
              <h3 className="mb-2 text-lg font-semibold">No cars found</h3>
              <p className="text-muted-foreground">
                Try adjusting your search filters to find more options.
              </p>
            </div>
          )}
        </div>
      </main>
      
      <CompareDrawer 
        open={isCompareDrawerOpen} 
        onOpenChange={setIsCompareDrawerOpen}
        carIds={selectedCars}
      />
      
      <Footer />
    </div>
  );
};

export default CarsPage;