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
import IOSDevelopment from "./pages/services/IOSDevelopment";
import FlutterDevelopment from "./pages/services/FlutterDevelopment";
import ReactNativeDevelopment from "./pages/services/ReactNativeDevelopment";
import Ionic from "./pages/services/Ionic";
import ReactJS from "./pages/services/ReactJS";
import NextJS from "./pages/services/NextJS";
import Vite from "./pages/services/Vite";
import Tailwind from "./pages/services/Tailwind";
import JavaScript from "./pages/services/JavaScript";
import TypeScript from "./pages/services/TypeScript";
import BusinessAnalytics from "./pages/services/BusinessAnalytics";
import CRMSoftware from "./pages/services/CRMSoftware";
import ERPSystems from "./pages/services/ERPSystems";
import TwoDAnimation from "./pages/services/TwoDAnimation";
import ThreeDAnimation from "./pages/services/ThreeDAnimation";
import MotionGraphics from "./pages/services/MotionGraphics";
import VideoProduction from "./pages/services/VideoProduction";
import Unity from "./pages/services/Unity";
import UnrealEngine from "./pages/services/UnrealEngine";
import MobileGames from "./pages/services/MobileGames";
import PCGames from "./pages/services/PCGames";
import TwoDThreeDGames from "./pages/services/TwoDThreeDGames";
import AIMLSolutions from "./pages/services/AIMLSolutions";
import ScrollToTop from "./components/ScrollToTop";
import Layout from "./components/Layout";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop /> {/* Yeh lagana zaroori hai */}
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/career" element={<Career />} />
            <Route path="/services/ai-software" element={<AISoftware />} />
            <Route
              path="/services/game-development"
              element={<GameDevelopment />}
            />
            <Route
              path="/services/web-development"
              element={<WebDevelopment />}
            />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route
              path="/services/animation-video"
              element={<AnimationVideo />}
            />
            <Route
              path="/services/ai-ml-solutions"
              element={<AIMLSolutions />}
            />
            <Route
              path="/services/android-development"
              element={<AndroidDevelopment />}
            />
            {/* Placeholder routes for other sub-services */}
            <Route
              path="/services/ios-development"
              element={<IOSDevelopment />}
            />
            <Route
              path="/services/flutter-development"
              element={<FlutterDevelopment />}
            />
            <Route
              path="/services/react-native-development"
              element={<ReactNativeDevelopment />}
            />
            <Route path="/services/ionic-development" element={<Ionic />} />
            <Route path="/services/react-development" element={<ReactJS />} />
            <Route path="/services/nextjs-development" element={<NextJS />} />
            <Route path="/services/vite-development" element={<Vite />} />
            <Route
              path="/services/tailwind-development"
              element={<Tailwind />}
            />
            <Route
              path="/services/javascript-development"
              element={<JavaScript />}
            />
            <Route
              path="/services/typescript-development"
              element={<TypeScript />}
            />
            <Route path="/services/erp-systems" element={<ERPSystems />} />
            <Route path="/services/crm-software" element={<CRMSoftware />} />
            <Route
              path="/services/business-analytics"
              element={<BusinessAnalytics />}
            />
            <Route path="/services/2d-animation" element={<TwoDAnimation />} />
            <Route
              path="/services/3d-animation"
              element={<ThreeDAnimation />}
            />
            <Route
              path="/services/motion-graphics"
              element={<MotionGraphics />}
            />
            <Route
              path="/services/video-production"
              element={<VideoProduction />}
            />
            <Route path="/services/unity-development" element={<Unity />} />
            <Route
              path="/services/unreal-development"
              element={<UnrealEngine />}
            />
            <Route path="/services/mobile-games" element={<MobileGames />} />
            <Route path="/services/pc-games" element={<PCGames />} />
            <Route path="/services/2d-3d-games" element={<TwoDThreeDGames />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
