
import React, { useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import ServicePageLayout from '@/components/ServicePageLayout';
import { ThemeProvider } from '@/components/ThemeProvider';

const AISoftware = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const illustration = (
    <svg viewBox="0 0 400 400" className="w-full h-full" fill="currentColor">
      <defs>
        <linearGradient id="ai-service-grad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="currentColor" opacity="0.8" />
          <stop offset="100%" stopColor="currentColor" opacity="0.4" />
        </linearGradient>
      </defs>
      <circle cx="200" cy="200" r="180" fill="url(#ai-service-grad)" opacity="0.1" />
      <circle cx="200" cy="200" r="120" fill="url(#ai-service-grad)" opacity="0.2" />
      <rect x="170" y="170" width="60" height="60" rx="8" fill="currentColor" opacity="0.6" />
      <circle cx="185" cy="185" r="6" fill="currentColor" />
      <circle cx="215" cy="185" r="6" fill="currentColor" />
      <path d="M175 210 Q200 230 225 210" stroke="currentColor" strokeWidth="3" fill="none" />
      <rect x="150" y="250" width="100" height="12" rx="6" fill="currentColor" opacity="0.8" />
      <rect x="160" y="270" width="80" height="8" rx="4" fill="currentColor" opacity="0.6" />
      <circle cx="120" cy="120" r="8" fill="currentColor" opacity="0.7" />
      <circle cx="280" cy="130" r="6" fill="currentColor" opacity="0.5" />
      <circle cx="310" cy="280" r="10" fill="currentColor" opacity="0.6" />
      <circle cx="90" cy="290" r="7" fill="currentColor" opacity="0.8" />
    </svg>
  );

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground">
        <Navbar />
        <ServicePageLayout
          title="AI-Based Business Software"
          description="Transform your business operations with intelligent automation solutions powered by artificial intelligence. Our AI software streamlines workflows, enhances decision-making, and drives unprecedented productivity growth."
          benefits={[
            "Automated workflow optimization",
            "Intelligent data analysis and insights",
            "Predictive analytics for better decision making", 
            "Cost reduction through process automation",
            "24/7 intelligent monitoring and alerts",
            "Scalable solutions that grow with your business"
          ]}
          techStack={[
            "Python", "TensorFlow", "PyTorch", "Machine Learning",
            "Natural Language Processing", "Computer Vision",
            "API Integration", "Cloud Computing", "Docker"
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

export default AISoftware;
