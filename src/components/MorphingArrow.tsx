"use client";

import { motion } from "framer-motion";

const MorphingArrow = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <svg
        width="60"
        height="24"
        viewBox="0 0 60 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Arrow gradient */}
          <linearGradient 
            id="arrowGradient" 
            x1="0%" 
            y1="0%" 
            x2="100%" 
            y2="0%"
          >
            <stop offset="0%" stopColor="#6dbb00" />
            <stop offset="100%" stopColor="#5da600" />
          </linearGradient>

          {/* Glow filter */}
          <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
            <feGaussianBlur stdDeviation="2" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>

          {/* Moving light effect */}
          <linearGradient id="lightEffect" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="transparent" />
            <stop offset="50%" stopColor="rgba(255, 255, 255, 0.6)" />
            <stop offset="100%" stopColor="transparent" />
            <animateTransform
              attributeName="gradientTransform"
              type="translate"
              values="-100 0; 100 0; -100 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </linearGradient>
        </defs>

        {/* Arrow body with pulsing animation */}
        <motion.path
          d="M 5 12 L 45 12"
          stroke="url(#arrowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          filter="url(#glow)"
          animate={{
            strokeWidth: [3, 4, 3],
            opacity: [0.8, 1, 0.8]
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Arrow head with morphing animation */}
        <motion.path
          d="M 40 7 L 50 12 L 40 17"
          stroke="url(#arrowGradient)"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          filter="url(#glow)"
          animate={{
            strokeWidth: [3, 4, 3],
            x: [0, 2, 0]
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />

        {/* Moving light overlay */}
        <path
          d="M 5 12 L 45 12"
          stroke="url(#lightEffect)"
          strokeWidth="3"
          strokeLinecap="round"
          opacity="0.7"
        />

        {/* Sparkle effects */}
        {[20, 35].map((x, index) => (
          <motion.circle
            key={index}
            cx={x}
            cy="12"
            r="1"
            fill="#ffffff"
            opacity="0"
            animate={{
              opacity: [0, 1, 0],
              scale: [0.5, 1.2, 0.5]
            }}
            transition={{
              duration: 1,
              repeat: Infinity,
              delay: index * 0.5,
              ease: "easeInOut"
            }}
          />
        ))}
      </svg>

      {/* Additional glow effect around the entire arrow */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-r from-transparent via-[#6dbb00]/20 to-transparent rounded-full blur-sm"
        animate={{
          opacity: [0.3, 0.7, 0.3],
          scale: [0.8, 1.1, 0.8]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    </motion.div>
  );
};

export default MorphingArrow;
