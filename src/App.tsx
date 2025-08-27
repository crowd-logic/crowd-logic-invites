
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppShell } from "@/components/AppShell";
import Homepage from "./pages/Homepage";
import AdminSignups from "./pages/AdminSignups";
import StashLanding from "./pages/StashLanding";
import EscapadeOrganizer from "./pages/EscapadeOrganizer";
import EscapePricing from "./pages/EscapePricing";
import MarketingOrganizerPage from "./pages/MarketingOrganizerPage";
import MarketingPricingPage from "./pages/MarketingPricingPage";
import MarketingStashPage from "./pages/MarketingStashPage";
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
          <Route path="/admin-secret-signups" element={<AppShell><AdminSignups /></AppShell>} />
          <Route path="/stash" element={<StashLanding />} />
          <Route path="/escapade" element={<EscapadeOrganizer />} />
          <Route path="/escapade/pricing" element={<AppShell><EscapePricing /></AppShell>} />
          <Route path="/marketing/organizer" element={<AppShell><MarketingOrganizerPage /></AppShell>} />
          <Route path="/marketing/pricing" element={<AppShell><MarketingPricingPage /></AppShell>} />
          <Route path="/marketing/stash" element={<AppShell><MarketingStashPage /></AppShell>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<AppShell><NotFound /></AppShell>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
