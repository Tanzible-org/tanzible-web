import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import Index from "./pages/Index";
import Services from "./pages/Services";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import UIUXDesign from "./pages/services/UIUXDesign";
import Maintenance from "./pages/services/Maintenance";
import Work from "./pages/Work";
import Process from "./pages/Process";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Layout isHome>
                <Index />
              </Layout>
            }
          />
          <Route
            path="/services"
            element={
              <Layout>
                <Services />
              </Layout>
            }
          />
          <Route
            path="/services/web-development"
            element={
              <Layout>
                <WebDevelopment />
              </Layout>
            }
          />
          <Route
            path="/services/mobile-apps"
            element={
              <Layout>
                <MobileApps />
              </Layout>
            }
          />
          <Route
            path="/services/ui-ux"
            element={
              <Layout>
                <UIUXDesign />
              </Layout>
            }
          />
          <Route
            path="/services/maintenance"
            element={
              <Layout>
                <Maintenance />
              </Layout>
            }
          />
          <Route
            path="/work"
            element={
              <Layout>
                <Work />
              </Layout>
            }
          />
          <Route
            path="/process"
            element={
              <Layout>
                <Process />
              </Layout>
            }
          />
          <Route
            path="/pricing"
            element={
              <Layout>
                <Pricing />
              </Layout>
            }
          />
          <Route
            path="/about"
            element={
              <Layout>
                <About />
              </Layout>
            }
          />
          <Route
            path="/blog"
            element={
              <Layout>
                <Blog />
              </Layout>
            }
          />
          <Route
            path="/contact"
            element={
              <Layout>
                <Contact />
              </Layout>
            }
          />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route
            path="*"
            element={
              <Layout>
                <NotFound />
              </Layout>
            }
          />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
