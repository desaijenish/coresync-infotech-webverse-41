
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ChevronRight } from 'lucide-react';
import { NavLink, ServiceCategories } from './types';

interface MobileNavigationProps {
  navLinks: NavLink[];
  serviceCategories: ServiceCategories;
  isOpen: boolean;
  onClose: () => void;
}

const MobileNavigation = ({ navLinks, serviceCategories, isOpen, onClose }: MobileNavigationProps) => {
  const [expandedService, setExpandedService] = useState<string | null>(null);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  if (!isOpen) return null;

  const toggleServiceCategory = (category: string) => {
    setExpandedService(expandedService === category ? null : category);
  };

  return (
    <div className="md:hidden mt-4 py-4 border-t border-border backdrop-blur-md bg-background/95 rounded-xl shadow-lg">
      <div className="flex flex-col space-y-2">
        {navLinks.map((link) => (
          <Link
            key={link.name}
            to={link.href}
            onClick={onClose}
            className="text-foreground hover:text-coresync-primary-light transition-all duration-300 py-3 px-4 rounded-lg hover:bg-muted/30 font-medium min-h-[44px] flex items-center touch-manipulation"
          >
            {link.name}
          </Link>
        ))}
        
        {/* Mobile Services Accordion */}
        <div className="space-y-2">
          <button
            onClick={() => setIsServicesOpen(!isServicesOpen)}
            className="w-full flex items-center justify-between font-semibold text-foreground py-3 px-4 bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10 rounded-lg hover:from-coresync-primary-light/20 hover:to-coresync-primary-dark/20 transition-all duration-300 min-h-[44px] touch-manipulation"
          >
            <span>Services</span>
            <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isServicesOpen ? 'rotate-180' : ''}`} />
          </button>
          
          {isServicesOpen && (
            <div className="space-y-2 animate-fade-in">
              {Object.entries(serviceCategories).map(([category, techs]) => (
                <div key={category} className="ml-2 space-y-1">
                  <button
                    onClick={() => toggleServiceCategory(category)}
                    className="w-full flex items-center justify-between font-medium text-sm text-coresync-primary-light py-2 px-3 bg-muted/20 rounded-lg hover:bg-muted/40 transition-all duration-300 min-h-[40px] touch-manipulation"
                  >
                    <span className="text-left">{category}</span>
                    <ChevronRight className={`w-4 h-4 transition-transform duration-300 ${expandedService === category ? 'rotate-90' : ''}`} />
                  </button>
                  
                  {expandedService === category && (
                    <div className="ml-4 space-y-1 animate-fade-in">
                      {techs.map((tech) => (
                        <div 
                          key={tech} 
                          className="text-xs text-muted-foreground py-2 px-3 hover:text-foreground transition-colors hover:bg-muted/20 rounded-md min-h-[36px] flex items-center touch-manipulation"
                        >
                          <span className="w-1.5 h-1.5 bg-coresync-primary-dark/50 rounded-full mr-3 flex-shrink-0"></span>
                          {tech}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MobileNavigation;
