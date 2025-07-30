
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ContactModal from '@/components/ContactModal';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, Smartphone, Zap, Shield, Users } from 'lucide-react';

const AndroidDevelopment = () => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  const features = [
    "Native Android app development",
    "Material Design implementation",
    "Google Play Store optimization",
    "Performance optimization",
    "Cross-device compatibility",
    "Real-time data synchronization"
  ];

  const benefits = [
    { icon: Smartphone, title: "Native Performance", description: "Optimized for Android devices" },
    { icon: Zap, title: "Fast Development", description: "Quick turnaround times" },
    { icon: Shield, title: "Secure & Reliable", description: "Enterprise-grade security" },
    { icon: Users, title: "User-Centric", description: "Intuitive user experiences" }
  ];

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Binary Background Pattern */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-full font-mono text-xs">
            <div className="absolute top-10 left-10">01000001 01101110 01100100 01110010 01101111 01101001 01100100</div>
            <div className="absolute top-20 right-20">01001010 01100001 01110110 01100001</div>
            <div className="absolute bottom-20 left-1/4">01001011 01101111 01110100 01101100 01101001 01101110</div>
            <div className="absolute bottom-10 right-1/4">01000110 01101100 01110101 01110100 01110100 01100101 01110010</div>
          </div>
        </div>

        <Navbar />
        
        <div className="pt-20">
          <div className="container mx-auto px-4 py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left Column - Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h1 className="text-4xl md:text-5xl font-bold">
                  Android{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Development
                  </span>
                </h1>
                
                <p className="text-lg text-muted-foreground leading-relaxed">
                  Build powerful, scalable Android applications that deliver exceptional user experiences. 
                  Our expert team specializes in native Android development using modern frameworks and 
                  following Google's Material Design principles.
                </p>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-coresync-primary-light">
                    What You Get:
                  </h3>
                  <div className="grid gap-3">
                    {features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="flex items-center space-x-3"
                      >
                        <CheckCircle className="w-5 h-5 text-coresync-primary-light flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                <motion.button
                  onClick={() => setIsContactOpen(true)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Hire Android Specialist
                </motion.button>
              </motion.div>

              {/* Right Column - Illustration */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center"
              >
                <div className="relative">
                  <svg viewBox="0 0 400 500" className="w-full max-w-md h-auto" fill="currentColor">
                    <defs>
                      <linearGradient id="android-grad" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#EC6E00" opacity="0.8" />
                        <stop offset="100%" stopColor="#4592FF" opacity="0.6" />
                      </linearGradient>
                    </defs>
                    
                    {/* Phone outline */}
                    <rect x="80" y="50" width="240" height="400" rx="30" fill="url(#android-grad)" opacity="0.1" />
                    <rect x="90" y="60" width="220" height="380" rx="25" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3" />
                    
                    {/* Screen */}
                    <rect x="100" y="90" width="200" height="320" rx="15" fill="currentColor" opacity="0.1" />
                    
                    {/* Android robot head */}
                    <rect x="170" y="150" width="60" height="40" rx="30" fill="currentColor" opacity="0.4" />
                    <circle cx="185" cy="165" r="3" fill="currentColor" opacity="0.8" />
                    <circle cx="215" cy="165" r="3" fill="currentColor" opacity="0.8" />
                    
                    {/* Robot body */}
                    <rect x="175" y="190" width="50" height="60" rx="10" fill="currentColor" opacity="0.3" />
                    
                    {/* Arms */}
                    <rect x="155" y="200" width="15" height="35" rx="7" fill="currentColor" opacity="0.3" />
                    <rect x="230" y="200" width="15" height="35" rx="7" fill="currentColor" opacity="0.3" />
                    
                    {/* Legs */}
                    <rect x="185" y="250" width="12" height="30" rx="6" fill="currentColor" opacity="0.3" />
                    <rect x="203" y="250" width="12" height="30" rx="6" fill="currentColor" opacity="0.3" />
                    
                    {/* Code elements */}
                    <text x="120" y="320" fontSize="8" fill="currentColor" opacity="0.4">class MainActivity</text>
                    <text x="120" y="335" fontSize="8" fill="currentColor" opacity="0.4">extends Activity</text>
                    
                    {/* Floating elements */}
                    <circle cx="350" cy="120" r="8" fill="currentColor" opacity="0.2" />
                    <circle cx="50" cy="200" r="6" fill="currentColor" opacity="0.3" />
                    <circle cx="330" cy="350" r="10" fill="currentColor" opacity="0.2" />
                  </svg>
                </div>
              </motion.div>
            </div>

            {/* Benefits Section */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="mt-20"
            >
              <h2 className="text-3xl font-bold text-center mb-12">
                Why Choose Our Android Development?
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                    className="group"
                  >
                    <Card className="h-full text-center p-6 hover:border-coresync-primary-light/30 transition-all duration-300">
                      <CardContent className="space-y-4">
                        <div className="w-12 h-12 mx-auto bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark rounded-full p-3 group-hover:scale-110 transition-transform duration-300">
                          <benefit.icon className="w-full h-full text-white" />
                        </div>
                        <h3 className="font-semibold text-lg">{benefit.title}</h3>
                        <p className="text-muted-foreground text-sm">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        <Footer />
        
        <ContactModal 
          isOpen={isContactOpen} 
          onClose={() => setIsContactOpen(false)} 
        />
      </div>
    </ThemeProvider>
  );
};

export default AndroidDevelopment;
