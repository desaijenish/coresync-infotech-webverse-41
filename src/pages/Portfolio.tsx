import React, { useEffect, useRef, useState } from 'react';
import { motion, useInView, Variants, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ChevronRight, CheckCircle, ArrowRight, Star, Users, TrendingUp, ChevronLeft, Globe, Code, Zap, Database, Cpu, Network, Binary } from 'lucide-react';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isCarouselPaused, setIsCarouselPaused] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, margin: "-100px" });
  const isCarouselInView = useInView(carouselRef, { once: true, margin: "-100px" });

  const featuredCaseStudies = [
    {
      id: 1,
      projectName: "Enterprise CRM Platform",
      clientIndustry: "Manufacturing",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
      deviceMockup: "desktop",
      keyOutcomes: [
        "+45% operational efficiency",
        "Delivered in 4 months",
        "30% reduction in customer response time",
        "Integrated with 15+ existing systems"
      ],
      challenge: "A leading manufacturing company struggled with fragmented customer data across multiple systems, leading to inefficient sales processes and poor customer service response times.",
      solution: "We developed a comprehensive CRM platform with real-time data integration, automated workflow management, and advanced analytics dashboard to unify customer interactions.",
      result: "The new system transformed their sales operations, reducing lead processing time by 60% and improving customer satisfaction scores by 35%.",
      testimonial: {
        quote: "CoreSync delivered exactly what we needed. The CRM platform has revolutionized how we manage customer relationships.",
        author: "Sarah Johnson",
        position: "VP of Sales",
        company: "TechManufacturing Inc."
      },
      metrics: [
        { label: "Efficiency Increase", value: "45%" },
        { label: "Response Time Reduction", value: "30%" },
        { label: "System Integrations", value: "15+" }
      ]
    },
    {
      id: 2,
      projectName: "Smart Healthcare Mobile App",
      clientIndustry: "Healthcare",
      heroImage: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=700",
      deviceMockup: "mobile",
      keyOutcomes: [
        "100K+ active users",
        "4.8★ app store rating",
        "25% faster patient check-ins",
        "HIPAA compliant architecture"
      ],
      challenge: "A healthcare network needed to modernize patient engagement and streamline appointment management while ensuring strict HIPAA compliance.",
      solution: "We built a comprehensive mobile application with secure patient portals, telemedicine capabilities, appointment scheduling, and real-time health monitoring features.",
      result: "The app now serves over 100,000 active users, significantly improving patient satisfaction and reducing administrative overhead by 40%.",
      testimonial: {
        quote: "The mobile app has transformed our patient experience. We've seen remarkable improvements in engagement and satisfaction.",
        author: "Dr. Michael Chen",
        position: "Chief Medical Officer",
        company: "Regional Healthcare Network"
      },
      metrics: [
        { label: "Active Users", value: "100K+" },
        { label: "App Rating", value: "4.8★" },
        { label: "Check-in Speed", value: "+25%" }
      ]
    },
    {
      id: 3,
      projectName: "Financial Analytics Dashboard",
      clientIndustry: "Financial Services",
      heroImage: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
      deviceMockup: "desktop",
      keyOutcomes: [
        "Real-time data processing",
        "50% faster reporting",
        "Advanced predictive analytics",
        "Multi-tenant architecture"
      ],
      challenge: "A financial services firm required a sophisticated analytics platform to process millions of transactions daily and provide real-time insights to their clients.",
      solution: "We developed a high-performance dashboard with advanced data visualization, predictive modeling, and customizable reporting features using cutting-edge technologies.",
      result: "The platform now processes over 5 million transactions daily, providing instant insights and reducing report generation time from hours to minutes.",
      testimonial: {
        quote: "The analytics platform has given us a competitive edge. Our clients love the real-time insights and comprehensive reporting.",
        author: "Robert Wilson",
        position: "Head of Technology",
        company: "FinTech Solutions Ltd."
      },
      metrics: [
        { label: "Transaction Volume", value: "5M/day" },
        { label: "Reporting Speed", value: "+50%" },
        { label: "Data Accuracy", value: "99.9%" }
      ]
    }
  ];

  const additionalProjects = [
    {
      id: 4,
      title: "E-commerce Platform Redesign",
      outcome: "Mobile app for retail — 30K+ downloads",
      thumbnail: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=300",
      industry: "Retail"
    },
    {
      id: 5,
      title: "Supply Chain Management System",
      outcome: "Logistics optimization — 40% cost reduction",
      thumbnail: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=400&h=300",
      industry: "Logistics"
    },
    {
      id: 6,
      title: "Educational Learning Platform",
      outcome: "EdTech solution — 50K+ students enrolled",
      thumbnail: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=300",
      industry: "Education"
    },
    {
      id: 7,
      title: "Real Estate Management Portal",
      outcome: "Property management — 95% client satisfaction",
      thumbnail: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=300",
      industry: "Real Estate"
    }
  ];

  // Animation Variants optimized for 60fps
  const headerVariants: Variants = {
    hidden: { opacity: 0, y: -30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const subtitleVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut", delay: 0.2 }
    }
  };

  const slideVariants: Variants = {
    enter: {
      x: 300,
      opacity: 0,
    },
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    exit: {
      zIndex: 0,
      x: -300,
      opacity: 0,
      transition: {
        duration: 0.4,
        ease: "easeOut"
      }
    }
  };

  const projectCardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 60, 
      scale: 0.9 
    },
    visible: (index: number) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        delay: index * 0.15
      }
    })
  };

  // Carousel Auto-rotation
  useEffect(() => {
    if (!isCarouselPaused && featuredCaseStudies.length > 1) {
      const interval = setInterval(() => {
        setCurrentSlide(prev => (prev + 1) % featuredCaseStudies.length);
      }, 7000);
      return () => clearInterval(interval);
    }
  }, [isCarouselPaused, featuredCaseStudies.length]);

  // Project visibility observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = containerRef.current?.querySelectorAll('[data-index]');
    projectCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    setCurrentSlide(prev => (prev + 1) % featuredCaseStudies.length);
  };

  const prevSlide = () => {
    setCurrentSlide(prev => prev === 0 ? featuredCaseStudies.length - 1 : prev - 1);
  };

  const DeviceMockup = ({ src, device, alt }: { src: string; device: string; alt: string }) => {
    if (device === 'mobile') {
      return (
        <div className="relative mx-auto w-64 h-[500px] bg-gray-800 rounded-[2.5rem] p-2 shadow-2xl">
          <div className="w-full h-full bg-white rounded-[2rem] overflow-hidden">
            <img src={src} alt={alt} className="w-full h-full object-cover" />
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-12 h-1 bg-gray-600 rounded-full"></div>
        </div>
      );
    }
    
    return (
      <div className="relative mx-auto w-full max-w-2xl bg-gray-800 rounded-t-xl p-3 shadow-2xl">
        <div className="flex space-x-2 mb-3">
          <div className="w-3 h-3 bg-red-500 rounded-full"></div>
          <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
          <div className="w-3 h-3 bg-green-500 rounded-full"></div>
        </div>
        <div className="bg-white rounded-lg overflow-hidden aspect-video">
          <img src={src} alt={alt} className="w-full h-full object-cover" />
        </div>
      </div>
    );
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
        {/* Enhanced Mathematical & Geometric Background Pattern - Same as Careers */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.015] dark:opacity-[0.03]">
          {/* Binary Earth Pattern */}
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 30% 70%, rgba(236, 110, 0, 0.08) 0%, transparent 50%), 
                             radial-gradient(circle at 70% 30%, rgba(69, 146, 255, 0.08) 0%, transparent 50%),
                             url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC6E00' fill-opacity='0.4'%3E%3Ctext x='40' y='60' font-family='JetBrains Mono, monospace' font-size='14'%3E01010110110101001101%3C/text%3E%3Ctext x='40' y='80' font-family='JetBrains Mono, monospace' font-size='14'%3E11001100101011011010%3C/text%3E%3Ctext x='40' y='100' font-family='JetBrains Mono, monospace' font-size='14'%3E10110110111001100110%3C/text%3E%3Ctext x='40' y='120' font-family='JetBrains Mono, monospace' font-size='14'%3Ef(x)=mx+b ∑∞n=1 1/n²%3C/text%3E%3Ctext x='40' y='140' font-family='JetBrains Mono, monospace' font-size='14'%3E∇²φ = ρ/ε₀ ∂²u/∂t²%3C/text%3E%3Ctext x='40' y='160' font-family='JetBrains Mono, monospace' font-size='14'%3E∫₋∞∞ e⁻ˣ² dx = √π%3C/text%3E%3Ctext x='40' y='180' font-family='JetBrains Mono, monospace' font-size='14'%3E01110111010110110101%3C/text%3E%3Ctext x='40' y='200' font-family='JetBrains Mono, monospace' font-size='14'%3ElimX→0 (sin x)/x = 1%3C/text%3E%3Ctext x='40' y='220' font-family='JetBrains Mono, monospace' font-size='14'%3E11010110100110011001%3C/text%3E%3Ctext x='40' y='240' font-family='JetBrains Mono, monospace' font-size='14'%3EE = mc² | H = -∇²/2m%3C/text%3E%3Ctext x='40' y='280' font-family='JetBrains Mono, monospace' font-size='12'%3Ewhile(true){code()}%3C/text%3E%3Ctext x='40' y='300' font-family='JetBrains Mono, monospace' font-size='12'%3Eif(dream){code.reality}%3C/text%3E%3Ctext x='40' y='320' font-family='JetBrains Mono, monospace' font-size='12'%3Efunction solve(problem)%3C/text%3E%3C/g%3E%3C/svg%3E")`
          }}></div>
          
          {/* Geometric Network Pattern with Mathematical Nodes */}
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern id="math-network-portfolio" x="0" y="0" width="200" height="200" patternUnits="userSpaceOnUse">
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
              <rect width="100%" height="100%" fill="url(#math-network-portfolio)" />
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
        
        <div className="pt-20 relative z-10">
          {/* Animated Header Section */}
          <section className="py-16 px-4" ref={headerRef}>
            <div className="container mx-auto text-center">
              <motion.h1 
                className="text-4xl md:text-6xl font-bold mb-6"
                variants={headerVariants}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
              >
                Our{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  Client Success Stories
                </span>
              </motion.h1>
              <motion.p 
                className="text-xl text-muted-foreground max-w-3xl mx-auto"
                variants={subtitleVariants}
                initial="hidden"
                animate={isHeaderInView ? "visible" : "hidden"}
              >
                Innovative solutions delivered across industries, driving measurable business impact and digital transformation success.
              </motion.p>
            </div>
          </section>

          {/* Animated Featured Case Study Carousel */}
          <section className="py-16 px-4" ref={carouselRef}>
            <div className="container mx-auto">
              <div 
                className="relative overflow-hidden"
                onMouseEnter={() => setIsCarouselPaused(true)}
                onMouseLeave={() => setIsCarouselPaused(false)}
              >
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    variants={slideVariants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    className="w-full"
                  >
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                      {/* Device Mockup */}
                      <motion.div 
                        className="order-2 lg:order-1"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={isCarouselInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
                      >
                        <DeviceMockup 
                          src={featuredCaseStudies[currentSlide]?.heroImage} 
                          device={featuredCaseStudies[currentSlide]?.deviceMockup}
                          alt={featuredCaseStudies[currentSlide]?.projectName}
                        />
                      </motion.div>
                      
                      {/* Case Study Details */}
                      <motion.div 
                        className="order-1 lg:order-2 space-y-6"
                        initial={{ opacity: 0, x: 50 }}
                        animate={isCarouselInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
                        transition={{ duration: 0.6, ease: "easeOut", delay: 0.4 }}
                      >
                        <div>
                          <Badge className="mb-4 bg-coresync-primary-light/10 text-coresync-primary-light border-coresync-primary-light/20">
                            {featuredCaseStudies[currentSlide]?.clientIndustry}
                          </Badge>
                          <h2 className="text-3xl md:text-4xl font-bold mb-4">
                            {featuredCaseStudies[currentSlide]?.projectName}
                          </h2>
                        </div>

                        <div className="space-y-3">
                          <h3 className="text-lg font-semibold flex items-center">
                            <TrendingUp className="w-5 h-5 mr-2 text-coresync-primary-light" />
                            Key Outcomes
                          </h3>
                          <ul className="space-y-2">
                            {featuredCaseStudies[currentSlide]?.keyOutcomes.map((outcome, outcomeIndex) => (
                              <motion.li 
                                key={outcomeIndex} 
                                className="flex items-center"
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.4, delay: 0.6 + (outcomeIndex * 0.1) }}
                              >
                                <CheckCircle className="w-5 h-5 mr-3 text-green-500 flex-shrink-0" />
                                <span className="text-muted-foreground">{outcome}</span>
                              </motion.li>
                            ))}
                          </ul>
                        </div>

                        <Dialog>
                          <DialogTrigger asChild>
                            <Button size="lg" className="group bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:shadow-lg transition-all duration-300">
                              Read Case Study
                              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                            </Button>
                          </DialogTrigger>
                          
                          <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                            <DialogHeader>
                              <DialogTitle className="text-2xl mb-4">{featuredCaseStudies[currentSlide]?.projectName}</DialogTitle>
                            </DialogHeader>
                            
                            <div className="space-y-8">
                              {/* Hero Image */}
                              <div className="w-full h-64 rounded-lg overflow-hidden">
                                <img 
                                  src={featuredCaseStudies[currentSlide]?.heroImage} 
                                  alt={featuredCaseStudies[currentSlide]?.projectName}
                                  className="w-full h-full object-cover"
                                />
                              </div>

                              {/* Metrics Grid */}
                              <div className="grid grid-cols-3 gap-6">
                                {featuredCaseStudies[currentSlide]?.metrics.map((metric, metricIndex) => (
                                  <div key={metricIndex} className="text-center p-4 bg-muted/50 rounded-lg">
                                    <div className="text-2xl font-bold text-coresync-primary-light mb-1">
                                      {metric.value}
                                    </div>
                                    <div className="text-sm text-muted-foreground">
                                      {metric.label}
                                    </div>
                                  </div>
                                ))}
                              </div>

                              {/* Case Study Details */}
                              <div className="grid md:grid-cols-3 gap-8">
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-red-600">Challenge</h3>
                                  <p className="text-muted-foreground">{featuredCaseStudies[currentSlide]?.challenge}</p>
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-blue-600">Solution</h3>
                                  <p className="text-muted-foreground">{featuredCaseStudies[currentSlide]?.solution}</p>
                                </div>
                                <div>
                                  <h3 className="text-lg font-semibold mb-3 text-green-600">Result</h3>
                                  <p className="text-muted-foreground">{featuredCaseStudies[currentSlide]?.result}</p>
                                </div>
                              </div>

                              {/* Testimonial */}
                              <div className="bg-gradient-to-r from-coresync-primary-light/5 to-coresync-primary-dark/5 p-6 rounded-lg border border-coresync-primary-light/20">
                                <div className="flex items-start space-x-4">
                                  <div className="flex-shrink-0">
                                    <div className="w-12 h-12 bg-coresync-primary-light/20 rounded-full flex items-center justify-center">
                                      <Star className="w-6 h-6 text-coresync-primary-light" />
                                    </div>
                                  </div>
                                  <div>
                                    <blockquote className="text-lg italic mb-4">
                                      "{featuredCaseStudies[currentSlide]?.testimonial.quote}"
                                    </blockquote>
                                    <div>
                                      <div className="font-semibold">{featuredCaseStudies[currentSlide]?.testimonial.author}</div>
                                      <div className="text-sm text-muted-foreground">
                                        {featuredCaseStudies[currentSlide]?.testimonial.position}, {featuredCaseStudies[currentSlide]?.testimonial.company}
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              {/* CTA */}
                              <div className="text-center p-8 bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10 rounded-lg">
                                <h3 className="text-xl font-semibold mb-4">Ready to Start Your Project?</h3>
                                <p className="text-muted-foreground mb-6">
                                  Let's discuss how we can help transform your business with innovative technology solutions.
                                </p>
                                <Button size="lg" className="bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                                  Contact Us Today
                                </Button>
                              </div>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </motion.div>
                    </div>
                  </motion.div>
                </AnimatePresence>

                {/* Navigation Arrows */}
                <motion.button
                  onClick={prevSlide}
                  className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  onClick={nextSlide}
                  className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-background/80 backdrop-blur-sm border border-border rounded-full flex items-center justify-center text-foreground hover:bg-background/90 transition-all duration-300 hover:scale-110"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>

                {/* Slide Indicators */}
                <div className="flex justify-center space-x-2 mt-8">
                  {featuredCaseStudies.map((_, index) => (
                    <motion.button
                      key={index}
                      onClick={() => setCurrentSlide(index)}
                      className={`w-3 h-3 rounded-full transition-all duration-300 ${
                        index === currentSlide 
                          ? 'bg-coresync-primary-light scale-125' 
                          : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                      }`}
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                    />
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Enhanced Additional Projects Grid with Scroll Animations */}
          <section className="py-16 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <motion.h2 
                  className="text-3xl md:text-4xl font-bold mb-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  More Success Stories
                </motion.h2>
                <motion.p 
                  className="text-muted-foreground max-w-2xl mx-auto"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
                  viewport={{ once: true }}
                >
                  Explore our diverse portfolio of successful projects across various industries and technologies.
                </motion.p>
              </div>

              <div 
                ref={containerRef}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8"
              >
                {additionalProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    data-index={index}
                    custom={index}
                    initial={{ opacity: 0, y: 60, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    transition={{ 
                      duration: 0.6, 
                      ease: "easeOut",
                      delay: index * 0.15
                    }}
                    viewport={{ once: true, margin: "-100px" }}
                    className="group"
                  >
                    <Card className="h-full overflow-hidden bg-card/80 backdrop-blur-sm border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 group-hover:scale-105">
                      <div className="relative overflow-hidden">
                        <div className="aspect-video overflow-hidden">
                          <img 
                            src={project.thumbnail} 
                            alt={project.title}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            loading="lazy"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
                            <Button variant="secondary" size="sm" className="opacity-90">
                              <ChevronRight className="w-4 h-4 ml-1" />
                              Read More
                            </Button>
                          </div>
                        </div>
                        
                        <CardContent className="p-6">
                          <div className="mb-3">
                            <Badge variant="outline" className="mb-2">
                              {project.industry}
                            </Badge>
                          </div>
                          
                          <h3 className="text-xl font-bold mb-3 group-hover:text-coresync-primary-light transition-colors duration-300">
                            {project.title}
                          </h3>
                          
                          <p className="text-muted-foreground">
                            {project.outcome}
                          </p>
                        </CardContent>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </section>

          {/* Contact CTA Section */}
          <section className="py-20 px-4 bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10">
            <div className="container mx-auto text-center">
              <motion.div 
                className="max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Users className="w-16 h-16 mx-auto mb-6 text-coresync-primary-light" />
                <h2 className="text-3xl md:text-4xl font-bold mb-6">
                  Ready to Join Our Success Stories?
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Partner with CoreSync Infotech to transform your business with cutting-edge technology solutions. 
                  Let's build your success story together.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:shadow-lg">
                    Start Your Project
                  </Button>
                  <Button size="lg" variant="outline">
                    Schedule Consultation
                  </Button>
                </div>
              </motion.div>
            </div>
          </section>
        </div>
        
        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default Portfolio;