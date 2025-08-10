import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, MessageCircle, Award, HandHeart } from 'lucide-react';

const HiringRoadmap = () => {
  const steps = [
    {
      id: 1,
      icon: FileText,
      title: 'Apply',
      description: 'Submit your application with resume and cover letter'
    },
    {
      id: 2,
      icon: Users,
      title: 'Screening',
      description: 'Initial review of your application and qualifications'
    },
    {
      id: 3,
      icon: MessageCircle,
      title: 'Interview',
      description: 'Technical and cultural fit assessment with our team'
    },
    {
      id: 4,
      icon: Award,
      title: 'Offer',
      description: 'Receive your personalized offer package'
    },
    {
      id: 5,
      icon: HandHeart,
      title: 'Onboard',
      description: 'Welcome to the team! Begin your journey with us'
    }
  ];

  return (
    <div className="relative">
      {/* Main timeline line - now positioned absolutely for better control */}
      <motion.div
        initial={{ scaleY: 0 }}
        whileInView={{ scaleY: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true, margin: "-20%" }}
        className="hidden md:block absolute left-1/2 top-0 h-full w-0.5 bg-gradient-to-b from-coresync-primary-light to-coresync-primary-dark origin-top transform -translate-x-1/2 z-0"
        style={{ 
          background: 'repeating-linear-gradient(to bottom, currentColor 0, currentColor 4px, transparent 4px, transparent 8px)',
        }}
      />

      <div className="flex flex-col items-center max-w-5xl mx-auto">
        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              viewport={{ once: true, margin: "-50px" }}
              className="relative w-full mb-8 last:mb-0 group"
            >
              {/* Mobile connecting lines */}
              {index < steps.length - 1 && (
                <motion.div
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  transition={{ duration: 0.8, delay: index * 0.15 + 0.3 }}
                  viewport={{ once: true, margin: "-20%" }}
                  className="md:hidden absolute left-8 top-16 h-8 w-0.5 bg-gradient-to-b from-coresync-primary-light to-coresync-primary-dark origin-top z-0"
                  style={{ 
                    background: 'repeating-linear-gradient(to bottom, currentColor 0, currentColor 4px, transparent 4px, transparent 8px)',
                  }}
                />
              )}

              <div className={`flex flex-col md:flex-row items-stretch ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} w-full`}>
                {/* Spacer for desktop layout */}
                <div className={`hidden md:block flex-1 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}></div>

                {/* Content Card */}
                <div className={`flex-1 p-6 rounded-xl bg-card/50 backdrop-blur-sm border border-muted hover:border-coresync-primary-light/30 transition-all duration-300 hover:shadow-lg cursor-pointer w-full`}>
                  <div className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} items-center md:items-start`}>
                    {/* Icon Container */}
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0 mb-4 md:mb-0">
                      <step.icon className="w-8 h-8 text-white" />
                    </div>
                    
                    {/* Text Content */}
                    <div className={`${index % 2 === 0 ? 'md:ml-6' : 'md:mr-6'} flex-1 text-center md:text-left`}>
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-coresync-primary-light transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Step Number - positioned differently for mobile/desktop */}
                <div className="absolute left-8 md:left-1/2 top-0 transform -translate-x-1/2 md:-translate-x-1/2 w-8 h-8 bg-coresync-primary-light text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                  {step.id}
                </div>
              </div>
            </motion.div>
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HiringRoadmap;