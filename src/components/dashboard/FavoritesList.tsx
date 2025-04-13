import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { fine } from "@/lib/fine";
import { Loader2, Trash2 } from "lucide-react";
import type { Car } from "@/lib/db-types";

interface FavoritesListProps {
  userId: string;
}

export function FavoritesList({ userId }: FavoritesListProps) {
  const [favorites, setFavorites] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchFavorites = async () => {
    setIsLoading(true);
    try {
      // Get favorite car IDs for this user
      const favoritesData = await fine.table("favorites")
        .select()
        .eq("user_id", userId);
      
      if (favoritesData.length === 0) {
        setFavorites([]);
        return;
      }
      
      // Extract car IDs
      const carIds = favoritesData.map(fav => fav.car_id);
      
      // Fetch car details
      const carsData = await fine.table("cars")
        .select()
        .in("id", carIds);
      
      // Parse specifications for each car
      const parsedCars = carsData.map(car => ({
        ...car,
        specifications: JSON.parse(car.specifications)
      }));
      
      setFavorites(parsedCars);
    } catch (error) {
      console.error("Error fetching favorites:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchFavorites();
  }, [userId]);

  const removeFavorite = async (carId: number) => {
    try {
      await fine.table("favorites")
        .delete()
        .eq("user_id", userId)
        .eq("car_id", carId);
      
      // Update the UI
      setFavorites(prev => prev.filter(car => car.id !== carId));
    } catch (error) {
      console.error("Error removing favorite:", error);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center py-8">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    );
  }

  if (favorites.length === 0) {
    return (
      <div className="rounded-lg border bg-muted/50 p-8 text-center">
        <h3 className="mb-2 text-lg font-semibold">No favorites yet</h3>
        <p className="mb-4 text-muted-foreground">
          Browse our collection and add cars to your favorites.
        </p>
        <Button asChild>
          <Link to="/cars">Browse Cars</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {favorites.map(car => (
        <Card key={car.id} className="overflow-hidden">
          <div className="aspect-video w-full">
            <img
              src={car.image_url}
              alt={`${car.make} ${car.model}`}
              className="h-full w-full object-cover"
            />
          </div>
          <CardContent className="p-4">
            <div className="mb-2 flex items-center justify-between">
              <h3 className="font-semibold">
                {car.make} {car.model}
              </h3>
              <Badge variant="outline">{car.year}</Badge>
            </div>
            <div className="mb-2 text-lg font-bold text-primary">
              ${car.daily_rate.toFixed(2)}<span className="text-sm text-muted-foreground">/day</span>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <Button asChild variant="outline" size="sm">
                <Link to={`/car-details/${car.id}`}>View Details</Link>
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => removeFavorite(car.id as number)}
                className="text-muted-foreground hover:text-destructive"
              >
                <Trash2 className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}