
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ServicePageLayout from '@/components/ServicePageLayout';
import { ThemeProvider } from '@/components/ThemeProvider';

const MobileApps = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const illustration = (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
      <defs>
        <linearGradient id="mobile-service-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" opacity="0.8" />
          <stop offset="100%" stopColor="currentColor" opacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#mobile-service-grad)" opacity="0.1" />
      <rect x="160" y="100" width="80" height="200" rx="16" fill="currentColor" opacity="0.4" />
      <rect x="170" y="120" width="60" height="120" fill="currentColor" opacity="0.3" />
      <circle cx="200" cy="270" r="12" fill="currentColor" opacity="0.8" />
      <rect x="190" y="110" width="20" height="4" rx="2" fill="currentColor" opacity="0.7" />
      <rect x="180" y="130" width="40" height="6" fill="currentColor" opacity="0.4" />
      <rect x="180" y="150" width="30" height="6" fill="currentColor" opacity="0.4" />
      <rect x="180" y="170" width="35" height="6" fill="currentColor" opacity="0.4" />
      <rect x="180" y="190" width="25" height="6" fill="currentColor" opacity="0.4" />
      <circle cx="120" cy="120" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="280" cy="140" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="300" cy="280" r="10" fill="currentColor" opacity="0.5" />
      <circle cx="100" cy="300" r="7" fill="currentColor" opacity="0.8" />
    </svg>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ServicePageLayout
          title="Mobile App Development"
          description="Develop native and cross-platform mobile applications with seamless user experiences for iOS and Android. From concept to deployment, we create mobile solutions that engage users and drive business growth."
          benefits={[
            "Native iOS and Android development",
            "Cross-platform solutions with React Native & Flutter",
            "Intuitive user interface design",
            "Offline functionality and data sync",
            "Push notifications and real-time updates",
            "App store optimization and deployment"
          ]}
          techStack={[
            "React Native", "Flutter", "Swift", "Kotlin", "Dart",
            "Firebase", "Redux", "Expo", "Android Studio",
            "Xcode", "RESTful APIs", "GraphQL"
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

export default MobileApps;
