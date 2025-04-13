import { useState, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingCard } from "@/components/dashboard/BookingCard";
import { FavoritesList } from "@/components/dashboard/FavoritesList";
import { QuickStats } from "@/components/dashboard/QuickStats";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fine } from "@/lib/fine";
import { ProtectedRoute } from "@/components/auth/route-components";
import { Car } from "@/lib/db-types";
import { Loader2 } from "lucide-react";

const DashboardContent = () => {
  const [bookings, setBookings] = useState<any[]>([]);
  const [cars, setCars] = useState<Record<number, Car>>({});
  const [isLoading, setIsLoading] = useState(true);
  const { data: session } = fine.auth.useSession();

  useEffect(() => {
    const fetchUserBookings = async () => {
      if (!session?.user) return;
      
      setIsLoading(true);
      try {
        // Fetch all bookings for the current user
        const userBookings = await fine.table("bookings")
          .select()
          .eq("user_id", session.user.id);
        
        if (userBookings.length === 0) {
          setIsLoading(false);
          return;
        }
        
        // Get unique car IDs from bookings
        const carIds = [...new Set(userBookings.map(booking => booking.car_id))];
        
        // Fetch all cars in one query
        const carsData = await fine.table("cars")
          .select()
          .in("id", carIds);
        
        // Create a map of car id to car data with parsed specifications
        const carsMap: Record<number, Car> = {};
        carsData.forEach(car => {
          carsMap[car.id as number] = {
            ...car,
            specifications: JSON.parse(car.specifications)
          };
        });
        
        setCars(carsMap);
        setBookings(userBookings);
      } catch (error) {
        console.error("Error fetching bookings:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBookings();
  }, [session]);

  const handleCancelBooking = (bookingId: number) => {
    setBookings(prevBookings => 
      prevBookings.map(booking => 
        booking.id === bookingId 
          ? { ...booking, status: "cancelled" } 
          : booking
      )
    );
  };

  // Filter bookings by status
  const activeBookings = bookings.filter(booking => 
    booking.status === "confirmed" || booking.status === "pending"
  );
  
  const pastBookings = bookings.filter(booking => 
    booking.status === "completed" || booking.status === "cancelled"
  );

  if (!session?.user) {
    return null;
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h1 className="mb-2 text-3xl font-bold">My Dashboard</h1>
          <p className="mb-8 text-muted-foreground">
            Manage your bookings and account details
          </p>
          
          <QuickStats userId={session.user.id} />
          
          <Tabs defaultValue="bookings" className="mt-8">
            <TabsList className="mb-6 grid w-full grid-cols-2 sm:w-[400px]">
              <TabsTrigger value="bookings">My Bookings</TabsTrigger>
              <TabsTrigger value="favorites">My Favorites</TabsTrigger>
            </TabsList>
            
            <TabsContent value="bookings">
              <Tabs defaultValue="active" className="w-full">
                <TabsList className="mb-6 grid w-full grid-cols-2 sm:w-[400px]">
                  <TabsTrigger value="active">Active Bookings</TabsTrigger>
                  <TabsTrigger value="past">Past Bookings</TabsTrigger>
                </TabsList>
                
                <TabsContent value="active">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : activeBookings.length > 0 ? (
                    <div className="space-y-6">
                      {activeBookings.map(booking => (
                        <BookingCard 
                          key={booking.id} 
                          booking={booking} 
                          car={cars[booking.car_id]}
                          onCancelBooking={handleCancelBooking}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-lg border bg-muted/50 p-8 text-center">
                      <h3 className="mb-2 text-lg font-semibold">No active bookings</h3>
                      <p className="text-muted-foreground">
                        You don't have any active bookings at the moment.
                      </p>
                    </div>
                  )}
                </TabsContent>
                
                <TabsContent value="past">
                  {isLoading ? (
                    <div className="flex items-center justify-center py-12">
                      <Loader2 className="h-8 w-8 animate-spin text-primary" />
                    </div>
                  ) : pastBookings.length > 0 ? (
                    <div className="space-y-6">
                      {pastBookings.map(booking => (
                        <BookingCard 
                          key={booking.id} 
                          booking={booking} 
                          car={cars[booking.car_id]}
                          onCancelBooking={handleCancelBooking}
                        />
                      ))}
                    </div>
                  ) : (
                    <div className="rounded-lg border bg-muted/50 p-8 text-center">
                      <h3 className="mb-2 text-lg font-semibold">No past bookings</h3>
                      <p className="text-muted-foreground">
                        You don't have any past bookings to display.
                      </p>
                    </div>
                  )}
                </TabsContent>
              </Tabs>
            </TabsContent>
            
            <TabsContent value="favorites">
              <FavoritesList userId={session.user.id} />
            </TabsContent>
          </Tabs>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

const Dashboard = () => {
  return <ProtectedRoute Component={DashboardContent} />;
};

export default Dashboard;