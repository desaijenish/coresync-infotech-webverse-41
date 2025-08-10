import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Link } from "react-router-dom";
import {
  Smartphone,
  Apple,
  Download,
  Code,
  Zap,
  Users,
  Trophy,
  ArrowRight,
  CheckCircle,
  Star,
  TrendingUp,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const MobileAppDevelopment = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const subServices = [
    {
      id: 1,
      name: "Android Development",
      description:
        "Native Android apps with cutting-edge performance and Material Design",
      icon: <Download className="w-8 h-8" />,
      technologies: ["Kotlin", "Java", "Android Studio", "Material Design"],
      link: "/services/android-development",
      projects: 15,
      rating: 4.9,
    },
    {
      id: 2,
      name: "iOS Development",
      description: "Premium iOS applications with seamless user experience",
      icon: <Apple className="w-8 h-8" />,
      technologies: ["Swift", "Objective-C", "Xcode", "SwiftUI"],
      link: "/services/ios-development",
      projects: 12,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Flutter Development",
      description:
        "Cross-platform apps with single codebase for multiple platforms",
      icon: <Code className="w-8 h-8" />,
      technologies: ["Dart", "Flutter SDK", "Material Design", "Cupertino"],
      link: "/services/flutter-development",
      projects: 20,
      rating: 4.9,
    },
    {
      id: 4,
      name: "React Native",
      description:
        "Efficient cross-platform development with native performance",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["React Native", "JavaScript", "TypeScript", "Expo"],
      link: "/services/react-native-development",
      projects: 18,
      rating: 4.7,
    },
    {
      id: 5,
      name: "Ionic Development",
      description:
        "Hybrid mobile apps with web technologies and native capabilities",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: ["Ionic", "Angular", "Capacitor", "Cordova"],
      link: "/services/ionic-development",
      projects: 10,
      rating: 4.6,
    },
  ];

  const benefits = [
    "Cross-platform compatibility",
    "Native performance optimization",
    "Intuitive user interface design",
    "Scalable architecture",
    "App store optimization",
    "Post-launch support & maintenance",
  ];

  const process = [
    {
      title: "Discovery & Planning",
      description: "Requirements analysis and project roadmap",
    },
    {
      title: "UI/UX Design",
      description: "Wireframing, prototyping, and visual design",
    },
    {
      title: "Development",
      description: "Agile development with regular updates",
    },
    {
      title: "Testing & QA",
      description: "Comprehensive testing across devices",
    },
    { title: "Deployment", description: "App store submission and launch" },
    { title: "Support", description: "Ongoing maintenance and updates" },
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
          <div className="absolute top-20 left-10 w-32 h-32 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark rotate-45 animate-float"></div>
          </div>
          <div className="absolute top-40 right-20 w-24 h-24 opacity-10">
            <div
              className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light rounded-full animate-float"
              style={{ animationDelay: "1s" }}
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
                  Mobile App{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Development
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Transform your ideas into powerful mobile applications that
                  engage users and drive business growth. Our expert team
                  delivers cutting-edge solutions across all major platforms
                  with unmatched quality and performance.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      75+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Apps Deployed
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
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      2M+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Downloads
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      98%
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
                  Transform Ideas Into{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Mobile Reality
                  </span>
                </h2>
                <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                  <p>
                    Mobile applications have become the backbone of modern
                    business, connecting companies with customers in ways that
                    were unimaginable just a decade ago. Our mobile app
                    development services transform your innovative ideas into
                    powerful, user-friendly applications that drive engagement
                    and deliver exceptional value to your users.
                  </p>
                  <p>
                    From startups launching their first app to enterprises
                    scaling their digital presence, we specialize in creating
                    mobile solutions that not only meet current needs but are
                    built to evolve with your business. Our team combines
                    technical expertise with deep understanding of user behavior
                    to deliver apps that users love and businesses depend on.
                  </p>
                  <p>
                    Whether you need native iOS and Android apps for maximum
                    performance, cross-platform solutions for faster
                    time-to-market, or hybrid applications that leverage web
                    technologies, we have the expertise to bring your vision to
                    life across all major mobile platforms.
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
                  Our Mobile Development{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Technologies
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Choose from our comprehensive range of mobile development
                  technologies and frameworks
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
                data-index="8"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[8]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Featured{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Case Studies
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Real results from successful mobile app deployments
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div
                  data-index="9"
                  className={`transition-all duration-700 ${
                    visibleItems[9]
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-12"
                  }`}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg mb-4 flex items-center justify-center">
                        <Smartphone className="w-16 h-16 text-coresync-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        EcoTrack Mobile App
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Sustainability tracking app that reached 500K+ downloads
                        with 4.8★ rating. Features include carbon footprint
                        monitoring and eco-friendly recommendations.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        +300% user engagement • 500K+ downloads
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
                  style={{ transitionDelay: "100ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-coresync-primary-dark/20 to-coresync-primary-light/20 rounded-lg mb-4 flex items-center justify-center">
                        <Users className="w-16 h-16 text-coresync-primary-dark" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        HealthSync Platform
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Healthcare management app connecting patients with
                        providers. Streamlined appointment booking and health
                        record management.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        +150% appointment efficiency • 50K+ active users
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
                  style={{ transitionDelay: "200ms" }}
                >
                  <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-lg transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-full h-48 bg-gradient-to-br from-coresync-primary-light/20 to-coresync-primary-dark/20 rounded-lg mb-4 flex items-center justify-center">
                        <TrendingUp className="w-16 h-16 text-coresync-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">
                        FinanceFlow App
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Personal finance management with AI-powered insights.
                        Helps users track expenses, set budgets, and achieve
                        financial goals.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        +200% user savings • 4.9★ app store rating
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
                data-index="12"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[12]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  What Our Clients{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Say
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div
                  data-index="13"
                  className={`transition-all duration-700 ${
                    visibleItems[13]
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
                        "The team delivered an exceptional mobile app that
                        exceeded our expectations. The user experience is
                        seamless and our customer engagement has increased by
                        300%."
                      </p>
                      <div>
                        <div className="font-semibold">Sarah Chen</div>
                        <div className="text-sm text-muted-foreground">
                          CEO, EcoTrack
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
                        "Professional, efficient, and innovative. They
                        transformed our complex healthcare workflows into an
                        intuitive mobile solution that our staff and patients
                        love."
                      </p>
                      <div>
                        <div className="font-semibold">
                          Dr. Michael Rodriguez
                        </div>
                        <div className="text-sm text-muted-foreground">
                          CTO, HealthSync
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
                        "Outstanding technical expertise and project management.
                        The app launched on time and has maintained a 4.9-star
                        rating since release."
                      </p>
                      <div>
                        <div className="font-semibold">Jennifer Kim</div>
                        <div className="text-sm text-muted-foreground">
                          Product Manager, FinanceFlow
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
                data-index="16"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[16]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Why Choose Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Mobile Development
                  </span>
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {benefits.map((benefit, index) => (
                  <div
                    key={index}
                    data-index={index + 17}
                    className={`flex items-center gap-3 p-4 bg-muted/20 rounded-lg transition-all duration-700 ${
                      visibleItems[index + 17]
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
                data-index="23"
                className={`text-center mb-16 transition-all duration-700 ${
                  visibleItems[23]
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
                    data-index={index + 24}
                    className={`relative transition-all duration-700 ${
                      visibleItems[index + 24]
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
                data-index="30"
                className={`transition-all duration-700 ${
                  visibleItems[30]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Build Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Mobile App?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's discuss your project and bring your mobile app vision to
                  life with our expert team.
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

export default MobileAppDevelopment;
