
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ServicePageLayout from '@/components/ServicePageLayout';
import { ThemeProvider } from '@/components/ThemeProvider';

const WebDevelopment = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const illustration = (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
      <defs>
        <linearGradient id="web-service-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" opacity="0.8" />
          <stop offset="100%" stopColor="currentColor" opacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#web-service-grad)" opacity="0.1" />
      <rect x="130" y="140" width="140" height="120" rx="12" fill="currentColor" opacity="0.3" />
      <rect x="140" y="150" width="120" height="20" fill="currentColor" opacity="0.6" />
      <circle cx="155" cy="160" r="4" fill="currentColor" />
      <circle cx="170" cy="160" r="4" fill="currentColor" />
      <circle cx="185" cy="160" r="4" fill="currentColor" />
      <rect x="150" y="180" width="80" height="8" fill="currentColor" opacity="0.5" />
      <rect x="150" y="200" width="60" height="8" fill="currentColor" opacity="0.4" />
      <rect x="150" y="220" width="100" height="8" fill="currentColor" opacity="0.3" />
      <rect x="150" y="240" width="70" height="8" fill="currentColor" opacity="0.4" />
      <circle cx="320" cy="120" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="80" cy="280" r="6" fill="currentColor" opacity="0.7" />
    </svg>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ServicePageLayout
          title="Web Development"
          description="Build modern, responsive, and high-performing web applications using the latest technologies and best practices. From simple websites to complex web platforms, we deliver exceptional digital experiences."
          benefits={[
            "Responsive design for all devices",
            "Lightning-fast performance optimization",
            "SEO-friendly architecture",
            "Modern UI/UX design principles",
            "Scalable and maintainable codebase",
            "Cross-browser compatibility"
          ]}
          techStack={[
            "React.js", "Next.js", "Vite", "TypeScript", "JavaScript",
            "Tailwind CSS", "Node.js", "Express", "MongoDB",
            "PostgreSQL", "AWS", "Docker"
          ]}
          illustration={illustration}
          onContactClick={() => setIsContactOpen(true)}
        />
        <Footer />
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
};

export default WebDevelopment;
