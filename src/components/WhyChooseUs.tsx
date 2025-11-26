
import React, { useEffect, useRef, useState } from 'react';
import { ShieldCheck, Handshake, Brain, WandSparkles, Eye, Wrench } from 'lucide-react';

const WhyChooseUs = () => {
  const [isVisible, setIsVisible] = useState(false);
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

  const values = [
    {
      icon: Brain,
      title: "Powerful Mindset",
      description: "Forward-thinking innovation that delivers real impact."
    },
    {
      icon: WandSparkles,
      title: "Creativity",
      description: "Bold concepts brought to life with flawless execution."
    },
    {
      icon: Wrench,
      title: "Problem-Solving",
      description: "Transforming obstacles into growth opportunities."
    },
    {
      icon: Handshake,
      title: "Ethical Work",
      description: "Integrity guiding every decision and project."
    },
    {
      icon: ShieldCheck,
      title: "Trustworthiness",
      description: "Committed to honesty and delivering on our promises."
    },
    {
      icon: Eye,
      title: "Transparency",
      description: "Open communication and clear processes at every step."
    }
  ];

  return (
    <section ref={sectionRef} className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-Coresyncro-primary-light/5 via-transparent to-Coresyncro-primary-dark/5"></div>
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Why Choose{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
              Coresyncro Infotech
            </span>
          </h2>
          <p className={`text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto transition-all duration-1000 delay-200 leading-relaxed px-4 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}>
            Where expertise meets innovation — delivering solutions that drive growth, inspire trust, and set your business apart.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-6xl mx-auto">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div
                key={index}
                className={`group relative transition-all duration-700 transform-gpu ${
                  isVisible 
                    ? 'opacity-100 translate-y-0' 
                    : 'opacity-0 translate-y-12'
                }`}
                style={{ 
                  transitionDelay: isVisible ? `${index * 150}ms` : '0ms' 
                }}
              >
                {/* Glassmorphism card */}
                <div className="relative h-full p-6 sm:p-8 rounded-2xl backdrop-blur-md bg-background/30 border border-white/20 dark:border-white/10 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group-hover:scale-105 touch-manipulation">
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-Coresyncro-primary-light/10 to-Coresyncro-primary-dark/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  {/* Floating icon circle */}
                  <div className="relative z-10 flex flex-col items-center text-center space-y-3 sm:space-y-4">
                    <div className="relative">
                      <div className="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark rounded-full flex items-center justify-center shadow-lg transform transition-all duration-300 group-hover:scale-110 group-hover:-translate-y-1">
                        <Icon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
                      </div>
                      {/* Floating effect shadow */}
                      <div className="absolute inset-0 w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark rounded-full blur-lg opacity-30 transform transition-all duration-300 group-hover:opacity-50 group-hover:scale-125"></div>
                    </div>
                    
                    {/* Title with reveal animation */}
                    <h3 className="text-lg sm:text-xl font-bold text-foreground transform transition-all duration-500 group-hover:text-Coresyncro-primary-light">
                      {value.title}
                    </h3>
                    
                    {/* Description with fade-in delay */}
                    <p className="text-sm sm:text-base text-muted-foreground leading-relaxed transform transition-all duration-500 delay-100 group-hover:text-foreground/80">
                      {value.description}
                    </p>
                  </div>
                  
                  {/* Hover glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"></div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
