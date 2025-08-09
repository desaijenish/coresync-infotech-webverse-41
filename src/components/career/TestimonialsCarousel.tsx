import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

const TestimonialsCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Sarah Chen",
      role: "Frontend Developer",
      image: "/placeholder.svg",
      quote: "Joining Coresync has been transformative for my career. The collaborative environment and cutting-edge projects have helped me grow exponentially as a developer.",
      rating: 5
    },
    {
      id: 2,
      name: "Michael Rodriguez",
      role: "AI/ML Engineer",
      image: "/placeholder.svg", 
      quote: "The innovative culture at Coresync is unmatched. I get to work on groundbreaking AI solutions while being supported by an amazing team of experts.",
      rating: 5
    },
    {
      id: 3,
      name: "Emily Johnson",
      role: "UI/UX Designer",
      image: "/placeholder.svg",
      quote: "Coresync values creativity and user-centered design. The mentorship I've received has elevated my design thinking and problem-solving skills significantly.",
      rating: 5
    }
  ];

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 7000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 px-4 bg-muted/30 relative z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-coresync-primary-light">Team Says</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Hear from our talented team members about their experience
          </p>
        </motion.div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
            >
              <Card className="bg-card/80 backdrop-blur-sm border-2 border-coresync-primary-light/20">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
                    <div className="flex-shrink-0">
                      <img
                        src={testimonials[currentIndex].image}
                        alt={testimonials[currentIndex].name}
                        className="w-24 h-24 rounded-full object-cover border-4 border-coresync-primary-light/30"
                      />
                    </div>
                    <div className="flex-1 text-center md:text-left">
                      <Quote className="w-8 h-8 text-coresync-primary-light mb-4 mx-auto md:mx-0" />
                      <p className="text-lg text-muted-foreground mb-6 italic">
                        "{testimonials[currentIndex].quote}"
                      </p>
                      <div>
                        <h4 className="font-semibold text-lg">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-coresync-primary-dark">
                          {testimonials[currentIndex].role}
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Arrows */}
          <motion.button
            onClick={prevTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-coresync-primary-light/20 hover:bg-coresync-primary-light/40 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
          >
            <ChevronLeft className="w-6 h-6 text-coresync-primary-light" />
          </motion.button>

          <motion.button
            onClick={nextTestimonial}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-12 h-12 bg-coresync-primary-light/20 hover:bg-coresync-primary-light/40 rounded-full flex items-center justify-center transition-all duration-300 opacity-0 hover:opacity-100 group-hover:opacity-100"
          >
            <ChevronRight className="w-6 h-6 text-coresync-primary-light" />
          </motion.button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'bg-coresync-primary-light scale-125' 
                    : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsCarousel;