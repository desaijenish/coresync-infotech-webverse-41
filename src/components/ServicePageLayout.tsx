
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

interface ServicePageLayoutProps {
  title: string;
  description: string;
  benefits: string[];
  techStack: string[];
  illustration: React.ReactNode;
  onContactClick: () => void;
}

const ServicePageLayout: React.FC<ServicePageLayoutProps> = ({
  title,
  description,
  benefits,
  techStack,
  illustration,
  onContactClick
}) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background to-muted/30 pt-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-center lg:text-left"
              >
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  {title}
                </span>
              </motion.h1>
              
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground leading-relaxed mb-8"
              >
                {description}
              </motion.p>
            </div>

            {/* Benefits */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-coresync-primary-light">Key Benefits</h3>
              <ul className="space-y-3">
                {benefits.map((benefit, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-2 h-2 bg-coresync-primary-light rounded-full flex-shrink-0"></div>
                    <span className="text-foreground">{benefit}</span>
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
            >
              <h3 className="text-2xl font-bold mb-4 text-coresync-primary-dark">Technologies We Use</h3>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.3, delay: 1.2 + index * 0.05 }}
                    className="px-3 py-1 bg-coresync-primary-dark/10 text-coresync-primary-dark rounded-full text-sm font-medium"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA Button */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.4 }}
              className="pt-6"
            >
              <Button
                size="lg"
                onClick={onContactClick}
                className="bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:scale-105 transform transition-all duration-300 text-white font-semibold px-8 py-4 rounded-lg shadow-lg hover:shadow-xl"
              >
                Get a Quote
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Column - Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center order-first lg:order-last"
          >
            <div className="relative">
              <div className="w-80 h-80 sm:w-96 sm:h-96 lg:w-[500px] lg:h-[500px] bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                <div className="w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 text-coresync-primary-light dark:text-coresync-primary-dark">
                  {illustration}
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-coresync-primary-light rounded-full animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-coresync-primary-dark rounded-full animate-pulse" style={{ animationDelay: '1s' }}></div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ServicePageLayout;
