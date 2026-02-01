import { useState, useEffect } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { PageTransition } from "@/components/layout/PageTransition";
import { ScrollToTop } from "@/components/ui/ScrollToTop";
import { ScrollToTopOnNavigate } from "@/components/layout/ScrollToTopOnNavigate";
import { SplashScreen } from "@/components/ui/SplashScreen";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Careers from "./pages/Careers";
import Blog from "./pages/Blog";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfService from "./pages/TermsOfService";
import CookiePolicy from "./pages/CookiePolicy";
import ServiceAppDevelopment from "./pages/services/AppDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import GraphicsDesigning from "./pages/services/GraphicsDesigning";
import ShopifyDevelopment from "./pages/services/ShopifyDevelopment";
import WordPressDevelopment from "./pages/services/WordPressDevelopment";

const queryClient = new QueryClient();

const AnimatedRoutes = () => {
  const location = useLocation();
  
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<PageTransition><Index /></PageTransition>} />
        
        {/* Company Pages */}
        <Route path="/careers" element={<PageTransition><Careers /></PageTransition>} />
        <Route path="/blog" element={<PageTransition><Blog /></PageTransition>} />
        
        {/* Legal Pages */}
        <Route path="/privacy-policy" element={<PageTransition><PrivacyPolicy /></PageTransition>} />
        <Route path="/terms-of-service" element={<PageTransition><TermsOfService /></PageTransition>} />
        <Route path="/cookie-policy" element={<PageTransition><CookiePolicy /></PageTransition>} />
        
        {/* Service Pages */}
        <Route path="/services/app-development" element={<PageTransition><ServiceAppDevelopment /></PageTransition>} />
        <Route path="/services/web-development" element={<PageTransition><WebDevelopment /></PageTransition>} />
        <Route path="/services/graphics-designing" element={<PageTransition><GraphicsDesigning /></PageTransition>} />
        <Route path="/services/shopify-development" element={<PageTransition><ShopifyDevelopment /></PageTransition>} />
        <Route path="/services/wordpress-development" element={<PageTransition><WordPressDevelopment /></PageTransition>} />
        
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<PageTransition><NotFound /></PageTransition>} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show splash screen for 2 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <SplashScreen isLoading={isLoading} />
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollToTopOnNavigate />
          <AnimatedRoutes />
          <ScrollToTop />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
