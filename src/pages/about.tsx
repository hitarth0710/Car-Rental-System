import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Car, Users, Award, Clock, MapPin, Phone } from "lucide-react";

const AboutPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">About DriveEase</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              We're on a mission to revolutionize the car rental experience with 
              transparency, convenience, and exceptional service.
            </p>
          </div>
        </section>
        
        {/* Our Story */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Our Story</h2>
                <div className="space-y-4">
                  <p>
                    Founded in 2020, DriveEase began with a simple idea: car rentals should be easy, 
                    transparent, and enjoyable. Our founders, frustrated with the complicated 
                    processes and hidden fees of traditional rental companies, set out to create 
                    a better alternative.
                  </p>
                  <p>
                    Starting with just a small fleet of 10 vehicles, we've grown to offer hundreds 
                    of premium cars across multiple locations. Our commitment to customer satisfaction 
                    and transparent pricing has earned us the trust of thousands of satisfied customers.
                  </p>
                  <p>
                    Today, DriveEase continues to innovate in the car rental space, leveraging 
                    technology to streamline the rental process while maintaining the personal 
                    touch that sets us apart from the competition.
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-center">
                <img 
                  src="https://images.unsplash.com/photo-1560179707-f14e90ef3623?q=80&w=2073&auto=format&fit=crop" 
                  alt="DriveEase office" 
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>
        
        {/* Our Values */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
            
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Customer First</h3>
                <p className="text-muted-foreground">
                  We prioritize our customers' needs and feedback in everything we do, 
                  constantly improving our service based on what matters most to you.
                </p>
              </div>
              
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Award className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Quality & Safety</h3>
                <p className="text-muted-foreground">
                  We maintain the highest standards for our vehicles, ensuring they're 
                  not just luxurious but also safe and reliable for your journey.
                </p>
              </div>
              
              <div className="rounded-lg bg-card p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Clock className="h-6 w-6" />
                </div>
                <h3 className="mb-2 text-xl font-semibold">Efficiency</h3>
                <p className="text-muted-foreground">
                  We respect your time and have streamlined our processes to get you 
                  on the road quickly without compromising on service quality.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Leadership Team</h2>
            
            <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {[
                {
                  name: "Alex Johnson",
                  role: "CEO & Co-Founder",
                  image: "https://randomuser.me/api/portraits/men/32.jpg",
                  bio: "Former automotive executive with 15+ years of industry experience."
                },
                {
                  name: "Sarah Chen",
                  role: "COO & Co-Founder",
                  image: "https://randomuser.me/api/portraits/women/44.jpg",
                  bio: "Operations expert who previously scaled multiple tech startups."
                },
                {
                  name: "Michael Rodriguez",
                  role: "CTO",
                  image: "https://randomuser.me/api/portraits/men/67.jpg",
                  bio: "Tech innovator focused on creating seamless digital experiences."
                },
                {
                  name: "Priya Patel",
                  role: "Customer Experience Director",
                  image: "https://randomuser.me/api/portraits/women/68.jpg",
                  bio: "Passionate about creating exceptional customer journeys."
                }
              ].map((member, i) => (
                <div key={i} className="flex flex-col items-center text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="mb-4 h-32 w-32 rounded-full object-cover"
                  />
                  <h3 className="text-lg font-semibold">{member.name}</h3>
                  <p className="mb-2 text-sm text-primary">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
                <p className="mb-8">
                  Have questions about our services or want to provide feedback? 
                  We'd love to hear from you. Reach out to our team using any of 
                  the contact methods below.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center">
                    <MapPin className="mr-4 h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Headquarters</h3>
                      <p>123 Innovation Drive, San Francisco, CA 94103</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Phone className="mr-4 h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Customer Support</h3>
                      <p>1-800-DRIVEEASE (1-800-374-8332)</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <Car className="mr-4 h-6 w-6" />
                    <div>
                      <h3 className="font-semibold">Roadside Assistance</h3>
                      <p>1-888-HELP-CAR (1-888-435-7227)</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex items-center justify-center">
                <Button asChild size="lg">
                  <Link to="/contact">Contact Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default AboutPage;