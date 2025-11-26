import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Globe,
  Code2,
  Palette,
  Zap,
  Database,
  Shield,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  TrendingUp,
  Monitor,
  Layers,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const WebDevelopment = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const subServices = [
    {
      id: 1,
      name: "React.js Development",
      description:
        "Dynamic, interactive web applications with component-based architecture",
      icon: <Code2 className="w-8 h-8" />,
      technologies: ["React", "Redux", "Context API", "React Router"],
      link: "/services/react-development",
      projects: 25,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Next.js Development",
      description:
        "Full-stack React applications with server-side rendering and optimization",
      icon: <Globe className="w-8 h-8" />,
      technologies: ["Next.js", "SSR", "API Routes", "Vercel"],
      link: "/services/nextjs-development",
      projects: 18,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Vite Development",
      description:
        "Lightning-fast development experience with modern build tooling",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Vite", "ES Modules", "HMR", "Build Optimization"],
      link: "/services/vite-development",
      projects: 15,
      rating: 4.7,
    },
    {
      id: 4,
      name: "Tailwind CSS",
      description: "Utility-first CSS framework for rapid UI development",
      icon: <Palette className="w-8 h-8" />,
      technologies: [
        "Tailwind CSS",
        "PostCSS",
        "Custom Components",
        "Design Systems",
      ],
      link: "/services/tailwind-development",
      projects: 30,
      rating: 4.9,
    },
    {
      id: 5,
      name: "JavaScript Solutions",
      description:
        "Modern JavaScript applications with ES6+ features and best practices",
      icon: <Code2 className="w-8 h-8" />,
      technologies: ["ES6+", "Async/Await", "Modules", "Web APIs"],
      link: "/services/javascript-development",
      projects: 40,
      rating: 4.8,
    },
    {
      id: 6,
      name: "TypeScript Development",
      description: "Type-safe JavaScript development for scalable applications",
      icon: <Shield className="w-8 h-8" />,
      technologies: [
        "TypeScript",
        "Type Definitions",
        "Interfaces",
        "Generics",
      ],
      link: "/services/typescript-development",
      projects: 22,
      rating: 4.9,
    },
  ];

  const benefits = [
    "Responsive & mobile-first design",
    "SEO optimization & performance",
    "Cross-browser compatibility",
    "Progressive Web App (PWA) features",
    "Modern development practices",
    "Scalable & maintainable code",
  ];

  const process = [
    {
      title: "Discovery & Strategy",
      description: "Understanding requirements and defining project scope",
    },
    {
      title: "Design & Prototyping",
      description: "Creating wireframes, mockups, and interactive prototypes",
    },
    {
      title: "Development",
      description: "Building with modern frameworks and best practices",
    },
    {
      title: "Testing & Optimization",
      description: "Performance testing and cross-browser validation",
    },
    {
      title: "Launch & Deployment",
      description: "Production deployment and go-live support",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing updates and technical support",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleItems((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const items = containerRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
        {/* Animated Background Shapes */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-20 right-10 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-Coresyncro-primary-dark to-Coresyncro-primary-light rotate-12 animate-float"></div>
          </div>
          <div className="absolute bottom-40 left-20 w-24 h-24 opacity-10">
            <div
              className="w-full h-full bg-gradient-to-br from-Coresyncro-primary-light to-Coresyncro-primary-dark rounded-full animate-float"
              style={{ animationDelay: "1.5s" }}
            ></div>
          </div>
        </div>

        <Navbar />
        <BackgroundEffects />

        <div className="pt-20 relative z-10" ref={containerRef}>
          {/* Hero Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div
                data-index="0"
                className={`transition-all duration-700 ${
                  visibleItems[0]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h1 className="text-4xl md:text-6xl font-bold mb-6">
                  Web{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Development
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Create stunning, high-performance web applications that
                  deliver exceptional user experiences. Our expertise spans
                  modern frameworks, responsive design, and cutting-edge web
                  technologies.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      150+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Websites Launched
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      99.8%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Uptime Score
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      50ms
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg Load Time
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Satisfaction
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Service Overview */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div
                data-index="1"
                className={`max-w-4xl mx-auto text-center transition-all duration-700 ${
                  visibleItems[1]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-8">
                  Building The Future{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    of Web
                  </span>
                </h2>
                <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                  <p>
                    In today's digital landscape, your website is often the
                    first impression customers have of your business. Our web
                    development services create powerful, scalable web
                    applications that not only look stunning but perform
                    exceptionally across all devices and browsers.
                  </p>
                  <p>
                    We specialize in modern web technologies that prioritize
                    speed, accessibility, and user experience. From static
                    websites to complex web applications, e-commerce platforms
                    to content management systems, our team delivers solutions
                    that drive results and grow with your business.
                  </p>
                  <p>
                    Whether you're looking to establish your online presence,
                    modernize an existing website, or build sophisticated web
                    applications with advanced functionality, we have the
                    expertise to bring your vision to life with cutting-edge
                    technology and best practices.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Sub-Services Grid */}
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div
                data-index="2"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[2]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Web Development{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Technologies
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Master the latest web technologies and frameworks for modern,
                  scalable applications
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {subServices.map((service, index) => (
                  <div
                    key={service.id}
                    data-index={index + 3}
                    className={`transition-all duration-700 ${
                      visibleItems[index + 3]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-Coresyncro-primary-light/10 transition-all duration-500 hover:-translate-y-2 group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-r from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 rounded-lg group-hover:from-Coresyncro-primary-light/30 group-hover:to-Coresyncro-primary-dark/30 transition-all duration-300">
                            {service.icon}
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                              {service.rating}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-Coresyncro-primary-light transition-colors duration-300">
                          {service.name}
                        </h3>

                        <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                          {service.description}
                        </p>

                        <div className="mb-4">
                          <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                            Technologies
                          </div>
                          <div className="flex flex-wrap gap-1">
                            {service.technologies.map((tech, techIndex) => (
                              <Badge
                                key={techIndex}
                                variant="outline"
                                className="text-xs"
                              >
                                {tech}
                              </Badge>
                            ))}
                          </div>
                        </div>

                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-1 text-sm text-muted-foreground">
                            <Trophy className="w-4 h-4" />
                            {service.projects} projects
                          </div>
                        </div>

                        <Link to={service.link}>
                          <Button className="w-full group-hover:bg-Coresyncro-primary-light group-hover:text-white transition-all duration-300">
                            Learn More
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </Link>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Portfolio/Case Studies */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div
                data-index="9"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[9]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Featured{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Projects
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Showcase of successful web applications and their impact
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  data-index="10"
                  className={`transition-all duration-700 ${
                    visibleItems[10]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 rounded-lg mb-4 flex items-center justify-center">
                        <Monitor className="w-16 h-16 text-Coresyncro-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        TechCorp Dashboard
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Enterprise analytics platform built with React and
                        TypeScript. Real-time data visualization with 50ms
                        response time.
                      </p>
                      <div className="text-sm text-Coresyncro-primary-light font-medium">
                        +85% operational efficiency • 10K+ daily users
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="11"
                  className={`transition-all duration-700 ${
                    visibleItems[11]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-Coresyncro-primary-dark/20 to-Coresyncro-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
                        <Globe className="w-16 h-16 text-Coresyncro-primary-dark" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        EduLearn Platform
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Online learning platform with Next.js SSR. Supports
                        100K+ concurrent users with seamless video streaming.
                      </p>
                      <div className="text-sm text-Coresyncro-primary-light font-medium">
                        +300% student engagement • 1M+ course completions
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="12"
                  className={`transition-all duration-700 ${
                    visibleItems[12]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 rounded-lg mb-4 flex items-center justify-center">
                        <Layers className="w-16 h-16 text-Coresyncro-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        RetailMax E-commerce
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Modern e-commerce solution with PWA features.
                        Mobile-first design achieving 98% performance score.
                      </p>
                      <div className="text-sm text-Coresyncro-primary-light font-medium">
                        +180% conversion rate • $2M+ revenue growth
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Client Testimonials */}
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div
                data-index="13"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[13]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Client{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Success Stories
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                  data-index="14"
                  className={`transition-all duration-700 ${
                    visibleItems[14]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "The web application they built transformed our business
                        operations. Performance is exceptional and our team
                        productivity increased by 85%."
                      </p>
                      <div>
                        <div className="font-semibold">Marcus Johnson</div>
                        <div className="text-sm text-muted-foreground">
                          CTO, TechCorp
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="15"
                  className={`transition-all duration-700 ${
                    visibleItems[15]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "Outstanding development team. They delivered a robust
                        learning platform that scales beautifully with our
                        growing user base."
                      </p>
                      <div>
                        <div className="font-semibold">Dr. Amanda Lee</div>
                        <div className="text-sm text-muted-foreground">
                          Founder, EduLearn
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="16"
                  className={`transition-all duration-700 ${
                    visibleItems[16]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star
                            key={star}
                            className="w-4 h-4 text-yellow-500 fill-current"
                          />
                        ))}
                      </div>
                      <p className="text-muted-foreground mb-4 italic">
                        "Incredible attention to detail and performance
                        optimization. Our e-commerce site now loads in
                        milliseconds and conversions have doubled."
                      </p>
                      <div>
                        <div className="font-semibold">David Chen</div>
                        <div className="text-sm text-muted-foreground">
                          CEO, RetailMax
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </section>

          {/* Key Benefits */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div
                data-index="17"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[17]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Web Development
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    data-index={index + 18}
                    className={`flex items-center gap-3 p-4 bg-muted/20 rounded-lg transition-all duration-700 ${
                      visibleItems[index + 18]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-Coresyncro-primary-light flex-shrink-0" />
                    <span className="font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Development Process */}
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div
                data-index="24"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[24]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Development{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Process
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 25}
                    className={`relative transition-all duration-700 ${
                      visibleItems[index + 25]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
                            {index + 1}
                          </div>
                          <h3 className="text-lg font-bold">{step.title}</h3>
                        </div>
                        <p className="text-muted-foreground text-sm">
                          {step.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div
                data-index="31"
                className={`transition-all duration-700 ${
                  visibleItems[31]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Web Application?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's create a powerful web presence that drives results and
                  exceeds expectations.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Start Your Project
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg"
                  >
                    View Portfolio
                  </Button>
                </div>
              </div>
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </ThemeProvider>
  );
};

export default WebDevelopment;
