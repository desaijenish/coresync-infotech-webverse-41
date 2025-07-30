
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission logic here
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-card border-2 border-coresync-primary-light/20">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-center bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark bg-clip-text text-transparent">
            Let's Start Your Project
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">
              Full Name
            </label>
            <Input 
              id="name" 
              placeholder="Enter your full name"
              className="border-2 focus:border-coresync-primary-light"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">
              Email Address
            </label>
            <Input 
              id="email" 
              type="email" 
              placeholder="Enter your email"
              className="border-2 focus:border-coresync-primary-light"
            />
          </div>
          
          <div className="space-y-2">
            <label htmlFor="service" className="text-sm font-medium">
              Service Interested In
            </label>
            <select className="w-full p-2 border-2 rounded-md bg-background focus:border-coresync-primary-light focus:outline-none">
              <option>Select a service</option>
              <option>AI-Based Business Software</option>
              <option>Game Development</option>
              <option>Web Development</option>
              <option>Mobile App Development</option>
              <option>Animation & Video Editing</option>
            </select>
          </div>
          
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">
              Project Details
            </label>
            <Textarea 
              id="message" 
              placeholder="Tell us about your project..."
              className="border-2 focus:border-coresync-primary-light min-h-[100px]"
            />
          </div>
          
          <div className="flex space-x-3">
            <Button 
              type="submit"
              className="flex-1 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark hover:scale-105 transform transition-all duration-300 text-white font-semibold"
            >
              Send Message
            </Button>
            <Button 
              type="button" 
              variant="outline" 
              onClick={onClose}
              className="border-2 border-coresync-primary-light text-coresync-primary-light hover:bg-coresync-primary-light hover:text-white"
            >
              Maybe Later
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ContactModal;
