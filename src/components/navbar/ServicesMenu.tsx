import React, { useState } from "react";
import { Link } from "react-router-dom";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ServiceCategories } from "./types";

interface ServicesMenuProps {
  serviceCategories: ServiceCategories;
  isMobile?: boolean; // Add this prop for mobile detection
}

const ServicesMenu = ({
  serviceCategories,
  isMobile = false,
}: ServicesMenuProps) => {
  const [isServicesHovered, setIsServicesHovered] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false); // For mobile toggle
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const [hoverTimeout, setHoverTimeout] = useState<NodeJS.Timeout | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null); // For mobile selection

  const serviceRoutes: { [key: string]: { [key: string]: string } } = {
    "Mobile App Development": {
      Android: "/services/android-development",
      iOS: "/services/ios-development",
      Flutter: "/services/flutter-development",
      "React Native": "/services/react-native-development",
      Ionic: "/services/ionic-development",
    },
    "Web Development": {
      "React.js": "/services/react-development",
      "Next.js": "/services/nextjs-development",
      Vite: "/services/vite-development",
      Tailwind: "/services/tailwind-development",
      JavaScript: "/services/javascript-development",
      TypeScript: "/services/typescript-development",
    },
    "Computer Software": {
      "AI/ML Solutions": "/services/ai-ml-solutions",
      "ERP Systems": "/services/erp-systems",
      "CRM Software": "/services/crm-software",
      "Business Analytics": "/services/business-analytics",
    },
    "Animation & Video Editing": {
      "2D Animation": "/services/2d-animation",
      "3D Animation": "/services/3d-animation",
      "Motion Graphics": "/services/motion-graphics",
      "Video Production": "/services/video-production",
    },
    "Game Development": {
      Unity: "/services/unity-development",
      "Unreal Engine": "/services/unreal-development",
      "Mobile Games": "/services/mobile-games",
      "PC Games": "/services/pc-games",
      "2D/3D Games": "/services/2d-3d-games",
    },
  };

  // Event handlers (same as before)
  const handleServicesMouseEnter = () => {
    if (!isMobile) {
      if (hoverTimeout) {
        clearTimeout(hoverTimeout);
        setHoverTimeout(null);
      }
      setIsServicesHovered(true);
    }
  };

  const handleServicesMouseLeave = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setIsServicesHovered(false);
        setHoveredService(null);
      }, 200);
      setHoverTimeout(timeout);
    }
  };

  const handleMenuMouseEnter = () => {
    if (!isMobile && hoverTimeout) {
      clearTimeout(hoverTimeout);
      setHoverTimeout(null);
    }
  };

  const handleMenuMouseLeave = () => {
    if (!isMobile) {
      const timeout = setTimeout(() => {
        setIsServicesHovered(false);
        setHoveredService(null);
      }, 200);
      setHoverTimeout(timeout);
    }
  };

  // Mobile specific handlers
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    if (!isMobileMenuOpen) {
      setSelectedCategory(null);
    }
  };

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(selectedCategory === category ? null : category);
  };

  if (isMobile) {
    return (
      <div className="w-full">
        {/* Mobile trigger button */}
        <button
          onClick={toggleMobileMenu}
          className="flex items-center justify-between w-full text-foreground py-3 px-4 rounded-lg hover:bg-accent transition-colors"
        >
          <span>Services</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform ${
              isMobileMenuOpen ? "rotate-180" : ""
            }`}
          />
        </button>

        {/* Mobile menu content */}
        {isMobileMenuOpen && (
          <div className="mt-2 space-y-2 pl-4 animate-in fade-in slide-in-from-top-2">
            {Object.keys(serviceCategories).map((category) => (
              <div key={category} className="rounded-lg overflow-hidden">
                <button
                  onClick={() => handleCategorySelect(category)}
                  className="flex items-center justify-between w-full text-left py-3 px-4 hover:bg-accent transition-colors"
                >
                  <span>{category}</span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      selectedCategory === category ? "rotate-90" : ""
                    }`}
                  />
                </button>

                {selectedCategory === category && (
                  <div className="pl-4 space-y-2 animate-in fade-in">
                    {serviceCategories[
                      category as keyof typeof serviceCategories
                    ].map((tech) => {
                      const route = serviceRoutes[category]?.[tech] || "#";
                      return (
                        <Link
                          key={tech}
                          to={route}
                          className="block py-2 px-4 text-sm text-muted-foreground hover:text-foreground hover:bg-accent rounded transition-colors"
                          onClick={() => setIsMobileMenuOpen(false)}
                        >
                          {tech}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  // Desktop version (your existing code)
  return (
    <div
      className="relative"
      onMouseEnter={handleServicesMouseEnter}
      onMouseLeave={handleServicesMouseLeave}
    >
      <button className="flex items-center space-x-1 text-foreground hover:text-coresync-primary-light transition-all duration-300 group py-2">
        <span>Services</span>
        <ChevronDown
          className={`w-4 h-4 transition-all duration-300 ${
            isServicesHovered ? "rotate-180 text-coresync-primary-light" : ""
          }`}
        />
        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark transition-all duration-300 group-hover:w-full"></span>
      </button>

      {/* Enhanced Mega Menu Dropdown */}
      {isServicesHovered && (
        <div
          className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 w-[90vw] max-w-[650px] backdrop-blur-md bg-background/95 border border-white/20 dark:border-white/10 rounded-2xl shadow-2xl p-6 lg:p-8 animate-in fade-in slide-in-from-top-2 duration-300 z-50"
          onMouseEnter={handleMenuMouseEnter}
          onMouseLeave={handleMenuMouseLeave}
        >
          {/* Glassmorphism overlay */}
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-coresync-primary-light/5 to-coresync-primary-dark/5"></div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {/* Service Categories */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-coresync-primary-light mb-4 flex items-center">
                <span className="w-2 h-2 bg-coresync-primary-light rounded-full mr-2"></span>
                Our Services
              </h3>
              {Object.keys(serviceCategories).map((category) => (
                <div
                  key={category}
                  className={`p-3 lg:p-4 rounded-xl cursor-pointer transition-all duration-300 border border-transparent hover:border-coresync-primary-light/30 min-h-[44px] flex items-center touch-manipulation ${
                    hoveredService === category
                      ? "bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10 text-coresync-primary-light shadow-lg scale-105"
                      : "hover:bg-muted/30 hover:backdrop-blur-sm"
                  }`}
                  onMouseEnter={() => setHoveredService(category)}
                >
                  <span className="font-semibold text-sm">{category}</span>
                </div>
              ))}
            </div>

            {/* Sub-services with Navigation */}
            <div className="space-y-2">
              <h3 className="font-bold text-lg text-coresync-primary-dark mb-4 flex items-center">
                <span className="w-2 h-2 bg-coresync-primary-dark rounded-full mr-2"></span>
                Technologies
              </h3>
              {hoveredService && (
                <div className="space-y-2 lg:space-y-3 animate-in fade-in slide-in-from-right-2 duration-200">
                  {serviceCategories[
                    hoveredService as keyof typeof serviceCategories
                  ].map((tech, index) => {
                    const route = serviceRoutes[hoveredService]?.[tech] || "#";

                    return (
                      <Link
                        key={tech}
                        to={route}
                        className="block p-2 lg:p-3 text-sm text-muted-foreground hover:text-foreground transition-all duration-200 hover:bg-white/10 rounded-lg border border-transparent hover:border-coresync-primary-dark/20 cursor-pointer min-h-[36px] flex items-center touch-manipulation"
                        style={{ animationDelay: `${index * 50}ms` }}
                      >
                        <span className="flex items-center">
                          <span className="w-1.5 h-1.5 bg-coresync-primary-dark/50 rounded-full mr-3 flex-shrink-0"></span>
                          {tech}
                        </span>
                      </Link>
                    );
                  })}
                </div>
              )}
              {!hoveredService && (
                <div className="text-sm text-muted-foreground italic p-4 bg-muted/20 rounded-xl border border-dashed border-muted-foreground/30">
                  <span className="flex items-center">
                    <span className="w-4 h-4 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark rounded-full mr-2 opacity-50 flex-shrink-0"></span>
                    Hover over a service to see technologies
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesMenu;
