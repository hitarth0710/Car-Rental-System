import { useState } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { format, parseISO } from "date-fns";
import { Calendar, Car as CarIcon, Loader2 } from "lucide-react";
import { fine } from "@/lib/fine";
import { useToast } from "@/hooks/use-toast";
import type { Car } from "@/lib/db-types";

interface BookingCardProps {
  booking: {
    id: number;
    car_id: number;
    start_date: string;
    end_date: string;
    total_price: number;
    status: string;
  };
  car: Car;
  onCancelBooking: (id: number) => void;
}

export function BookingCard({ booking, car, onCancelBooking }: BookingCardProps) {
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed":
        return "bg-green-500";
      case "pending":
        return "bg-yellow-500";
      case "cancelled":
        return "bg-red-500";
      default:
        return "bg-gray-500";
    }
  };

  const handleCancel = async () => {
    if (booking.status === "cancelled") return;
    
    setIsLoading(true);
    try {
      await fine.table("bookings")
        .update({ status: "cancelled" })
        .eq("id", booking.id)
        .select();
      
      toast({
        title: "Booking cancelled",
        description: "Your booking has been successfully cancelled.",
      });
      
      onCancelBooking(booking.id);
    } catch (error) {
      console.error("Error cancelling booking:", error);
      toast({
        title: "Error",
        description: "Failed to cancel booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Card>
      <CardContent className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
          <div className="mb-4 flex items-center sm:mb-0">
            <div className="h-16 w-16 overflow-hidden rounded-md">
              <img
                src={car.image_url}
                alt={`${car.make} ${car.model}`}
                className="h-full w-full object-cover"
              />
            </div>
            <div className="ml-4">
              <h3 className="font-semibold">
                {car.make} {car.model}
              </h3>
              <div className="flex items-center text-sm text-muted-foreground">
                <CarIcon className="mr-1 h-4 w-4" />
                <span>{car.year} • {car.color}</span>
              </div>
            </div>
          </div>
          
          <div className="flex items-center">
            <Badge 
              variant="outline" 
              className={`${getStatusColor(booking.status)} text-white border-0`}
            >
              {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
            </Badge>
          </div>
        </div>
        
        <div className="mt-4 grid grid-cols-1 gap-4 border-t pt-4 sm:grid-cols-3">
          <div>
            <p className="text-xs text-muted-foreground">Pickup Date</p>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
              <p className="text-sm">{format(parseISO(booking.start_date), "MMM dd, yyyy")}</p>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground">Return Date</p>
            <div className="flex items-center">
              <Calendar className="mr-1 h-4 w-4 text-muted-foreground" />
              <p className="text-sm">{format(parseISO(booking.end_date), "MMM dd, yyyy")}</p>
            </div>
          </div>
          
          <div>
            <p className="text-xs text-muted-foreground">Total Price</p>
            <p className="text-sm font-semibold">${booking.total_price.toFixed(2)}</p>
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="border-t bg-muted/50 p-4">
        {booking.status !== "cancelled" && (
          <Button 
            variant="outline" 
            className="ml-auto" 
            onClick={handleCancel}
            disabled={isLoading}
          >
            {isLoading ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                Cancelling...
              </>
            ) : (
              "Cancel Booking"
            )}
          </Button>
        )}
      </CardFooter>
    </Card>
  );
}