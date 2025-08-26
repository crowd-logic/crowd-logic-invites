
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import AdminSignups from "./pages/AdminSignups";
import StashLanding from "./pages/StashLanding";
import EscapadeOrganizer from "./pages/EscapadeOrganizer";
import EscapePricing from "./pages/EscapePricing";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/admin-secret-signups" element={<AdminSignups />} />
          <Route path="/stash" element={<StashLanding />} />
          <Route path="/escapade" element={<EscapadeOrganizer />} />
          <Route path="/escapade/pricing" element={<EscapePricing />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
