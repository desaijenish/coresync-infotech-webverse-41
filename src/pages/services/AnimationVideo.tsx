import React, { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import {
  Film,
  Palette,
  Play,
  Video,
  Camera,
  Edit3,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
  Clock,
} from "lucide-react";

const AnimationVideoEditing = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const subServices = [
    {
      id: 1,
      name: "2D Animation",
      description:
        "Engaging 2D animations for storytelling and brand communication",
      icon: <Palette className="w-8 h-8" />,
      technologies: ["After Effects", "Animate", "Toon Boom", "Lottie"],
      link: "/services/2d-animation",
      projects: 30,
      rating: 4.9,
    },
    {
      id: 2,
      name: "3D Animation",
      description:
        "Immersive 3D animations and visual effects for modern content",
      icon: <Film className="w-8 h-8" />,
      technologies: ["Blender", "Maya", "Cinema 4D", "3ds Max"],
      link: "/services/3d-animation",
      projects: 25,
      rating: 4.8,
    },
    {
      id: 3,
      name: "Motion Graphics",
      description:
        "Dynamic motion graphics for advertising and digital marketing",
      icon: <Play className="w-8 h-8" />,
      technologies: ["After Effects", "Premiere Pro", "Motion", "DaVinci"],
      link: "/services/motion-graphics",
      projects: 40,
      rating: 4.9,
    },
    {
      id: 4,
      name: "Video Production",
      description:
        "Professional video production from concept to final delivery",
      icon: <Video className="w-8 h-8" />,
      technologies: ["Premiere Pro", "Final Cut Pro", "Avid", "Color Grading"],
      link: "/services/video-production",
      projects: 35,
      rating: 4.8,
    },
  ];

  const benefits = [
    "Creative storytelling excellence",
    "High-quality visual production",
    "Brand-focused content creation",
    "Multi-platform optimization",
    "Fast turnaround times",
    "Collaborative creative process",
  ];

  const process = [
    {
      title: "Creative Brief",
      description: "Understanding your vision and creative requirements",
    },
    {
      title: "Concept Development",
      description: "Storyboarding and visual concept creation",
    },
    {
      title: "Production",
      description: "Animation and video creation with attention to detail",
    },
    {
      title: "Review & Refinement",
      description: "Client feedback integration and fine-tuning",
    },
    {
      title: "Final Delivery",
      description: "Optimized content delivery in required formats",
    },
    {
      title: "Support",
      description: "Post-delivery support and additional content creation",
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
                  Animation &{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Video Editing
                  </span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Bring your stories to life with captivating animations and
                  professional video editing that engages audiences and delivers
                  powerful visual experiences across all platforms.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      130+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Video Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      5M+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Views
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      72hrs
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Avg Turnaround
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      4.9★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Rating
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Sub-Services Grid */}
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
                  Our Creative{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Services
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Professional animation and video services for every creative
                  need
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
                {subServices.map((service, index) => (
                  <div
                    key={service.id}
                    data-index={index + 2}
                    className={`transition-all duration-700 ${
                      visibleItems[index + 2]
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
                            Tools & Software
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

          {/* CTA Section */}
          <section className="py-20 px-4">
            <div className="container mx-auto text-center">
              <div
                data-index="6"
                className={`transition-all duration-700 ${
                  visibleItems[6]
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
              >
                <h2 className="text-3xl md:text-5xl font-bold mb-6">
                  Ready to Create Amazing{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Visual Content?
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's bring your creative vision to life with professional
                  animation and video production.
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

export default AnimationVideoEditing;
