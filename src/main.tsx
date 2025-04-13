// start the app always with '/' route
import { Toaster as Sonner } from "@/components/ui/sonner";

import { Toaster } from "@/components/ui/toaster";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { TooltipProvider } from "./components/ui/tooltip";

import { ThemeProvider } from "./components/layout/theme-provider";
import "./index.css";
import Index from "./pages";
import LoginForm from "./pages/login";
import SignupForm from "./pages/signup";
import Logout from "./pages/logout";
import CarsPage from "./pages/cars";
import CarDetailsPage from "./pages/car-details";
import Dashboard from "./pages/dashboard";
import HowItWorksPage from "./pages/how-it-works";
import AboutPage from "./pages/about";
import CareersPage from "./pages/careers";
import BlogPage from "./pages/blog";
import PressPage from "./pages/press";
import ContactPage from "./pages/contact";
import TermsPage from "./pages/terms";
import PrivacyPage from "./pages/privacy";
import HelpPage from "./pages/help";
import LocationsPage from "./pages/locations";
import PricingPage from "./pages/pricing";

const queryClient = new QueryClient();

createRoot(document.getElementById("root")!).render(
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<Index />} />
            <Route path='/cars' element={<CarsPage />} />
            <Route path='/car-details/:id' element={<CarDetailsPage />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/how-it-works' element={<HowItWorksPage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/careers' element={<CareersPage />} />
            <Route path='/blog' element={<BlogPage />} />
            <Route path='/press' element={<PressPage />} />
            <Route path='/contact' element={<ContactPage />} />
            <Route path='/terms' element={<TermsPage />} />
            <Route path='/privacy' element={<PrivacyPage />} />
            <Route path='/help' element={<HelpPage />} />
            <Route path='/locations' element={<LocationsPage />} />
            <Route path='/pricing' element={<PricingPage />} />
            <Route path='/login' element={<LoginForm />} />
            <Route path='/signup' element={<SignupForm />} />
            <Route path='/logout' element={<Logout />} />
          </Routes>
        </BrowserRouter>
        <Sonner />
        <Toaster />
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);