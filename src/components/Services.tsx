
import React from 'react';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

const Services = () => {
  const services = [
    {
      title: "AI-Based Business Software",
      description: "Intelligent automation solutions that streamline your business processes with cutting-edge AI technology.",
      icon: "🤖"
    },
    {
      title: "Game Development",
      description: "Immersive gaming experiences across all platforms using Unity, Unreal Engine, and custom frameworks.",
      icon: "🎮"
    },
    {
      title: "Web Development",
      description: "Modern, responsive websites and web applications built with the latest technologies and best practices.",
      icon: "🌐"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications for iOS and Android with seamless user experiences.",
      icon: "📱"
    },
    {
      title: "Animation & Video Editing",
      description: "Professional animations, motion graphics, and video production that brings your vision to life.",
      icon: "🎬"
    }
  ];

  return (
    <section id="services" className="py-20 px-4 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Services</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer comprehensive digital solutions to help your business thrive in the modern world
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index}
              className="group hover:scale-105 hover:shadow-xl transition-all duration-300 border-2 hover:border-Coresyncro-primary-light/50 bg-card/50 backdrop-blur-sm"
            >
              <CardHeader className="text-center space-y-4">
                <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {service.icon}
                </div>
                <CardTitle className="text-xl font-bold group-hover:text-Coresyncro-primary-light transition-colors duration-300">
                  {service.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
