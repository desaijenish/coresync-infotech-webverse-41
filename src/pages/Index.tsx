
import React, { useState, useEffect, useRef } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import ClientsMarquee from '@/components/ClientsMarquee';
import InteractiveServicesOverview from '@/components/InteractiveServicesOverview';
import WhyChooseUs from '@/components/WhyChooseUs';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { ThemeProvider } from '@/components/ThemeProvider';

const Index = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const contactSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only auto-scroll on larger screens to avoid disrupting mobile experience
    const handleAutoScroll = () => {
      if (window.innerWidth >= 768) {
        const timer = setTimeout(() => {
          const contactSection = document.getElementById('contact');
          if (contactSection) {
            contactSection.scrollIntoView({ 
              behavior: 'smooth',
              block: 'start'
            });
          }
        }, 5000);

        return () => clearTimeout(timer);
      }
    };

    return handleAutoScroll();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300">
        <Navbar />
        <Hero onContactClick={() => setIsContactOpen(true)} />
        <ClientsMarquee />
        <InteractiveServicesOverview />
        <WhyChooseUs />
        <ContactSection />
        <Footer />
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
};

export default Index;
