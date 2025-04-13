import { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { fine } from "@/lib/fine";
import { CalendarCheck, Car, Clock, CreditCard } from "lucide-react";

interface QuickStatsProps {
  userId: string;
}

export function QuickStats({ userId }: QuickStatsProps) {
  const [stats, setStats] = useState({
    activeBookings: 0,
    totalBookings: 0,
    upcomingBooking: null as string | null,
    totalSpent: 0,
  });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        // Get all bookings for this user
        const bookings = await fine.table("bookings")
          .select()
          .eq("user_id", userId);
        
        // Calculate stats
        const activeBookings = bookings.filter(
          booking => booking.status === "confirmed" || booking.status === "pending"
        ).length;
        
        const totalBookings = bookings.length;
        
        // Find the next upcoming booking
        const today = new Date().toISOString().split('T')[0];
        const upcomingBookings = bookings
          .filter(booking => 
            booking.start_date >= today && 
            (booking.status === "confirmed" || booking.status === "pending")
          )
          .sort((a, b) => a.start_date.localeCompare(b.start_date));
        
        const upcomingBooking = upcomingBookings.length > 0 ? upcomingBookings[0].start_date : null;
        
        // Calculate total spent
        const totalSpent = bookings
          .filter(booking => booking.status !== "cancelled")
          .reduce((sum, booking) => sum + booking.total_price, 0);
        
        setStats({
          activeBookings,
          totalBookings,
          upcomingBooking,
          totalSpent,
        });
      } catch (error) {
        console.error("Error fetching stats:", error);
      }
    };
    
    fetchStats();
  }, [userId]);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    });
  };

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Active Bookings</CardTitle>
          <Clock className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.activeBookings}</div>
          <p className="text-xs text-muted-foreground">
            Out of {stats.totalBookings} total bookings
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Next Pickup</CardTitle>
          <CalendarCheck className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">
            {stats.upcomingBooking ? formatDate(stats.upcomingBooking) : "None"}
          </div>
          <p className="text-xs text-muted-foreground">
            {stats.upcomingBooking ? "Get ready for your trip" : "No upcoming bookings"}
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Cars Rented</CardTitle>
          <Car className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">{stats.totalBookings}</div>
          <p className="text-xs text-muted-foreground">
            Lifetime rentals
          </p>
        </CardContent>
      </Card>
      
      <Card>
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Total Spent</CardTitle>
          <CreditCard className="h-4 w-4 text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="text-2xl font-bold">${stats.totalSpent.toFixed(2)}</div>
          <p className="text-xs text-muted-foreground">
            On all your rentals
          </p>
        </CardContent>
      </Card>
    </div>
  );
}