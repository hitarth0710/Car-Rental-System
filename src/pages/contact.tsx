import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock, CheckCircle, Loader2 } from "lucide-react";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, subject: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      toast({
        title: "Message sent",
        description: "We've received your message and will respond shortly.",
      });
    }, 1500);
  };

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-primary py-16 text-primary-foreground">
          <div className="mx-auto max-w-7xl px-4 text-center sm:px-6">
            <h1 className="mb-4 text-4xl font-bold">Contact Us</h1>
            <p className="mx-auto mb-8 max-w-2xl text-lg">
              Have questions or need assistance? We're here to help. Reach out to our team using any of the methods below.
            </p>
          </div>
        </section>
        
        {/* Contact Information */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Phone</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Customer Support</p>
                  <p className="font-medium">1-800-DRIVEEASE</p>
                  <p className="text-muted-foreground mt-2">Roadside Assistance</p>
                  <p className="font-medium">1-888-HELP-CAR</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Email</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">General Inquiries</p>
                  <p className="font-medium">info@driveease.com</p>
                  <p className="text-muted-foreground mt-2">Support</p>
                  <p className="font-medium">support@driveease.com</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Headquarters</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Main Office</p>
                  <p className="font-medium">123 Innovation Drive</p>
                  <p className="font-medium">San Francisco, CA 94103</p>
                </CardContent>
              </Card>
              
              <Card>
                <CardHeader className="pb-2">
                  <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                    <Clock className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle>Hours</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Customer Support</p>
                  <p className="font-medium">Mon-Fri: 8am - 8pm</p>
                  <p className="font-medium">Sat-Sun: 9am - 5pm</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        
        {/* Contact Form */}
        <section className="bg-muted py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <div className="grid gap-12 md:grid-cols-2">
              <div>
                <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
                <p className="mb-6 text-muted-foreground">
                  Whether you have a question about our services, need help with a booking, 
                  or want to provide feedback, we'd love to hear from you. Fill out the form 
                  and we'll get back to you as soon as possible.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>24/7 roadside assistance for active rentals</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Dedicated support for corporate accounts</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Fast response times for all inquiries</span>
                  </div>
                </div>
              </div>
              
              <Card>
                {isSubmitted ? (
                  <div className="flex h-full flex-col items-center justify-center p-8 text-center">
                    <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
                      <CheckCircle className="h-8 w-8 text-green-600" />
                    </div>
                    <h3 className="mb-2 text-2xl font-bold">Thank You!</h3>
                    <p className="mb-6 text-muted-foreground">
                      Your message has been sent successfully. We'll get back to you shortly.
                    </p>
                    <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <CardHeader>
                      <CardTitle>Contact Form</CardTitle>
                      <CardDescription>
                        Fill out the form below and we'll respond as soon as possible.
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name</Label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                      
                      <div className="grid gap-4 sm:grid-cols-2">
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="john@example.com"
                            required
                            value={formData.email}
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="space-y-2">
                          <Label htmlFor="phone">Phone (Optional)</Label>
                          <Input
                            id="phone"
                            name="phone"
                            placeholder="(555) 123-4567"
                            value={formData.phone}
                            onChange={handleChange}
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Select
                          value={formData.subject}
                          onValueChange={handleSelectChange}
                          required
                        >
                          <SelectTrigger id="subject">
                            <SelectValue placeholder="Select a subject" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="general">General Inquiry</SelectItem>
                            <SelectItem value="booking">Booking Question</SelectItem>
                            <SelectItem value="support">Customer Support</SelectItem>
                            <SelectItem value="feedback">Feedback</SelectItem>
                            <SelectItem value="corporate">Corporate Account</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="How can we help you?"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                        />
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button type="submit" className="w-full" disabled={isSubmitting}>
                        {isSubmitting ? (
                          <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Sending...
                          </>
                        ) : (
                          "Send Message"
                        )}
                      </Button>
                    </CardFooter>
                  </form>
                )}
              </Card>
            </div>
          </div>
        </section>
        
        {/* Locations Map */}
        <section className="py-16">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <h2 className="mb-12 text-center text-3xl font-bold">Our Locations</h2>
            
            <div className="rounded-lg border overflow-hidden">
              <div className="aspect-[16/9] w-full bg-muted flex items-center justify-center">
                <div className="text-center">
                  <p className="text-lg font-medium">Interactive Map</p>
                  <p className="text-muted-foreground">Map showing all DriveEase locations would appear here</p>
                </div>
              </div>
            </div>
            
            <div className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
              {[
                {
                  city: "San Francisco",
                  address: "123 Innovation Drive, San Francisco, CA 94103",
                  phone: "(415) 555-1234"
                },
                {
                  city: "Los Angeles",
                  address: "456 Sunset Blvd, Los Angeles, CA 90028",
                  phone: "(213) 555-5678"
                },
                {
                  city: "New York",
                  address: "789 Broadway, New York, NY 10003",
                  phone: "(212) 555-9012"
                },
                {
                  city: "Chicago",
                  address: "321 Michigan Ave, Chicago, IL 60601",
                  phone: "(312) 555-3456"
                }
              ].map((location, i) => (
                <Card key={i}>
                  <CardHeader>
                    <CardTitle>{location.city}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{location.address}</p>
                    <p className="mt-2 text-sm">{location.phone}</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" className="w-full">Get Directions</Button>
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

export default ContactPage;