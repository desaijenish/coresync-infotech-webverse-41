import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Gamepad2,
  Monitor,
  Smartphone,
  Joystick,
  Zap,
  Users,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Target,
  Play,
  Layers3,
} from "lucide-react";

const GameDevelopment = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const subServices = [
    {
      id: 1,
      name: "Unity Development",
      description:
        "Cross-platform game development with Unity engine for immersive experiences",
      icon: <Gamepad2 className="w-8 h-8" />,
      technologies: ["Unity 3D", "C#", "Visual Scripting", "Universal RP"],
      link: "/services/unity-development",
      projects: 20,
      rating: 4.9,
    },
    {
      id: 2,
      name: "Unreal Engine",
      description:
        "High-performance games with stunning visuals using Unreal Engine",
      icon: <Zap className="w-8 h-8" />,
      technologies: ["Unreal Engine", "Blueprint", "C++", "Nanite"],
      link: "/services/unreal-development",
      projects: 15,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Mobile Games",
      description:
        "Engaging mobile gaming experiences for iOS and Android platforms",
      icon: <Smartphone className="w-8 h-8" />,
      technologies: [
        "Unity Mobile",
        "React Native Games",
        "Flutter Games",
        "Native",
      ],
      link: "/services/mobile-games",
      projects: 35,
      rating: 4.9,
    },
    {
      id: 4,
      name: "PC Games",
      description:
        "Desktop gaming solutions with advanced graphics and gameplay mechanics",
      icon: <Monitor className="w-8 h-8" />,
      technologies: ["Unity", "Unreal", "DirectX", "OpenGL"],
      link: "/services/pc-games",
      projects: 12,
      rating: 4.8,
    },
    {
      id: 5,
      name: "2D/3D Games",
      description:
        "Both 2D and 3D game development with artistic excellence and smooth gameplay",
      icon: <Joystick className="w-8 h-8" />,
      technologies: ["2D Sprites", "3D Modeling", "Animation", "Physics"],
      link: "/services/2d-3d-games",
      projects: 28,
      rating: 4.9,
    },
  ];

  const benefits = [
    "Cross-platform game deployment",
    "Engaging gameplay mechanics",
    "High-quality graphics & audio",
    "Multiplayer & social features",
    "Monetization strategy integration",
    "Post-launch support & updates",
  ];

  const process = [
    {
      title: "Game Concept",
      description:
        "Ideation, game design document, and target audience analysis",
    },
    {
      title: "Pre-Production",
      description:
        "Art style, technical requirements, and development planning",
    },
    {
      title: "Production",
      description: "Game development, art creation, and feature implementation",
    },
    {
      title: "Testing & Polish",
      description: "Quality assurance, bug fixes, and gameplay optimization",
    },
    {
      title: "Launch & Marketing",
      description: "Store submission, marketing campaign, and release strategy",
    },
    {
      title: "Post-Launch",
      description: "Updates, community management, and content expansion",
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
          <div className="absolute top-24 right-12 w-36 h-36 opacity-10">
            <div className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark rotate-12 animate-float"></div>
          </div>
          <div className="absolute bottom-24 left-12 w-28 h-28 opacity-10">
            <div
              className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light rounded-full animate-float"
              style={{ animationDelay: "1.8s" }}
            ></div>
          </div>
        </div>

        <Navbar />

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
                  Game{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Development
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Create immersive gaming experiences that captivate players
                  across all platforms. From concept to launch, we deliver games
                  that combine stunning visuals, engaging gameplay, and
                  cutting-edge technology.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      110+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Games Developed
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      10M+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Downloads
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      4.7★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Store Rating
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      85%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      User Retention
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
                  Crafting Interactive{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Experiences
                  </span>
                </h2>
                <div className="text-lg text-muted-foreground space-y-6 leading-relaxed">
                  <p>
                    Gaming has evolved into a multi-billion dollar industry that
                    touches every demographic and platform. Our game development
                    services bring creative visions to life through innovative
                    technology, compelling storytelling, and engaging gameplay
                    mechanics that keep players coming back for more.
                  </p>
                  <p>
                    From indie mobile games to AAA console experiences, we
                    specialize in creating games that not only entertain but
                    also build communities. Our multidisciplinary team combines
                    artistic creativity with technical expertise to deliver
                    polished games that stand out in competitive markets.
                  </p>
                  <p>
                    Whether you're envisioning a casual puzzle game, an
                    action-packed adventure, or a complex multiplayer
                    experience, we have the tools and talent to transform your
                    game concept into a successful, engaging product that
                    resonates with players worldwide.
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
                  Our Game Development{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Expertise
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Comprehensive game development services across all platforms
                  and genres
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
                            {service.projects} games
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
                  Award-Winning{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Game Portfolio
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Successful games that have captivated millions of players
                  worldwide
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
                        <Play className="w-16 h-16 text-coresync-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Mystic Realms</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Fantasy RPG built with Unity 3D, featuring immersive
                        storytelling and real-time combat. Achieved 2M+
                        downloads with 4.8★ rating.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        2M+ downloads • 4.8★ rating • #1 RPG
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
                        <Target className="w-16 h-16 text-coresync-primary-dark" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Neon Racers</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        High-speed racing game with stunning visual effects.
                        Features multiplayer competitions and customizable
                        vehicles.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        1.5M+ downloads • 500K+ active racers
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
                        <Layers3 className="w-16 h-16 text-coresync-primary-light" />
                      </div>
                      <h3 className="text-xl font-bold mb-3">Puzzle Worlds</h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Brain-teasing puzzle game with 200+ levels.
                        Cross-platform mobile game with social features and
                        achievements.
                      </p>
                      <div className="text-sm text-coresync-primary-light font-medium">
                        3M+ downloads • 90% completion rate
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
                  Game Publishers{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Love Working With Us
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
                        "Incredible game development team. Mystic Realms
                        exceeded all expectations and became our top-performing
                        title with 2M+ downloads."
                      </p>
                      <div>
                        <div className="font-semibold">Alex Parker</div>
                        <div className="text-sm text-muted-foreground">
                          Creative Director, Fantasy Games Studio
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
                        "Professional, creative, and technically excellent. They
                        delivered Neon Racers on time and it immediately hit the
                        top charts."
                      </p>
                      <div>
                        <div className="font-semibold">Jessica Wong</div>
                        <div className="text-sm text-muted-foreground">
                          Producer, Speed Entertainment
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
                        "Amazing attention to gameplay mechanics and user
                        experience. Puzzle Worlds has maintained 90% completion
                        rate - unprecedented for puzzle games."
                      </p>
                      <div>
                        <div className="font-semibold">Michael Torres</div>
                        <div className="text-sm text-muted-foreground">
                          CEO, Brain Games Inc
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
                    Game Development
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
                  Our Game Development{" "}
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
                  Ready to Create Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Dream Game?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's turn your game concept into an engaging reality that
                  players will love.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Start Your Game
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

export default GameDevelopment;
