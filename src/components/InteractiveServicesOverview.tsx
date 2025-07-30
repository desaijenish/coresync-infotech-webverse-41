
import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';

const InteractiveServicesOverview = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);
  const navigate = useNavigate();
  const containerRef = useRef<HTMLDivElement>(null);

  const services = [
    {
      id: 'ai-software',
      title: "AI Software",
      tagline: "Intelligent automation solutions",
      description: "Transform your business with AI-powered workflows",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600",
      route: "/services/ai-software"
    },
    {
      id: 'game-development',
      title: "Game Dev",
      tagline: "Immersive gaming experiences", 
      description: "Create captivating games across all platforms",
      icon: "🎮",
      gradient: "from-green-500 to-teal-600",
      route: "/services/game-development"
    },
    {
      id: 'web-development',
      title: "Web Dev",
      tagline: "Modern responsive websites",
      description: "Build stunning web applications with latest tech",
      icon: "🌐",
      gradient: "from-orange-500 to-red-600",
      route: "/services/web-development"
    },
    {
      id: 'mobile-apps',
      title: "Mobile Apps",
      tagline: "Cross-platform applications",
      description: "Native and hybrid mobile solutions",
      icon: "📱",
      gradient: "from-pink-500 to-rose-600",
      route: "/services/mobile-apps"
    },
    {
      id: 'animation-video',
      title: "Animation & Video",
      tagline: "Motion graphics & editing",
      description: "Bring your brand vision to life with stunning visuals",
      icon: "🎬",
      gradient: "from-yellow-500 to-orange-600",
      route: "/services/animation-video"
    }
  ];

  const handleServiceClick = (route: string) => {
    navigate(route);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      scale: 0.8,
      y: 50
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 bg-coresync-primary-light/10 rounded-full animate-pulse"></div>
        <div className="absolute bottom-10 left-4 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-coresync-primary-dark/10 rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6"
          >
            Our Core{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
              Services
            </span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4"
          >
            Comprehensive digital solutions tailored to transform your business
          </motion.p>
        </div>

        {/* 3D Interactive Service Cards */}
        <motion.div 
          ref={containerRef}
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6 max-w-7xl mx-auto"
        >
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              whileTap={{ scale: 0.95 }}
              className="group perspective-1000"
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onClick={() => handleServiceClick(service.route)}
            >
              <Card className="relative cursor-pointer transition-all duration-500 transform-gpu h-[200px] sm:h-[220px] bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-coresync-primary-light/30 overflow-hidden">
                {/* Gradient Background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Hexagonal Shape Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-24 h-24 sm:w-28 sm:h-28 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-full opacity-50 group-hover:opacity-80 transition-all duration-500 group-hover:scale-110"></div>
                </div>

                <CardContent className="relative z-10 p-4 sm:p-6 text-center space-y-3 sm:space-y-4 h-full flex flex-col justify-center">
                  {/* Service Icon */}
                  <motion.div 
                    className="text-4xl sm:text-5xl lg:text-6xl mb-2 relative z-20"
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 5,
                      transition: { duration: 0.3 }
                    }}
                  >
                    {service.icon}
                  </motion.div>
                  
                  {/* Service Title */}
                  <h3 className="font-bold text-base sm:text-lg group-hover:text-coresync-primary-light transition-colors duration-300 relative z-20">
                    {service.title}
                  </h3>
                  
                  {/* Tagline & Description */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ 
                      opacity: hoveredService === index ? 1 : 0,
                      height: hoveredService === index ? 'auto' : 0
                    }}
                    transition={{ duration: 0.3 }}
                    className="relative z-20 overflow-hidden"
                  >
                    <p className="text-xs sm:text-sm text-muted-foreground font-medium mb-1">
                      {service.tagline}
                    </p>
                    <p className="text-xs text-muted-foreground/80">
                      {service.description}
                    </p>
                  </motion.div>

                  {/* Click indicator */}
                  <motion.div
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ 
                      opacity: hoveredService === index ? 1 : 0,
                      scale: hoveredService === index ? 1 : 0
                    }}
                    transition={{ duration: 0.2 }}
                    className="absolute bottom-2 right-2 w-6 h-6 bg-coresync-primary-light rounded-full flex items-center justify-center text-white text-xs font-bold"
                  >
                    →
                  </motion.div>
                </CardContent>

                {/* 3D Glow Effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg blur-xl transition-opacity duration-300 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                } -z-10`}></div>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-8 sm:mt-12"
        >
          <p className="text-muted-foreground mb-4 px-4">Ready to start your project?</p>
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 sm:px-8 py-3 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-lg font-semibold shadow-lg hover:shadow-xl min-h-[44px] touch-manipulation transition-all duration-300"
          >
            Get Started Today
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default InteractiveServicesOverview;
