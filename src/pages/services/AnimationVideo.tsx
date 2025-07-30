
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ServicePageLayout from '@/components/ServicePageLayout';
import { ThemeProvider } from '@/components/ThemeProvider';

const AnimationVideo = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const illustration = (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
      <defs>
        <linearGradient id="video-service-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" opacity="0.8" />
          <stop offset="100%" stopColor="currentColor" opacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#video-service-grad)" opacity="0.1" />
      <rect x="130" y="160" width="140" height="80" rx="12" fill="currentColor" opacity="0.4" />
      <polygon points="170,190 170,210 200,200" fill="currentColor" opacity="0.8" />
      <rect x="140" y="250" width="30" height="10" fill="currentColor" opacity="0.6" />
      <rect x="180" y="250" width="20" height="10" fill="currentColor" opacity="0.5" />
      <rect x="210" y="250" width="35" height="10" fill="currentColor" opacity="0.7" />
      <rect x="255" y="250" width="15" height="10" fill="currentColor" opacity="0.4" />
      <circle cx="100" cy="100" r="8" fill="currentColor" opacity="0.6" />
      <circle cx="300" cy="120" r="6" fill="currentColor" opacity="0.7" />
      <circle cx="320" cy="290" r="10" fill="currentColor" opacity="0.5" />
      <circle cx="80" cy="310" r="7" fill="currentColor" opacity="0.8" />
      <rect x="160" y="120" width="80" height="4" fill="currentColor" opacity="0.3" />
      <circle cx="200" cy="122" r="8" fill="currentColor" opacity="0.6" />
    </svg>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ServicePageLayout
          title="Animation & Video Editing"
          description="Create stunning animations, motion graphics, and video content that brings your brand vision to life. From promotional videos to complex 3D animations, we deliver visual storytelling that captivates audiences."
          benefits={[
            "Professional 2D and 3D animation",
            "Motion graphics and visual effects", 
            "Video editing and post-production",
            "Brand storytelling through visuals",
            "Multi-format content optimization",
            "Real-time rendering and previews"
          ]}
          techStack={[
            "After Effects", "Premiere Pro", "Blender", "Cinema 4D",
            "Lottie", "WebGL", "Three.js", "SVG Animation",
            "Motion Graphics", "Video Codecs", "FFmpeg"
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

export default AnimationVideo;
