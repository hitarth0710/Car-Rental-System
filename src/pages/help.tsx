import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Search, Phone, Mail, MessageSquare, ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const HelpPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, this would search the help content
    console.log("Searching for:", searchQuery);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="mb-6 text-4xl font-bold">How Can We Help You?</h1>
              <p className="mb-8 text-lg">
                Find answers to frequently asked questions or get in touch with our support team.
              </p>
              
              <form onSubmit={handleSearch} className="relative mx-auto max-w-2xl">
                <Search className="absolute left-3 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Search for answers..."
                  className="pl-10 h-12 bg-white text-foreground"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <Button type="submit" className="absolute right-1 top-1 h-10">
                  Search
                </Button>
              </form>
            </div>
          </div>
        </section>
        
        {/* Help Categories */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Browse Help Topics</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "Booking & Reservations",
                  description: "Learn how to book, modify, or cancel your car rental",
                  icon: <Calendar className="h-6 w-6" />,
                  link: "#booking"
                },
                {
                  title: "Pickup & Return",
                  description: "Information about vehicle pickup and return procedures",
                  icon: <Car className="h-6 w-6" />,
                  link: "#pickup"
                },
                {
                  title: "Payments & Billing",
                  description: "Questions about payments, charges, and receipts",
                  icon: <CreditCard className="h-6 w-6" />,
                  link: "#payments"
                },
                {
                  title: "Insurance & Coverage",
                  description: "Details about insurance options and protection plans",
                  icon: <Shield className="h-6 w-6" />,
                  link: "#insurance"
                },
                {
                  title: "Account Management",
                  description: "Help with your DriveEase account settings",
                  icon: <User className="h-6 w-6" />,
                  link: "#account"
                },
                {
                  title: "Roadside Assistance",
                  description: "Get help if you experience issues during your rental",
                  icon: <LifeBuoy className="h-6 w-6" />,
                  link: "#roadside"
                }
              ].map((category, i) => (
                <Card key={i} className="transition-all hover:shadow-md">
                  <CardHeader>
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                      {category.icon}
                    </div>
                    <CardTitle>{category.title}</CardTitle>
                    <CardDescription>{category.description}</CardDescription>
                  </CardHeader>
                  <CardFooter>
                    <Button variant="ghost" asChild className="gap-2">
                      <a href={category.link}>
                        View Articles <ChevronRight className="h-4 w-4" />
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* FAQ Section */}
        <section className="bg-muted py-16" id="faq">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            
            <Tabs defaultValue="booking" className="mx-auto max-w-3xl">
              <TabsList className="mb-8 grid w-full grid-cols-3">
                <TabsTrigger value="booking">Booking</TabsTrigger>
                <TabsTrigger value="payments">Payments</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>
              
              <TabsContent value="booking">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>How do I make a reservation?</AccordionTrigger>
                    <AccordionContent>
                      You can make a reservation through our website or mobile app. Simply select your pickup location, dates, and preferred vehicle type. You'll be able to review available cars and their rates before confirming your booking.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I modify my reservation?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can modify your reservation up to 24 hours before your scheduled pickup time. Log in to your account, go to "My Bookings," and select the reservation you wish to change. You can modify dates, times, vehicle type, and add-ons subject to availability.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is your cancellation policy?</AccordionTrigger>
                    <AccordionContent>
                      Our standard cancellation policy allows for free cancellations up to 48 hours before your scheduled pickup time. Cancellations made 24-48 hours before pickup receive a 50% refund, while cancellations less than 24 hours before pickup are non-refundable.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>What documents do I need to rent a car?</AccordionTrigger>
                    <AccordionContent>
                      You'll need a valid driver's license that has been held for at least one year, a credit card in the driver's name, and proof of insurance. International customers will need a passport and may require an International Driving Permit depending on their country of origin.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Is there an age requirement to rent a car?</AccordionTrigger>
                    <AccordionContent>
                      Yes, the minimum age to rent a car is 21 years old. Drivers under 25 may be subject to a young driver surcharge. For luxury and specialty vehicles, the minimum age requirement is 25 years.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="payments">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                    <AccordionContent>
                      We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Debit cards are accepted for payment but not for the security deposit. We do not accept cash, checks, or prepaid cards.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>When will I be charged for my rental?</AccordionTrigger>
                    <AccordionContent>
                      For standard reservations, we place a hold on your credit card at the time of booking but don't charge you until you pick up the vehicle. For prepaid reservations, the full amount is charged at the time of booking in exchange for a discounted rate.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What is the security deposit amount?</AccordionTrigger>
                    <AccordionContent>
                      The security deposit amount varies based on the vehicle type, ranging from $200 for economy cars to $500 for luxury vehicles. This amount is placed as a hold on your credit card at pickup and released upon the vehicle's return, assuming no damages or additional charges.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>How do I get a receipt for my rental?</AccordionTrigger>
                    <AccordionContent>
                      A receipt is automatically emailed to you after you return the vehicle. You can also access all your rental receipts by logging into your account and navigating to "Rental History." If you need assistance with receipts, please contact our customer support team.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>Are there any hidden fees?</AccordionTrigger>
                    <AccordionContent>
                      We pride ourselves on transparent pricing. All mandatory fees are included in the quoted price. Additional charges may apply for optional services (GPS, child seats), fuel (if not returned with the same level), late returns, or traffic/parking violations during your rental period.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
              
              <TabsContent value="policies">
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="item-1">
                    <AccordionTrigger>What is your fuel policy?</AccordionTrigger>
                    <AccordionContent>
                      We use a "full-to-full" fuel policy. This means you'll receive the vehicle with a full tank and are expected to return it with a full tank. If the vehicle is not returned with a full tank, a refueling fee plus the cost of the missing fuel will be charged.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-2">
                    <AccordionTrigger>Can I take the rental car across state lines?</AccordionTrigger>
                    <AccordionContent>
                      Yes, you can drive our rental cars across state lines within the continental United States without any restrictions. However, if you plan to travel to Canada or Mexico, you must notify us in advance as additional insurance and documentation may be required.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-3">
                    <AccordionTrigger>What happens if I return the car late?</AccordionTrigger>
                    <AccordionContent>
                      We provide a 30-minute grace period for returns. After that, late returns are charged at an hourly rate based on your daily rental rate. If you know you'll be late, please contact us as soon as possible to extend your reservation and avoid additional fees.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-4">
                    <AccordionTrigger>Can someone else drive the rental car?</AccordionTrigger>
                    <AccordionContent>
                      Yes, additional drivers are allowed but must be registered and meet the same eligibility requirements as the primary driver. Each additional driver must be present at pickup with their valid driver's license. An additional driver fee may apply unless the driver is a spouse or domestic partner.
                    </AccordionContent>
                  </AccordionItem>
                  
                  <AccordionItem value="item-5">
                    <AccordionTrigger>What is your smoking policy?</AccordionTrigger>
                    <AccordionContent>
                      All our vehicles are non-smoking. If evidence of smoking is detected in the vehicle upon return, a cleaning fee of up to $250 may be charged to restore the vehicle to its smoke-free condition.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">
                Can't find what you're looking for? Check our comprehensive help articles or contact us.
              </p>
              <Button asChild>
                <Link to="/contact">Contact Support</Link>
              </Button>
            </div>
          </div>
        </section>
        
        {/* Contact Options */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Get in Touch</h2>
            
            <div className="grid gap-6 md:grid-cols-3">
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Phone className="h-6 w-6" />
                  </div>
                  <CardTitle>Call Us</CardTitle>
                  <CardDescription>Speak directly with our support team</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">1-800-DRIVEEASE</p>
                  <p className="text-sm text-muted-foreground">Available 24/7</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">Call Now</Button>
                </CardFooter>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <Mail className="h-6 w-6" />
                  </div>
                  <CardTitle>Email Us</CardTitle>
                  <CardDescription>Send us your questions anytime</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">support@driveease.com</p>
                  <p className="text-sm text-muted-foreground">Response within 24 hours</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline" asChild>
                    <Link to="/contact">Send Email</Link>
                  </Button>
                </CardFooter>
              </Card>
              
              <Card className="text-center">
                <CardHeader>
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                    <MessageSquare className="h-6 w-6" />
                  </div>
                  <CardTitle>Live Chat</CardTitle>
                  <CardDescription>Chat with our support agents</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="font-medium">Available on our website</p>
                  <p className="text-sm text-muted-foreground">8am - 8pm, Monday to Friday</p>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button variant="outline">Start Chat</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Help Articles */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
              <h2 className="text-3xl font-bold">Popular Help Articles</h2>
              <Button variant="outline" asChild>
                <Link to="/help/articles" className="gap-2">
                  View All Articles <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "How to Extend Your Rental Period",
                  category: "Bookings",
                  excerpt: "Learn how to add extra days to your current rental without returning to the rental location."
                },
                {
                  title: "Understanding Insurance Coverage Options",
                  category: "Insurance",
                  excerpt: "A comprehensive guide to our different insurance and protection plans to help you choose the right coverage."
                },
                {
                  title: "What to Do in Case of an Accident",
                  category: "Roadside Assistance",
                  excerpt: "Step-by-step instructions on what to do if you're involved in an accident with your rental car."
                },
                {
                  title: "How to Use the Mobile App for Contactless Pickup",
                  category: "Pickup & Return",
                  excerpt: "A guide to our convenient mobile check-in process that lets you skip the counter."
                },
                {
                  title: "Understanding Rental Fees and Charges",
                  category: "Payments",
                  excerpt: "A breakdown of all potential fees and charges associated with your car rental."
                },
                {
                  title: "Tips for a Smooth Return Process",
                  category: "Pickup & Return",
                  excerpt: "Follow these guidelines to ensure a quick and hassle-free car return experience."
                }
              ].map((article, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge variant="outline">{article.category}</Badge>
                    </div>
                    <CardTitle className="mt-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="gap-2">
                      Read Article <ArrowRight className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Import missing icons
const Calendar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const Car = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
);

const CreditCard = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="20" height="14" x="2" y="5" rx="2" />
    <line x1="2" x2="22" y1="10" y2="10" />
  </svg>
);

const Shield = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
  </svg>
);

const User = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const LifeBuoy = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="12" cy="12" r="10" />
    <circle cx="12" cy="12" r="4" />
    <line x1="4.93" x2="9.17" y1="4.93" y2="9.17" />
    <line x1="14.83" x2="19.07" y1="14.83" y2="19.07" />
    <line x1="14.83" x2="19.07" y1="9.17" y2="4.93" />
    <line x1="14.83" x2="18.36" y1="9.17" y2="5.64" />
    <line x1="4.93" x2="9.17" y1="19.07" y2="14.83" />
  </svg>
);

export default HelpPage;