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
  Layers,
  Sparkles,
  Zap,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const MotionGraphics = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Animated Logos",
      description:
        "Give your brand a dynamic identity with a professionally animated logo.",
    },
    {
      icon: <Film className="w-6 h-6" />,
      title: "Title Sequences",
      description:
        "Create captivating opening and closing titles for your videos and films.",
    },
    {
      icon: <Sparkles className="w-6 h-6" />,
      title: "Infographics",
      description:
        "Transform complex data and information into visually engaging animated infographics.",
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "UI/UX Animation",
      description:
        "Enhance user experience with smooth and interactive UI and app animations.",
    },
  ];

  const technologies = [
    "Adobe After Effects",
    "Premiere Pro",
    "Cinema 4D",
    "Blender",
    "Figma",
    "Lottie",
    "Cel Animation",
  ];

  const portfolio = [
    {
      title: "Brand Intro Video",
      description:
        "A stylish motion graphics video introducing a new brand and its core values.",
      technologies: ["After Effects", "Premiere Pro", "Branding"],
      rating: 4.8,
    },
    {
      title: "Animated Infographic",
      description:
        "A complex report on market trends animated into an easy-to-digest video.",
      technologies: ["After Effects", "Illustrator", "Data Visualization"],
      rating: 4.9,
    },
    {
      title: "Social Media Ads",
      description:
        "Short, punchy motion graphics videos optimized for social media platforms.",
      technologies: ["After Effects", "Premiere Pro", "Social Media"],
      rating: 4.7,
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
                  <Film className="w-12 h-12 text-coresync-primary-light mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                    Motion{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                      Graphics
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Elevate your content with dynamic motion graphics. We create
                  eye-catching animations for branding, advertising, and
                  explainer videos.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      500+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Motion Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      8M+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Total Engagements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      96%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Client Retention
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-coresync-primary-light mb-2">
                      4.9★
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Project Rating
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
                  Engaging{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Visuals
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Motion graphics are key to creating a powerful brand identity
                  and delivering information in a visually appealing and
                  memorable format.
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
                  Our{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
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
                  Creative{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Work
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
                  Add Life to Your{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                    Content
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  From simple logo animations to complex explainer videos, we
                  have you covered.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Get a Free Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg"
                  >
                    Explore Our Gallery
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

export default MotionGraphics;
