// HiringRoadmap.js
import React from "react";
import { motion, useInView } from "framer-motion";
import { clsx } from "clsx";
import { FileText, Users, MessageCircle, Award, HandHeart } from "lucide-react";

const HIRING_STEPS = [
  {
    id: 1,
    icon: FileText,
    title: "Apply",
    description:
      "Apna resume aur cover letter ke saath application jama karein.",
  },
  {
    id: 2,
    icon: Users,
    title: "Screening",
    description: "Aapke application aur qualifications ka prarambhik review.",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Interview",
    description: "Hamari team ke saath technical aur cultural fit assessment.",
  },
  {
    id: 4,
    icon: Award,
    title: "Offer",
    description: "Aapka personalized offer package praapt karein.",
  },
  {
    id: 5,
    icon: HandHeart,
    title: "Onboard",
    description:
      "Team mein aapka swagat hai! Hamare saath apni yatra shuru karein.",
  },
];

const TimelineDot = ({ id }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.8 });

  return (
    <div
      ref={ref}
      className="absolute left-1/2 -translate-x-1/2 md:top-1/2 md:-translate-y-1/2 z-10"
    >
      <div className="relative flex items-center justify-center">
        <motion.div
          animate={{
            scale: isInView ? [1, 1.5, 1] : 1,
            opacity: isInView ? [0, 0.7, 0] : 0,
          }}
          transition={{
            duration: 1.2,
            ease: "easeInOut",
            repeat: Infinity,
            repeatDelay: 1,
          }}
          className="absolute h-6 w-6 rounded-full"
          style={{ backgroundColor: "rgba(236, 110, 0, 0.7)" }}
        />
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: isInView ? 1 : 0 }}
          transition={{
            duration: 0.5,
            delay: 0.2,
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="relative h-4 w-4 rounded-full border-2 border-white dark:border-gray-800"
          style={{ backgroundColor: "#ec6e00" }}
        />
      </div>
    </div>
  );
};

const TimelineCard = ({ id, icon: Icon, title, description, isLeft }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const cardVariants = {
    hidden: { opacity: 0, y: 50, x: isLeft ? -20 : 20 },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={clsx(
        "relative w-full md:w-[calc(50%-2.5rem)] p-4 sm:p-6 rounded-xl border",
        "bg-white/90 dark:bg-gray-800/90 backdrop-blur-lg shadow-lg",
        "group hover:border-[#ec6e00] hover:-translate-y-1 transition-all duration-300",
        "border-gray-200 dark:border-gray-700"
      )}
    >
      <div
        className={clsx(
          "hidden md:block absolute top-[calc(50%-0.5rem)] h-4 w-4 rotate-45",
          "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 group-hover:border-[#ec6e00] transition-colors duration-300",
          isLeft
            ? "right-[-0.5rem] border-t border-r"
            : "left-[-0.5rem] border-b border-l"
        )}
      />

      <div className="flex items-center space-x-4">
        <div
          className="flex-shrink-0 h-12 w-12 rounded-full flex items-center justify-center group-hover:bg-[#ec6e00] transition-colors duration-300"
          style={{ backgroundColor: "rgba(236, 110, 0, 0.15)" }}
        >
          <Icon
            className="h-6 w-6 transition-colors duration-300"
            style={{ color: "#ec6e00" }}
          />
        </div>
        <div>
          <h3
            className="text-lg font-bold group-hover:text-[#ec6e00] transition-colors duration-300 text-gray-900 dark:text-white"
            // style={{ color: "#1a1a1a" }}
          >
            {title}
          </h3>
          <p className="text-sm mt-1 text-gray-600 dark:text-gray-300">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const TimelineItem = ({ step, index }) => {
  const isLeft = index % 2 === 0;
  return (
    <div className="relative w-full flex justify-center first:mt-0 last:mb-0">
      <div className="block md:hidden w-full ml-12">
        <TimelineCard {...step} isLeft={false} />
      </div>
      <div className="absolute left-6 top-0 md:hidden h-full">
        <TimelineDot id={step.id} />
      </div>

      <div
        className={clsx(
          "hidden md:flex w-full items-center",
          isLeft ? "justify-start" : "justify-end"
        )}
      >
        <TimelineCard {...step} isLeft={isLeft} />
      </div>
      <div className="hidden md:block">
        <TimelineDot id={step.id} />
      </div>
    </div>
  );
};

const HiringRoadmap = () => {
  return (
    <section>
      <div className="container mx-auto px-4 max-w-5xl py-12">
        <div className="relative">
          <motion.div
            className="absolute left-6 md:left-1/2 top-0 h-full w-0.5 origin-top"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            viewport={{ once: true, amount: 0.2 }}
            style={{ backgroundColor: "#4592ff" }}
          />

          <div className="flex flex-col">
            {HIRING_STEPS.map((step, index) => (
              <TimelineItem key={step.id} step={step} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HiringRoadmap;
