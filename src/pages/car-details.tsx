import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { BookingForm } from "@/components/cars/BookingForm";
import { FavoriteButton } from "@/components/cars/FavoriteButton";
import { ReviewForm } from "@/components/cars/ReviewForm";
import { ReviewList } from "@/components/cars/ReviewList";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { fine } from "@/lib/fine";
import { Car } from "@/lib/db-types";
import { ArrowLeft, Calendar, Car as CarIcon, Check, Fuel, Info, Loader2, MapPin, Shield } from "lucide-react";

const CarDetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const [car, setCar] = useState<Car | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [reviewRefreshTrigger, setReviewRefreshTrigger] = useState(0);
  const { data: session } = fine.auth.useSession();

  useEffect(() => {
    const fetchCarDetails = async () => {
      if (!id) return;
      
      setIsLoading(true);
      try {
        const carData = await fine.table("cars").select().eq("id", parseInt(id));
        
        if (carData.length === 0) {
          setError("Car not found");
          return;
        }
        
        // Parse the specifications JSON string
        const parsedCar = {
          ...carData[0],
          specifications: JSON.parse(carData[0].specifications)
        };
        
        setCar(parsedCar);
      } catch (error) {
        console.error("Error fetching car details:", error);
        setError("Failed to load car details");
      } finally {
        setIsLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  const handleReviewAdded = () => {
    setReviewRefreshTrigger(prev => prev + 1);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 items-center justify-center py-12">
          <Loader2 className="h-8 w-8 animate-spin text-primary" />
        </main>
        <Footer />
      </div>
    );
  }

  if (error || !car) {
    return (
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex flex-1 flex-col items-center justify-center py-12">
          <h2 className="mb-4 text-2xl font-bold">{error || "Car not found"}</h2>
          <Button asChild>
            <Link to="/cars">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cars
            </Link>
          </Button>
        </main>
        <Footer />
      </div>
    );
  }

  const specs = car.specifications;

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-8">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-6">
            <Link to="/cars" className="mb-4 inline-flex items-center text-sm text-muted-foreground hover:text-primary">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Cars
            </Link>
            <div className="flex items-center justify-between">
              <h1 className="text-3xl font-bold">
                {car.make} {car.model} ({car.year})
              </h1>
              <FavoriteButton car={car} variant="outline" size="default" />
            </div>
            <div className="mt-2 flex flex-wrap items-center gap-2">
              <Badge variant="secondary">{car.type}</Badge>
              <span className="text-sm text-muted-foreground">{car.color}</span>
              {car.available ? (
                <Badge variant="outline" className="bg-green-500 text-white border-0">Available</Badge>
              ) : (
                <Badge variant="outline" className="bg-red-500 text-white border-0">Unavailable</Badge>
              )}
            </div>
          </div>
          
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <div className="lg:col-span-2">
              <div className="mb-6 overflow-hidden rounded-lg">
                <img
                  src={car.image_url}
                  alt={`${car.make} ${car.model}`}
                  className="h-auto w-full object-cover"
                />
              </div>
              
              <Tabs defaultValue="description" className="mb-8">
                <TabsList className="grid w-full grid-cols-4">
                  <TabsTrigger value="description">Description</TabsTrigger>
                  <TabsTrigger value="specifications">Specifications</TabsTrigger>
                  <TabsTrigger value="features">Features</TabsTrigger>
                  <TabsTrigger value="reviews">Reviews</TabsTrigger>
                </TabsList>
                
                <TabsContent value="description" className="mt-4 rounded-md border p-4">
                  <h3 className="mb-2 text-lg font-semibold">About this car</h3>
                  <p className="text-muted-foreground">{car.description}</p>
                  
                  <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div className="flex items-center rounded-md border p-3">
                      <Shield className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Insurance Included</h4>
                        <p className="text-sm text-muted-foreground">Basic coverage included</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center rounded-md border p-3">
                      <Calendar className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Free Cancellation</h4>
                        <p className="text-sm text-muted-foreground">Up to 24 hours before pickup</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center rounded-md border p-3">
                      <MapPin className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Pickup Location</h4>
                        <p className="text-sm text-muted-foreground">Downtown Office</p>
                      </div>
                    </div>
                    
                    <div className="flex items-center rounded-md border p-3">
                      <Fuel className="mr-3 h-5 w-5 text-primary" />
                      <div>
                        <h4 className="font-medium">Full Tank</h4>
                        <p className="text-sm text-muted-foreground">Return with same level</p>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                
                <TabsContent value="specifications" className="mt-4 rounded-md border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Car Specifications</h3>
                  <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    {Object.entries(specs).map(([key, value]) => (
                      <div key={key} className="flex items-center justify-between rounded-md border p-3">
                        <span className="font-medium capitalize">{key.replace(/([A-Z])/g, ' $1').trim()}</span>
                        <span className="text-muted-foreground">{value.toString()}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="features" className="mt-4 rounded-md border p-4">
                  <h3 className="mb-4 text-lg font-semibold">Car Features</h3>
                  <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                    {[
                      "Air Conditioning", 
                      "Bluetooth", 
                      "Cruise Control", 
                      "Navigation System", 
                      "Backup Camera", 
                      "Keyless Entry", 
                      "USB Charging Ports",
                      "Heated Seats"
                    ].map((feature) => (
                      <div key={feature} className="flex items-center">
                        <Check className="mr-2 h-4 w-4 text-green-500" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </TabsContent>
                
                <TabsContent value="reviews" className="mt-4">
                  <div className="space-y-6">
                    <ReviewList car={car} refreshTrigger={reviewRefreshTrigger} />
                    
                    {session?.user && (
                      <div className="mt-8 rounded-md border p-4">
                        <h3 className="mb-4 text-lg font-semibold">Write a Review</h3>
                        <ReviewForm car={car} onReviewAdded={handleReviewAdded} />
                      </div>
                    )}
                  </div>
                </TabsContent>
              </Tabs>
              
              <div className="rounded-md border p-4">
                <h3 className="mb-4 text-lg font-semibold">Rental Policy</h3>
                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="font-medium">Age Requirements</h4>
                    <p className="text-muted-foreground">Minimum age: 21 years. Drivers under 25 may incur a young driver fee.</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium">Required Documents</h4>
                    <p className="text-muted-foreground">Valid driver's license, credit card in the driver's name, and proof of insurance.</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium">Fuel Policy</h4>
                    <p className="text-muted-foreground">Full to full. Return the car with the same fuel level as at pickup.</p>
                  </div>
                  <Separator />
                  <div>
                    <h4 className="font-medium">Mileage</h4>
                    <p className="text-muted-foreground">Unlimited mileage included in the rental price.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div>
              <div className="sticky top-20">
                <div className="mb-4 rounded-lg border bg-card p-4 shadow-sm">
                  <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">Rental Price</h3>
                    <div className="text-xl font-bold text-primary">
                      ${car.daily_rate.toFixed(2)}<span className="text-sm text-muted-foreground">/day</span>
                    </div>
                  </div>
                  <p className="mb-4 text-sm text-muted-foreground">
                    Includes basic insurance and unlimited mileage
                  </p>
                </div>
                
                <BookingForm car={car} />
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
}

export default CarDetailsPage;