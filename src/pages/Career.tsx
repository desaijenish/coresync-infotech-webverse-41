import React, { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import ApplicationModal from "@/components/career/ApplicationModal";
import HiringRoadmap from "@/components/career/HiringRoadmap";
import PositionCard from "@/components/career/PositionCard";
import TestimonialsCarousel from "@/components/career/TestimonialsCarousel";
import PerksSection from "@/components/career/PerksSection";
import SpeculativeApplicationForm from "@/components/career/SpeculativeApplicationForm";
import {
  MapPin,
  Briefcase,
  Rocket,
  Lightbulb,
  Handshake,
  Users,
  Building,
  Globe,
  Code,
  Zap,
  Database,
  Cpu,
  Network,
  Binary,
} from "lucide-react";
import BackgroundEffects from "@/components/BackgroundEffects";

const Career = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [filterType, setFilterType] = useState<
    "all" | "full-time" | "internship"
  >("all");
  const heroRef = useRef<HTMLDivElement>(null);
  const isHeroInView = useInView(heroRef, { once: true });

  const jobListings = [
    {
      id: 1,
      title: "React.js Frontend Intern",
      location: "Remote / Hybrid",
      type: "Internship",
      tagline: "Kickstart your frontend development journey",
      description:
        "Join our development team as a React.js Intern and gain hands-on experience by working on real-life projects. This is a great opportunity to learn, build, and grow your skills in modern frontend technologies.",
      responsibilities: [
        "Assist in developing responsive web interfaces using React.js",
        "Work closely with senior developers to implement UI components",
        "Contribute to improving the user experience in real-world applications",
        "Write clean and maintainable code under guidance",
      ],
      requirements: [
        "Basic understanding of React.js and JavaScript",
        "Familiarity with HTML, CSS, and responsive design",
        "Eagerness to learn modern frontend tools and workflows",
        "Good problem-solving skills and willingness to collaborate",
        "Opportunity to gain hands-on experience and work on real-life projects",
      ],
    },
    {
      id: 2,
      title: "Java Spring Boot Intern",
      location: "Remote / Hybrid",
      type: "Internship",
      tagline: "Kickstart your backend development journey",
      description:
        "Join our backend team as a Java Spring Boot Intern and gain hands-on experience by working on real-life projects. Learn how modern backend systems are built and contribute to actual production-level applications.",
      responsibilities: [
        "Assist in developing RESTful APIs using Java and Spring Boot",
        "Work closely with senior developers to understand backend architecture",
        "Participate in writing clean, maintainable, and well-documented code",
        "Support debugging, testing, and improving existing features",
        "Contribute to real-world backend development tasks",
      ],
      requirements: [
        "Basic understanding of Java and object-oriented programming",
        "Familiarity with Spring Boot fundamentals (Controllers, REST API, etc.)",
        "Knowledge of SQL and databases is a plus",
        "Eagerness to learn backend development and work on real-life projects",
        "Strong problem-solving mindset and willingness to collaborate",
      ]
    },
    {
      id: 3,
      title: "Java Spring Boot Developer",
      location: "Remote / Hybrid",
      type: "Full-Time",
      tagline: "Build scalable and robust backend systems",
      description:
        "We are looking for an experienced Java Spring Boot Developer to build, optimize, and maintain scalable backend systems. Join our team to work on high-performance applications and contribute to modern backend architectures.",
      responsibilities: [
        "Develop and maintain RESTful APIs using Java and Spring Boot",
        "Design scalable and efficient backend architectures",
        "Integrate databases and optimize queries for performance",
        "Write clean, maintainable, and well-tested code",
        "Collaborate with frontend and DevOps teams to deliver high-quality products",
        "Troubleshoot production issues and implement reliable solutions"
      ],
      requirements: [
        "2+ years of experience with Java and Spring Boot",
        "Strong understanding of RESTful API development and microservices",
        "Experience with SQL/NoSQL databases",
        "Knowledge of security, authentication, and API best practices",
        "Familiarity with testing frameworks like JUnit and Mockito",
        "Ability to work independently and in a collaborative team environment"
      ]
    },
    {
      id: 4,
      title: "Python FastAPI Intern",
      location: "Remote / Hybrid",
      type: "Internship",
      tagline: "Kickstart your backend development journey with FastAPI",
      description:
        "Join our backend team as a Python FastAPI Intern and gain hands-on experience by working on real-life, production-focused projects. Learn how modern, high-performance APIs are built using FastAPI.",
      responsibilities: [
        "Assist in building RESTful APIs using Python and FastAPI",
        "Work with senior developers to understand backend logic and architecture",
        "Write clean, readable, and maintainable code under guidance",
        "Support debugging, testing, and documentation tasks",
        "Contribute to real-world backend tasks and project modules"
      ],
      requirements: [
        "Basic understanding of Python programming",
        "Familiarity with API development and FastAPI fundamentals is a plus",
        "Understanding of SQL/NoSQL databases is helpful",
        "Eagerness to learn backend technologies and work on real-life projects",
        "Good communication skills and willingness to collaborate"
      ]
    },
    {
      id: 5,
      title: "Python FastAPI Developer",
      location: "Remote / Hybrid",
      type: "Full-Time",
      tagline: "Build high-performance backend systems",
      description:
        "We are seeking a skilled Python FastAPI Developer to design, develop, and optimize high-performance backend applications. Join our team and work on scalable, modern API-driven systems.",
      responsibilities: [
        "Develop and maintain high-performance APIs using Python and FastAPI",
        "Design scalable backend architectures and application logic",
        "Integrate databases and optimize queries for performance",
        "Write clean, efficient, and testable code",
        "Collaborate with frontend, DevOps, and QA teams",
        "Troubleshoot and resolve production issues efficiently"
      ],
      requirements: [
        "2+ years of experience with Python backend development",
        "Strong understanding of FastAPI and REST API principles",
        "Experience with SQL/NoSQL databases",
        "Knowledge of authentication, authorization, and API best practices",
        "Familiarity with testing tools like PyTest",
        "Ability to work independently and in a collaborative environment"
      ]
    }

  ];

  const filteredJobs = jobListings.filter((job) => {
    if (filterType === "all") return true;
    return true;
  });

  const fadeInUpVariants: Variants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen bg-background text-foreground relative overflow-hidden">
        {/* Enhanced Mathematical & Geometric Background Pattern */}
        <div className="fixed inset-0 pointer-events-none overflow-hidden opacity-[0.015] dark:opacity-[0.03]">
          {/* Binary Earth Pattern */}
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 30% 70%, rgba(236, 110, 0, 0.08) 0%, transparent 50%), 
                             radial-gradient(circle at 70% 30%, rgba(69, 146, 255, 0.08) 0%, transparent 50%),
                             url("data:image/svg+xml,%3Csvg width='400' height='400' viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23EC6E00' fill-opacity='0.4'%3E%3Ctext x='40' y='60' font-family='JetBrains Mono, monospace' font-size='14'%3E01010110110101001101%3C/text%3E%3Ctext x='40' y='80' font-family='JetBrains Mono, monospace' font-size='14'%3E11001100101011011010%3C/text%3E%3Ctext x='40' y='100' font-family='JetBrains Mono, monospace' font-size='14'%3E10110110111001100110%3C/text%3E%3Ctext x='40' y='120' font-family='JetBrains Mono, monospace' font-size='14'%3Ef(x)=mx+b ∑∞n=1 1/n²%3C/text%3E%3Ctext x='40' y='140' font-family='JetBrains Mono, monospace' font-size='14'%3E∇²φ = ρ/ε₀ ∂²u/∂t²%3C/text%3E%3Ctext x='40' y='160' font-family='JetBrains Mono, monospace' font-size='14'%3E∫₋∞∞ e⁻ˣ² dx = √π%3C/text%3E%3Ctext x='40' y='180' font-family='JetBrains Mono, monospace' font-size='14'%3E01110111010110110101%3C/text%3E%3Ctext x='40' y='200' font-family='JetBrains Mono, monospace' font-size='14'%3Elim x→0 (sin x)/x = 1%3C/text%3E%3Ctext x='40' y='220' font-family='JetBrains Mono, monospace' font-size='14'%3E11010110100110011001%3C/text%3E%3Ctext x='40' y='240' font-family='JetBrains Mono, monospace' font-size='14'%3EE = mc² | H = -∇²/2m%3C/text%3E%3Ctext x='40' y='280' font-family='JetBrains Mono, monospace' font-size='12'%3Ewhile(true){code()}%3C/text%3E%3Ctext x='40' y='300' font-family='JetBrains Mono, monospace' font-size='12'%3Eif(dream){code.reality}%3C/text%3E%3Ctext x='40' y='320' font-family='JetBrains Mono, monospace' font-size='12'%3Efunction solve(problem)%3C/text%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>

          {/* Geometric Network Pattern with Mathematical Nodes */}
          <div className="absolute inset-0 opacity-[0.04] dark:opacity-[0.08]">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern
                  id="math-network"
                  x="0"
                  y="0"
                  width="200"
                  height="200"
                  patternUnits="userSpaceOnUse"
                >
                  {/* Mathematical Nodes */}
                  <circle
                    cx="40"
                    cy="40"
                    r="4"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <circle
                    cx="160"
                    cy="40"
                    r="4"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <circle
                    cx="100"
                    cy="100"
                    r="4"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <circle
                    cx="40"
                    cy="160"
                    r="4"
                    fill="currentColor"
                    opacity="0.5"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="4"
                    fill="currentColor"
                    opacity="0.5"
                  />

                  {/* Connection Lines */}
                  <line
                    x1="40"
                    y1="40"
                    x2="160"
                    y2="40"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="40"
                    y1="40"
                    x2="100"
                    y2="100"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="160"
                    y1="40"
                    x2="100"
                    y2="100"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="100"
                    y1="100"
                    x2="40"
                    y2="160"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />
                  <line
                    x1="100"
                    y1="100"
                    x2="160"
                    y2="160"
                    stroke="currentColor"
                    strokeWidth="1"
                    opacity="0.3"
                  />

                  {/* Geometric Shapes */}
                  <polygon
                    points="100,20 115,50 85,50"
                    fill="currentColor"
                    opacity="0.15"
                  />
                  <polygon
                    points="20,100 35,115 20,130 5,115"
                    fill="currentColor"
                    opacity="0.15"
                  />
                  <rect
                    x="170"
                    y="85"
                    width="15"
                    height="15"
                    fill="currentColor"
                    opacity="0.1"
                    transform="rotate(45 177.5 92.5)"
                  />

                  {/* Mathematical Symbols */}
                  <text
                    x="60"
                    y="25"
                    font-family="serif"
                    font-size="12"
                    fill="currentColor"
                    opacity="0.3"
                  >
                    ∑
                  </text>
                  <text
                    x="180"
                    y="25"
                    font-family="serif"
                    font-size="12"
                    fill="currentColor"
                    opacity="0.3"
                  >
                    ∫
                  </text>
                  <text
                    x="15"
                    y="85"
                    font-family="serif"
                    font-size="12"
                    fill="currentColor"
                    opacity="0.3"
                  >
                    ∇
                  </text>
                  <text
                    x="180"
                    y="185"
                    font-family="serif"
                    font-size="12"
                    fill="currentColor"
                    opacity="0.3"
                  >
                    ∂
                  </text>
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#math-network)" />
            </svg>
          </div>

          {/* Floating Animated Tech Icons */}
          <motion.div
            className="absolute top-32 right-16 w-10 h-10 opacity-20"
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Database className="w-full h-full text-coresync-primary-light" />
          </motion.div>

          <motion.div
            className="absolute bottom-32 left-16 w-8 h-8 opacity-25"
            animate={{
              y: [0, 8, 0],
              x: [0, 3, 0],
            }}
            transition={{
              duration: 3.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          >
            <Code className="w-full h-full text-coresync-primary-dark" />
          </motion.div>

          <motion.div
            className="absolute top-1/4 right-1/3 w-9 h-9 opacity-15"
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
          >
            <Cpu className="w-full h-full text-coresync-primary-light" />
          </motion.div>

          <motion.div
            className="absolute bottom-1/4 left-1/3 w-7 h-7 opacity-20"
            animate={{
              y: [0, -6, 0],
              opacity: [0.2, 0.35, 0.2],
            }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5,
            }}
          >
            <Network className="w-full h-full text-coresync-primary-dark" />
          </motion.div>

          <motion.div
            className="absolute top-1/2 left-10 w-6 h-6 opacity-18"
            animate={{
              rotate: [0, 360],
              scale: [1, 0.8, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
          >
            <Binary className="w-full h-full text-coresync-primary-light" />
          </motion.div>

          <motion.div
            className="absolute top-20 left-1/3 w-8 h-8 opacity-12"
            animate={{
              y: [0, 12, 0],
              x: [0, -4, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5,
            }}
          >
            <Zap className="w-full h-full text-coresync-primary-dark" />
          </motion.div>
        </div>

        <Navbar />
        <BackgroundEffects />

        {/* Hero Banner with Office Photo */}
        <section
          className="relative pt-20 pb-16 px-4 overflow-hidden"
          ref={heroRef}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10">
            <img
              src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&h=600"
              alt="Coresync Office"
              className="w-full h-full object-cover opacity-20"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
          </div>

          <div className="container mx-auto text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={
                isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="max-w-4xl mx-auto"
            >
              <motion.h1
                className="text-4xl md:text-6xl font-bold mb-6"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
              >
                Join the{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-coresync-primary-light to-coresync-primary-dark">
                  Coresync Infotech Team
                </span>
              </motion.h1>
              <motion.p
                className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto"
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isHeroInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
              >
                Build cutting-edge solutions with us—your journey starts here.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Why Join Coresync Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-8"
            >
              <Card className="max-w-4xl mx-auto bg-gradient-to-r from-coresync-primary-light/10 to-coresync-primary-dark/10 border-2 border-coresync-primary-light/20">
                <CardContent className="p-8">
                  <h2 className="text-3xl md:text-4xl font-bold mb-4">
                    Why Join{" "}
                    <span className="text-coresync-primary-light">
                      Coresync?
                    </span>
                  </h2>
                  <p className="text-lg text-muted-foreground">
                    At Coresync Infotech, we're not just building software—we're
                    crafting the future of technology. Join a team of passionate
                    innovators who push boundaries, embrace challenges, and
                    create solutions that make a real impact in the world.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </section>

        {/* Hiring Roadmap Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Your{" "}
                <span className="text-coresync-primary-light">Journey</span>{" "}
                with Us
              </h2>
              <p className="text-muted-foreground text-lg">
                Follow our streamlined hiring process designed for your success
              </p>
            </motion.div>
            <HiringRoadmap />
          </div>
        </section>

        {/* Job Listings Section */}
        <section className="py-12 px-4 relative z-10">
          <div className="container mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Open{" "}
                <span className="text-coresync-primary-light">Positions</span>
              </h2>
              <p className="text-muted-foreground text-lg mb-8">
                Discover exciting opportunities to grow your career with us
              </p>

              {/* Filter Tabs */}
            </motion.div>

            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="grid gap-6 max-w-4xl mx-auto"
            >
              {filteredJobs.map((job, index) => (
                <motion.div
                  key={job.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.6,
                    ease: "easeOut",
                    delay: index * 0.1,
                  }}
                  viewport={{ once: true }}
                >
                  <PositionCard
                    job={job}
                    index={index}
                    onApply={() => setIsModalOpen(true)}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* What Our Team Says */}
        <TestimonialsCarousel />

        {/* Why Choose Us Section */}
        <PerksSection />

        {/* Speculative Application Section */}
        <SpeculativeApplicationForm />

        <Footer />

        <ApplicationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          // availablePositions={jobListings}
        />
      </div>
    </ThemeProvider>
  );
};

export default Career;
