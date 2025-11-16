import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { useState } from "react";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const location = useLocation();
  const [isMutedTheme, setIsMutedTheme] = useState(false);
  const showFooter = location.pathname !== '/';

  return (
    <div className={`${isMutedTheme ? 'muted-theme' : ''}`}>
      {/* Background bar for navigation area */}
      <div className="fixed top-0 left-0 right-0 h-24 md:h-20 bg-background z-40"></div>
      <Navigation />
      {/* Theme Toggle Button */}
      <div className="fixed top-16 md:top-8 left-8 z-[60]">
        <button
          onClick={() => setIsMutedTheme(!isMutedTheme)}
          className="font-mono text-xs text-white hover:text-white/70 transition-colors bg-background px-2 py-1"
          aria-label="Toggle muted theme"
        >
          {isMutedTheme ? 'BRIGHT' : 'MUTED'}
        </button>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        <Route path="/contact" element={<Contact />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
      {showFooter && <Footer />}
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <AppContent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
