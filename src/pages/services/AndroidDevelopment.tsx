import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Code,
  Zap,
  Shield,
  Users,
  Rocket,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Clock,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const Android = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Code className="w-6 h-6" />,
      title: "Native Performance",
      description:
        "Built with Kotlin and Java for optimal performance and platform integration",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "Security First",
      description:
        "Advanced security features and data protection for enterprise applications",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Fast Development",
      description:
        "Rapid prototyping and iterative development for quick time-to-market",
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Material Design",
      description:
        "Beautiful, intuitive interfaces following Google's Material Design guidelines",
    },
  ];

  const technologies = [
    "Kotlin",
    "Java",
    "Android Studio",
    "Jetpack Compose",
    "Room Database",
    "Retrofit",
    "Firebase",
    "Material Design",
    "Dagger/Hilt",
    "Coroutines",
  ];

  const portfolio = [
    {
      title: "E-commerce Mobile App",
      description: "Feature-rich shopping app with payment gateway integration",
      technologies: ["Kotlin", "Firebase", "Stripe"],
      rating: 4.9,
    },
    {
      title: "Healthcare Management System",
      description: "HIPAA-compliant medical app for patient management",
      technologies: ["Java", "Room", "Security"],
      rating: 4.8,
    },
    {
      title: "Social Media Platform",
      description: "Real-time messaging and content sharing application",
      technologies: ["Kotlin", "WebRTC", "Push Notifications"],
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
                <div className="flex items-center justify-center mb-6">
                  <Smartphone className="w-12 h-12 text-coresync-primary-light mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Android{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                      Development
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Build powerful, scalable Android applications that deliver
                  exceptional user experiences and drive business growth on the
                  world's most popular mobile platform.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      2.8B+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Android Users
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      150+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Apps Developed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      99.9%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Uptime Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      4.8★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Average Rating
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
                  Native Android{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Excellence
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our Android development expertise spans from native app
                  development using Kotlin and Java to modern Jetpack Compose UI
                  frameworks. We create high-performance applications that
                  leverage the full potential of the Android ecosystem.
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
                          <div className="p-3 bg-gradient-to-r from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg mr-4">
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
                  Technologies &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Tools
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
                  Success{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Stories
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
                          <Trophy className="w-6 h-6 text-coresync-primary-light" />
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
                  Ready to Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Android App?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's create a powerful Android application that engages users
                  and drives your business forward.
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

export default Android;
