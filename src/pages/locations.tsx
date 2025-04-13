import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Search, MapPin, Clock, Phone, ExternalLink } from "lucide-react";

const LocationsPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">Our Locations</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Find DriveEase rental locations across the country. We're conveniently located in major cities, airports, and transportation hubs.
            </p>
            
            <div className="mx-auto flex max-w-md flex-col items-center space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input
                  type="text"
                  placeholder="Enter city or zip code"
                  className="pl-10 bg-white text-foreground w-full"
                />
              </div>
              <Button variant="secondary">Find Locations</Button>
            </div>
          </div>
        </section>
        
        {/* Location Map */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="rounded-lg border overflow-hidden">
              <div className="aspect-[21/9] w-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-muted-foreground">Map showing all DriveEase locations would appear here</p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Listings */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Browse Locations</h2>
            
            <Tabs defaultValue="west" className="mb-12">
              <TabsList className="mb-8 grid w-full grid-cols-4 md:w-[600px] md:mx-auto">
                <TabsTrigger value="west">West Coast</TabsTrigger>
                <TabsTrigger value="midwest">Midwest</TabsTrigger>
                <TabsTrigger value="south">South</TabsTrigger>
                <TabsTrigger value="east">East Coast</TabsTrigger>
              </TabsList>
              
              <TabsContent value="west">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      city: "San Francisco",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "123 Innovation Drive, San Francisco, CA 94103",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(415) 555-1234",
                          isAirport: false
                        },
                        {
                          name: "San Francisco International Airport (SFO)",
                          address: "Rental Car Center, 780 N McDonnell Rd, San Francisco, CA 94128",
                          hours: "24/7",
                          phone: "(415) 555-5678",
                          isAirport: true
                        }
                      ]
                    },
                    {
                      city: "Los Angeles",
                      locations: [
                        {
                          name: "Hollywood Office",
                          address: "456 Sunset Blvd, Los Angeles, CA 90028",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(213) 555-5678",
                          isAirport: false
                        },
                        {
                          name: "Los Angeles International Airport (LAX)",
                          address: "9020 Aviation Blvd, Los Angeles, CA 90045",
                          hours: "24/7",
                          phone: "(213) 555-9012",
                          isAirport: true
                        }
                      ]
                    },
                    {
                      city: "Seattle",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "789 Pike Street, Seattle, WA 98101",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(206) 555-3456",
                          isAirport: false
                        },
                        {
                          name: "Seattle-Tacoma International Airport (SEA)",
                          address: "3150 S 160th St, SeaTac, WA 98188",
                          hours: "24/7",
                          phone: "(206) 555-7890",
                          isAirport: true
                        }
                      ]
                    }
                  ].map((cityData, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{cityData.city}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cityData.locations.map((location, j) => (
                          <div key={j} className="rounded-md border p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h3 className="font-semibold">{location.name}</h3>
                              {location.isAirport && (
                                <Badge variant="outline">Airport</Badge>
                              )}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start">
                                <MapPin className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.address}</span>
                              </div>
                              <div className="flex items-start">
                                <Clock className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.hours}</span>
                              </div>
                              <div className="flex items-start">
                                <Phone className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.phone}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2">
                          View on Map <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="midwest">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      city: "Chicago",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "321 Michigan Ave, Chicago, IL 60601",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(312) 555-3456",
                          isAirport: false
                        },
                        {
                          name: "O'Hare International Airport (ORD)",
                          address: "10000 Bessie Coleman Dr, Chicago, IL 60666",
                          hours: "24/7",
                          phone: "(312) 555-7890",
                          isAirport: true
                        }
                      ]
                    },
                    {
                      city: "Minneapolis",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "123 Nicollet Mall, Minneapolis, MN 55403",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(612) 555-1234",
                          isAirport: false
                        }
                      ]
                    },
                    {
                      city: "Detroit",
                      locations: [
                        {
                          name: "Detroit Metropolitan Airport (DTW)",
                          address: "11050 Rogell Dr, Detroit, MI 48242",
                          hours: "24/7",
                          phone: "(313) 555-7890",
                          isAirport: true
                        }
                      ]
                    }
                  ].map((cityData, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{cityData.city}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cityData.locations.map((location, j) => (
                          <div key={j} className="rounded-md border p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h3 className="font-semibold">{location.name}</h3>
                              {location.isAirport && (
                                <Badge variant="outline">Airport</Badge>
                              )}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start">
                                <MapPin className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.address}</span>
                              </div>
                              <div className="flex items-start">
                                <Clock className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.hours}</span>
                              </div>
                              <div className="flex items-start">
                                <Phone className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.phone}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2">
                          View on Map <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="south">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      city: "Austin",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "500 Congress Ave, Austin, TX 78701",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(512) 555-1234",
                          isAirport: false
                        }
                      ]
                    },
                    {
                      city: "Miami",
                      locations: [
                        {
                          name: "South Beach Office",
                          address: "1234 Ocean Drive, Miami, FL 33139",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(305) 555-5678",
                          isAirport: false
                        },
                        {
                          name: "Miami International Airport (MIA)",
                          address: "3900 NW 25th St, Miami, FL 33142",
                          hours: "24/7",
                          phone: "(305) 555-9012",
                          isAirport: true
                        }
                      ]
                    },
                    {
                      city: "Atlanta",
                      locations: [
                        {
                          name: "Hartsfield-Jackson Atlanta International Airport (ATL)",
                          address: "2200 Rental Car Center Pkwy, Atlanta, GA 30337",
                          hours: "24/7",
                          phone: "(404) 555-3456",
                          isAirport: true
                        }
                      ]
                    }
                  ].map((cityData, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{cityData.city}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cityData.locations.map((location, j) => (
                          <div key={j} className="rounded-md border p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h3 className="font-semibold">{location.name}</h3>
                              {location.isAirport && (
                                <Badge variant="outline">Airport</Badge>
                              )}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start">
                                <MapPin className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.address}</span>
                              </div>
                              <div className="flex items-start">
                                <Clock className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.hours}</span>
                              </div>
                              <div className="flex items-start">
                                <Phone className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.phone}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2">
                          View on Map <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="east">
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  {[
                    {
                      city: "New York",
                      locations: [
                        {
                          name: "Manhattan Office",
                          address: "789 Broadway, New York, NY 10003",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(212) 555-9012",
                          isAirport: false
                        },
                        {
                          name: "John F. Kennedy International Airport (JFK)",
                          address: "Building 21, JFK Airport, Queens, NY 11430",
                          hours: "24/7",
                          phone: "(212) 555-3456",
                          isAirport: true
                        }
                      ]
                    },
                    {
                      city: "Boston",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "100 Summer Street, Boston, MA 02110",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(617) 555-7890",
                          isAirport: false
                        }
                      ]
                    },
                    {
                      city: "Washington DC",
                      locations: [
                        {
                          name: "Downtown Office",
                          address: "1000 K Street NW, Washington, DC 20001",
                          hours: "Mon-Fri: 7am-9pm, Sat-Sun: 8am-8pm",
                          phone: "(202) 555-1234",
                          isAirport: false
                        },
                        {
                          name: "Ronald Reagan Washington National Airport (DCA)",
                          address: "2500 National Airport, Arlington, VA 22202",
                          hours: "24/7",
                          phone: "(202) 555-5678",
                          isAirport: true
                        }
                      ]
                    }
                  ].map((cityData, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <CardTitle>{cityData.city}</CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        {cityData.locations.map((location, j) => (
                          <div key={j} className="rounded-md border p-4">
                            <div className="mb-2 flex items-center justify-between">
                              <h3 className="font-semibold">{location.name}</h3>
                              {location.isAirport && (
                                <Badge variant="outline">Airport</Badge>
                              )}
                            </div>
                            <div className="space-y-2 text-sm">
                              <div className="flex items-start">
                                <MapPin className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.address}</span>
                              </div>
                              <div className="flex items-start">
                                <Clock className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.hours}</span>
                              </div>
                              <div className="flex items-start">
                                <Phone className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                                <span>{location.phone}</span>
                              </div>
                            </div>
                          </div>
                        ))}
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="w-full gap-2">
                          View on Map <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Airport Locations */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Airport Locations</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  airport: "SFO",
                  name: "San Francisco International Airport",
                  address: "Rental Car Center, 780 N McDonnell Rd, San Francisco, CA 94128",
                  hours: "24/7"
                },
                {
                  airport: "LAX",
                  name: "Los Angeles International Airport",
                  address: "9020 Aviation Blvd, Los Angeles, CA 90045",
                  hours: "24/7"
                },
                {
                  airport: "JFK",
                  name: "John F. Kennedy International Airport",
                  address: "Building 21, JFK Airport, Queens, NY 11430",
                  hours: "24/7"
                },
                {
                  airport: "ORD",
                  name: "O'Hare International Airport",
                  address: "10000 Bessie Coleman Dr, Chicago, IL 60666",
                  hours: "24/7"
                },
                {
                  airport: "MIA",
                  name: "Miami International Airport",
                  address: "3900 NW 25th St, Miami, FL 33142",
                  hours: "24/7"
                },
                {
                  airport: "SEA",
                  name: "Seattle-Tacoma International Airport",
                  address: "3150 S 160th St, SeaTac, WA 98188",
                  hours: "24/7"
                },
                {
                  airport: "DFW",
                  name: "Dallas/Fort Worth International Airport",
                  address: "2424 E 38th St, Dallas, TX 75261",
                  hours: "24/7"
                },
                {
                  airport: "ATL",
                  name: "Hartsfield-Jackson Atlanta International Airport",
                  address: "2200 Rental Car Center Pkwy, Atlanta, GA 30337",
                  hours: "24/7"
                }
              ].map((location, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Badge className="text-lg">{location.airport}</Badge>
                      <CardTitle className="text-base">{location.name}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent className="space-y-2 text-sm">
                    <div className="flex items-start">
                      <MapPin className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span>{location.address}</span>
                    </div>
                    <div className="flex items-start">
                      <Clock className="mr-2 h-4 w-4 shrink-0 text-muted-foreground" />
                      <span>{location.hours}</span>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm" className="w-full">Get Directions</Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* International Locations */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-6 text-center text-3xl font-bold">International Locations</h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              DriveEase is expanding globally. Find our international locations in these major cities.
            </p>
            
            <div className="grid gap-6 md:grid-cols-3 lg:grid-cols-6">
              {[
                "London, UK",
                "Paris, France",
                "Toronto, Canada",
                "Sydney, Australia",
                "Tokyo, Japan",
                "Mexico City, Mexico",
                "Berlin, Germany",
                "Amsterdam, Netherlands",
                "Barcelona, Spain",
                "Rome, Italy",
                "Dubai, UAE",
                "Singapore"
              ].map((city, i) => (
                <Card key={i} className="text-center">
                  <CardContent className="pt-6">
                    <MapPin className="mx-auto mb-2 h-6 w-6 text-primary" />
                    <p className="font-medium">{city}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <Button>View All International Locations</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LocationsPage;