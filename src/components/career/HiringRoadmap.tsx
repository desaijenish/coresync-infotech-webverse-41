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
    <div className="flex flex-col items-center max-w-2xl mx-auto">
      {steps.map((step, index) => (
        <React.Fragment key={step.id}>
          <motion.div
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true }}
            className="group relative w-full"
          >
            <div className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} mb-8`}>
              <div className="flex-1 p-6 rounded-xl bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-coresync-primary-light/30 transition-all duration-300 hover:scale-105 cursor-pointer">
                <div className={`flex items-center ${index % 2 === 0 ? 'text-left' : 'text-right flex-row-reverse'}`}>
                  <div className="w-16 h-16 rounded-full bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className={`${index % 2 === 0 ? 'ml-4' : 'mr-4'} flex-1`}>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-coresync-primary-light transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Step Number */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-coresync-primary-light text-white rounded-full flex items-center justify-center font-bold text-sm z-10">
                {step.id}
              </div>
            </div>
          </motion.div>
          
          {/* Connecting Line */}
          {index < steps.length - 1 && (
            <motion.div
              initial={{ scaleY: 0 }}
              whileInView={{ scaleY: 1 }}
              transition={{ duration: 0.8, delay: index * 0.2 + 0.3 }}
              viewport={{ once: true }}
              className="w-0.5 h-16 bg-gradient-to-b from-coresync-primary-light to-coresync-primary-dark origin-top -mt-8 mb-8 relative z-0"
              style={{ background: 'repeating-linear-gradient(to bottom, currentColor 0, currentColor 4px, transparent 4px, transparent 8px)' }}
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default HiringRoadmap;