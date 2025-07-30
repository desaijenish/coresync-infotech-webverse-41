
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import AboutUs from "./pages/AboutUs";
import Portfolio from "./pages/Portfolio";
import Career from "./pages/Career";
import AISoftware from "./pages/services/AISoftware";
import GameDevelopment from "./pages/services/GameDevelopment";
import WebDevelopment from "./pages/services/WebDevelopment";
import MobileApps from "./pages/services/MobileApps";
import AnimationVideo from "./pages/services/AnimationVideo";
import AndroidDevelopment from "./pages/services/AndroidDevelopment";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/career" element={<Career />} />
          <Route path="/services/ai-software" element={<AISoftware />} />
          <Route path="/services/game-development" element={<GameDevelopment />} />
          <Route path="/services/web-development" element={<WebDevelopment />} />
          <Route path="/services/mobile-apps" element={<MobileApps />} />
          <Route path="/services/animation-video" element={<AnimationVideo />} />
          <Route path="/services/android-development" element={<AndroidDevelopment />} />
          {/* Placeholder routes for other sub-services */}
          <Route path="/services/ios-development" element={<div>iOS Development - Coming Soon</div>} />
          <Route path="/services/flutter-development" element={<div>Flutter Development - Coming Soon</div>} />
          <Route path="/services/react-native-development" element={<div>React Native Development - Coming Soon</div>} />
          <Route path="/services/ionic-development" element={<div>Ionic Development - Coming Soon</div>} />
          <Route path="/services/react-development" element={<div>React Development - Coming Soon</div>} />
          <Route path="/services/nextjs-development" element={<div>Next.js Development - Coming Soon</div>} />
          <Route path="/services/vite-development" element={<div>Vite Development - Coming Soon</div>} />
          <Route path="/services/tailwind-development" element={<div>Tailwind Development - Coming Soon</div>} />
          <Route path="/services/javascript-development" element={<div>JavaScript Development - Coming Soon</div>} />
          <Route path="/services/typescript-development" element={<div>TypeScript Development - Coming Soon</div>} />
          <Route path="/services/erp-systems" element={<div>ERP Systems - Coming Soon</div>} />
          <Route path="/services/crm-software" element={<div>CRM Software - Coming Soon</div>} />
          <Route path="/services/business-analytics" element={<div>Business Analytics - Coming Soon</div>} />
          <Route path="/services/2d-animation" element={<div>2D Animation - Coming Soon</div>} />
          <Route path="/services/3d-animation" element={<div>3D Animation - Coming Soon</div>} />
          <Route path="/services/motion-graphics" element={<div>Motion Graphics - Coming Soon</div>} />
          <Route path="/services/video-production" element={<div>Video Production - Coming Soon</div>} />
          <Route path="/services/unity-development" element={<div>Unity Development - Coming Soon</div>} />
          <Route path="/services/unreal-development" element={<div>Unreal Development - Coming Soon</div>} />
          <Route path="/services/mobile-games" element={<div>Mobile Games - Coming Soon</div>} />
          <Route path="/services/pc-games" element={<div>PC Games - Coming Soon</div>} />
          <Route path="/services/2d-3d-games" element={<div>2D/3D Games - Coming Soon</div>} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
