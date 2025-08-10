import React from "react";
import { motion } from "framer-motion";
import { FileText, Users, MessageCircle, Award, HandHeart } from "lucide-react";

const HiringRoadmap = () => {
  const steps = [
    {
      id: 1,
      icon: FileText,
      title: "Apply",
      description: "Submit your application with resume and cover letter",
    },
    {
      id: 2,
      icon: Users,
      title: "Screening",
      description: "Initial review of your application and qualifications",
    },
    {
      id: 3,
      icon: MessageCircle,
      title: "Interview",
      description: "Technical and cultural fit assessment with our team",
    },
    {
      id: 4,
      icon: Award,
      title: "Offer",
      description: "Receive your personalized offer package",
    },
    {
      id: 5,
      icon: HandHeart,
      title: "Onboard",
      description: "Welcome to the team! Begin your journey with us",
    },
  ];

  return (
    <div className="flex flex-col items-center w-full max-w-4xl mx-auto px-4 py-8 md:py-12">
      <div className="relative w-full">
        {/* Central line - desktop only */}
        <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-coresync-primary-light/30 to-coresync-primary-dark/30 transform -translate-x-1/2 z-0 hidden md:block" />

        {steps.map((step, index) => (
          <React.Fragment key={step.id}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                margin: "0px 0px -100px 0px",
              }}
              className="relative w-full mb-10 md:mb-14 last:mb-0"
            >
              {/* Step container */}
              <div
                className={`flex ${
                  index % 2 === 0 ? "md:justify-start" : "md:justify-end"
                } w-full`}
              >
                {/* Step card */}
                <div
                  className={`
                  relative w-full md:w-[46%] max-w-[500px] p-5 md:p-6 rounded-xl 
                  bg-background border border-border hover:border-coresync-primary-light/50 
                  transition-all duration-300 hover:shadow-lg group
                  shadow-sm
                `}
                >
                  <div
                    className={`flex ${
                      index % 2 === 0
                        ? "flex-row"
                        : "flex-row-reverse md:flex-row"
                    } items-center gap-4`}
                  >
                    {/* Icon circle with pulse animation */}
                    <motion.div
                      className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform duration-300"
                      whileHover={{ scale: 1.05 }}
                      animate={{
                        boxShadow: [
                          "0 0 0 0px rgba(99, 102, 241, 0.1)",
                          "0 0 0 8px rgba(99, 102, 241, 0)",
                        ],
                      }}
                      transition={{
                        boxShadow: {
                          duration: 1.5,
                          repeat: Infinity,
                          repeatType: "reverse",
                        },
                      }}
                    >
                      <step.icon className="w-5 h-5 md:w-6 md:h-6 text-white" />
                    </motion.div>

                    {/* Content */}
                    <div
                      className={`${
                        index % 2 === 0
                          ? "text-left"
                          : "text-right md:text-left"
                      } flex-1`}
                    >
                      <h3 className="text-base md:text-lg font-semibold mb-1 group-hover:text-coresync-primary-light transition-colors">
                        {step.title}
                      </h3>
                      <p className="text-sm md:text-base text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Desktop dot connector */}
                </div>
              </div>
            </motion.div>

            {/* Mobile connecting line */}
            {index < steps.length - 1 && (
              <motion.div
                initial={{ scaleY: 0 }}
                whileInView={{ scaleY: 1 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.3,
                  ease: "easeOut",
                }}
                viewport={{ once: true }}
                className="w-1 h-16 bg-gradient-to-b from-coresync-primary-light/50 to-coresync-primary-dark/50 origin-top mx-auto -mt-8 mb-2 relative z-0 md:hidden"
              />
            )}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HiringRoadmap;
