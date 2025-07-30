
import React, { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { ThemeProvider } from '@/components/ThemeProvider';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ExternalLink, Github, Monitor, Smartphone, Tablet } from 'lucide-react';

const Portfolio = () => {
  const [visibleProjects, setVisibleProjects] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      tagline: "Next-gen shopping experience with AI recommendations",
      description: "A comprehensive e-commerce solution featuring AI-powered product recommendations, real-time inventory management, and seamless checkout experience.",
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600",
      technologies: ["React", "Node.js", "MongoDB", "AI/ML", "Stripe"],
      device: "monitor",
      size: "large",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 2,
      title: "AR Mobile Game",
      tagline: "Immersive augmented reality gaming",
      description: "An innovative AR mobile game that blends real-world environments with digital gameplay elements, featuring multiplayer capabilities and social sharing.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=600&h=800",
      technologies: ["Unity", "C#", "ARCore", "Firebase"],
      device: "smartphone",
      size: "medium",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 3,
      title: "AI Chatbot Suite",
      tagline: "Intelligent customer service automation",
      description: "Advanced AI chatbot platform with natural language processing, multi-channel support, and comprehensive analytics dashboard.",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=700&h=500",
      technologies: ["Python", "TensorFlow", "React", "FastAPI"],
      device: "monitor",
      size: "small",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 4,
      title: "Healthcare Management App",
      tagline: "Streamlined patient care and records",
      description: "Comprehensive healthcare management system with patient records, appointment scheduling, and telemedicine capabilities.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=700",
      technologies: ["React Native", "TypeScript", "PostgreSQL", "Socket.io"],
      device: "tablet",
      size: "medium",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 5,
      title: "Financial Analytics Dashboard",
      tagline: "Real-time trading insights and predictions",
      description: "Advanced financial dashboard with real-time market data, predictive analytics, and portfolio management tools.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600",
      technologies: ["Vue.js", "D3.js", "Python", "Redis"],
      device: "monitor",
      size: "large",
      liveUrl: "#",
      repoUrl: "#"
    },
    {
      id: 6,
      title: "Social Learning Platform",
      tagline: "Interactive education with gamification",
      description: "Educational platform with interactive lessons, progress tracking, and social learning features.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=500",
      technologies: ["Next.js", "Prisma", "WebRTC", "Tailwind"],
      device: "smartphone",
      size: "small",
      liveUrl: "#",
      repoUrl: "#"
    }
  ];

  const DeviceIcon = ({ device }: { device: string }) => {
    switch (device) {
      case 'smartphone':
        return <Smartphone className="w-4 h-4" />;
      case 'tablet':
        return <Tablet className="w-4 h-4" />;
      default:
        return <Monitor className="w-4 h-4" />;
    }
  };

  const getCardSize = (size: string) => {
    switch (size) {
      case 'large':
        return 'md:col-span-2 md:row-span-2';
      case 'medium':
        return 'md:col-span-1 md:row-span-2';
      default:
        return 'md:col-span-1 md:row-span-1';
    }
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleProjects(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const projectCards = containerRef.current?.querySelectorAll('[data-index]');
    projectCards?.forEach(card => observer.observe(card));

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
              <div className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
            </div>
            <div className="absolute bottom-40 left-1/4 w-20 h-20 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark clip-path-triangle animate-float" style={{ animationDelay: '2s' }}></div>
            </div>
            <div className="absolute top-60 right-1/3 w-16 h-16 opacity-10">
              <div className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light transform rotate-12 animate-float" style={{ animationDelay: '0.5s' }}></div>
            </div>
          </div>

          <Navbar />
          
          <div className="pt-20 relative z-10">
            <section className="py-20 px-4">
              <div className="container mx-auto">
                <div className="text-center mb-16">
                  <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
                    Our{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                      Portfolio
                    </span>
                  </h1>
                  <p className="text-xl text-muted-foreground max-w-3xl mx-auto animate-fade-in">
                    Showcasing our innovative projects and successful digital transformations
                  </p>
                </div>
                
                {/* Masonry Grid */}
                <div 
                  ref={containerRef}
                  className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-max"
                >
                  {projects.map((project, index) => (
                    <Dialog key={project.id}>
                      <div
                        data-index={index}
                        className={`group ${getCardSize(project.size)} transition-all duration-700 transform-gpu ${
                          visibleProjects[index] 
                            ? 'opacity-100 translate-y-0 scale-100' 
                            : 'opacity-0 translate-y-12 scale-95'
                        }`}
                        style={{ 
                          transitionDelay: visibleProjects[index] ? `${index * 150}ms` : '0ms' 
                        }}
                      >
                        <Card className="h-full overflow-hidden bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 hover:rotate-1 group-hover:scale-105 card-tilt">
                          <div className="relative overflow-hidden">
                            {/* Project Image */}
                            <div className="relative aspect-video overflow-hidden">
                              <img 
                                src={project.image} 
                                alt={project.title}
                                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                                loading="lazy"
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                              
                              {/* Device Icon */}
                              <div className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm rounded-full">
                                <DeviceIcon device={project.device} />
                              </div>
                            </div>
                            
                            <CardContent className="p-6">
                              <h3 className="text-xl font-bold mb-2 group-hover:text-coresync-primary-light transition-colors duration-300">
                                {project.title}
                              </h3>
                              
                              {/* Tagline - appears on hover */}
                              <p className="text-sm text-muted-foreground mb-4 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                {project.tagline}
                              </p>
                              
                              {/* Technology Badges */}
                              <div className="flex flex-wrap gap-2 mb-4">
                                {project.technologies.map((tech, techIndex) => (
                                  <Tooltip key={techIndex}>
                                    <TooltipTrigger>
                                      <Badge 
                                        variant="secondary" 
                                        className="text-xs hover:scale-110 transition-transform duration-200"
                                      >
                                        {tech}
                                      </Badge>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                      <p>{tech}</p>
                                    </TooltipContent>
                                  </Tooltip>
                                ))}
                              </div>
                              
                              {/* Action Buttons */}
                              <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                                <DialogTrigger asChild>
                                  <Button size="sm" className="flex-1">
                                    View Details
                                  </Button>
                                </DialogTrigger>
                              </div>
                            </CardContent>
                          </div>
                        </Card>
                      </div>

                      {/* Project Detail Modal */}
                      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                        </DialogHeader>
                        <div className="grid md:grid-cols-2 gap-6">
                          <div>
                            <img 
                              src={project.image} 
                              alt={project.title}
                              className="w-full rounded-lg"
                            />
                          </div>
                          <div className="space-y-4">
                            <p className="text-lg font-semibold text-coresync-primary-light">
                              {project.tagline}
                            </p>
                            <p className="text-muted-foreground">
                              {project.description}
                            </p>
                            
                            <div>
                              <h4 className="font-semibold mb-2">Technologies Used:</h4>
                              <div className="flex flex-wrap gap-2">
                                {project.technologies.map((tech, index) => (
                                  <Badge key={index} variant="outline">
                                    {tech}
                                  </Badge>
                                ))}
                              </div>
                            </div>
                            
                            <div className="flex gap-3 pt-4">
                              <Button asChild className="flex-1">
                                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                  <ExternalLink className="w-4 h-4 mr-2" />
                                  View Live
                                </a>
                              </Button>
                              <Button variant="outline" asChild className="flex-1">
                                <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                  <Github className="w-4 h-4 mr-2" />
                                  Code Repo
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
