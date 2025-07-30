
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Briefcase, ChevronDown } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';
import ApplicationModal from '@/components/career/ApplicationModal';

const Career = () => {
  const [isApplicationOpen, setIsApplicationOpen] = useState(false);
  const [expandedJob, setExpandedJob] = useState<number | null>(null);

  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote / Hybrid",
      type: "Full-Time",
      description: "Join our team to build cutting-edge web applications using React, TypeScript, and modern frameworks.",
      responsibilities: [
        "Develop responsive web applications using React and TypeScript",
        "Collaborate with designers to implement pixel-perfect UI/UX designs",
        "Optimize applications for maximum speed and scalability",
        "Write clean, maintainable, and well-documented code"
      ],
      requirements: [
        "3+ years of experience with React and TypeScript",
        "Strong understanding of modern CSS and responsive design",
        "Experience with state management (Redux, Zustand, etc.)",
        "Knowledge of testing frameworks (Jest, Cypress)"
      ]
    },
    {
      id: 2,
      title: "AI/ML Engineer",
      location: "On-site",
      type: "Full-Time",
      description: "Lead AI initiatives and develop machine learning solutions that drive innovation across our products.",
      responsibilities: [
        "Design and implement machine learning models",
        "Develop AI-powered features for web and mobile applications",
        "Collaborate with cross-functional teams on AI strategy",
        "Research and evaluate new AI technologies and frameworks"
      ],
      requirements: [
        "Master's degree in Computer Science, AI, or related field",
        "5+ years of experience in machine learning and AI",
        "Proficiency in Python, TensorFlow, and PyTorch",
        "Experience with cloud AI services (AWS, Google Cloud, Azure)"
      ]
    },
    {
      id: 3,
      title: "Mobile App Developer",
      location: "Remote",
      type: "Full-Time",
      description: "Create exceptional mobile experiences using React Native and Flutter for iOS and Android platforms.",
      responsibilities: [
        "Develop cross-platform mobile applications",
        "Implement native features and third-party integrations",
        "Ensure app performance and optimization",
        "Collaborate with backend teams for API integration"
      ],
      requirements: [
        "4+ years of mobile development experience",
        "Expertise in React Native or Flutter",
        "Knowledge of native iOS/Android development",
        "Experience with app store deployment processes"
      ]
    },
    {
      id: 4,
      title: "Software Engineering Intern",
      location: "Hybrid",
      type: "Internship",
      description: "Kickstart your career with hands-on experience in full-stack development and modern technologies.",
      responsibilities: [
        "Assist in developing web and mobile applications",
        "Learn modern development frameworks and best practices",
        "Participate in code reviews and team meetings",
        "Work on real projects with mentorship from senior developers"
      ],
      requirements: [
        "Currently pursuing Computer Science or related degree",
        "Basic knowledge of JavaScript, HTML, and CSS",
        "Familiarity with React or other modern frameworks",
        "Strong problem-solving skills and eagerness to learn"
      ]
    }
  ];

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
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 right-10 w-32 h-32 bg-coresync-primary-light/10 rounded-full animate-float"></div>
          <div className="absolute bottom-20 left-10 w-24 h-24 bg-coresync-primary-dark/10 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-coresync-primary-light/5 rounded-full animate-pulse"></div>
          {/* Geometric shapes */}
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark opacity-10 transform rotate-45"></div>
          <div className="absolute bottom-1/3 left-1/3 w-8 h-8 bg-gradient-to-r from-coresync-primary-dark to-coresync-primary-light opacity-10 transform rotate-12"></div>
        </div>

        <Navbar />
        
        {/* Hero Section */}
        <section className="pt-24 pb-12 px-4 relative z-10">
          <div className="container mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl mx-auto"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                Join Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  Innovation Team
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Shape the future of technology with us. We're looking for passionate individuals who want to make a difference through cutting-edge software solutions.
              </p>
              
              {/* Sticky Apply Button */}
              <motion.button
                onClick={() => setIsApplicationOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 mb-8"
              >
                Apply for Internship
              </motion.button>
            </motion.div>
          </div>
        </section>

        {/* Job Listings */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open <span className="text-coresync-primary-light">Positions</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Discover exciting opportunities to grow your career with us
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-6 max-w-4xl mx-auto"
            >
              {jobListings.map((job, index) => (
                <motion.div
                  key={job.id}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    rotateX: 1,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective-1000"
                >
                  <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-coresync-primary-light/30 transition-all duration-300">
                    <CardContent className="p-6">
                      {/* Job Header */}
                      <div 
                        className="flex items-center justify-between cursor-pointer"
                        onClick={() => setExpandedJob(expandedJob === index ? null : index)}
                      >
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-foreground group-hover:text-coresync-primary-light transition-colors">
                            {job.title}
                          </h3>
                          <div className="flex items-center space-x-4 mt-2 text-muted-foreground">
                            <div className="flex items-center space-x-1">
                              <MapPin size={16} />
                              <span>{job.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Briefcase size={16} />
                              <span>{job.type}</span>
                            </div>
                          </div>
                          <p className="text-muted-foreground mt-3">
                            {job.description}
                          </p>
                        </div>
                        <motion.div
                          animate={{ rotate: expandedJob === index ? 180 : 0 }}
                          transition={{ duration: 0.3 }}
                          className="ml-4"
                        >
                          <ChevronDown className="w-6 h-6 text-coresync-primary-light" />
                        </motion.div>
                      </div>

                      {/* Expanded Content */}
                      <motion.div
                        initial={false}
                        animate={{
                          height: expandedJob === index ? "auto" : 0,
                          opacity: expandedJob === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="pt-6 border-t border-border mt-6">
                          <div className="grid md:grid-cols-2 gap-6">
                            <div>
                              <h4 className="font-semibold text-coresync-primary-light mb-3">
                                Responsibilities
                              </h4>
                              <ul className="space-y-2 text-muted-foreground">
                                {job.responsibilities.map((item, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 bg-coresync-primary-light rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-semibold text-coresync-primary-dark mb-3">
                                Requirements
                              </h4>
                              <ul className="space-y-2 text-muted-foreground">
                                {job.requirements.map((item, idx) => (
                                  <li key={idx} className="flex items-start space-x-2">
                                    <span className="w-1.5 h-1.5 bg-coresync-primary-dark rounded-full mt-2 flex-shrink-0"></span>
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                          <motion.button
                            onClick={() => setIsApplicationOpen(true)}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="mt-6 px-6 py-3 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300"
                          >
                            Apply Now
                          </motion.button>
                        </div>
                      </motion.div>
                    </CardContent>

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-coresync-primary-light/5 to-coresync-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>

            {/* Bottom CTA */}
            <div className="text-center mt-12">
              <motion.button
                onClick={() => setIsApplicationOpen(true)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              >
                Apply for Internship
              </motion.button>
            </div>
          </div>
        </section>

        <Footer />
        
        <ApplicationModal 
          isOpen={isApplicationOpen}
          onClose={() => setIsApplicationOpen(false)}
        />
      </div>
    </ThemeProvider>
  );
};

export default Career;
