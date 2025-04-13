import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format, addDays, differenceInDays } from "date-fns";
import { CalendarIcon, Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";
import { fine } from "@/lib/fine";
import { useToast } from "@/hooks/use-toast";
import type { Car } from "@/lib/db-types";

interface BookingFormProps {
  car: Car;
}

export function BookingForm({ car }: BookingFormProps) {
  const [startDate, setStartDate] = useState<Date | undefined>(new Date());
  const [endDate, setEndDate] = useState<Date | undefined>(addDays(new Date(), 3));
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { data: session } = fine.auth.useSession();

  const calculateTotalDays = () => {
    if (!startDate || !endDate) return 0;
    return Math.max(differenceInDays(endDate, startDate), 1);
  };

  const calculateTotalPrice = () => {
    const days = calculateTotalDays();
    return days * car.daily_rate;
  };

  const handleBooking = async () => {
    if (!session?.user) {
      toast({
        title: "Authentication required",
        description: "Please sign in to book a car",
        variant: "destructive",
      });
      navigate("/login");
      return;
    }

    if (!startDate || !endDate) {
      toast({
        title: "Date selection required",
        description: "Please select both pickup and return dates",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);

    try {
      const totalPrice = calculateTotalPrice();
      const booking = {
        user_id: session.user.id,
        car_id: car.id as number,
        start_date: format(startDate, "yyyy-MM-dd"),
        end_date: format(endDate, "yyyy-MM-dd"),
        total_price: totalPrice,
        status: "pending",
      };

      const result = await fine.table("bookings").insert(booking).select();
      
      toast({
        title: "Booking successful!",
        description: `Your ${car.make} ${car.model} is reserved.`,
      });
      
      navigate("/dashboard");
    } catch (error) {
      console.error("Booking error:", error);
      toast({
        title: "Booking failed",
        description: "There was an error processing your booking. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="rounded-lg border bg-card p-6 shadow-sm">
      <h3 className="mb-4 text-lg font-semibold">Book This Car</h3>
      
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium">Pickup Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !startDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {startDate ? format(startDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={startDate}
                  onSelect={setStartDate}
                  initialFocus
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          
          <div className="space-y-2">
            <label className="text-sm font-medium">Return Date</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !endDate && "text-muted-foreground"
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {endDate ? format(endDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={endDate}
                  onSelect={setEndDate}
                  initialFocus
                  disabled={(date) => 
                    date < new Date() || 
                    (startDate ? date < startDate : false)
                  }
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>
        
        <div className="rounded-md bg-muted p-4">
          <div className="flex items-center justify-between text-sm">
            <span>Daily Rate:</span>
            <span>${car.daily_rate.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span>Number of Days:</span>
            <span>{calculateTotalDays()}</span>
          </div>
          <div className="mt-2 flex items-center justify-between border-t pt-2 font-medium">
            <span>Total Price:</span>
            <span>${calculateTotalPrice().toFixed(2)}</span>
          </div>
        </div>
        
        <Button 
          className="w-full" 
          onClick={handleBooking}
          disabled={isLoading || !startDate || !endDate}
        >
          {isLoading ? (
            <>
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              Processing...
            </>
          ) : (
            "Book Now"
          )}
        </Button>
        
        <p className="text-center text-xs text-muted-foreground">
          No charges will be made until pickup. Free cancellation up to 24 hours before pickup.
        </p>
      </div>
    </div>
  );
}