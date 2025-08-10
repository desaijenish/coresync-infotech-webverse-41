import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Upload, User, Mail, FileText } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface ApplicationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ApplicationModal = ({ isOpen, onClose }: ApplicationModalProps) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    position: "",
    coverLetter: "",
    resume: null as File | null,
  });

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setFormData((prev) => ({
      ...prev,
      resume: file,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    console.log("Application submitted:", formData);
    // Show success message and close modal
    alert("Application submitted successfully!");
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3 }}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto"
          >
            <Card className="bg-background border-2 border-coresync-primary-light/20">
              <CardContent className="p-6">
                {/* Header */}
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-2xl font-bold text-foreground">
                    Apply for Position
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 hover:bg-muted rounded-lg transition-colors"
                  >
                    <X size={20} />
                  </button>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <User size={16} className="inline mr-2" />
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        value={formData.fullName}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coresync-primary-light focus:border-transparent bg-background"
                        placeholder="Enter your full name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <Mail size={16} className="inline mr-2" />
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coresync-primary-light focus:border-transparent bg-background"
                        placeholder="Enter your email"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coresync-primary-light focus:border-transparent bg-background"
                        placeholder="Enter your phone number"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Position of Interest *
                      </label>
                      <select
                        name="position"
                        value={formData.position}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coresync-primary-light focus:border-transparent bg-background"
                      >
                        <option value="">Select a position</option>
                        <option value="frontend-developer">
                          Frontend Developer
                        </option>
                        <option value="ai-ml-engineer">AI/ML Engineer</option>
                        <option value="mobile-developer">
                          Mobile App Developer
                        </option>
                        <option value="intern">
                          Software Engineering Intern
                        </option>
                      </select>
                    </div>
                  </div>

                  {/* Resume Upload */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Upload size={16} className="inline mr-2" />
                      Resume/CV *
                    </label>
                    <div className="relative">
                      <input
                        type="file"
                        name="resume"
                        onChange={handleFileChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coresync-primary-light focus:border-transparent bg-background file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-coresync-primary-light file:text-white file:cursor-pointer"
                      />
                    </div>
                    <p className="text-sm text-muted-foreground mt-2">
                      Accepted formats: PDF, DOC, DOCX (Max 5MB)
                    </p>
                  </div>

                  {/* Cover Letter */}
                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <FileText size={16} className="inline mr-2" />
                      Cover Letter
                    </label>
                    <textarea
                      name="coverLetter"
                      value={formData.coverLetter}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border border-border rounded-lg focus:ring-2 focus:ring-coresync-primary-light focus:border-transparent bg-background resize-none"
                      placeholder="Tell us why you're interested in this position..."
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="flex space-x-4 pt-4">
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 py-3 bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark text-white font-semibold rounded-lg hover:shadow-lg transition-all duration-300"
                    >
                      Submit Application
                    </motion.button>
                    <button
                      type="button"
                      onClick={onClose}
                      className="px-6 py-3 border border-border text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      Cancel
                    </button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default ApplicationModal;
