import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Briefcase, MapPin, Clock, DollarSign, Heart, Users, Lightbulb, Zap } from "lucide-react";

const CareersPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">Join Our Team</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Help us revolutionize the car rental industry with innovative solutions and exceptional service.
            </p>
            <Button variant="secondary" size="lg">View Open Positions</Button>
          </div>
        </section>
        
        {/* Why Join Us */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Why Work With Us</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Heart className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Meaningful Work</h3>
                <p className="text-muted-foreground">
                  Make a real impact by helping people access transportation solutions that improve their lives.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Users className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Collaborative Culture</h3>
                <p className="text-muted-foreground">
                  Work alongside passionate professionals in a supportive environment that values diverse perspectives.
                </p>
              </div>
              
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Lightbulb className="h-8 w-8" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Innovation Focus</h3>
                <p className="text-muted-foreground">
                  Be part of a forward-thinking team that's constantly exploring new ideas and technologies.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Benefits */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Benefits & Perks</h2>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  title: "Competitive Salary",
                  description: "Above-market compensation with regular performance reviews",
                  icon: <DollarSign className="h-5 w-5" />
                },
                {
                  title: "Health & Wellness",
                  description: "Comprehensive medical, dental, and vision coverage",
                  icon: <Heart className="h-5 w-5" />
                },
                {
                  title: "Flexible Work",
                  description: "Remote-friendly with flexible scheduling options",
                  icon: <Clock className="h-5 w-5" />
                },
                {
                  title: "Professional Growth",
                  description: "Learning stipend and career development opportunities",
                  icon: <Zap className="h-5 w-5" />
                },
                {
                  title: "Employee Discounts",
                  description: "Special rates on our car rental services",
                  icon: <Car className="h-5 w-5" />
                },
                {
                  title: "Paid Time Off",
                  description: "Generous vacation policy and paid holidays",
                  icon: <Calendar className="h-5 w-5" />
                },
                {
                  title: "Retirement Plan",
                  description: "401(k) with company matching contributions",
                  icon: <PiggyBank className="h-5 w-5" />
                },
                {
                  title: "Team Events",
                  description: "Regular team-building activities and social events",
                  icon: <Users className="h-5 w-5" />
                }
              ].map((benefit, i) => (
                <Card key={i} className="overflow-hidden">
                  <CardHeader className="pb-2">
                    <div className="mb-2 text-primary">{benefit.icon}</div>
                    <CardTitle>{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        
        {/* Open Positions */}
        <section className="py-16" id="open-positions">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Open Positions</h2>
            
            <Tabs defaultValue="all" className="mb-8">
              <TabsList className="grid w-full grid-cols-4 md:w-[600px] md:mx-auto">
                <TabsTrigger value="all">All</TabsTrigger>
                <TabsTrigger value="engineering">Engineering</TabsTrigger>
                <TabsTrigger value="operations">Operations</TabsTrigger>
                <TabsTrigger value="marketing">Marketing</TabsTrigger>
              </TabsList>
              
              <TabsContent value="all" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Full Stack Developer",
                      department: "Engineering",
                      location: "San Francisco, CA (Remote Option)",
                      type: "Full-time",
                      description: "Build and maintain our customer-facing web applications and internal tools."
                    },
                    {
                      title: "Fleet Operations Manager",
                      department: "Operations",
                      location: "Los Angeles, CA",
                      type: "Full-time",
                      description: "Oversee our vehicle fleet operations, maintenance, and logistics."
                    },
                    {
                      title: "Digital Marketing Specialist",
                      department: "Marketing",
                      location: "Remote",
                      type: "Full-time",
                      description: "Drive customer acquisition through digital marketing channels."
                    },
                    {
                      title: "Customer Experience Associate",
                      department: "Operations",
                      location: "Multiple Locations",
                      type: "Full-time",
                      description: "Provide exceptional service to customers at our rental locations."
                    },
                    {
                      title: "Mobile App Developer",
                      department: "Engineering",
                      location: "San Francisco, CA (Remote Option)",
                      type: "Full-time",
                      description: "Develop and enhance our iOS and Android mobile applications."
                    }
                  ].map((job, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{job.title}</CardTitle>
                          <Badge>{job.department}</Badge>
                        </div>
                        <CardDescription className="flex flex-wrap items-center gap-4 pt-2">
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="mr-1 h-4 w-4" />
                            {job.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="engineering" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Full Stack Developer",
                      department: "Engineering",
                      location: "San Francisco, CA (Remote Option)",
                      type: "Full-time",
                      description: "Build and maintain our customer-facing web applications and internal tools."
                    },
                    {
                      title: "Mobile App Developer",
                      department: "Engineering",
                      location: "San Francisco, CA (Remote Option)",
                      type: "Full-time",
                      description: "Develop and enhance our iOS and Android mobile applications."
                    }
                  ].map((job, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{job.title}</CardTitle>
                          <Badge>{job.department}</Badge>
                        </div>
                        <CardDescription className="flex flex-wrap items-center gap-4 pt-2">
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="mr-1 h-4 w-4" />
                            {job.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="operations" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Fleet Operations Manager",
                      department: "Operations",
                      location: "Los Angeles, CA",
                      type: "Full-time",
                      description: "Oversee our vehicle fleet operations, maintenance, and logistics."
                    },
                    {
                      title: "Customer Experience Associate",
                      department: "Operations",
                      location: "Multiple Locations",
                      type: "Full-time",
                      description: "Provide exceptional service to customers at our rental locations."
                    }
                  ].map((job, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{job.title}</CardTitle>
                          <Badge>{job.department}</Badge>
                        </div>
                        <CardDescription className="flex flex-wrap items-center gap-4 pt-2">
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="mr-1 h-4 w-4" />
                            {job.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="marketing" className="mt-6">
                <div className="space-y-4">
                  {[
                    {
                      title: "Digital Marketing Specialist",
                      department: "Marketing",
                      location: "Remote",
                      type: "Full-time",
                      description: "Drive customer acquisition through digital marketing channels."
                    }
                  ].map((job, i) => (
                    <Card key={i}>
                      <CardHeader>
                        <div className="flex items-center justify-between">
                          <CardTitle>{job.title}</CardTitle>
                          <Badge>{job.department}</Badge>
                        </div>
                        <CardDescription className="flex flex-wrap items-center gap-4 pt-2">
                          <span className="flex items-center">
                            <MapPin className="mr-1 h-4 w-4" />
                            {job.location}
                          </span>
                          <span className="flex items-center">
                            <Briefcase className="mr-1 h-4 w-4" />
                            {job.type}
                          </span>
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <p className="text-muted-foreground">{job.description}</p>
                      </CardContent>
                      <CardFooter>
                        <Button>Apply Now</Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
              </TabsContent>
            </Tabs>
            
            <div className="mt-12 text-center">
              <p className="mb-4 text-muted-foreground">
                Don't see a position that matches your skills? We're always looking for talented individuals.
              </p>
              <Button variant="outline">Send General Application</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

// Import missing icons
const Car = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M14 16H9m10 0h3v-3.15a1 1 0 0 0-.84-.99L16 11l-2.7-3.6a1 1 0 0 0-.8-.4H5.24a2 2 0 0 0-1.8 1.1l-.8 1.63A6 6 0 0 0 2 12.42V16h2" />
    <circle cx="6.5" cy="16.5" r="2.5" />
    <circle cx="16.5" cy="16.5" r="2.5" />
  </svg>
);

const Calendar = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
    <line x1="16" x2="16" y1="2" y2="6" />
    <line x1="8" x2="8" y1="2" y2="6" />
    <line x1="3" x2="21" y1="10" y2="10" />
  </svg>
);

const PiggyBank = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M19 5c-1.5 0-2.8 1.4-3 2-3.5-1.5-11-.3-11 5 0 1.8 0 3 2 4.5V20h4v-2h3v2h4v-4c1-.5 1.7-1 2-2h2v-4h-2c0-1-.5-1.5-1-2V5z" />
    <path d="M2 9v1c0 1.1.9 2 2 2h1" />
    <path d="M16 11h0" />
  </svg>
);

export default CareersPage;