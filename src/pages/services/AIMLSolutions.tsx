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
  Rocket,
  Shield,
  Layers,
  ArrowRight,
  CheckCircle,
  Star,
  Trophy,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const AIMLSolutions = () => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const features = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Predictive Analytics",
      description:
        "Leverage machine learning models to forecast trends and make data-driven decisions.",
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Automation",
      description:
        "Automate repetitive tasks and workflows to increase efficiency and productivity.",
    },
    {
      icon: <Layers className="w-6 h-6" />,
      title: "Custom Models",
      description:
        "Develop and train custom AI and ML models tailored to your specific business needs.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Natural Language Processing (NLP)",
      description:
        "Build solutions that understand and process human language for chatbots, sentiment analysis, etc.",
    },
  ];

  const technologies = [
    "Python",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Jupyter",
    "OpenAI API",
    "Keras",
    "NLP",
    "Computer Vision",
    "Data Science",
  ];

  const portfolio = [
    {
      title: "E-commerce Recommendation Engine",
      description:
        "An AI-powered system that provides personalized product recommendations, increasing sales.",
      technologies: ["Machine Learning", "Python", "Predictive Analytics"],
      rating: 5.0,
    },
    {
      title: "Automated Customer Support Chatbot",
      description:
        "A 24/7 chatbot that handles customer queries using natural language processing.",
      technologies: ["NLP", "AI", "Chatbot"],
      rating: 4.8,
    },
    {
      title: "Fraud Detection System",
      description:
        "A secure system that uses machine learning to detect and prevent fraudulent transactions in real-time.",
      technologies: ["AI", "Security", "ML Algorithms"],
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
                  <Brain className="w-12 h-12 text-Coresyncro-primary-light mr-4" />
                  <h1 className="text-4xl md:text-6xl font-bold">
                    AI/ML{" "}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                      Solutions
                    </span>
                  </h1>
                </div>
                <p className="text-xl text-muted-foreground max-w-4xl mx-auto mb-8">
                  Harness the power of Artificial Intelligence and Machine
                  Learning to automate processes, gain valuable insights, and
                  drive innovation for your business.
                </p>

                {/* Key Stats */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      100+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      AI Projects
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      95%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Accuracy Rate
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      50+
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Satisfied Clients
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-Coresyncro-primary-light mb-2">
                      30%
                    </div>
                    <div className="text-sm text-muted-foreground">
                      Cost Reduction
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
                  Intelligent{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Automation
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                  Our AI/ML solutions are designed to go beyond simple
                  automation, providing smart, predictive systems that learn and
                  improve over time.
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
                  Core{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Technologies
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
                  Featured{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    Projects
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
                  Innovate Your Business with{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                    AI
                  </span>
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                  Let's build intelligent solutions that give you a competitive
                  advantage.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" className="px-8 py-6 text-lg">
                    Schedule a Consultation
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                  <Button
                    variant="outline"
                    size="lg"
                    className="px-8 py-6 text-lg"
                  >
                    View Case Studies
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

export default AIMLSolutions;
