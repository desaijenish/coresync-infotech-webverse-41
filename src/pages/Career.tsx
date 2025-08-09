import React, { useRef, useState } from 'react';
import { motion, useInView, Variants } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import ApplicationModal from '@/components/career/ApplicationModal';
import HiringRoadmap from '@/components/career/HiringRoadmap';
import PositionCard from '@/components/career/PositionCard';
import TestimonialsCarousel from '@/components/career/TestimonialsCarousel';
import PerksSection from '@/components/career/PerksSection';
import SpeculativeApplicationForm from '@/components/career/SpeculativeApplicationForm';
import { MapPin, Briefcase, Rocket, Lightbulb, Handshake, Users, Building, Globe, Code, Zap, Database, Cpu, Network, Binary } from 'lucide-react';

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<'all' | 'full-time' | 'internship'>('all');
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const jobListings = [
    {
      id: 1,
      title: "Frontend Developer",
      location: "Remote / Hybrid",
      type: "Full-Time",
      tagline: "Shape the future of web experiences",
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
      tagline: "Pioneer the next generation of intelligent solutions",
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
      tagline: "Create mobile experiences that matter",
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
      tagline: "Launch your tech career with us",
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
    },
    {
      id: 5,
      title: "UI/UX Design Intern",
      location: "Remote",
      type: "Internship",
      tagline: "Design the future of user experiences",
      description: "Join our design team to create intuitive and beautiful user interfaces for web and mobile applications.",
      responsibilities: [
        "Create wireframes and prototypes for web and mobile apps",
        "Conduct user research and usability testing",
        "Design user interfaces following design systems",
        "Collaborate with developers to implement designs"
      ],
      requirements: [
        "Currently pursuing Design, HCI, or related degree",
        "Proficiency in Figma, Adobe Creative Suite",
        "Understanding of design principles and user-centered design",
        "Portfolio showcasing UI/UX projects"
      ]
    }
  ];

  const filteredJobs = jobListings.filter(job => {
    if (filterType === 'all') return true;
    if (filterType === 'full-time') return job.type === 'Full-Time';
    if (filterType === 'internship') return job.type === 'Internship';
    return true;
  });

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
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

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Enhanced Mathematical & Geometric Background Pattern */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.015] dark:opacity-[0.03]">
          {/* Binary Earth Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(236, 110, 0, 0.08) 0%, transparent 50%), 
                             radial-gradient(circle at 70% 30%, rgba(69, 146, 255, 0.08) 0%, transparent 50%),
                             url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC6E00' fill-opacity='0.4'%3E%3Ctext x='40' y='60' font-family='JetBrains Mono, monospace' font-size='14'%3E01010110110101001101%3C/text%3E%3Ctext x='40' y='80' font-family='JetBrains Mono, monospace' font-size='14'%3E11001100101011011010%3C/text%3E%3Ctext x='40' y='100' font-family='JetBrains Mono, monospace' font-size='14'%3E10110110111001100110%3C/text%3E%3Ctext x='40' y='120' font-family='JetBrains Mono, monospace' font-size='14'%3Ef(x)=mx+b ∑∞n=1 1/n²%3C/text%3E%3Ctext x='40' y='140' font-family='JetBrains Mono, monospace' font-size='14'%3E∇²φ = ρ/ε₀ ∂²u/∂t²%3C/text%3E%3Ctext x='40' y='160' font-family='JetBrains Mono, monospace' font-size='14'%3E∫₋∞∞ e⁻ˣ² dx = √π%3C/text%3E%3Ctext x='40' y='180' font-family='JetBrains Mono, monospace' font-size='14'%3E01110111010110110101%3C/text%3E%3Ctext x='40' y='200' font-family='JetBrains Mono, monospace' font-size='14'%3Elim x→0 (sin x)/x = 1%3C/text%3E%3Ctext x='40' y='220' font-family='JetBrains Mono, monospace' font-size='14'%3E11010110100110011001%3C/text%3E%3Ctext x='40' y='240' font-family='JetBrains Mono, monospace' font-size='14'%3EE = mc² | H = -∇²/2m%3C/text%3E%3Ctext x='40' y='280' font-family='JetBrains Mono, monospace' font-size='12'%3Ewhile(true){code()}%3C/text%3E%3Ctext x='40' y='300' font-family='JetBrains Mono, monospace' font-size='12'%3Eif(dream){code.reality}%3C/text%3E%3Ctext x='40' y='320' font-family='JetBrains Mono, monospace' font-size='12'%3Efunction solve(problem)%3C/text%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Geometric Network Pattern with Mathematical Nodes */}
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="math-network" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
                  {/* Mathematical Nodes */}
                  <circle cx="40" cy="40" r="4" fill="currentColor" opacity="0.5"/>
                  <circle cx="160" cy="40" r="4" fill="currentColor" opacity="0.5"/>
                  <circle cx="100" cy="100" r="4" fill="currentColor" opacity="0.5"/>
                  <circle cx="40" cy="160" r="4" fill="currentColor" opacity="0.5"/>
                  <circle cx="160" cy="160" r="4" fill="currentColor" opacity="0.5"/>
                  
                  {/* Connection Lines */}
                  <line x1="40" y1="40" x2="160" y2="40" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <line x1="40" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <line x1="160" y1="40" x2="100" y2="100" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <line x1="100" y1="100" x2="40" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  <line x1="100" y1="100" x2="160" y2="160" stroke="currentColor" strokeWidth="1" opacity="0.3"/>
                  
                  {/* Geometric Shapes */}
                  <polygon points="100,20 115,50 85,50" fill="currentColor" opacity="0.15"/>
                  <polygon points="20,100 35,115 20,130 5,115" fill="currentColor" opacity="0.15"/>
                  <rect x="170" y="85" width="15" height="15" fill="currentColor" opacity="0.1" transform="rotate(45 177.5 92.5)"/>
                  
                  {/* Mathematical Symbols */}
                  <text x="60" y="25" font-family="serif" font-size="12" fill="currentColor" opacity="0.3">∑</text>
                  <text x="180" y="25" font-family="serif" font-size="12" fill="currentColor" opacity="0.3">∫</text>
                  <text x="15" y="85" font-family="serif" font-size="12" fill="currentColor" opacity="0.3">∇</text>
                  <text x="180" y="185" font-family="serif" font-size="12" fill="currentColor" opacity="0.3">∂</text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#math-network)" />
            </svg>
          </div>
          
          {/* Floating Animated Tech Icons */}
          <motion.div 
            className="absolute top-32 right-16 w-10 h-10 opacity-20"
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <Database className="w-full h-full text-coresync-primary-light" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-32 left-16 w-8 h-8 opacity-25"
            animate={{ 
              y: [0, 8, 0],
              x: [0, 3, 0]
            }}
            transition={{ 
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Code className="w-full h-full text-coresync-primary-dark" />
          </motion.div>
          
          <motion.div 
            className="absolute top-1/4 right-1/3 w-9 h-9 opacity-15"
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0]
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Cpu className="w-full h-full text-coresync-primary-light" />
          </motion.div>
          
          <motion.div 
            className="absolute bottom-1/4 left-1/3 w-7 h-7 opacity-20"
            animate={{ 
              y: [0, -6, 0],
              opacity: [0.2, 0.35, 0.2]
            }}
            transition={{ 
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          >
            <Network className="w-full h-full text-coresync-primary-dark" />
          </motion.div>

          <motion.div 
            className="absolute top-1/2 left-10 w-6 h-6 opacity-18"
            animate={{ 
              rotate: [0, 360],
              scale: [1, 0.8, 1]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <Binary className="w-full h-full text-coresync-primary-light" />
          </motion.div>
          
          <motion.div 
            className="absolute top-20 left-1/3 w-8 h-8 opacity-12"
            animate={{ 
              y: [0, 12, 0],
              x: [0, -4, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }}
          >
            <Zap className="w-full h-full text-coresync-primary-dark" />
          </motion.div>
        </div>

        <Navbar />
        
        {/* Hero Banner with Office Photo */}
        <section className="relative pt-20 pb-16 px-4 overflow-hidden" ref={heroRef}>
          <div className="absolute inset-0 bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10">
            <img 
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600" 
              alt="Coresync Office" 
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>
          
          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Join the{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  Coresync Infotech Team
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Build cutting-edge solutions with us—your journey starts here.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Coresync Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <Card className="max-w-4xl mx-auto bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10 border-2 border-coresync-primary-light/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Join <span className="text-coresync-primary-light">Coresync?</span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    At Coresync Infotech, we're not just building software—we're crafting the future of technology. 
                    Join a team of passionate innovators who push boundaries, embrace challenges, and create 
                    solutions that make a real impact in the world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Hiring Roadmap Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your <span className="text-coresync-primary-light">Journey</span> with Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Follow our streamlined hiring process designed for your success
              </p>
            </motion.div>
            <HiringRoadmap />
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open <span className="text-coresync-primary-light">Positions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Discover exciting opportunities to grow your career with us
              </p>
              
              {/* Filter Tabs */}
              <div className="flex justify-center space-x-4 mb-8">
                <Button
                  variant={filterType === 'all' ? 'default' : 'outline'}
                  onClick={() => setFilterType('all')}
                  className="px-6"
                >
                  All Positions
                </Button>
                <Button
                  variant={filterType === 'full-time' ? 'default' : 'outline'}
                  onClick={() => setFilterType('full-time')}
                  className="px-6"
                >
                  Full-Time
                </Button>
                <Button
                  variant={filterType === 'internship' ? 'default' : 'outline'}
                  onClick={() => setFilterType('internship')}
                  className="px-6"
                >
                  Internships
                </Button>
              </div>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 max-w-4xl mx-auto"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.6, 
                    ease: "easeOut",
                    delay: index * 0.1
                  }}
                  viewport={{ once: true }}
                >
                  <PositionCard
                    job={job}
                    index={index}
                    onApply={() => setIsModalOpen(true)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Our Team Says */}
        <TestimonialsCarousel />

        {/* Why Choose Us Section */}
        <PerksSection />

        {/* Speculative Application Section */}
        <SpeculativeApplicationForm />

        <Footer />
        
        <ApplicationModal 
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          availablePositions={jobListings}
        />
      </div>
    </ThemeProvider>
  );
};

export default Career;