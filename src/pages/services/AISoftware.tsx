import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Brain,
  Database,
  Users,
  BarChart3,
  Settings,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  TrendingUp,
  Cog,
  Activity,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const ComputerSoftware = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const subServices = [
    {
      id: 1,
      name: "AI/ML Solutions",
      description:
        "Intelligent automation and machine learning solutions for business optimization",
      icon: <Brain className="w-8 h-8" />,
      technologies: ["Python", "TensorFlow", "PyTorch", "Scikit-learn"],
      link: "/services/ai-ml-solutions",
      projects: 20,
      rating: 4.9,
    },
    {
      id: 2,
      name: "ERP Systems",
      description:
        "Comprehensive enterprise resource planning solutions for streamlined operations",
      icon: <Settings className="w-8 h-8" />,
      technologies: ["SAP", "Oracle", "Microsoft Dynamics", "Custom ERP"],
      link: "/services/erp-systems",
      projects: 15,
      rating: 4.8,
    },
    {
      id: 3,
      name: "CRM Software",
      description:
        "Customer relationship management systems to enhance client interactions",
      icon: <Users className="w-8 h-8" />,
      technologies: ["Salesforce", "HubSpot", "Zoho", "Custom CRM"],
      link: "/services/crm-software",
      projects: 25,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Business Analytics",
      description:
        "Data-driven insights and reporting solutions for informed decision making",
      icon: <BarChart3 className="w-8 h-8" />,
      technologies: ["Power BI", "Tableau", "Qlik Sense", "Custom Analytics"],
      link: "/services/business-analytics",
      projects: 18,
      rating: 4.8,
    },
  ];

  const benefits = [
    "Scalable enterprise architecture",
    "Data security & compliance",
    "Custom workflow automation",
    "Real-time reporting & analytics",
    "Cloud & on-premise deployment",
    "24/7 technical support",
  ];

  const process = [
    {
      title: "Requirements Analysis",
      description: "Comprehensive business needs assessment",
    },
    {
      title: "System Architecture",
      description: "Designing scalable and secure software architecture",
    },
    {
      title: "Development & Integration",
      description: "Building robust software with seamless integrations",
    },
    {
      title: "Testing & Quality Assurance",
      description: "Rigorous testing for reliability and performance",
    },
    {
      title: "Deployment & Training",
      description: "Go-live support and user training programs",
    },
    {
      title: "Maintenance & Support",
      description: "Ongoing support and system optimization",
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
          <div className="absolute top-32 left-16 w-28 h-28 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark rotate-45 animate-float"></div>
          </div>
          <div className="absolute bottom-32 right-16 w-20 h-20 opacity-10">
            <div
              className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light rounded-full animate-float"
              style={{ animationDelay: "2s" }}
            ></div>
          </div>
        </div>
        <Navbar />
        <BackgroundEffects /> {/* <-- Yaha daal diya */}
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
                  Computer{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Software
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Empower your business with intelligent software solutions that
                  automate processes, enhance productivity, and provide
                  actionable insights for strategic decision-making.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      78+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Software Solutions
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      95%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Efficiency Improvement
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      500K+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Users Served
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      System Reliability
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
                  Intelligent Software{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    For Modern Business
                  </span>
                </h2>
                <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                  <p>
                    In an era where data drives decisions and automation defines
                    efficiency, custom software solutions have become essential
                    for competitive advantage. Our computer software development
                    services create sophisticated systems that streamline
                    operations, optimize workflows, and unlock the full
                    potential of your business data.
                  </p>
                  <p>
                    From AI-powered analytics platforms to comprehensive
                    enterprise resource planning systems, we build software that
                    adapts to your unique business processes. Our solutions
                    integrate seamlessly with existing infrastructure while
                    providing the flexibility to scale and evolve with your
                    organization's changing needs.
                  </p>
                  <p>
                    Whether you're looking to implement intelligent automation,
                    enhance customer relationship management, or gain deeper
                    insights through advanced analytics, our team delivers
                    enterprise-grade software solutions that drive measurable
                    results and long-term success.
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
                  Our Software{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Solutions
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive software solutions tailored to your business
                  needs
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
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
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-coresync-primary-light/10 transition-all duration-500 hover:-translate-y-2 group">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <div className="p-3 bg-gradient-to-r from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg group-hover:from-coresync-primary-light/30 group-hover:to-coresync-primary-dark/30 transition-all duration-300">
                            {service.icon}
                          </div>
                          <div className="flex items-center gap-2">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                              {service.rating}
                            </span>
                          </div>
                        </div>

                        <h3 className="text-xl font-bold mb-3 group-hover:text-coresync-primary-light transition-colors duration-300">
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
                          <Button className="w-full group-hover:bg-coresync-primary-light group-hover:text-white transition-all duration-300">
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
                data-index="7"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[7]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Enterprise{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Success Stories
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Transformative software solutions driving business growth
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  data-index="8"
                  className={`transition-all duration-700 ${
                    visibleItems[8]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg mb-4 flex items-center justify-center">
                        <Brain className="w-16 h-16 text-coresync-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        SmartFactory AI
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        AI-powered manufacturing optimization system reducing
                        downtime by 40% and improving quality control through
                        predictive analytics.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        +40% efficiency • $5M cost savings annually
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="9"
                  className={`transition-all duration-700 ${
                    visibleItems[9]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "100ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-coresync-primary-dark/20 to-coresync-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
                        <Cog className="w-16 h-16 text-coresync-primary-dark" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        GlobalTrade ERP
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Comprehensive ERP system managing 50+ locations
                        worldwide. Streamlined operations with real-time
                        inventory and financial reporting.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        +60% process efficiency • 50+ locations integrated
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="10"
                  className={`transition-all duration-700 ${
                    visibleItems[10]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                  style={{ transitionDelay: "200ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg mb-4 flex items-center justify-center">
                        <Activity className="w-16 h-16 text-coresync-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        DataInsight Analytics
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Advanced business intelligence platform processing 1TB+
                        daily data with real-time dashboards and predictive
                        modeling.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        +250% faster insights • 1TB+ data processed daily
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
                data-index="11"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[11]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  What Enterprise Leaders{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Say
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                  data-index="12"
                  className={`transition-all duration-700 ${
                    visibleItems[12]
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
                        "The AI solution transformed our manufacturing process.
                        We've seen 40% reduction in downtime and $5M in annual
                        cost savings."
                      </p>
                      <div>
                        <div className="font-semibold">Robert Thompson</div>
                        <div className="text-sm text-muted-foreground">
                          COO, SmartFactory Industries
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="13"
                  className={`transition-all duration-700 ${
                    visibleItems[13]
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
                        "Exceptional ERP implementation. They seamlessly
                        integrated all our global operations into one cohesive
                        system."
                      </p>
                      <div>
                        <div className="font-semibold">Maria Gonzalez</div>
                        <div className="text-sm text-muted-foreground">
                          CTO, GlobalTrade Corp
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div
                  data-index="14"
                  className={`transition-all duration-700 ${
                    visibleItems[14]
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
                        "Their analytics platform revolutionized our
                        decision-making process. We now get insights 250% faster
                        than before."
                      </p>
                      <div>
                        <div className="font-semibold">Dr. James Wilson</div>
                        <div className="text-sm text-muted-foreground">
                          Chief Data Officer, DataInsight
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
                data-index="15"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[15]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Software Solutions
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    data-index={index + 16}
                    className={`flex items-center gap-3 p-4 bg-muted/20 rounded-lg transition-all duration-700 ${
                      visibleItems[index + 16]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <CheckCircle className="w-5 h-5 text-coresync-primary-light flex-shrink-0" />
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
                data-index="22"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[22]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our Development{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Process
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {process.map((step, index) => (
                  <div
                    key={index}
                    data-index={index + 23}
                    className={`relative transition-all duration-700 ${
                      visibleItems[index + 23]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center gap-3 mb-4">
                          <div className="w-8 h-8 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white rounded-full flex items-center justify-center text-sm font-bold">
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
                data-index="29"
                className={`transition-all duration-700 ${
                  visibleItems[29]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Transform Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Business?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's build intelligent software solutions that drive
                  efficiency and growth.
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

export default ComputerSoftware;
