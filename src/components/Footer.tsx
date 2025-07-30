
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    "Services": [
      "AI Development",
      "Game Development", 
      "Web Development",
      "Mobile Apps",
      "Animation"
    ],
    "Company": [
      "About Us",
      "Our Team",
      "Careers",
      "Contact",
      "Blog"
    ],
    "Support": [
      "Help Center",
      "Documentation",
      "Community",
      "Status",
      "Privacy Policy"
    ]
  };

  return (
    <footer className="bg-card border-t-2 border-border py-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-lg">C</span>
              </div>
              <span className="text-xl font-bold">Coresync Infotech</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses through innovative technology solutions. 
              Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-coresync-primary-light transition-colors duration-300">
                📧 Email
              </a>
              <a href="#" className="text-muted-foreground hover:text-coresync-primary-light transition-colors duration-300">
                📱 LinkedIn
              </a>
              <a href="#" className="text-muted-foreground hover:text-coresync-primary-light transition-colors duration-300">
                🐦 Twitter
              </a>
            </div>
          </div>

          {/* Footer Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-muted-foreground hover:text-coresync-primary-light transition-colors duration-300"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Coresync Infotech. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-muted-foreground hover:text-coresync-primary-light text-sm transition-colors duration-300">
              Terms of Service
            </a>
            <a href="#" className="text-muted-foreground hover:text-coresync-primary-light text-sm transition-colors duration-300">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
