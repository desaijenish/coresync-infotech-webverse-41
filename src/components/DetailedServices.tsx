
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { ChevronDown, ChevronUp } from 'lucide-react';

const DetailedServices = () => {
  const [expandedService, setExpandedService] = useState<string | null>(null);

  const technologies = {
    "Mobile Development": [
      "Android", "iOS", "Java", "Kotlin", "Swift", "Flutter", "React Native", "Xamarin"
    ],
    "Web Development": [
      "React", "JavaScript", "TypeScript", "Node.js", "Python", "PHP", "Vue.js", "Angular", "HTML5", "CSS3"
    ],
    "Game Development": [
      "Unity", "Unreal Engine", "C#", "C++", "Blender", "3D Modeling", "Game Design", "AR/VR"
    ],
    "AI & Machine Learning": [
      "Python", "TensorFlow", "PyTorch", "Machine Learning", "Deep Learning", "NLP", "Computer Vision", "Data Science"
    ],
    "Animation & Video": [
      "Blender", "After Effects", "Premiere Pro", "3D Animation", "Motion Graphics", "Video Editing", "CGI"
    ]
  };

  const toggleExpansion = (service: string) => {
    setExpandedService(expandedService === service ? null : service);
  };

  return (
    <section id="detailed-services" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technologies We Master</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our expertise spans across the latest technologies and frameworks in the industry
          </p>
        </div>

        <Tabs defaultValue="Mobile Development" className="w-full">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-5 mb-8">
            {Object.keys(technologies).map((tech) => (
              <TabsTrigger key={tech} value={tech} className="text-sm">
                {tech.split(' ')[0]}
              </TabsTrigger>
            ))}
          </TabsList>

          {Object.entries(technologies).map(([category, techs]) => (
            <TabsContent key={category} value={category}>
              <Card className="bg-card/50 backdrop-blur-sm border-2">
                <CardHeader>
                  <CardTitle className="text-2xl flex items-center justify-between">
                    {category}
                    <button 
                      onClick={() => toggleExpansion(category)}
                      className="text-coresync-primary-light hover:text-coresync-primary-dark transition-colors duration-300"
                    >
                      {expandedService === category ? <ChevronUp /> : <ChevronDown />}
                    </button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className={`grid grid-cols-2 md:grid-cols-4 gap-3 transition-all duration-300 ${
                    expandedService === category ? 'opacity-100 max-h-96' : 'opacity-70 max-h-32 overflow-hidden'
                  }`}>
                    {techs.map((tech, index) => (
                      <Badge 
                        key={index}
                        variant="secondary" 
                        className="justify-center py-2 px-4 text-sm font-medium hover:bg-coresync-primary-light hover:text-white transition-all duration-300 cursor-pointer"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
};

export default DetailedServices;
