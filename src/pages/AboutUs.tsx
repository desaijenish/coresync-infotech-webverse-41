
import React from 'react';
import { motion } from 'framer-motion';
import { Target, Shield, Heart, Users, Lightbulb, Globe } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';

const AboutUs = () => {
  const principles = [
    {
      icon: Target,
      title: "Mission",
      content: "To empower businesses through innovative technology solutions that drive growth, efficiency, and digital transformation in an ever-evolving technological landscape.",
      gradient: "from-coresync-primary-light to-orange-500"
    },
    {
      icon: Shield,
      title: "Principles",
      content: "We believe in transparency, quality craftsmanship, and ethical practices. Every project is built with integrity, attention to detail, and a commitment to exceeding expectations.",
      gradient: "from-coresync-primary-dark to-blue-500"
    },
    {
      icon: Heart,
      title: "Promise",
      content: "We promise to be your trusted technology partner, delivering solutions that not only meet your current needs but also scale with your future ambitions and goals.",
      gradient: "from-purple-500 to-pink-500"
    }
  ];

  const stats = [
    { number: "50+", label: "Projects Completed" },
    { number: "25+", label: "Happy Clients" },
    { number: "5+", label: "Years Experience" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Animated Binary Background */}
        <div className="absolute inset-0 pointer-events-none opacity-5">
          <div className="absolute top-0 left-0 w-full h-full">
            {/* Binary code pattern */}
            <div className="absolute top-10 left-10 text-xs font-mono text-coresync-primary-light">
              01001000 01100101 01101100 01101100 01101111
            </div>
            <div className="absolute top-20 right-20 text-xs font-mono text-coresync-primary-dark">
              01010111 01101111 01110010 01101100 01100100
            </div>
            <div className="absolute bottom-20 left-1/4 text-xs font-mono text-coresync-primary-light">
              01000011 01101111 01110010 01100101 01110011 01111001 01101110 01100011
            </div>
          </div>
        </div>

        {/* Geometric Network Background */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="w-full h-full opacity-10" viewBox="0 0 1000 1000">
            <defs>
              <linearGradient id="networkGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="var(--coresync-primary-light)" />
                <stop offset="100%" stopColor="var(--coresync-primary-dark)" />
              </linearGradient>
            </defs>
            {/* Network nodes and connections */}
            <circle cx="100" cy="100" r="3" fill="url(#networkGrad)" />
            <circle cx="300" cy="150" r="3" fill="url(#networkGrad)" />
            <circle cx="500" cy="120" r="3" fill="url(#networkGrad)" />
            <circle cx="700" cy="180" r="3" fill="url(#networkGrad)" />
            <circle cx="900" cy="100" r="3" fill="url(#networkGrad)" />
            
            <line x1="100" y1="100" x2="300" y2="150" stroke="url(#networkGrad)" strokeWidth="1" />
            <line x1="300" y1="150" x2="500" y2="120" stroke="url(#networkGrad)" strokeWidth="1" />
            <line x1="500" y1="120" x2="700" y2="180" stroke="url(#networkGrad)" strokeWidth="1" />
            <line x1="700" y1="180" x2="900" y2="100" stroke="url(#networkGrad)" strokeWidth="1" />
            
            {/* More network elements */}
            <circle cx="150" cy="400" r="3" fill="url(#networkGrad)" />
            <circle cx="350" cy="450" r="3" fill="url(#networkGrad)" />
            <circle cx="550" cy="380" r="3" fill="url(#networkGrad)" />
            <circle cx="750" cy="420" r="3" fill="url(#networkGrad)" />
            
            <line x1="150" y1="400" x2="350" y2="450" stroke="url(#networkGrad)" strokeWidth="1" />
            <line x1="350" y1="450" x2="550" y2="380" stroke="url(#networkGrad)" strokeWidth="1" />
            <line x1="550" y1="380" x2="750" y2="420" stroke="url(#networkGrad)" strokeWidth="1" />
          </svg>
        </div>

        {/* Floating Shapes */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-10 w-24 h-24 bg-coresync-primary-light/10 rounded-full animate-float"></div>
          <div className="absolute bottom-1/4 left-10 w-16 h-16 bg-coresync-primary-dark/10 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/2 left-1/2 w-8 h-8 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark opacity-20 transform rotate-45 animate-pulse"></div>
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
                About{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  Coresync Infotech
                </span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
                We are a passionate team of technologists, designers, and innovators dedicated to transforming businesses through cutting-edge digital solutions. Founded with a vision to bridge the gap between technology and business success.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  className="text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark mb-2">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Mission, Principles, Promise Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Our <span className="text-coresync-primary-light">Foundation</span>
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Built on strong values and driven by innovation
              </p>
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto"
            >
              {principles.map((principle, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: 5,
                    transition: { duration: 0.3 }
                  }}
                  className="group perspective-1000"
                >
                  <Card className="relative h-full overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-coresync-primary-light/30 transition-all duration-500">
                    <CardContent className="p-6 text-center space-y-4 relative z-10">
                      {/* Icon */}
                      <div className={`w-16 h-16 mx-auto rounded-full bg-gradient-to-r ${principle.gradient} p-4 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                        <principle.icon className="w-full h-full text-white" />
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold text-foreground group-hover:text-coresync-primary-light transition-colors duration-300">
                        {principle.title}
                      </h3>
                      
                      {/* Content */}
                      <p className="text-muted-foreground leading-relaxed">
                        {principle.content}
                      </p>
                    </CardContent>

                    {/* Background gradient effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                    
                    {/* Glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${principle.gradient} opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl -z-10`}></div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Team & Culture Section */}
        <section className="py-16 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Our <span className="text-coresync-primary-dark">Culture</span>
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                At Coresync Infotech, we foster a culture of continuous learning, innovation, and collaboration. 
                We believe that great software is built by great teams who are passionate about solving complex 
                problems and creating meaningful impact through technology.
              </p>
              
              <div className="grid md:grid-cols-3 gap-6 mt-12">
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Users className="w-12 h-12 mx-auto mb-4 text-coresync-primary-light" />
                  <h3 className="font-semibold mb-2">Collaborative</h3>
                  <p className="text-muted-foreground text-sm">
                    We work together to achieve excellence
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Lightbulb className="w-12 h-12 mx-auto mb-4 text-coresync-primary-dark" />
                  <h3 className="font-semibold mb-2">Innovative</h3>
                  <p className="text-muted-foreground text-sm">
                    We embrace new technologies and ideas
                  </p>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <Globe className="w-12 h-12 mx-auto mb-4 text-coresync-primary-light" />
                  <h3 className="font-semibold mb-2">Global Impact</h3>
                  <p className="text-muted-foreground text-sm">
                    We create solutions that make a difference
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default AboutUs;
