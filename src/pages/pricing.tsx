import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Check, X, HelpCircle } from "lucide-react";

const PricingPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">Transparent Pricing</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Simple, straightforward pricing with no hidden fees. Choose the rental option that best fits your needs.
            </p>
          </div>
        </section>
        
        {/* Pricing Plans */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <Tabs defaultValue="daily" className="mb-12">
              <div className="flex justify-center">
                <TabsList className="mb-8">
                  <TabsTrigger value="daily">Daily Rates</TabsTrigger>
                  <TabsTrigger value="weekly">Weekly Rates</TabsTrigger>
                  <TabsTrigger value="monthly">Monthly Rates</TabsTrigger>
                </TabsList>
              </div>
              
              <TabsContent value="daily">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      category: "Economy",
                      price: 59.99,
                      description: "Compact, fuel-efficient cars perfect for city driving",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Great fuel economy",
                        "Compact size for easy parking",
                        "Basic entertainment system"
                      ],
                      popular: false,
                      examples: "Toyota Corolla, Honda Civic, Nissan Sentra"
                    },
                    {
                      category: "Standard",
                      price: 79.99,
                      description: "Mid-size vehicles with added comfort and space",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Good fuel economy",
                        "Spacious interior",
                        "Advanced entertainment system"
                      ],
                      popular: true,
                      examples: "Toyota Camry, Honda Accord, Ford Fusion"
                    },
                    {
                      category: "SUV",
                      price: 99.99,
                      description: "Versatile vehicles with extra space and capability",
                      features: [
                        "Seats up to 7 passengers",
                        "Automatic transmission",
                        "Moderate fuel economy",
                        "Ample cargo space",
                        "All-wheel drive available"
                      ],
                      popular: false,
                      examples: "Toyota RAV4, Honda CR-V, Ford Explorer"
                    },
                    {
                      category: "Luxury",
                      price: 149.99,
                      description: "Premium vehicles with top-tier features and performance",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Premium interior materials",
                        "Advanced safety features",
                        "Premium sound system"
                      ],
                      popular: false,
                      examples: "BMW 5 Series, Mercedes E-Class, Audi A6"
                    }
                  ].map((plan, i) => (
                    <Card key={i} className={plan.popular ? "border-primary shadow-md" : ""}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.category}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">/day</span>
                        </div>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Examples: {plan.examples}
                        </p>
                        <Separator className="my-4" />
                        <ul className="space-y-2">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link to="/cars">Browse {plan.category} Cars</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="weekly">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      category: "Economy",
                      price: 299.99,
                      description: "Compact, fuel-efficient cars perfect for city driving",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Great fuel economy",
                        "Compact size for easy parking",
                        "Basic entertainment system"
                      ],
                      popular: false,
                      examples: "Toyota Corolla, Honda Civic, Nissan Sentra",
                      savings: "Save 28% vs. daily rate"
                    },
                    {
                      category: "Standard",
                      price: 399.99,
                      description: "Mid-size vehicles with added comfort and space",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Good fuel economy",
                        "Spacious interior",
                        "Advanced entertainment system"
                      ],
                      popular: true,
                      examples: "Toyota Camry, Honda Accord, Ford Fusion",
                      savings: "Save 29% vs. daily rate"
                    },
                    {
                      category: "SUV",
                      price: 499.99,
                      description: "Versatile vehicles with extra space and capability",
                      features: [
                        "Seats up to 7 passengers",
                        "Automatic transmission",
                        "Moderate fuel economy",
                        "Ample cargo space",
                        "All-wheel drive available"
                      ],
                      popular: false,
                      examples: "Toyota RAV4, Honda CR-V, Ford Explorer",
                      savings: "Save 29% vs. daily rate"
                    },
                    {
                      category: "Luxury",
                      price: 749.99,
                      description: "Premium vehicles with top-tier features and performance",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Premium interior materials",
                        "Advanced safety features",
                        "Premium sound system"
                      ],
                      popular: false,
                      examples: "BMW 5 Series, Mercedes E-Class, Audi A6",
                      savings: "Save 29% vs. daily rate"
                    }
                  ].map((plan, i) => (
                    <Card key={i} className={plan.popular ? "border-primary shadow-md" : ""}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.category}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">/week</span>
                        </div>
                        <p className="mt-1 text-sm text-green-600">{plan.savings}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Examples: {plan.examples}
                        </p>
                        <Separator className="my-4" />
                        <ul className="space-y-2">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link to="/cars">Browse {plan.category} Cars</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="monthly">
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
                  {[
                    {
                      category: "Economy",
                      price: 999.99,
                      description: "Compact, fuel-efficient cars perfect for city driving",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Great fuel economy",
                        "Compact size for easy parking",
                        "Basic entertainment system"
                      ],
                      popular: false,
                      examples: "Toyota Corolla, Honda Civic, Nissan Sentra",
                      savings: "Save 45% vs. daily rate"
                    },
                    {
                      category: "Standard",
                      price: 1299.99,
                      description: "Mid-size vehicles with added comfort and space",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Good fuel economy",
                        "Spacious interior",
                        "Advanced entertainment system"
                      ],
                      popular: true,
                      examples: "Toyota Camry, Honda Accord, Ford Fusion",
                      savings: "Save 46% vs. daily rate"
                    },
                    {
                      category: "SUV",
                      price: 1699.99,
                      description: "Versatile vehicles with extra space and capability",
                      features: [
                        "Seats up to 7 passengers",
                        "Automatic transmission",
                        "Moderate fuel economy",
                        "Ample cargo space",
                        "All-wheel drive available"
                      ],
                      popular: false,
                      examples: "Toyota RAV4, Honda CR-V, Ford Explorer",
                      savings: "Save 43% vs. daily rate"
                    },
                    {
                      category: "Luxury",
                      price: 2499.99,
                      description: "Premium vehicles with top-tier features and performance",
                      features: [
                        "Seats up to 5 passengers",
                        "Automatic transmission",
                        "Premium interior materials",
                        "Advanced safety features",
                        "Premium sound system"
                      ],
                      popular: false,
                      examples: "BMW 5 Series, Mercedes E-Class, Audi A6",
                      savings: "Save 45% vs. daily rate"
                    }
                  ].map((plan, i) => (
                    <Card key={i} className={plan.popular ? "border-primary shadow-md" : ""}>
                      {plan.popular && (
                        <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                          <Badge className="bg-primary text-primary-foreground">Most Popular</Badge>
                        </div>
                      )}
                      <CardHeader>
                        <CardTitle>{plan.category}</CardTitle>
                        <CardDescription>{plan.description}</CardDescription>
                        <div className="mt-4">
                          <span className="text-3xl font-bold">${plan.price}</span>
                          <span className="text-muted-foreground">/month</span>
                        </div>
                        <p className="mt-1 text-sm text-green-600">{plan.savings}</p>
                      </CardHeader>
                      <CardContent>
                        <p className="mb-4 text-sm text-muted-foreground">
                          Examples: {plan.examples}
                        </p>
                        <Separator className="my-4" />
                        <ul className="space-y-2">
                          {plan.features.map((feature, j) => (
                            <li key={j} className="flex items-center">
                              <Check className="mr-2 h-4 w-4 text-green-500" />
                              <span className="text-sm">{feature}</span>
                            </li>
                          ))}
                        </ul>
                      </CardContent>
                      <CardFooter>
                        <Button asChild className="w-full">
                          <Link to="/cars">Browse {plan.category} Cars</Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Insurance Options */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Insurance & Protection Options</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Basic Coverage",
                  price: "Included",
                  description: "Standard protection included with all rentals",
                  features: [
                    "Collision Damage Waiver (CDW) with $1,000 deductible",
                    "Third-party liability insurance as required by law",
                    "24/7 roadside assistance (fees may apply)",
                    "No personal injury protection",
                    "No personal effects coverage"
                  ]
                },
                {
                  name: "Premium Coverage",
                  price: "$19.99/day",
                  description: "Enhanced protection with reduced liability",
                  features: [
                    "Collision Damage Waiver (CDW) with $250 deductible",
                    "Extended third-party liability insurance",
                    "24/7 roadside assistance included",
                    "Personal injury protection",
                    "No personal effects coverage"
                  ],
                  popular: true
                },
                {
                  name: "Full Coverage",
                  price: "$29.99/day",
                  description: "Maximum protection for peace of mind",
                  features: [
                    "Collision Damage Waiver (CDW) with $0 deductible",
                    "Maximum third-party liability insurance",
                    "24/7 roadside assistance included",
                    "Personal injury protection",
                    "Personal effects coverage up to $2,000"
                  ]
                }
              ].map((plan, i) => (
                <Card key={i} className={plan.popular ? "border-primary shadow-md" : ""}>
                  {plan.popular && (
                    <div className="absolute -top-3 left-0 right-0 mx-auto w-fit">
                      <Badge className="bg-primary text-primary-foreground">Recommended</Badge>
                    </div>
                  )}
                  <CardHeader>
                    <CardTitle>{plan.name}</CardTitle>
                    <CardDescription>{plan.description}</CardDescription>
                    <div className="mt-4">
                      <span className="text-2xl font-bold">{plan.price}</span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {plan.features.map((feature, j) => (
                        <li key={j} className="flex items-center">
                          {feature.includes("No ") ? (
                            <X className="mr-2 h-4 w-4 text-red-500" />
                          ) : (
                            <Check className="mr-2 h-4 w-4 text-green-500" />
                          )}
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-8 rounded-lg bg-background p-4 text-sm">
              <div className="flex items-start">
                <HelpCircle className="mr-2 h-5 w-5 shrink-0 text-muted-foreground" />
                <p className="text-muted-foreground">
                  Insurance coverage is subject to the terms, conditions, and exclusions of the rental agreement. 
                  We recommend reviewing the full details before making your selection. Additional coverage options 
                  may be available at the rental counter.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Additional Fees */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Additional Fees & Services</h2>
            
            <div className="mx-auto max-w-4xl">
              <Card>
                <CardHeader>
                  <CardTitle>Optional Services</CardTitle>
                  <CardDescription>Additional services available to enhance your rental experience</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left">Service</th>
                        <th className="pb-2 text-right">Fee</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3">GPS Navigation System</td>
                        <td className="py-3 text-right">$12.99/day</td>
                      </tr>
                      <tr>
                        <td className="py-3">Child Safety Seat</td>
                        <td className="py-3 text-right">$9.99/day</td>
                      </tr>
                      <tr>
                        <td className="py-3">Additional Driver</td>
                        <td className="py-3 text-right">$14.99/day</td>
                      </tr>
                      <tr>
                        <td className="py-3">Ski Rack</td>
                        <td className="py-3 text-right">$19.99/day</td>
                      </tr>
                      <tr>
                        <td className="py-3">Mobile WiFi Hotspot</td>
                        <td className="py-3 text-right">$15.99/day</td>
                      </tr>
                      <tr>
                        <td className="py-3">Prepaid Fuel Option</td>
                        <td className="py-3 text-right">Market price + $5 service fee</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
              
              <Card className="mt-8">
                <CardHeader>
                  <CardTitle>Other Potential Fees</CardTitle>
                  <CardDescription>Fees that may apply in certain situations</CardDescription>
                </CardHeader>
                <CardContent>
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="pb-2 text-left">Fee Type</th>
                        <th className="pb-2 text-right">Amount</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y">
                      <tr>
                        <td className="py-3">Late Return Fee</td>
                        <td className="py-3 text-right">Hourly rate based on daily rate</td>
                      </tr>
                      <tr>
                        <td className="py-3">Young Driver Fee (21-24 years)</td>
                        <td className="py-3 text-right">$25/day</td>
                      </tr>
                      <tr>
                        <td className="py-3">Refueling Fee</td>
                        <td className="py-3 text-right">Market price + $25 service fee</td>
                      </tr>
                      <tr>
                        <td className="py-3">Cleaning Fee (excessive dirt)</td>
                        <td className="py-3 text-right">$50-$250</td>
                      </tr>
                      <tr>
                        <td className="py-3">Smoking Fee</td>
                        <td className="py-3 text-right">$250</td>
                      </tr>
                      <tr>
                        <td className="py-3">Lost Key Fee</td>
                        <td className="py-3 text-right">$250-$500 (varies by vehicle)</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Corporate Rates */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Corporate & Business Rates</h2>
                <p className="mb-6">
                  DriveEase offers special pricing and benefits for businesses of all sizes. 
                  Our corporate program provides:
                </p>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>Discounted rates on all vehicle categories</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>Dedicated account manager</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>Centralized billing options</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>Expedited pickup and return</span>
                  </li>
                  <li className="flex items-center">
                    <Check className="mr-2 h-5 w-5" />
                    <span>Customized rental programs</span>
                  </li>
                </ul>
                <Button variant="secondary" className="mt-8">
                  Contact Business Sales
                </Button>
              </div>
              
              <div>
                <h2 className="mb-6 text-3xl font-bold">Long-Term Rental Discounts</h2>
                <p className="mb-6">
                  Need a vehicle for an extended period? Our long-term rentals offer significant savings:
                </p>
                <div className="space-y-4">
                  <div className="rounded-lg bg-white/10 p-4">
                    <h3 className="mb-2 font-semibold">1-2 Month Rentals</h3>
                    <p className="text-sm">Save up to 45% compared to daily rates</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <h3 className="mb-2 font-semibold">3-5 Month Rentals</h3>
                    <p className="text-sm">Save up to 55% compared to daily rates</p>
                  </div>
                  <div className="rounded-lg bg-white/10 p-4">
                    <h3 className="mb-2 font-semibold">6+ Month Rentals</h3>
                    <p className="text-sm">Save up to 65% compared to daily rates</p>
                  </div>
                </div>
                <Button variant="secondary" className="mt-8">
                  Request Long-Term Quote
                </Button>
              </div>
            </div>
          </div>
        </section>
        
        {/* FAQ */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Frequently Asked Questions</h2>
            
            <div className="mx-auto max-w-3xl">
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger>Are taxes included in the listed prices?</AccordionTrigger>
                  <AccordionContent>
                    No, the prices shown do not include taxes and fees, which vary by location. The final price, including all applicable taxes and fees, will be displayed before you confirm your reservation.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger>Is there a security deposit required?</AccordionTrigger>
                  <AccordionContent>
                    Yes, a security deposit is required for all rentals. The amount varies based on the vehicle category, ranging from $200 for economy cars to $500 for luxury vehicles. This amount is placed as a hold on your credit card at pickup and released upon the vehicle's return, assuming no damages or additional charges.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger>What payment methods do you accept?</AccordionTrigger>
                  <AccordionContent>
                    We accept all major credit cards including Visa, Mastercard, American Express, and Discover. Debit cards are accepted for payment but not for the security deposit. We do not accept cash, checks, or prepaid cards.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-4">
                  <AccordionTrigger>Is there a mileage limit?</AccordionTrigger>
                  <AccordionContent>
                    All our standard rentals include unlimited mileage within the continental United States. For specialty vehicles or international travel, mileage restrictions may apply. Please check the specific terms of your rental agreement.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-5">
                  <AccordionTrigger>Can I get a refund if I return the car early?</AccordionTrigger>
                  <AccordionContent>
                    For rentals returned more than 24 hours before the scheduled return time, we offer a partial refund based on the unused rental period. A $25 early return fee may apply. No refunds are provided for rentals returned less than 24 hours before the scheduled return time.
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-6">
                  <AccordionTrigger>Do you offer any discounts?</AccordionTrigger>
                  <AccordionContent>
                    Yes, we offer discounts for AAA members, military personnel, seniors (65+), and corporate partners. We also have seasonal promotions and special offers for weekly and monthly rentals. Sign up for our newsletter to stay informed about our latest deals.
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Import missing components
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default PricingPage;