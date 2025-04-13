import { Link } from "react-router-dom";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar, Fuel, Info } from "lucide-react";
import { FavoriteButton } from "@/components/cars/FavoriteButton";
import type { Car } from "@/lib/db-types";

interface CarCardProps {
  car: Car;
}

export function CarCard({ car }: CarCardProps) {
  const specs = car.specifications;

  return (
    <Card className="overflow-hidden transition-all hover:shadow-lg">
      <div className="relative aspect-video w-full overflow-hidden">
        <img
          src={car.image_url}
          alt={`${car.make} ${car.model}`}
          className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
        />
        <div className="absolute right-2 top-2">
          <FavoriteButton car={car} />
        </div>
      </div>
      <CardContent className="p-4">
        <div className="mb-2 flex items-center justify-between">
          <h3 className="text-lg font-bold">
            {car.make} {car.model}
          </h3>
          <Badge variant="outline">{car.year}</Badge>
        </div>
        <div className="mb-4 flex items-center text-sm text-muted-foreground">
          <Badge variant="secondary" className="mr-2">
            {car.type}
          </Badge>
          <span>{car.color}</span>
        </div>
        <div className="mb-4 grid grid-cols-2 gap-2 text-sm">
          {specs.engine && (
            <div className="flex items-center">
              <Fuel className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{specs.engine}</span>
            </div>
          )}
          {specs.seats && (
            <div className="flex items-center">
              <Info className="mr-1 h-4 w-4 text-muted-foreground" />
              <span>{specs.seats} seats</span>
            </div>
          )}
        </div>
        <div className="mt-2 text-xl font-bold text-primary">
          ${car.daily_rate.toFixed(2)}<span className="text-sm text-muted-foreground">/day</span>
        </div>
      </CardContent>
      <CardFooter className="flex items-center justify-between bg-muted/50 p-4">
        <div className="flex items-center text-sm text-muted-foreground">
          <Calendar className="mr-1 h-4 w-4" />
          <span>{car.available ? "Available Now" : "Unavailable"}</span>
        </div>
        <Link to={`/car-details/${car.id}`}>
          <Button>View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}