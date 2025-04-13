import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Search, Calendar, User, ArrowRight } from "lucide-react";

const BlogPage = () => {
  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="mb-12 flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>
              <h1 className="text-3xl font-bold">DriveEase Blog</h1>
              <p className="text-muted-foreground">
                Insights, tips, and news from the world of car rentals
              </p>
            </div>
            
            <div className="relative w-full md:w-auto">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search articles..."
                className="w-full pl-10 md:w-[300px]"
              />
            </div>
          </div>
          
          <Tabs defaultValue="all" className="mb-12">
            <TabsList className="mb-8 grid w-full grid-cols-4 md:w-[600px] md:mx-auto">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="tips">Travel Tips</TabsTrigger>
              <TabsTrigger value="guides">Car Guides</TabsTrigger>
              <TabsTrigger value="news">Company News</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all">
              {/* Featured Article */}
              <div className="mb-12">
                <Card className="overflow-hidden">
                  <div className="grid md:grid-cols-2">
                    <div className="aspect-video md:aspect-auto">
                      <img
                        src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?q=80&w=2021&auto=format&fit=crop"
                        alt="Road trip through mountains"
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6">
                      <Badge className="mb-2 w-fit">Featured</Badge>
                      <CardTitle className="mb-2 text-2xl">The Ultimate Road Trip Guide: 10 Routes You Must Experience</CardTitle>
                      <CardDescription className="mb-4">
                        Discover breathtaking scenic drives and hidden gems across the country with our curated list of must-experience road trips.
                      </CardDescription>
                      <div className="mb-6 flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>June 15, 2023</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>Sarah Johnson</span>
                        </div>
                      </div>
                      <Button className="w-fit">
                        Read Article
                      </Button>
                    </div>
                  </div>
                </Card>
              </div>
              
              {/* Article Grid */}
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "5 Tips for Saving Money on Your Next Car Rental",
                    description: "Learn insider tricks to get the best deals and avoid unnecessary fees.",
                    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop",
                    date: "May 28, 2023",
                    author: "Michael Chen",
                    category: "Travel Tips"
                  },
                  {
                    title: "Electric vs. Hybrid: Which is Right for Your Next Rental?",
                    description: "A comprehensive comparison to help you choose the eco-friendly option that suits your needs.",
                    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
                    date: "May 12, 2023",
                    author: "Emily Rodriguez",
                    category: "Car Guides"
                  },
                  {
                    title: "DriveEase Expands to 5 New Cities",
                    description: "We're excited to announce our service is now available in Boston, Chicago, Miami, Seattle, and Denver.",
                    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
                    date: "April 30, 2023",
                    author: "Alex Johnson",
                    category: "Company News"
                  },
                  {
                    title: "The Family Road Trip Survival Guide",
                    description: "Keep everyone happy with these tried-and-tested tips for long drives with kids.",
                    image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=2087&auto=format&fit=crop",
                    date: "April 15, 2023",
                    author: "Priya Patel",
                    category: "Travel Tips"
                  },
                  {
                    title: "Luxury Cars Worth the Splurge for Special Occasions",
                    description: "Make your wedding, anniversary, or business trip extra special with these premium vehicles.",
                    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
                    date: "March 28, 2023",
                    author: "David Wilson",
                    category: "Car Guides"
                  },
                  {
                    title: "New Feature: Contactless Pickup Now Available",
                    description: "Skip the counter and get on the road faster with our new mobile check-in process.",
                    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
                    date: "March 10, 2023",
                    author: "Alex Johnson",
                    category: "Company News"
                  }
                ].map((article, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{article.category}</Badge>
                      <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
              
              <div className="mt-12 flex justify-center">
                <Button variant="outline">Load More Articles</Button>
              </div>
            </TabsContent>
            
            <TabsContent value="tips">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "5 Tips for Saving Money on Your Next Car Rental",
                    description: "Learn insider tricks to get the best deals and avoid unnecessary fees.",
                    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?q=80&w=2064&auto=format&fit=crop",
                    date: "May 28, 2023",
                    author: "Michael Chen",
                    category: "Travel Tips"
                  },
                  {
                    title: "The Family Road Trip Survival Guide",
                    description: "Keep everyone happy with these tried-and-tested tips for long drives with kids.",
                    image: "https://images.unsplash.com/photo-1520116468816-95b69f847357?q=80&w=2087&auto=format&fit=crop",
                    date: "April 15, 2023",
                    author: "Priya Patel",
                    category: "Travel Tips"
                  }
                ].map((article, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{article.category}</Badge>
                      <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="guides">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "Electric vs. Hybrid: Which is Right for Your Next Rental?",
                    description: "A comprehensive comparison to help you choose the eco-friendly option that suits your needs.",
                    image: "https://images.unsplash.com/photo-1593941707882-a5bba14938c7?q=80&w=2072&auto=format&fit=crop",
                    date: "May 12, 2023",
                    author: "Emily Rodriguez",
                    category: "Car Guides"
                  },
                  {
                    title: "Luxury Cars Worth the Splurge for Special Occasions",
                    description: "Make your wedding, anniversary, or business trip extra special with these premium vehicles.",
                    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=2070&auto=format&fit=crop",
                    date: "March 28, 2023",
                    author: "David Wilson",
                    category: "Car Guides"
                  }
                ].map((article, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{article.category}</Badge>
                      <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
            
            <TabsContent value="news">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {[
                  {
                    title: "DriveEase Expands to 5 New Cities",
                    description: "We're excited to announce our service is now available in Boston, Chicago, Miami, Seattle, and Denver.",
                    image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?q=80&w=2144&auto=format&fit=crop",
                    date: "April 30, 2023",
                    author: "Alex Johnson",
                    category: "Company News"
                  },
                  {
                    title: "New Feature: Contactless Pickup Now Available",
                    description: "Skip the counter and get on the road faster with our new mobile check-in process.",
                    image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?q=80&w=1974&auto=format&fit=crop",
                    date: "March 10, 2023",
                    author: "Alex Johnson",
                    category: "Company News"
                  }
                ].map((article, i) => (
                  <Card key={i} className="overflow-hidden">
                    <div className="aspect-video">
                      <img
                        src={article.image}
                        alt={article.title}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <Badge className="mb-2 w-fit">{article.category}</Badge>
                      <CardTitle className="line-clamp-2">{article.title}</CardTitle>
                      <CardDescription className="line-clamp-2">{article.description}</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center">
                          <Calendar className="mr-1 h-4 w-4" />
                          <span>{article.date}</span>
                        </div>
                        <div className="flex items-center">
                          <User className="mr-1 h-4 w-4" />
                          <span>{article.author}</span>
                        </div>
                      </div>
                    </CardContent>
                    <CardFooter>
                      <Button variant="ghost" className="gap-2">
                        Read More <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
          
          {/* Newsletter Signup */}
          <div className="mt-16 rounded-lg bg-primary p-8 text-primary-foreground">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-2xl font-bold">Subscribe to Our Newsletter</h2>
              <p className="mb-6">
                Get the latest articles, travel tips, and exclusive offers delivered straight to your inbox.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
                <Input
                  type="email"
                  placeholder="Your email address"
                  className="bg-white text-foreground sm:w-[300px]"
                />
                <Button variant="secondary">Subscribe</Button>
              </div>
            </div>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPage;