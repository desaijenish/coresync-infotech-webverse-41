import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { MapPin, Briefcase, ChevronDown } from 'lucide-react';

interface Job {
  id: number;
  title: string;
  location: string;
  type: string;
  tagline: string;
  description: string;
  responsibilities: string[];
  requirements: string[];
}

interface PositionCardProps {
  job: Job;
  index: number;
  onApply: () => void;
}

const PositionCard: React.FC<PositionCardProps> = ({ job, index, onApply }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const cardVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut", delay: index * 0.15 }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ 
        scale: 1.02,
        rotateY: 2,
        rotateX: 1,
        transition: { duration: 0.3 }
      }}
      className="group perspective-1000"
    >
      <Card className="relative overflow-hidden bg-card/50 backdrop-blur-sm border-2 border-transparent hover:border-coresync-primary-light/30 transition-all duration-300">
        <CardContent className="p-6">
          {/* Job Header */}
          <div className="mb-4">
            <div className="flex items-start justify-between mb-3">
              <div className="flex-1">
                <h3 
                  className="text-xl font-bold text-foreground group-hover:text-coresync-primary-light transition-colors cursor-pointer"
                  onClick={() => setIsExpanded(!isExpanded)}
                >
                  {job.title}
                </h3>
                <p className="text-coresync-primary-dark font-medium text-sm mb-2">
                  {job.tagline}
                </p>
                <div className="flex items-center space-x-4 text-muted-foreground">
                  <div className="flex items-center space-x-1">
                    <MapPin size={16} />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Briefcase size={16} />
                    <Badge variant={job.type === 'Internship' ? 'secondary' : 'default'}>
                      {job.type}
                    </Badge>
                  </div>
                </div>
              </div>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="ml-4 cursor-pointer"
                onClick={() => setIsExpanded(!isExpanded)}
              >
                <ChevronDown className="w-6 h-6 text-coresync-primary-light" />
              </motion.div>
            </div>
            
            <p className="text-muted-foreground mb-4">
              {job.description}
            </p>
            
            {/* Apply Button - Shows on hover */}
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              whileInView={{ opacity: 1, height: 'auto' }}
              className="group-hover:opacity-100 opacity-0 transition-opacity duration-300"
            >
              <Button
                onClick={onApply}
                className="bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:scale-105 transition-transform duration-200"
              >
                Apply Now
              </Button>
            </motion.div>
          </div>

          {/* Expanded Content */}
          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-6 border-t border-border">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-coresync-primary-light mb-3">
                    Responsibilities
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {job.responsibilities.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-coresync-primary-light rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-coresync-primary-dark mb-3">
                    Requirements
                  </h4>
                  <ul className="space-y-2 text-muted-foreground">
                    {job.requirements.map((item, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <span className="w-1.5 h-1.5 bg-coresync-primary-dark rounded-full mt-2 flex-shrink-0"></span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              <Button
                onClick={onApply}
                className="mt-6 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:scale-105 transition-transform duration-200"
              >
                Apply for this Position
              </Button>
            </div>
          </motion.div>
        </CardContent>

        {/* Glow Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-coresync-primary-light/5 to-coresync-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg"></div>
      </Card>
    </motion.div>
  );
};

export default PositionCard;
