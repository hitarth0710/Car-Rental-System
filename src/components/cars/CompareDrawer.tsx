import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
} from "@/components/ui/drawer";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import { X } from "lucide-react";
import { fine } from "@/lib/fine";
import type { Car } from "@/lib/db-types";

interface CompareDrawerProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  carIds: number[];
}

export function CompareDrawer({ open, onOpenChange, carIds }: CompareDrawerProps) {
  const [cars, setCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchCars = async () => {
      if (!open || carIds.length === 0) return;
      
      setIsLoading(true);
      try {
        const carsData = await fine.table("cars")
          .select()
          .in("id", carIds);
        
        // Parse specifications for each car
        const parsedCars = carsData.map(car => ({
          ...car,
          specifications: JSON.parse(car.specifications)
        }));
        
        setCars(parsedCars);
      } catch (error) {
        console.error("Error fetching cars for comparison:", error);
      } finally {
        setIsLoading(false);
      }
    };
    
    fetchCars();
  }, [open, carIds]);

  // Get all unique specification keys from all cars
  const allSpecKeys = cars.reduce((keys, car) => {
    Object.keys(car.specifications).forEach(key => {
      if (!keys.includes(key)) {
        keys.push(key);
      }
    });
    return keys;
  }, [] as string[]);

  return (
    <Drawer open={open} onOpenChange={onOpenChange}>
      <DrawerContent className="max-h-[85vh]">
        <DrawerHeader>
          <DrawerTitle>Compare Cars</DrawerTitle>
          <DrawerDescription>
            Compare specifications and features of selected vehicles
          </DrawerDescription>
        </DrawerHeader>
        
        <ScrollArea className="h-full max-h-[60vh] px-4">
          {isLoading ? (
            <div className="flex items-center justify-center py-8">
              <p>Loading comparison data...</p>
            </div>
          ) : cars.length > 0 ? (
            <div className="pb-6">
              {/* Car headers */}
              <div className="grid grid-cols-[200px_repeat(auto-fill,minmax(180px,1fr))] gap-4">
                <div></div> {/* Empty cell for labels column */}
                {cars.map(car => (
                  <div key={car.id} className="text-center">
                    <div className="aspect-video w-full overflow-hidden rounded-md">
                      <img
                        src={car.image_url}
                        alt={`${car.make} ${car.model}`}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <h3 className="mt-2 font-semibold">
                      {car.make} {car.model}
                    </h3>
                    <p className="text-sm text-muted-foreground">{car.year}</p>
                    <p className="mt-1 font-medium text-primary">
                      ${car.daily_rate.toFixed(2)}/day
                    </p>
                  </div>
                ))}
              </div>
              
              <Separator className="my-6" />
              
              {/* Basic info */}
              <div className="mb-6">
                <h4 className="mb-4 text-lg font-semibold">Basic Information</h4>
                <div className="space-y-2">
                  {[
                    { label: "Type", key: "type" },
                    { label: "Color", key: "color" },
                    { label: "Availability", key: "available" },
                  ].map(item => (
                    <div 
                      key={item.key} 
                      className="grid grid-cols-[200px_repeat(auto-fill,minmax(180px,1fr))] gap-4 py-2 even:bg-muted/30"
                    >
                      <div className="font-medium">{item.label}</div>
                      {cars.map(car => (
                        <div key={car.id} className="text-center">
                          {item.key === "available" 
                            ? (car[item.key] ? "Available" : "Unavailable")
                            : car[item.key]}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Specifications */}
              <div>
                <h4 className="mb-4 text-lg font-semibold">Specifications</h4>
                <div className="space-y-2">
                  {allSpecKeys.map(key => (
                    <div 
                      key={key} 
                      className="grid grid-cols-[200px_repeat(auto-fill,minmax(180px,1fr))] gap-4 py-2 even:bg-muted/30"
                    >
                      <div className="font-medium capitalize">
                        {key.replace(/([A-Z])/g, ' $1').trim()}
                      </div>
                      {cars.map(car => (
                        <div key={car.id} className="text-center">
                          {car.specifications[key]?.toString() || "—"}
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <div className="py-8 text-center">
              <p>No cars selected for comparison</p>
            </div>
          )}
        </ScrollArea>
        
        <DrawerFooter>
          <DrawerClose asChild>
            <Button variant="outline">Close</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}