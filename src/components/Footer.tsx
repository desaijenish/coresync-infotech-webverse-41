import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Services: [
      { name: "AI Development", path: "/services/ai-ml-solutions" },
      { name: "Game Development", path: "/services/game-development" },
      { name: "Web Development", path: "/services/web-development" },
      { name: "Mobile Apps", path: "/services/mobile-apps" },
      { name: "Animation", path: "/services/animation-video" },
    ],
    Company: [
      { name: "About Us", path: "/about" },
      { name: "Our Team", path: "/team" },
      { name: "Careers", path: "/career" },
      { name: "Contact", path: "/contact" },
      { name: "Blog", path: "/blog" },
    ],
    Support: [
      { name: "Help Center", path: "/help" },
      { name: "Documentation", path: "/docs" },
      { name: "Community", path: "/community" },
      { name: "Status", path: "/status" },
      { name: "Privacy Policy", path: "/privacy-policy" },
    ],
  };

  const socialLinks = [
    { icon: "📧", label: "Email", url: "mailto:info@Coresyncro.com" },
    {
      icon: "📱",
      label: "LinkedIn",
      url: "https://linkedin.com/company/Coresyncro",
    },
    { icon: "🐦", label: "Twitter", url: "https://twitter.com/Coresyncro" },
  ];

  return (
    <footer className="bg-card border-t border-border py-12 mt-16">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Info */}
          <div className="space-y-5">
            <Link to="/" className="flex items-center space-x-2 group">
                  <img
                    src={"/assets/logo/icon.png"}
                    alt="Coresyncro Icon"
                    className="w-10 h-10 object-contain group-hover:scale-110 transition-transform duration-300"
                  />
                  <img
                    src={"/assets/logo/LogoText2.png"}
                    alt="Coresyncro Infotech"
                    className="h-8 object-contain group-hover:brightness-110 transition-all duration-300"
                  />
                </Link>
            {/* <div className="flex items-center space-x-3">
              <div className="w-12 h-12 bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark rounded-lg flex items-center justify-center shadow-md">
                <span className="text-white font-bold text-xl">C</span>
              </div>
              <span className="text-xl font-bold text-foreground">
                Coresyncro Infotech
              </span>
            </div> */}
            <p className="text-muted-foreground leading-relaxed">
              Transforming businesses through innovative technology solutions.
              Your trusted partner in digital transformation.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, i) => (
                <a
                  key={i}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-Coresyncro-primary-light transition-colors duration-300 text-lg"
                  aria-label={social.label}
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Footer Navigation */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="font-semibold text-foreground mb-4">{category}</h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <Link
                      to={link.path}
                      className="text-muted-foreground hover:text-Coresyncro-primary-light transition-colors duration-300"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border mt-10 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {currentYear} Coresyncro Infotech. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <Link
              to="/terms"
              className="text-muted-foreground hover:text-Coresyncro-primary-light text-sm transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              to="/privacy-policy"
              className="text-muted-foreground hover:text-Coresyncro-primary-light text-sm transition-colors duration-300"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
