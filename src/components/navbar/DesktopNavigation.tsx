import React from "react";
import { Link } from "react-router-dom";
import { NavLink, ServiceCategories } from "./types";
import ServicesMenu from "./ServicesMenu"; // आपका ServicesMenu इम्पोर्ट करें

interface DesktopNavigationProps {
  navLinks: NavLink[];
  serviceCategories: ServiceCategories;
}

const DesktopNavigation = ({
  navLinks,
  serviceCategories,
}: DesktopNavigationProps) => {
  return (
    <div className="flex items-center space-x-8">
      {navLinks.map((link) => {
        if (link.name === "Services") {
          return (
            <ServicesMenu
              key={link.name}
              serviceCategories={serviceCategories}
            />
          );
        }

        return (
          <Link
            key={link.name}
            to={link.href}
            className="relative text-foreground hover:text-Coresyncro-primary-light transition-all duration-300 group py-2"
          >
            {link.name}
            <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark transition-all duration-300 group-hover:w-full"></span>
          </Link>
        );
      })}
    </div>
  );
};

export default DesktopNavigation;
