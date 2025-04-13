import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Calendar, Download, ExternalLink } from "lucide-react";

const PressPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">Press & Media</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Find the latest news, press releases, and media resources about DriveEase.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="secondary">Contact Press Team</Button>
              <Button variant="outline" className="border-white text-white hover:bg-white/10">
                Download Media Kit
              </Button>
            </div>
          </div>
        </section>
        
        {/* Press Releases */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Press Releases</h2>
            
            <Tabs defaultValue="2023" className="mb-8">
              <TabsList className="mb-8 grid w-full grid-cols-3 md:w-[400px] md:mx-auto">
                <TabsTrigger value="2023">2023</TabsTrigger>
                <TabsTrigger value="2022">2022</TabsTrigger>
                <TabsTrigger value="2021">2021</TabsTrigger>
              </TabsList>
              
              <TabsContent value="2023">
                <div className="space-y-6">
                  {[
                    {
                      title: "DriveEase Secures $50 Million in Series B Funding to Accelerate Growth",
                      date: "November 15, 2023",
                      description: "Funding will support expansion into new markets and enhancement of the digital platform.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Launches Industry-First Carbon Offset Program for All Rentals",
                      date: "September 22, 2023",
                      description: "New initiative allows customers to neutralize the environmental impact of their rental.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Expands Fleet with 500 New Electric Vehicles",
                      date: "July 10, 2023",
                      description: "Major investment in sustainable transportation options across all locations.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Named 'Best Car Rental Service' in Annual Travel Awards",
                      date: "May 5, 2023",
                      description: "Company recognized for exceptional customer service and innovative digital experience.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Announces Partnership with Major Hotel Chain",
                      date: "February 18, 2023",
                      description: "Strategic alliance offers exclusive benefits to mutual customers.",
                      link: "#"
                    }
                  ].map((release, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Press Release</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{release.date}</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">{release.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{release.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="gap-2">
                          Read Full Release <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="2022">
                <div className="space-y-6">
                  {[
                    {
                      title: "DriveEase Celebrates 100,000 Successful Rentals",
                      date: "December 12, 2022",
                      description: "Major milestone reached as customer base continues to grow rapidly.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Launches Redesigned Mobile App with Enhanced Features",
                      date: "October 3, 2022",
                      description: "New app provides seamless booking experience and digital vehicle access.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Opens New Headquarters in San Francisco",
                      date: "July 22, 2022",
                      description: "State-of-the-art facility will house growing team and innovation lab.",
                      link: "#"
                    }
                  ].map((release, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Press Release</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{release.date}</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">{release.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{release.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="gap-2">
                          Read Full Release <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="2021">
                <div className="space-y-6">
                  {[
                    {
                      title: "DriveEase Secures $10 Million in Series A Funding",
                      date: "November 5, 2021",
                      description: "Investment will fuel expansion and technology development.",
                      link: "#"
                    },
                    {
                      title: "DriveEase Launches Operations in Three Major Cities",
                      date: "June 15, 2021",
                      description: "Service now available in Los Angeles, New York, and San Francisco.",
                      link: "#"
                    }
                  ].map((release, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center gap-2">
                          <Badge variant="outline" className="text-xs">Press Release</Badge>
                          <div className="flex items-center text-sm text-muted-foreground">
                            <Calendar className="mr-1 h-4 w-4" />
                            <span>{release.date}</span>
                          </div>
                        </div>
                        <CardTitle className="mt-2">{release.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <CardDescription>{release.description}</CardDescription>
                      </CardContent>
                      <CardFooter>
                        <Button variant="outline" className="gap-2">
                          Read Full Release <ExternalLink className="h-4 w-4" />
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        
        {/* Media Coverage */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Media Coverage</h2>
            
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {[
                {
                  title: "DriveEase Disrupts Traditional Car Rental Model",
                  source: "Tech Innovators",
                  date: "October 18, 2023",
                  excerpt: "How this startup is using technology to streamline the rental experience and challenge industry giants.",
                  link: "#"
                },
                {
                  title: "The Future of Car Rentals: Interview with DriveEase CEO",
                  source: "Business Weekly",
                  date: "August 5, 2023",
                  excerpt: "Alex Johnson discusses the company's vision and how they're addressing sustainability challenges.",
                  link: "#"
                },
                {
                  title: "DriveEase Named in 'Top 50 Startups to Watch'",
                  source: "Entrepreneur Magazine",
                  date: "June 22, 2023",
                  excerpt: "Annual list recognizes innovative companies poised for significant growth.",
                  link: "#"
                },
                {
                  title: "How DriveEase is Making Luxury Cars More Accessible",
                  source: "Luxury Lifestyle",
                  date: "May 10, 2023",
                  excerpt: "The rental service that's democratizing access to premium vehicles.",
                  link: "#"
                },
                {
                  title: "DriveEase's Contactless Rental System Sets New Industry Standard",
                  source: "Digital Trends",
                  date: "March 15, 2023",
                  excerpt: "The technology behind the company's seamless pickup and return process.",
                  link: "#"
                },
                {
                  title: "Green Fleet: DriveEase's Commitment to Sustainability",
                  source: "Environmental Today",
                  date: "January 8, 2023",
                  excerpt: "How one car rental company is reducing its carbon footprint.",
                  link: "#"
                }
              ].map((article, i) => (
                <Card key={i}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <Badge>{article.source}</Badge>
                      <span className="text-sm text-muted-foreground">{article.date}</span>
                    </div>
                    <CardTitle className="mt-2">{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{article.excerpt}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="ghost" className="gap-2">
                      Read Article <ExternalLink className="h-4 w-4" />
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Media Resources */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Media Resources</h2>
            
            <div className="grid gap-8 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Brand Assets</CardTitle>
                  <CardDescription>
                    Download official DriveEase logos, icons, and brand guidelines.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square rounded-md bg-primary p-4 flex items-center justify-center">
                      <div className="text-primary-foreground text-2xl font-bold">Logo</div>
                    </div>
                    <div className="aspect-square rounded-md bg-muted p-4 flex items-center justify-center">
                      <div className="text-muted-foreground text-2xl font-bold">Icon</div>
                    </div>
                    <div className="aspect-square rounded-md bg-secondary p-4 flex items-center justify-center">
                      <div className="text-secondary-foreground text-2xl font-bold">Colors</div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" /> Download Brand Kit
                  </Button>
                </CardFooter>
              </Card>
              
              <Card>
                <CardHeader>
                  <CardTitle>Product Images</CardTitle>
                  <CardDescription>
                    High-resolution images of our vehicles, app interfaces, and rental locations.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?q=80&w=2070&auto=format&fit=crop" 
                        alt="Car" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=2071&auto=format&fit=crop" 
                        alt="Car" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="aspect-square rounded-md overflow-hidden">
                      <img 
                        src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop" 
                        alt="Car" 
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" /> Download Image Pack
                  </Button>
                </CardFooter>
              </Card>
            </div>
            
            <div className="mt-12">
              <Card>
                <CardHeader>
                  <CardTitle>Executive Bios</CardTitle>
                  <CardDescription>
                    Information about DriveEase's leadership team for media use.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-6 md:grid-cols-2">
                    <div className="flex items-center gap-4">
                      <img
                        src="https://randomuser.me/api/portraits/men/32.jpg"
                        alt="Alex Johnson"
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">Alex Johnson</h3>
                        <p className="text-sm text-primary">CEO & Co-Founder</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Former automotive executive with 15+ years of industry experience.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="Sarah Chen"
                        className="h-16 w-16 rounded-full object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">Sarah Chen</h3>
                        <p className="text-sm text-primary">COO & Co-Founder</p>
                        <p className="mt-1 text-sm text-muted-foreground">
                          Operations expert who previously scaled multiple tech startups.
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="gap-2">
                    <Download className="h-4 w-4" /> Download Full Bios
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h2 className="mb-4 text-3xl font-bold">Media Inquiries</h2>
            <p className="mx-auto mb-8 max-w-2xl">
              For press inquiries, interview requests, or additional information, please contact our media relations team.
            </p>
            <div className="mx-auto max-w-md">
              <Card className="bg-white text-foreground">
                <CardHeader>
                  <CardTitle>Press Contact</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-center">
                    <p>Emily Martinez</p>
                    <p>Director of Communications</p>
                    <p className="text-primary">press@driveease.com</p>
                    <p>+1 (555) 123-4567</p>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-center">
                  <Button>Contact Press Team</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PressPage;