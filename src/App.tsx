import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { useState, useEffect, Suspense, lazy } from "react";
import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LoadingSpinner from "./components/LoadingSpinner";

// Lazy load pages
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Courses = lazy(() => import("./pages/Courses"));
const Admissions = lazy(() => import("./pages/Admissions"));
const Contact = lazy(() => import("./pages/Contact"));
const Faculty = lazy(() => import("./pages/academics/Faculty"));
const Infrastructure = lazy(() => import("./pages/academics/Infrastructure"));
const Research = lazy(() => import("./pages/academics/Research"));
const AboutUs = lazy(() => import("./pages/aboutus/AboutUs"))
// const AboutUs = lazy(() => import ("./pages/aboutus/AboutUs"))
const Clubs = lazy(() => import("./pages/student-life/Clubs"));
const Sports = lazy(() => import("./pages/student-life/Sports"));
const Events = lazy(() => import("./pages/student-life/Events"));
const NotFound = lazy(() => import("./pages/NotFound"));

const queryClient = new QueryClient();

const AppRoutes = () => {
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const timer = setTimeout(() => setIsLoading(false), 500);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingSpinner key="loader" />}
      </AnimatePresence>
      <Suspense fallback={<LoadingSpinner />}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/courses" element={<Courses />} />
          <Route path="/academics/faculty" element={<Faculty />} />
          <Route path="/academics/infrastructure" element={<Infrastructure />} />
          <Route path="/academics/research" element={<Research />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/student-life/clubs" element={<Clubs />} />
          <Route path="/student-life/sports" element={<Sports />} />
          <Route path="/student-life/events" element={<Events />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/contact" element={<Contact />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="flex flex-col min-h-screen">
          <Navbar />
          <main className="flex-grow">
            <AppRoutes />
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;