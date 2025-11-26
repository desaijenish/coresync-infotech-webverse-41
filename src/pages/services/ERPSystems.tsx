import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Factory,
  Clipboard,
  Shield,
  BarChart,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const ERPSystems = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <BarChart className="w-6 h-6" />,
      title: "Real-time Analytics",
      description:
        "Get instant insights into your business performance and make informed decisions.",
    },
    {
      icon: <Clipboard className="w-6 h-6" />,
      title: "Custom Modules",
      description:
        "Build specialized modules to fit your unique business processes and requirements.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Data Security",
      description:
        "Ensure your sensitive business data is secure with robust encryption and access controls.",
    },
    {
      icon: <Factory className="w-6 h-6" />,
      title: "Scalable Infrastructure",
      description:
        "Our ERP systems are designed to grow with your business, handling increasing workloads seamlessly.",
    },
  ];

  const technologies = [
    "SAP",
    "Oracle",
    "Microsoft Dynamics",
    "SQL",
    "PostgreSQL",
    "Cloud Computing",
    "ERPNext",
    "Odoo",
    "Business Intelligence",
  ];

  const portfolio = [
    {
      title: "Manufacturing ERP",
      description:
        "A comprehensive system for managing production, inventory, and supply chain for a manufacturing company.",
      technologies: ["Custom ERP", "Manufacturing", "Supply Chain"],
      rating: 4.8,
    },
    {
      title: "Retail Management System",
      description:
        "An all-in-one solution for retail operations, including POS, inventory, and customer management.",
      technologies: ["Retail", "Inventory Management", "POS"],
      rating: 4.7,
    },
    {
      title: "Healthcare ERP",
      description:
        "A system tailored for hospitals to manage patient records, appointments, billing, and resources.",
      technologies: ["Healthcare", "Patient Management", "Billing"],
      rating: 4.9,
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
                <div className="flex items-center justify-center mb-6">
                  <Factory className="w-12 h-12 text-Coresyncro-primary-light mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                    ERP{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                      Systems
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Streamline and integrate your core business processes with our
                  custom-built Enterprise Resource Planning (ERP) systems.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      40+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      ERP Implementations
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">Uptime</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      100%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Custom Solutions
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      20%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Productivity Boost
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Overview Section */}
          <section className="py-20 px-4 bg-muted/30">
            <div className="container mx-auto">
              <div
                data-index="1"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[1]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Integrated{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Business Management
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our ERP solutions centralize data and automate key functions
                  like finance, HR, and supply chain, providing a unified view
                  of your operations.
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {features.map((feature, index) => (
                  <div
                    key={index}
                    data-index={index + 2}
                    className={`transition-all duration-700 ${
                      visibleItems[index + 2]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <div className="p-3 bg-gradient-to-r from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 rounded-lg mr-4">
                            {feature.icon}
                          </div>
                          <h3 className="text-xl font-bold">{feature.title}</h3>
                        </div>
                        <p className="text-muted-foreground">
                          {feature.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                ))}
              </div>
            </div>
          </section>

          {/* Technologies Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto">
              <div
                data-index="6"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[6]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Expertise
                  </span>
                </h2>
                <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
                  {technologies.map((tech, index) => (
                    <Badge
                      key={index}
                      variant="outline"
                      className="text-sm py-2 px-4"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </section>

          {/* Portfolio Section */}
          <section className="py-20 px-4 bg-muted/30">
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
                  Case{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Studies
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {portfolio.map((project, index) => (
                  <div
                    key={index}
                    data-index={index + 8}
                    className={`transition-all duration-700 ${
                      visibleItems[index + 8]
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-12"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center justify-between mb-4">
                          <Trophy className="w-6 h-6 text-Coresyncro-primary-light" />
                          <div className="flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500" />
                            <span className="text-sm font-medium">
                              {project.rating}
                            </span>
                          </div>
                        </div>
                        <h3 className="text-xl font-bold mb-3">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-1">
                          {project.technologies.map((tech, techIndex) => (
                            <Badge
                              key={techIndex}
                              variant="outline"
                              className="text-xs"
                            >
                              {tech}
                            </Badge>
                          ))}
                        </div>
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
                data-index="11"
                className={`transition-all duration-700 ${
                  visibleItems[11]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Simplify and Scale Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    ERP
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Get a custom ERP system that works for your business, not the
                  other way around.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Request a Demo
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg"
                  >
                    Learn More
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

export default ERPSystems;
