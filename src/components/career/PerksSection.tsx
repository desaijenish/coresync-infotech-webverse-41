import React from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Clock, TrendingUp, Users, Coffee, Home, Award } from 'lucide-react';

const PerksSection = () => {
  const perks = [
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Work-life balance with flexible scheduling options'
    },
    {
      icon: TrendingUp,
      title: 'Growth Path',
      description: 'Clear career progression and skill development opportunities'
    },
    {
      icon: Users,
      title: 'Team Events',
      description: 'Regular team building activities and company outings'
    },
    {
      icon: Coffee,
      title: 'Great Benefits',
      description: 'Comprehensive health coverage and wellness programs'
    },
    {
      icon: Home,
      title: 'Remote Work',
      description: 'Hybrid and remote work options available'
    },
    {
      icon: Award,
      title: 'Recognition',
      description: 'Performance-based rewards and recognition programs'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why <span className="text-coresync-primary-light">Choose Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We believe in creating an environment where you can thrive
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto"
        >
          {perks.map((perk, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover={{ scale: 1.05, rotateY: 5 }}
              className="group"
            >
              <Card className="h-full bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-coresync-primary-light/30 transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <perk.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 group-hover:text-coresync-primary-light transition-colors">
                    {perk.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {perk.description}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default PerksSection;
