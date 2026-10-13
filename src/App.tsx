
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";

import { ReactLenis, useLenis } from 'lenis/react';
import { PersonaProvider, usePersona } from './context/PersonaContext';
import { useEffect } from 'react';

const queryClient = new QueryClient();

const LenisDynamicReconfig = () => {
  const { persona } = usePersona();
  const lenis = useLenis();

  useEffect(() => {
    if (!lenis) return;
    if (persona === 'se') {
      lenis.options.lerp = 0.2;
      lenis.options.duration = 0.6;
    } else {
      lenis.options.lerp = 0.08;
      lenis.options.duration = 1.2;
    }
  }, [persona, lenis]);

  return null;
};

const DynamicScrollContainer = ({ children }: { children: React.ReactNode }) => {
  const { persona } = usePersona();
  return (
    <ReactLenis
      root
      options={{
        lerp: persona === 'se' ? 0.2 : 0.08,
        duration: persona === 'se' ? 0.6 : 1.2,
        smoothWheel: true,
      }}
    >
      <LenisDynamicReconfig />
      {children}
    </ReactLenis>
  );
};

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <PersonaProvider>
        <DynamicScrollContainer>
          <div className="tactile-noise-layer" aria-hidden="true" />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </DynamicScrollContainer>
      </PersonaProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
