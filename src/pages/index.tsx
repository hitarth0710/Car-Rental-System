import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CarCard } from "@/components/cars/CarCard";
import { fine } from "@/lib/fine";
import { Car } from "@/lib/db-types";
import { ArrowRight, CheckCircle, Clock, Shield } from "lucide-react";

const Index = () => {
  const [featuredCars, setFeaturedCars] = useState<Car[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedCars = async () => {
      try {
        const cars = await fine.table("cars").select().limit(4);
        
        // Parse the specifications JSON string for each car
        const parsedCars = cars.map(car => ({
          ...car,
          specifications: JSON.parse(car.specifications)
        }));
        
        setFeaturedCars(parsedCars);
      } catch (error) {
        console.error("Error fetching featured cars:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchFeaturedCars();
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 py-20 text-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="flex flex-col justify-center">
              <h1 className="mb-4 text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
                Drive Your Dreams
              </h1>
              <p className="mb-8 text-lg text-blue-100">
                Premium car rental service with a wide selection of luxury, sports, and economy vehicles. Book your perfect ride today.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-white text-blue-900 hover:bg-blue-50">
                  <Link to="/cars">Browse Cars</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="border-white text-white hover:bg-blue-800">
                  <Link to="/how-it-works">How It Works</Link>
                </Button>
              </div>
            </div>
            <div className="hidden md:block">
              <img 
                src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop" 
                alt="Luxury car" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
      
      {/* Featured Cars Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-10 flex items-center justify-between">
            <h2 className="text-3xl font-bold">Featured Cars</h2>
            <Button asChild variant="ghost" className="gap-2">
              <Link to="/cars">
                View All <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
          
          {isLoading ? (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-[350px] animate-pulse rounded-lg bg-muted"></div>
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {featuredCars.map((car) => (
                <CarCard key={car.id} car={car} />
              ))}
            </div>
          )}
        </div>
      </section>
      
      {/* How It Works Section */}
      <section className="bg-muted py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">How It Works</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">1. Choose Your Car</h3>
              <p className="text-muted-foreground">
                Browse our extensive fleet and select the perfect vehicle for your needs.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <CheckCircle className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">2. Book Instantly</h3>
              <p className="text-muted-foreground">
                Secure your reservation with our simple booking process. No hidden fees.
              </p>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="mb-2 text-xl font-semibold">3. Enjoy Your Ride</h3>
              <p className="text-muted-foreground">
                Pick up your car and hit the road with our comprehensive insurance coverage.
              </p>
            </div>
          </div>
          
          <div className="mt-12 text-center">
            <Button asChild size="lg">
              <Link to="/cars">Find Your Car Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      {/* Testimonials Section */}
      <section className="py-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <h2 className="mb-12 text-center text-3xl font-bold">What Our Customers Say</h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {[
              {
                name: "Sarah Johnson",
                role: "Business Traveler",
                content: "DriveEase made my business trip so much easier. The car was immaculate and the service was exceptional.",
                avatar: "https://randomuser.me/api/portraits/women/44.jpg"
              },
              {
                name: "Michael Chen",
                role: "Tourist",
                content: "Rented a convertible for our California road trip. The booking process was seamless and the car was perfect!",
                avatar: "https://randomuser.me/api/portraits/men/32.jpg"
              },
              {
                name: "Emily Rodriguez",
                role: "Local Customer",
                content: "I use DriveEase whenever my car is in the shop. Their prices are competitive and the cars are always reliable.",
                avatar: "https://randomuser.me/api/portraits/women/68.jpg"
              }
            ].map((testimonial, i) => (
              <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                <div className="mb-4 flex items-center">
                  <img
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div className="ml-4">
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <p className="italic text-muted-foreground">"{testimonial.content}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="bg-primary py-16 text-primary-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="text-center">
            <h2 className="mb-4 text-3xl font-bold">Ready to Hit the Road?</h2>
            <p className="mb-8 text-lg">
              Join thousands of satisfied customers who choose DriveEase for their car rental needs.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link to="/cars">Book Your Car Now</Link>
            </Button>
          </div>
        </div>
      </section>
      
      <Footer />
    </div>
  );
};

export default Index;