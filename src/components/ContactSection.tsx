
import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-coresync-primary-light/5 to-coresync-primary-dark/5 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-10 sm:top-20 left-4 sm:left-10 w-12 h-12 sm:w-20 sm:h-20 bg-coresync-primary-light/10 rounded-full animate-pulse"></div>
      <div className="absolute bottom-10 sm:bottom-20 right-4 sm:right-10 w-16 h-16 sm:w-32 sm:h-32 bg-coresync-primary-dark/10 rounded-full animate-pulse"></div>
      <div className="absolute top-1/2 left-1/4 w-8 h-8 sm:w-16 sm:h-16 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark opacity-10 rotate-45"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Creative Content */}
          <div className={`space-y-6 transition-all duration-1000 text-center lg:text-left ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
          }`}>
            <div className="space-y-4">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight">
                Let's Build the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  Future Together
                </span>
              </h2>
              <p className="text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                Ready to transform your ideas into reality? Our team of experts is here to help you create innovative solutions that drive your business forward.
              </p>
              <div className="space-y-3 mt-6 sm:mt-8">
                <div className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-coresync-primary-light rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">Free consultation and project estimation</span>
                </div>
                <div className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-coresync-primary-dark rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">24/7 support and maintenance</span>
                </div>
                <div className="flex items-center space-x-3 justify-center lg:justify-start">
                  <div className="w-2 h-2 bg-coresync-primary-light rounded-full flex-shrink-0"></div>
                  <span className="text-sm sm:text-base text-muted-foreground">Cutting-edge technology solutions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className={`w-full transition-all duration-1000 delay-300 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
          }`}>
            <div className="relative">
              {/* Split colored background */}
              <div className="absolute inset-0 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark rounded-2xl transform rotate-1"></div>
              <div className="relative bg-card/95 backdrop-blur-sm border border-border rounded-2xl p-6 sm:p-8 shadow-xl">
                <h3 className="text-xl sm:text-2xl font-bold mb-6 text-center">Start Your Project</h3>
                
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Full Name
                    </label>
                    <Input 
                      id="name" 
                      name="name"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="border-2 focus:border-coresync-primary-light transition-all duration-300 min-h-[44px] text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium">
                      Email Address
                    </label>
                    <Input 
                      id="email" 
                      name="email"
                      type="email" 
                      placeholder="Enter your email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="border-2 focus:border-coresync-primary-light transition-all duration-300 min-h-[44px] text-base"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium">
                      Project Details
                    </label>
                    <Textarea 
                      id="message" 
                      name="message"
                      placeholder="Tell us about your project requirements..."
                      value={formData.message}
                      onChange={handleInputChange}
                      className="border-2 focus:border-coresync-primary-light min-h-[100px] sm:min-h-[120px] transition-all duration-300 text-base resize-none"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    className="w-full bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:scale-105 transform transition-all duration-300 text-white font-semibold py-3 rounded-lg shadow-lg hover:shadow-xl min-h-[44px] touch-manipulation"
                  >
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
