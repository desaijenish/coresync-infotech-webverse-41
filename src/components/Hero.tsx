import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface HeroProps {
  onContactClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onContactClick }) => {
  const services = [
    {
      title: "AI-Based Business Software",
      description:
        "Streamline your workflows with smart, AI-driven tools that revolutionize operations, reduce manual effort, and accelerate productivity.",
      illustration: (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="ai-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC6E00" />
              <stop offset="100%" stopColor="#4592FF" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#ai-grad)"
            opacity="0.1"
          />
          <rect
            x="150"
            y="150"
            width="100"
            height="100"
            rx="10"
            fill="url(#ai-grad)"
            opacity="0.3"
          />
          <circle cx="175" cy="175" r="8" fill="url(#ai-grad)" />
          <circle cx="225" cy="175" r="8" fill="url(#ai-grad)" />
          <path
            d="M160 210 Q200 240 240 210"
            stroke="url(#ai-grad)"
            strokeWidth="4"
            fill="none"
          />
          <rect
            x="120"
            y="260"
            width="160"
            height="20"
            rx="10"
            fill="url(#ai-grad)"
            opacity="0.6"
          />
          <rect
            x="140"
            y="290"
            width="120"
            height="15"
            rx="8"
            fill="url(#ai-grad)"
            opacity="0.4"
          />
        </svg>
      ),
    },
    {
      title: "Game Development",
      description:
        "Build captivating games for every platform using next-gen engines and powerful frameworks that bring your ideas to life.",
      illustration: (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="game-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC6E00" />
              <stop offset="100%" stopColor="#4592FF" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#game-grad)"
            opacity="0.1"
          />
          <rect
            x="120"
            y="160"
            width="160"
            height="80"
            rx="40"
            fill="url(#game-grad)"
            opacity="0.3"
          />
          <circle cx="160" cy="200" r="12" fill="url(#game-grad)" />
          <circle cx="240" cy="200" r="12" fill="url(#game-grad)" />
          <rect x="190" y="180" width="20" height="8" fill="url(#game-grad)" />
          <rect x="186" y="176" width="8" height="16" fill="url(#game-grad)" />
          <rect x="206" y="176" width="8" height="16" fill="url(#game-grad)" />
          <rect x="210" y="180" width="20" height="8" fill="url(#game-grad)" />
        </svg>
      ),
    },
    {
      title: "Web Development",
      description:
        "Craft responsive, high-performance websites and web apps using the latest technologies and industry best practices.",
      illustration: (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="web-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC6E00" />
              <stop offset="100%" stopColor="#4592FF" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#web-grad)"
            opacity="0.1"
          />
          <rect
            x="120"
            y="140"
            width="160"
            height="120"
            rx="8"
            fill="url(#web-grad)"
            opacity="0.3"
          />
          <rect
            x="130"
            y="150"
            width="140"
            height="20"
            fill="url(#web-grad)"
            opacity="0.6"
          />
          <circle cx="145" cy="160" r="4" fill="url(#web-grad)" />
          <circle cx="160" cy="160" r="4" fill="url(#web-grad)" />
          <circle cx="175" cy="160" r="4" fill="url(#web-grad)" />
          <rect
            x="140"
            y="180"
            width="60"
            height="8"
            fill="url(#web-grad)"
            opacity="0.5"
          />
          <rect
            x="140"
            y="200"
            width="40"
            height="8"
            fill="url(#web-grad)"
            opacity="0.4"
          />
          <rect
            x="140"
            y="220"
            width="80"
            height="8"
            fill="url(#web-grad)"
            opacity="0.3"
          />
        </svg>
      ),
    },
    {
      title: "Mobile App Development",
      description:
        "Develop sleek native and cross-platform mobile apps for iOS and Android, delivering seamless, intuitive user experiences.",
      illustration: (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="currentColor"
        >
          <defs>
            <linearGradient
              id="mobile-grad"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#EC6E00" />
              <stop offset="100%" stopColor="#4592FF" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#mobile-grad)"
            opacity="0.1"
          />
          <rect
            x="160"
            y="120"
            width="80"
            height="160"
            rx="12"
            fill="url(#mobile-grad)"
            opacity="0.3"
          />
          <rect
            x="170"
            y="140"
            width="60"
            height="80"
            fill="url(#mobile-grad)"
            opacity="0.5"
          />
          <circle cx="200" cy="250" r="8" fill="url(#mobile-grad)" />
          <rect
            x="190"
            y="130"
            width="20"
            height="4"
            rx="2"
            fill="url(#mobile-grad)"
            opacity="0.7"
          />
          <rect
            x="180"
            y="150"
            width="40"
            height="6"
            fill="url(#mobile-grad)"
            opacity="0.4"
          />
          <rect
            x="180"
            y="170"
            width="30"
            height="6"
            fill="url(#mobile-grad)"
            opacity="0.4"
          />
          <rect
            x="180"
            y="190"
            width="35"
            height="6"
            fill="url(#mobile-grad)"
            opacity="0.4"
          />
        </svg>
      ),
    },
    {
      title: "Animation & Video Editing",
      description:
        "Produce eye-catching animations, motion graphics, and videos that transform your brand vision into compelling visual stories.",
      illustration: (
        <svg
          viewBox="0 0 400 400"
          className="w-full h-full"
          fill="currentColor"
        >
          <defs>
            <linearGradient id="video-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC6E00" />
              <stop offset="100%" stopColor="#4592FF" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="url(#video-grad)"
            opacity="0.1"
          />
          <rect
            x="140"
            y="160"
            width="120"
            height="80"
            rx="8"
            fill="url(#video-grad)"
            opacity="0.3"
          />
          <polygon points="180,190 180,210 210,200" fill="url(#video-grad)" />
          <rect
            x="150"
            y="250"
            width="20"
            height="10"
            fill="url(#video-grad)"
            opacity="0.6"
          />
          <rect
            x="180"
            y="250"
            width="15"
            height="10"
            fill="url(#video-grad)"
            opacity="0.5"
          />
          <rect
            x="205"
            y="250"
            width="25"
            height="10"
            fill="url(#video-grad)"
            opacity="0.7"
          />
          <rect
            x="240"
            y="250"
            width="10"
            height="10"
            fill="url(#video-grad)"
            opacity="0.4"
          />
        </svg>
      ),
    },
  ];

  const [currentService, setCurrentService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentService((prev) => (prev + 1) % services.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [services.length]);

  const textVariants = {
    enter: {
      opacity: 0,
      y: 20,
      scale: 0.95,
    },
    center: {
      opacity: 1,
      y: 0,
      scale: 1,
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.95,
    },
  };

  const illustrationVariants = {
    enter: {
      opacity: 0,
      scale: 0.8,
      rotate: 5,
    },
    center: {
      opacity: 1,
      scale: 1,
      rotate: 0,
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      rotate: -5,
    },
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16 sm:pt-20 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden"
    >
      {/* Enhanced Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Binary Code Grid - Hidden on mobile for performance */}
        <div className="absolute inset-0 opacity-5 hidden md:block">
          <div className="grid grid-cols-12 gap-4 h-full text-xs font-mono text-Coresyncro-primary-light">
            {Array.from({ length: 144 }).map((_, i) => (
              <div
                key={i}
                className="animate-pulse"
                style={{ animationDelay: `${i * 100}ms` }}
              >
                {Math.random() > 0.5 ? "1" : "0"}
              </div>
            ))}
          </div>
        </div>

        {/* Floating Geometric Shapes - Simplified for mobile */}
        <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-Coresyncro-primary-light to-Coresyncro-primary-dark rotate-45 animate-float"></div>
        </div>
        <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 opacity-10">
          <div className="w-full h-full bg-gradient-to-br from-Coresyncro-primary-dark to-Coresyncro-primary-light rounded-full animate-float-delayed"></div>
        </div>
        <div className="absolute bottom-40 left-1/4 w-10 h-10 sm:w-20 sm:h-20 opacity-10">
          <div
            className="w-full h-full bg-gradient-to-br from-Coresyncro-primary-light to-Coresyncro-primary-dark clip-path-triangle animate-float"
            style={{ animationDelay: "2s" }}
          ></div>
        </div>
        <div className="absolute top-60 right-1/3 w-8 h-8 sm:w-16 sm:h-16 opacity-10">
          <div
            className="w-full h-full bg-gradient-to-br from-Coresyncro-primary-dark to-Coresyncro-primary-light transform rotate-12 animate-float"
            style={{ animationDelay: "0.5s" }}
          ></div>
        </div>

        {/* Network Nodes - Hidden on mobile */}
        <svg
          className="absolute inset-0 w-full h-full opacity-5 hidden lg:block"
          viewBox="0 0 1920 1080"
        >
          <defs>
            <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#EC6E00" />
              <stop offset="100%" stopColor="#4592FF" />
            </linearGradient>
          </defs>
          <line
            x1="100"
            y1="100"
            x2="300"
            y2="200"
            stroke="url(#line-grad)"
            strokeWidth="1"
            className="animate-pulse"
          />
          <line
            x1="300"
            y1="200"
            x2="500"
            y2="150"
            stroke="url(#line-grad)"
            strokeWidth="1"
            className="animate-pulse"
          />
          <line
            x1="500"
            y1="150"
            x2="700"
            y2="300"
            stroke="url(#line-grad)"
            strokeWidth="1"
            className="animate-pulse"
          />
          <circle
            cx="100"
            cy="100"
            r="3"
            fill="#EC6E00"
            className="animate-pulse"
          />
          <circle
            cx="300"
            cy="200"
            r="3"
            fill="#4592FF"
            className="animate-pulse"
          />
          <circle
            cx="500"
            cy="150"
            r="3"
            fill="#EC6E00"
            className="animate-pulse"
          />
          <circle
            cx="700"
            cy="300"
            r="3"
            fill="#4592FF"
            className="animate-pulse"
          />
        </svg>
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column - Content */}
          <div className="space-y-6 animate-fade-in text-center lg:text-left order-2 lg:order-1">
            <div className="space-y-4">
              <div className="text-sm font-semibold text-Coresyncro-primary-light tracking-wide uppercase">
                Welcome to Coresyncro Infotech
              </div>

              {/* Synchronized animated text container */}
              <div className="min-h-[200px] sm:min-h-[240px] lg:min-h-[280px]">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentService}
                    variants={textVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{
                      duration: 0.3,
                      ease: "easeInOut",
                    }}
                    className="space-y-4"
                  >
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-bold leading-tight">
                      Expert in{" "}
                      <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                        {services[currentService].title}
                      </span>
                    </h1>
                    <p className="text-lg sm:text-xl lg:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0 leading-relaxed">
                      {services[currentService].description}
                    </p>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark hover:scale-105 transform transition-all duration-300 text-white font-semibold px-6 sm:px-8 py-3 rounded-lg shadow-lg hover:shadow-xl btn-interactive min-h-[44px] touch-manipulation"
                onClick={onContactClick}
              >
                Contact Us
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-Coresyncro-primary-light text-Coresyncro-primary-light hover:bg-Coresyncro-primary-light hover:text-white transition-all duration-300 px-6 sm:px-8 py-3 rounded-lg btn-interactive min-h-[44px] touch-manipulation"
              >
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Right Column - Dynamic Illustration */}
          <div className="flex justify-center order-1 lg:order-2">
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 bg-gradient-to-br from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 text-Coresyncro-primary-light dark:text-Coresyncro-primary-dark">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentService}
                      variants={illustrationVariants}
                      initial="enter"
                      animate="center"
                      exit="exit"
                      transition={{
                        duration: 0.3,
                        ease: "easeInOut",
                      }}
                      className="w-full h-full"
                    >
                      {services[currentService].illustration}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-6 h-6 sm:w-8 sm:h-8 bg-Coresyncro-primary-light rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-4 h-4 sm:w-6 sm:h-6 bg-Coresyncro-primary-dark rounded-full animate-pulse"></div>
              <div className="absolute top-1/2 -left-6 sm:-left-8 w-3 h-3 sm:w-4 sm:h-4 bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark rounded-full animate-float"></div>
              <div className="absolute top-1/4 -right-4 sm:-right-6 w-4 h-4 sm:w-5 sm:h-5 bg-gradient-to-r from-Coresyncro-primary-dark to-Coresyncro-primary-light rounded-full animate-float-delayed"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
