import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Calendar, Car, CheckCircle, Clock, CreditCard, HelpCircle, MapPin, Shield } from "lucide-react";

const HowItWorksPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">How DriveEase Works</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Renting a car with DriveEase is simple, transparent, and hassle-free. 
              Follow these easy steps to get on the road quickly.
            </p>
          </div>
        </section>
        
        {/* Process Steps */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-16 grid gap-12 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Car className="h-10 w-10" />
                </div>
                <h2 className="mb-2 text-xl font-semibold">1. Choose Your Car</h2>
                <p className="text-muted-foreground">
                  Browse our extensive fleet of vehicles ranging from economy to luxury. 
                  Filter by type, make, or features to find your perfect match.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Calendar className="h-10 w-10" />
                </div>
                <h2 className="mb-2 text-xl font-semibold">2. Book Your Dates</h2>
                <p className="text-muted-foreground">
                  Select your pickup and return dates. Our transparent pricing shows you 
                  exactly what you'll pay with no hidden fees.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <CheckCircle className="h-10 w-10" />
                </div>
                <h2 className="mb-2 text-xl font-semibold">3. Enjoy Your Ride</h2>
                <p className="text-muted-foreground">
                  Pick up your car at our convenient location, show your license, 
                  and you're ready to go. Return it when your rental period ends.
                </p>
              </div>
            </div>
            
            <div className="mx-auto max-w-3xl rounded-lg border bg-card p-8 shadow-sm">
              <h3 className="mb-6 text-center text-2xl font-semibold">What You Need</h3>
              
              <div className="grid gap-6 md:grid-cols-2">
                <div className="flex items-start">
                  <CreditCard className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Valid Payment Method</h4>
                    <p className="text-sm text-muted-foreground">
                      Credit card in the driver's name for security deposit.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Shield className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Driver's License</h4>
                    <p className="text-sm text-muted-foreground">
                      Valid driver's license held for at least 1 year.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Age Requirement</h4>
                    <p className="text-sm text-muted-foreground">
                      Minimum age of 21. Drivers under 25 may have additional fees.
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="mr-4 h-6 w-6 text-primary" />
                  <div>
                    <h4 className="font-medium">Proof of Address</h4>
                    <p className="text-sm text-muted-foreground">
                      Recent utility bill or bank statement showing your address.
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8 text-center">
                <Button asChild size="lg">
                  <Link to="/cars">Browse Cars Now</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            
            <div className="mx-auto grid max-w-4xl gap-6">
              {[
                {
                  question: "What happens if I return the car late?",
                  answer: "Late returns are charged at an hourly rate of the daily price. If you know you'll be late, please contact us to extend your booking."
                },
                {
                  question: "Is insurance included in the rental price?",
                  answer: "Basic insurance is included in all rentals. Premium coverage options are available at an additional cost."
                },
                {
                  question: "Can I modify or cancel my booking?",
                  answer: "Yes, bookings can be modified or cancelled up to 24 hours before pickup without any fees. Later changes may incur charges."
                },
                {
                  question: "What is your fuel policy?",
                  answer: "We use a full-to-full policy. You'll receive the car with a full tank and should return it with a full tank to avoid refueling charges."
                },
                {
                  question: "Can someone else drive the rental car?",
                  answer: "Additional drivers must be registered and meet the same requirements as the primary driver. An additional driver fee may apply."
                }
              ].map((faq, i) => (
                <div key={i} className="rounded-lg border bg-card p-6 shadow-sm">
                  <div className="flex items-start">
                    <HelpCircle className="mr-4 h-6 w-6 shrink-0 text-primary" />
                    <div>
                      <h3 className="font-semibold">{faq.question}</h3>
                      <p className="mt-2 text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">
                Still have questions? We're here to help.
              </p>
              <Button variant="outline">Contact Support</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default HowItWorksPage;