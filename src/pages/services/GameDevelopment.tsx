
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ServicePageLayout from '@/components/ServicePageLayout';
import { ThemeProvider } from '@/components/ThemeProvider';

const GameDevelopment = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const illustration = (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
      <defs>
        <linearGradient id="game-service-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" opacity="0.8" />
          <stop offset="100%" stopColor="currentColor" opacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#game-service-grad)" opacity="0.1" />
      <rect x="140" y="160" width="120" height="80" rx="30" fill="currentColor" opacity="0.4" />
      <circle cx="170" cy="200" r="15" fill="currentColor" opacity="0.8" />
      <circle cx="230" cy="200" r="15" fill="currentColor" opacity="0.8" />
      <rect x="190" y="180" width="20" height="8" fill="currentColor" />
      <rect x="186" y="176" width="8" height="16" fill="currentColor" />
      <rect x="206" y="176" width="8" height="16" fill="currentColor" />
      <rect x="210" y="180" width="20" height="8" fill="currentColor" />
      <circle cx="100" cy="100" r="12" fill="currentColor" opacity="0.6" />
      <circle cx="300" cy="120" r="8" fill="currentColor" opacity="0.7" />
      <circle cx="320" cy="300" r="10" fill="currentColor" opacity="0.5" />
      <circle cx="80" cy="280" r="6" fill="currentColor" opacity="0.8" />
    </svg>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ServicePageLayout
          title="Game Development"
          description="Create immersive and engaging gaming experiences across all platforms. From mobile games to PC and console titles, we bring your creative vision to life with cutting-edge game development technologies."
          benefits={[
            "Cross-platform game development",
            "Immersive 2D and 3D game experiences",
            "Custom game engines and frameworks",
            "Multiplayer and online functionality",
            "Mobile-first gaming solutions",
            "Performance optimization for all devices"
          ]}
          techStack={[
            "Unity", "Unreal Engine", "C#", "C++", "JavaScript",
            "React Native", "Flutter", "WebGL", "OpenGL",
            "Multiplayer Networking", "Game Analytics"
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

export default GameDevelopment;
