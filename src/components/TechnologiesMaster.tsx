
import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

const TechnologiesMaster = () => {
  const [visibleTechs, setVisibleTechs] = useState<boolean[]>([]);
  const containerRef = useRef<HTMLDivElement>(null);

  const technologies = [
    { name: 'React.js', level: 95, category: 'Frontend', color: '#61DAFB', useCase: 'Dynamic web applications' },
    { name: 'Node.js', level: 90, category: 'Backend', color: '#339933', useCase: 'Scalable server solutions' },
    { name: 'Unity', level: 85, category: 'Game Dev', color: '#000000', useCase: 'Cross-platform games' },
    { name: 'Python', level: 92, category: 'AI/ML', color: '#3776AB', useCase: 'AI & data science' },
    { name: 'Flutter', level: 88, category: 'Mobile', color: '#02569B', useCase: 'Native mobile apps' },
    { name: 'TypeScript', level: 90, category: 'Language', color: '#3178C6', useCase: 'Type-safe development' },
    { name: 'TensorFlow', level: 80, category: 'AI/ML', color: '#FF6F00', useCase: 'Machine learning models' },
    { name: 'React Native', level: 85, category: 'Mobile', color: '#61DAFB', useCase: 'Cross-platform mobile' },
    { name: 'Next.js', level: 88, category: 'Frontend', color: '#000000', useCase: 'Full-stack React apps' },
    { name: 'MongoDB', level: 82, category: 'Database', color: '#47A248', useCase: 'NoSQL data storage' },
    { name: 'AWS', level: 78, category: 'Cloud', color: '#232F3E', useCase: 'Cloud infrastructure' },
    { name: 'Tailwind CSS', level: 93, category: 'Styling', color: '#06B6D4', useCase: 'Rapid UI development' }
  ];

  const CircularProgress = ({ percentage, color, children }: { percentage: number; color: string; children: React.ReactNode }) => {
    const [animatedPercentage, setAnimatedPercentage] = useState(0);

    useEffect(() => {
      const timer = setTimeout(() => {
        setAnimatedPercentage(percentage);
      }, 500);
      return () => clearTimeout(timer);
    }, [percentage]);

    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (animatedPercentage / 100) * circumference;

    return (
      <div className="relative w-24 h-24">
        <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 100 100">
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke="currentColor"
            strokeWidth="8"
            fill="transparent"
            className="text-muted/30"
          />
          <circle
            cx="50"
            cy="50"
            r="45"
            stroke={color}
            strokeWidth="8"
            fill="transparent"
            strokeDasharray={strokeDasharray}
            strokeDashoffset={strokeDashoffset}
            className="transition-all duration-2000 ease-out"
            strokeLinecap="round"
          />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          {children}
        </div>
      </div>
    );
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleTechs(prev => {
              const newVisible = [...prev];
              newVisible[index] = true;
              return newVisible;
            });
          }
        });
      },
      { threshold: 0.2 }
    );

    const techCards = containerRef.current?.querySelectorAll('[data-index]');
    techCards?.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  return (
    <TooltipProvider>
      <section className="py-20 px-4 bg-gradient-to-br from-background to-muted/30 relative overflow-hidden">
        {/* Background Decorations */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-Coresyncro-primary-light/10 rounded-full animate-float"></div>
          <div className="absolute bottom-10 right-10 w-16 h-16 bg-Coresyncro-primary-dark/10 rounded-full animate-float-delayed"></div>
          <div className="absolute top-1/3 right-1/4 w-12 h-12 bg-gradient-to-br from-Coresyncro-primary-light/10 to-Coresyncro-primary-dark/10 rotate-45 animate-float"></div>
        </div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Technologies We{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">
                Master
              </span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Our expertise spans across cutting-edge technologies, ensuring we deliver solutions using the best tools for your project
            </p>
          </div>

          <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {technologies.map((tech, index) => (
              <div
                key={tech.name}
                data-index={index}
                className={`group transition-all duration-700 transform-gpu ${
                  visibleTechs[index] 
                    ? 'opacity-100 translate-y-0 scale-100' 
                    : 'opacity-0 translate-y-8 scale-95'
                }`}
                style={{ 
                  transitionDelay: visibleTechs[index] ? `${index * 100}ms` : '0ms' 
                }}
              >
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Card className="h-full bg-card/50 backdrop-blur-md border-white/20 dark:border-white/10 hover:shadow-xl transition-all duration-500 hover:-translate-y-2 hover:scale-105 cursor-pointer">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="flex justify-center">
                          <CircularProgress percentage={tech.level} color={tech.color}>
                            <div className="text-center">
                              <div className="text-sm font-bold" style={{ color: tech.color }}>
                                {tech.level}%
                              </div>
                            </div>
                          </CircularProgress>
                        </div>
                        
                        <div>
                          <h3 className="font-bold text-lg mb-2 group-hover:text-Coresyncro-primary-light transition-colors">
                            {tech.name}
                          </h3>
                          <Badge 
                            variant="secondary" 
                            className="text-xs mb-2"
                            style={{ backgroundColor: `${tech.color}20`, color: tech.color }}
                          >
                            {tech.category}
                          </Badge>
                          <p className="text-sm text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                            {tech.useCase}
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </TooltipTrigger>
                  <TooltipContent>
                    <div className="text-center">
                      <p className="font-semibold">{tech.name}</p>
                      <p className="text-xs text-muted-foreground">{tech.useCase}</p>
                      <p className="text-xs">Proficiency: {tech.level}%</p>
                    </div>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </div>
        </div>
      </section>
    </TooltipProvider>
  );
};

export default TechnologiesMaster;
