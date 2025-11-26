import React, { useState } from 'react';
import { motion, AnimatePresence, type Variants } from 'framer-motion';
import { Linkedin, Mail, ExternalLink } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface TeamMember {
  id: string;
  name: string;
  role: string;
  photo: string;
  tagline: string;
  bio: string;
  skills: string[];
  linkedin?: string;
  email?: string;
  projects?: string[];
}

interface TeamSectionProps {
  teamData: TeamMember[];
}

const TeamSection: React.FC<TeamSectionProps> = ({ teamData }) => {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  };

  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: { 
        duration: 0.6
      }
    }
  };

  const overlayVariants: Variants = {
    hidden: { 
      opacity: 0,
      scale: 0.95,
      y: 10
    },
    visible: { 
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { 
        duration: 0.3
      }
    }
  };

  return (
    <section className="py-16 px-4 relative z-10">
      <div className="container mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark">Team</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Meet the passionate innovators behind Coresyncro Infotech's success
          </p>
        </motion.div>

        {/* Team Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto"
        >
          {teamData.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                transition: { duration: 0.3 }
              }}
              onHoverStart={() => setHoveredCard(member.id)}
              onHoverEnd={() => setHoveredCard(null)}
              className="group perspective-1000 cursor-pointer"
              onClick={() => setSelectedMember(member)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                  e.preventDefault();
                  setSelectedMember(member);
                }
              }}
              tabIndex={0}
              role="button"
              aria-label={`View ${member.name}'s profile`}
            >
              <div className="relative h-full bg-card/70 backdrop-blur-sm border-2 border-transparent hover:border-Coresyncro-primary-light/30 rounded-2xl p-6 text-center transition-all duration-500 overflow-hidden">
                {/* Background gradient effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-Coresyncro-primary-light/5 to-Coresyncro-primary-dark/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Glow effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-Coresyncro-primary-light/20 to-Coresyncro-primary-dark/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl -z-10"></div>

                {/* Content */}
                <div className="relative z-10">
                  {/* Profile Photo */}
                  <div className="w-24 h-24 mx-auto mb-4 relative">
                    <img
                      src={member.photo}
                      alt={`${member.name} - ${member.role}`}
                      className="w-full h-full rounded-full object-cover border-3 border-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark group-hover:scale-110 transition-transform duration-300"
                      loading="lazy"
                    />
                    {/* Photo glow */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark opacity-0 group-hover:opacity-30 transition-opacity duration-300 blur-md -z-10"></div>
                  </div>

                  {/* Name & Role */}
                  <h3 className="text-lg font-bold text-foreground mb-1 group-hover:text-Coresyncro-primary-light transition-colors duration-300">
                    {member.name}
                  </h3>
                  <p className="text-muted-foreground text-sm font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-muted-foreground text-xs mb-4 leading-relaxed">
                    {member.tagline}
                  </p>

                  {/* Skills */}
                  <div className="flex flex-wrap gap-1 justify-center mb-4">
                    {member.skills.slice(0, 3).map((skill, index) => (
                      <Badge 
                        key={index}
                        variant="secondary"
                        className="text-xs px-2 py-1 bg-gradient-to-r from-Coresyncro-primary-light/10 to-Coresyncro-primary-dark/10 text-foreground border border-Coresyncro-primary-light/20"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>

                  {/* Hover Overlay */}
                  <AnimatePresence>
                    {hoveredCard === member.id && (
                      <motion.div
                        variants={overlayVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute inset-0 bg-gradient-to-br from-Coresyncro-primary-light/95 to-Coresyncro-primary-dark/95 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center text-white p-4"
                      >
                        <p className="text-sm text-center mb-4 opacity-90">
                          {member.bio.slice(0, 100)}...
                        </p>
                        <Button
                          variant="secondary"
                          size="sm"
                          className="bg-white text-gray-900 hover:bg-gray-100 dark:bg-gray-900 dark:text-white dark:hover:bg-gray-800 font-medium px-4 py-2 min-h-[44px] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white dark:focus:ring-gray-300"
                          aria-label="View Profile"
                        >
                          <ExternalLink className="w-4 h-4 mr-2" />
                          View Profile
                        </Button>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detail Modal */}
        <Dialog open={!!selectedMember} onOpenChange={() => setSelectedMember(null)}>
          <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
            {selectedMember && (
              <>
                <DialogHeader>
                  <DialogTitle className="text-2xl font-bold text-center">
                    Team Member Profile
                  </DialogTitle>
                </DialogHeader>
                
                <div className="grid md:grid-cols-3 gap-6 mt-6">
                  {/* Photo & Basic Info */}
                  <div className="md:col-span-1 text-center">
                    <img
                      src={selectedMember.photo}
                      alt={`${selectedMember.name} - ${selectedMember.role}`}
                      className="w-32 h-32 mx-auto rounded-full object-cover border-4 border-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark mb-4"
                    />
                    <h3 className="text-xl font-bold text-foreground mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="text-muted-foreground font-medium mb-4">
                      {selectedMember.role}
                    </p>
                    
                    {/* Contact Buttons */}
                    <div className="flex gap-2 justify-center mb-4">
                      {/* {selectedMember.linkedin && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(selectedMember.linkedin, '_blank', 'noopener,noreferrer')}
                        >
                          <Linkedin className="w-4 h-4 mr-2" />
                          LinkedIn
                        </Button>
                      )} */}
                      {/* {selectedMember.email && (
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open(`mailto:${selectedMember.email}`, '_blank', 'noopener,noreferrer')}
                        >
                          <Mail className="w-4 h-4 mr-2" />
                          Email
                        </Button>
                      )} */}
                    </div>
                  </div>

                  {/* Detailed Info */}
                  <div className="md:col-span-2">
                    {/* Bio */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-Coresyncro-primary-light">
                        About
                      </h4>
                      <p className="text-muted-foreground leading-relaxed">
                        {selectedMember.bio}
                      </p>
                    </div>

                    {/* Skills */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold mb-3 text-Coresyncro-primary-dark">
                        Expertise
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {selectedMember.skills.map((skill, index) => (
                          <Badge 
                            key={index}
                            variant="secondary"
                            className="bg-gradient-to-r from-Coresyncro-primary-light/10 to-Coresyncro-primary-dark/10 text-foreground border border-Coresyncro-primary-light/20"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    {/* Projects */}
                    {selectedMember.projects && selectedMember.projects.length > 0 && (
                      <div>
                        <h4 className="text-lg font-semibold mb-3 text-Coresyncro-primary-light">
                          Key Projects
                        </h4>
                        <ul className="space-y-2">
                          {selectedMember.projects.map((project, index) => (
                            <li key={index} className="text-muted-foreground text-sm">
                              • {project}
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>

                {/* CTA */}
                {/* <div className="mt-8 text-center">
                  <Button className="bg-gradient-to-r from-Coresyncro-primary-light to-Coresyncro-primary-dark hover:from-Coresyncro-primary-light/90 hover:to-Coresyncro-primary-dark/90 text-white">
                    Request Consultation
                  </Button>
                </div> */}
              </>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default TeamSection;