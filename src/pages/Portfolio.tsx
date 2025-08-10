import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  ExternalLink,
  Github,
  Monitor,
  Smartphone,
  Tablet,
  Users,
  Zap,
  Target,
  TrendingUp,
} from "lucide-react";

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const [activeFilter, setActiveFilter] = useState<string>("all");
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "Salesforce Lead Management Revolution",
      tagline: "Streamlined lead pipeline with 70% conversion improvement",
      description:
        "Comprehensive Salesforce implementation featuring custom lead scoring, automated workflow triggers, and intelligent lead assignment. Integrated with marketing automation to create seamless customer journeys from first touch to closed deal.",
      image:
        "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=600",
      technologies: [
        "Salesforce",
        "Apex",
        "Lightning Web Components",
        "Marketing Cloud",
        "Pardot",
      ],
      category: "salesforce",
      device: "monitor",
      size: "large",
      impact: "70% increase in lead conversion",
      roi: "$2.4M annual revenue lift",
      timeframe: "6 months",
      role: "Lead Salesforce Developer & Architect",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 2,
      title: "HubSpot Sales Automation Suite",
      tagline: "Reduced manual tasks by 85% with intelligent automation",
      description:
        "End-to-end HubSpot automation including deal progression workflows, automated follow-up sequences, and integrated sales reporting. Custom property management and advanced segmentation for personalized customer experiences.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=800",
      technologies: [
        "HubSpot",
        "Workflows",
        "Custom Properties",
        "API Integrations",
        "Sales Hub",
      ],
      category: "hubspot",
      device: "tablet",
      size: "medium",
      impact: "85% reduction in manual tasks",
      roi: "300+ hours saved monthly",
      timeframe: "4 months",
      role: "HubSpot Automation Specialist",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 3,
      title: "Multi-Platform CRM Integration",
      tagline: "Unified customer data across 5 systems",
      description:
        "Complex integration project connecting Salesforce, HubSpot, Zendesk, and custom applications. Real-time data synchronization, duplicate prevention, and unified customer 360° view for enhanced customer service.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=700&h=500",
      technologies: [
        "Zapier",
        "REST APIs",
        "Webhooks",
        "Data Mapping",
        "Error Handling",
      ],
      category: "integration",
      device: "monitor",
      size: "small",
      impact: "Unified customer view",
      roi: "40% faster issue resolution",
      timeframe: "8 months",
      role: "Integration Architect",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 4,
      title: "Automated Lead Nurturing Engine",
      tagline: "Intelligent lead scoring with predictive analytics",
      description:
        "AI-powered lead nurturing system with behavioral tracking, engagement scoring, and automated content delivery. Integrated with CRM for seamless handoff to sales teams when leads reach optimal conversion probability.",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=700",
      technologies: [
        "Machine Learning",
        "Behavioral Analytics",
        "Email Automation",
        "Predictive Scoring",
      ],
      category: "automation",
      device: "smartphone",
      size: "medium",
      impact: "92% lead qualification accuracy",
      roi: "45% increase in qualified leads",
      timeframe: "5 months",
      role: "Automation Engineer & Data Scientist",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 5,
      title: "Enterprise Sales Pipeline Optimization",
      tagline: "Optimized complex B2B sales processes",
      description:
        "Complete overhaul of enterprise sales pipeline with custom stage definitions, automated probability calculations, and predictive deal forecasting. Integrated commission tracking and sales performance analytics.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&h=600",
      technologies: [
        "Salesforce",
        "Einstein Analytics",
        "Custom Objects",
        "Validation Rules",
        "Process Builder",
      ],
      category: "salesforce",
      device: "monitor",
      size: "large",
      impact: "35% shorter sales cycle",
      roi: "$1.8M additional revenue",
      timeframe: "7 months",
      role: "Senior Salesforce Consultant",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
    {
      id: 6,
      title: "Customer Support Automation",
      tagline: "24/7 intelligent customer service",
      description:
        "Comprehensive support automation with intelligent ticket routing, automated responses, and escalation workflows. Integration with knowledge base and live chat for seamless customer experience.",
      image:
        "https://images.unsplash.com/photo-1553775282-20af80779df7?w=600&h=500",
      technologies: [
        "Zendesk",
        "Chatbot Integration",
        "Knowledge Base",
        "SLA Management",
        "Reporting",
      ],
      category: "automation",
      device: "tablet",
      size: "small",
      impact: "65% faster response time",
      roi: "50% reduction in support costs",
      timeframe: "3 months",
      role: "Support Automation Specialist",
      liveUrl: "#",
      caseStudyUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "All Projects", icon: Target },
    { id: "salesforce", name: "Salesforce", icon: Users },
    { id: "hubspot", name: "HubSpot", icon: TrendingUp },
    { id: "integration", name: "Integration", icon: Zap },
    { id: "automation", name: "Automation", icon: Monitor },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const DeviceIcon = ({ device }: { device: string }) => {
    switch (device) {
      case "smartphone":
        return <Smartphone className="w-4 h-4" />;
      case "tablet":
        return <Tablet className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(
              entry.target.getAttribute("data-index") || "0"
            );
            setVisibleProjects((prev) => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = containerRef.current?.querySelectorAll("[data-index]");
    projectCards?.forEach((card) => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <ThemeProvider>
      <TooltipProvider>
        <div className="min-h-screen bg-background text-foreground transition-colors duration-300 relative overflow-hidden">
          {/* Animated Background Shapes */}
          <div className="fixed inset-0 pointer-events-none overflow-hidden">
            <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark rotate-45 animate-float"></div>
            </div>
            <div className="absolute top-40 right-20 w-24 h-24 opacity-10">
              <div
                className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light rounded-full animate-float"
                style={{ animationDelay: "1s" }}
              ></div>
            </div>
            <div className="absolute bottom-40 left-1/4 w-20 h-20 opacity-10">
              <div
                className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark clip-path-triangle animate-float"
                style={{ animationDelay: "2s" }}
              ></div>
            </div>
            <div className="absolute top-60 right-1/3 w-16 h-16 opacity-10">
              <div
                className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light transform rotate-12 animate-float"
                style={{ animationDelay: "0.5s" }}
              ></div>
            </div>
          </div>

          <Navbar />

          <div className="pt-20 relative z-10">
            <section className="py-20 px-4">
              <div className="container mx-auto">
                {/* Hero Section */}
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    CRM & Automation{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                      Excellence
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-4xl mx-auto animate-fade-in mb-8">
                    Delivering transformative CRM solutions and intelligent
                    automation that streamline operations, optimize customer
                    relationships, and drive measurable business growth.
                  </p>

                  {/* Key Stats */}
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-12">
                    <div
                      className="text-center animate-fade-in"
                      style={{ animationDelay: "0.2s" }}
                    >
                      <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                        $8.2M+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Revenue Generated
                      </div>
                    </div>
                    <div
                      className="text-center animate-fade-in"
                      style={{ animationDelay: "0.4s" }}
                    >
                      <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                        85%
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Avg. Efficiency Gain
                      </div>
                    </div>
                    <div
                      className="text-center animate-fade-in"
                      style={{ animationDelay: "0.6s" }}
                    >
                      <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                        50+
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Successful Implementations
                      </div>
                    </div>
                    <div
                      className="text-center animate-fade-in"
                      style={{ animationDelay: "0.8s" }}
                    >
                      <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                        24/7
                      </div>
                      <div className="text-sm text-muted-foreground">
                        Automated Processes
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Filter */}
                <div className="mb-12">
                  <Tabs
                    value={activeFilter}
                    onValueChange={setActiveFilter}
                    className="w-full"
                  >
                    <TabsList className="grid grid-cols-5 max-w-2xl mx-auto mb-8">
                      {categories.map((category) => {
                        const IconComponent = category.icon;
                        return (
                          <TabsTrigger
                            key={category.id}
                            value={category.id}
                            className="flex items-center gap-2"
                          >
                            <IconComponent className="w-4 h-4" />
                            <span className="hidden sm:inline">
                              {category.name}
                            </span>
                          </TabsTrigger>
                        );
                      })}
                    </TabsList>
                  </Tabs>
                </div>

                {/* Projects Grid */}
                <div
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
                >
                  {filteredProjects.map((project, index) => (
                    <Dialog key={project.id}>
                      <div
                        data-index={index}
                        className={`group transition-all duration-700 transform-gpu ${
                          visibleProjects[index]
                            ? "opacity-100 translate-y-0 scale-100"
                            : "opacity-0 translate-y-12 scale-95"
                        }`}
                        style={{
                          transitionDelay: visibleProjects[index]
                            ? `${index * 100}ms`
                            : "0ms",
                        }}
                      >
                        <Card className="h-full flex flex-col bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-2xl hover:shadow-coresync-primary-light/10 transition-all duration-500 hover:-translate-y-2 group overflow-hidden">
                          {/* Project Image */}
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                              loading="lazy"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

                            {/* Device Icon */}
                            <div className="absolute top-4 right-4 p-2 bg-background/90 backdrop-blur-sm rounded-full shadow-lg">
                              <DeviceIcon device={project.device} />
                            </div>

                            {/* Category Badge */}
                            <div className="absolute top-4 left-4">
                              <Badge
                                variant="secondary"
                                className="bg-coresync-primary-light/20 text-white border-white/30 backdrop-blur-sm"
                              >
                                {project.category.charAt(0).toUpperCase() +
                                  project.category.slice(1)}
                              </Badge>
                            </div>
                          </div>

                          <CardContent className="p-6 flex-1 flex flex-col">
                            {/* Project Title */}
                            <h3 className="text-xl font-bold mb-3 group-hover:text-coresync-primary-light transition-colors duration-300 line-clamp-2">
                              {project.title}
                            </h3>

                            {/* Short Description */}
                            <p className="text-muted-foreground mb-4 text-sm leading-relaxed line-clamp-2 flex-1">
                              {project.tagline}
                            </p>

                            {/* Key Technologies */}
                            <div className="mb-4">
                              <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                                Technologies
                              </div>
                              <div className="flex flex-wrap gap-1">
                                {project.technologies
                                  .slice(0, 3)
                                  .map((tech, techIndex) => (
                                    <Badge
                                      key={techIndex}
                                      variant="outline"
                                      className="text-xs px-2 py-1 hover:bg-coresync-primary-light/10 transition-colors duration-200"
                                    >
                                      {tech}
                                    </Badge>
                                  ))}
                                {project.technologies.length > 3 && (
                                  <Badge
                                    variant="outline"
                                    className="text-xs px-2 py-1"
                                  >
                                    +{project.technologies.length - 3}
                                  </Badge>
                                )}
                              </div>
                            </div>

                            {/* Role & Impact */}
                            <div className="mb-6">
                              <div className="text-xs font-medium text-muted-foreground mb-2 uppercase tracking-wide">
                                Role & Impact
                              </div>
                              <div className="text-sm font-medium text-coresync-primary-light mb-1">
                                {project.role}
                              </div>
                              <div className="text-xs text-muted-foreground">
                                {project.impact}
                              </div>
                            </div>

                            {/* View Details Button */}
                            <div className="mt-auto">
                              <DialogTrigger asChild>
                                <Button
                                  variant="outline"
                                  size="sm"
                                  className="w-full group-hover:bg-coresync-primary-light group-hover:text-white group-hover:border-coresync-primary-light transition-all duration-300"
                                >
                                  View Details
                                  <ExternalLink className="w-3 h-3 ml-2" />
                                </Button>
                              </DialogTrigger>
                            </div>
                          </CardContent>
                        </Card>
                      </div>

                      {/* Project Detail Modal */}
                      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-3xl mb-2">
                            {project.title}
                          </DialogTitle>
                          <p className="text-lg text-coresync-primary-light font-medium">
                            {project.tagline}
                          </p>
                        </DialogHeader>

                        <div className="grid md:grid-cols-2 gap-8">
                          <div className="space-y-6">
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full rounded-lg shadow-lg"
                            />

                            {/* Key Metrics */}
                            <div className="grid grid-cols-2 gap-4">
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <div className="text-sm text-muted-foreground mb-1">
                                  Impact
                                </div>
                                <div className="font-semibold text-coresync-primary-light">
                                  {project.impact}
                                </div>
                              </div>
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <div className="text-sm text-muted-foreground mb-1">
                                  ROI
                                </div>
                                <div className="font-semibold text-coresync-primary-light">
                                  {project.roi}
                                </div>
                              </div>
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <div className="text-sm text-muted-foreground mb-1">
                                  Timeline
                                </div>
                                <div className="font-semibold">
                                  {project.timeframe}
                                </div>
                              </div>
                              <div className="bg-muted/50 p-4 rounded-lg">
                                <div className="text-sm text-muted-foreground mb-1">
                                  Role
                                </div>
                                <div className="font-semibold">
                                  {project.role}
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="space-y-6">
                            <div>
                              <h4 className="text-lg font-semibold mb-3">
                                Project Overview
                              </h4>
                              <p className="text-muted-foreground leading-relaxed">
                                {project.description}
                              </p>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">
                                Technologies & Solutions
                              </h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <Badge
                                    key={index}
                                    variant="outline"
                                    className="px-3 py-1"
                                  >
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="text-lg font-semibold mb-3">
                                Business Outcomes
                              </h4>
                              <div className="space-y-2">
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-coresync-primary-light rounded-full"></div>
                                  <span className="text-sm">
                                    Streamlined operational efficiency
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-coresync-primary-light rounded-full"></div>
                                  <span className="text-sm">
                                    Enhanced customer relationship management
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-coresync-primary-light rounded-full"></div>
                                  <span className="text-sm">
                                    Improved data visibility and reporting
                                  </span>
                                </div>
                                <div className="flex items-center gap-2">
                                  <div className="w-2 h-2 bg-coresync-primary-light rounded-full"></div>
                                  <span className="text-sm">
                                    Automated workflow optimization
                                  </span>
                                </div>
                              </div>
                            </div>

                            <div className="flex gap-3 pt-4">
                              <Button asChild className="flex-1">
                                <a
                                  href={project.liveUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View Demo
                                </a>
                              </Button>
                              <Button
                                variant="outline"
                                asChild
                                className="flex-1"
                              >
                                <a
                                  href={project.caseStudyUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                >
                                  <Target className="w-4 h-4 mr-2" />
                                  Full Case Study
                                </a>
                              </Button>
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  ))}
                </div>
              </div>
            </section>
          </div>

          <Footer />
        </div>
      </TooltipProvider>
    </ThemeProvider>
  );
};

export default Portfolio;
