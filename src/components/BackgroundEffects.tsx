// src/components/BackgroundEffects.tsx
import React from "react";

const BackgroundEffects = () => {
  return (
    <div className="absolute inset-0 pointer-events-none z-0">
      {/* Binary Code Grid */}
      <div className="absolute inset-0 opacity-5 hidden md:block">
        <div className="grid grid-cols-12 gap-4 h-full text-xs font-mono text-coresync-primary-light">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="animate-pulse"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              {Math.random() > 0.5 ? "1" : "0"}
            </div>
          ))}
        </div>
      </div>

      {/* Floating Shapes */}
      <div className="absolute top-20 left-4 sm:left-10 w-16 h-16 sm:w-32 sm:h-32 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark rotate-45 animate-float"></div>
      </div>
      <div className="absolute top-40 right-4 sm:right-20 w-12 h-12 sm:w-24 sm:h-24 opacity-10">
        <div className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light rounded-full animate-float-delayed"></div>
      </div>
      <div className="absolute bottom-40 left-1/4 w-10 h-10 sm:w-20 sm:h-20 opacity-10">
        <div
          className="w-full h-full bg-gradient-to-br from-coresync-primary-light to-coresync-primary-dark clip-path-triangle animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
      </div>
      <div className="absolute top-60 right-1/3 w-8 h-8 sm:w-16 sm:h-16 opacity-10">
        <div
          className="w-full h-full bg-gradient-to-br from-coresync-primary-dark to-coresync-primary-light transform rotate-12 animate-float"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>

      {/* Network Nodes */}
      <svg
        className="absolute inset-0 w-full h-full opacity-5 hidden lg:block"
        viewBox="0 0 1920 1080"
      >
        <defs>
          <linearGradient id="line-grad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#EC6E00" />
            <stop offset="100%" stopColor="#4592FF" />
          </linearGradient>
        </defs>
        <line
          x1="100"
          y1="100"
          x2="300"
          y2="200"
          stroke="url(#line-grad)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="300"
          y1="200"
          x2="500"
          y2="150"
          stroke="url(#line-grad)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <line
          x1="500"
          y1="150"
          x2="700"
          y2="300"
          stroke="url(#line-grad)"
          strokeWidth="1"
          className="animate-pulse"
        />
        <circle
          cx="100"
          cy="100"
          r="3"
          fill="#EC6E00"
          className="animate-pulse"
        />
        <circle
          cx="300"
          cy="200"
          r="3"
          fill="#4592FF"
          className="animate-pulse"
        />
        <circle
          cx="500"
          cy="150"
          r="3"
          fill="#EC6E00"
          className="animate-pulse"
        />
        <circle
          cx="700"
          cy="300"
          r="3"
          fill="#4592FF"
          className="animate-pulse"
        />
      </svg>
    </div>
  );
};

export default BackgroundEffects;
