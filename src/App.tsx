import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import { Navigation } from "@/components/Navigation";
import { useState, useEffect } from "react";
import { Sun, Moon, Github, Linkedin } from "lucide-react";
import About from "./pages/About";
import Timeline from "./pages/Timeline";
import Projects from "./pages/Projects";
import Writing from "./pages/Writing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const AppContent = () => {
  const [isLight, setIsLight] = useState(false);

  useEffect(() => {
    document.documentElement.classList.toggle('light-theme', isLight);
  }, [isLight]);

  return (
    <div>
      <Navigation />
      {/* Fixed left sidebar: theme toggle + social icons */}
      <div className="fixed top-8 left-8 z-[60] flex flex-col items-center gap-4">
        <button
          onClick={() => setIsLight(!isLight)}
          className="text-white/70 hover:text-white transition-colors"
          aria-label="Toggle light/dark theme"
        >
          {isLight ? <Moon size={16} /> : <Sun size={16} />}
        </button>
        <a
          href="https://github.com/sophianggan"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors"
        >
          <Github size={16} />
        </a>
          <a
            href="https://www.linkedin.com/in/sophia-ng-gan/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-white/70 hover:text-white transition-colors"
        >
          <Linkedin size={16} />
        </a>
      </div>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/timeline" element={<Timeline />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/writing" element={<Writing />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
};

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <HashRouter>
          <AppContent />
        </HashRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
