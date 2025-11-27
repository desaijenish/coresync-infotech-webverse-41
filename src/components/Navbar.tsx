import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import ThemeToggle from "./ThemeToggle";
import NavbarLogo from "./navbar/NavbarLogo";
import DesktopNavigation from "./navbar/DesktopNavigation";
import ServicesMenu from "./navbar/ServicesMenu";
import MobileNavigation from "./navbar/MobileNavigation";
import { NavLink, ServiceCategories } from "./navbar/types";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on resize to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navLinks: NavLink[] = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" }, // यहाँ Services को जोड़ा
    { name: "About Us", href: "/about" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Career", href: "/career" },
  ];

  const serviceCategories: ServiceCategories = {
    "Mobile App Development": [
      "Android",
      "iOS",
      "Flutter",
      "React Native",
      "Ionic",
    ],
    "Web Development": [
      "React.js",
      "Next.js",
      "Vite",
      "Tailwind",
      "JavaScript",
      "TypeScript",
    ],
    "Computer Software": [
      "AI/ML Solutions",
      "ERP Systems",
      "CRM Software",
      "Business Analytics",
    ],
    "Animation & Video Editing": [
      "2D Animation",
      "3D Animation",
      "Motion Graphics",
      "Video Production",
    ],
    "Game Development": [
      "Unity",
      "Unreal Engine",
      "Mobile Games",
      "PC Games",
      "2D/3D Games",
    ],
  };

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-md shadow-lg border-b border-border"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 py-3 sm:py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <NavbarLogo />

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 lg:space-x-8">
            <DesktopNavigation
              navLinks={navLinks}
              serviceCategories={serviceCategories}
            />
            {/* <ServicesMenu serviceCategories={serviceCategories} /> */}
            {/* <ThemeToggle /> */}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-3">
            {/* <ThemeToggle /> */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground hover:text-Coresyncro-primary-light transition-all duration-300 hover:scale-110 p-2 min-h-[44px] min-w-[44px] flex items-center justify-center touch-manipulation"
              aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <MobileNavigation
          navLinks={navLinks}
          serviceCategories={serviceCategories}
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        />
      </div>
    </nav>
  );
};

export default Navbar;
