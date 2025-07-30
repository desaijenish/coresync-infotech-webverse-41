
import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';

const ServicesOverview = () => {
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services = [
    {
      title: "AI Software",
      tagline: "Intelligent automation solutions",
      icon: "🤖",
      gradient: "from-blue-500 to-purple-600"
    },
    {
      title: "Game Dev",
      tagline: "Immersive gaming experiences",
      icon: "🎮",
      gradient: "from-green-500 to-teal-600"
    },
    {
      title: "Web Dev",
      tagline: "Modern responsive websites",
      icon: "🌐",
      gradient: "from-orange-500 to-red-600"
    },
    {
      title: "Mobile Apps",
      tagline: "Cross-platform applications",
      icon: "📱",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      title: "Animation & Video",
      tagline: "Motion graphics & editing",
      icon: "🎬",
      gradient: "from-yellow-500 to-orange-600"
    }
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-muted/30 to-background relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-4 sm:right-10 w-12 h-12 sm:w-20 sm:h-20 bg-coresync-primary-light/10 rounded-full animate-float"></div>
        <div className="absolute bottom-10 left-4 sm:left-10 w-10 h-10 sm:w-16 sm:h-16 bg-coresync-primary-dark/10 rounded-full animate-float-delayed"></div>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6">
            Our Core{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
              Services
            </span>
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed px-4">
            Comprehensive digital solutions tailored to transform your business
          </p>
        </div>

        {/* Mobile: Single column, Tablet: 2 columns, Desktop: Horizontal layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap lg:justify-center gap-4 sm:gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`group relative cursor-pointer transition-all duration-500 transform-gpu ${
                hoveredService === index 
                  ? 'scale-105 sm:scale-110 -translate-y-2 sm:-translate-y-4 shadow-2xl z-10' 
                  : hoveredService !== null 
                    ? 'scale-95 opacity-70' 
                    : 'hover:scale-105 hover:-translate-y-2'
              }`}
              onMouseEnter={() => setHoveredService(index)}
              onMouseLeave={() => setHoveredService(null)}
              onTouchStart={() => setHoveredService(index)}
              style={{ 
                transformStyle: 'preserve-3d',
                perspective: '1000px'
              }}
            >
              <CardContent className="p-4 sm:p-6 text-center space-y-3 sm:space-y-4 min-w-[160px] sm:min-w-[200px] lg:min-w-[200px] h-[140px] sm:h-[160px] flex flex-col justify-center relative overflow-hidden">
                {/* Animated background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}></div>
                
                {/* Service icon */}
                <div className="text-3xl sm:text-4xl lg:text-5xl mb-1 sm:mb-2 group-hover:scale-110 sm:group-hover:scale-125 transition-transform duration-300 relative z-10">
                  {service.icon}
                </div>
                
                {/* Service title */}
                <h3 className="font-bold text-base sm:text-lg group-hover:text-coresync-primary-light transition-colors duration-300 relative z-10">
                  {service.title}
                </h3>
                
                {/* Tagline - appears on hover/touch */}
                <p className={`text-xs sm:text-sm text-muted-foreground transition-all duration-300 relative z-10 ${
                  hoveredService === index 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-2'
                }`}>
                  {service.tagline}
                </p>

                {/* Glow effect */}
                <div className={`absolute inset-0 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg blur-xl transition-opacity duration-300 ${
                  hoveredService === index ? 'opacity-100' : 'opacity-0'
                }`}></div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-8 sm:mt-12">
          <p className="text-muted-foreground mb-4 px-4">Ready to start your project?</p>
          <button className="px-6 sm:px-8 py-3 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-lg hover:scale-105 transition-transform duration-300 font-semibold shadow-lg hover:shadow-xl min-h-[44px] touch-manipulation">
            Get Started Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default ServicesOverview;
