"use client";

import { motion } from "framer-motion";

interface CreditScoreGaugeIconProps {
  score?: number;
  size?: number;
}

const CreditScoreGaugeIcon = ({ 
  score = 765, 
  size = 40 
}: CreditScoreGaugeIconProps) => {
  // Calculate needle rotation based on score (300-850 range)
  const calculateRotation = (score: number): number => {
    const normalizedScore = Math.max(300, Math.min(850, score));
    const percentage = (normalizedScore - 300) / (850 - 300);
    // -90 degrees (left) to 90 degrees (right) for semicircle
    return -90 + (percentage * 180);
  };

  const needleRotation = calculateRotation(score);

  return (
    <motion.svg 
      width={size} 
      height={size} 
      viewBox="0 0 100 100"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <defs>
        {/* Gradient for the gauge arc */}
        <linearGradient 
          id="gaugeGradient" 
          x1="0%" 
          y1="0%" 
          x2="100%" 
          y2="0%"
        >
          <stop offset="0%" stopColor="#ef4444" />   {/* red-500 */}
          <stop offset="25%" stopColor="#fb923c" />  {/* orange-400 */}
          <stop offset="50%" stopColor="#facc15" />  {/* yellow-400 */}
          <stop offset="75%" stopColor="#a3e635" />  {/* lime-400 */}
          <stop offset="100%" stopColor="#22c55e" /> {/* green-500 */}
        </linearGradient>

        {/* Shadow filter */}
        <filter id="shadow">
          <feDropShadow dx="0" dy="1" stdDeviation="1" floodOpacity="0.3"/>
        </filter>
      </defs>

      {/* Background arc (light gray) */}
      <path
        d="M 20 75 A 30 30 0 0 1 80 75"
        fill="none"
        stroke="#e5e7eb"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {/* Colored gauge arc */}
      <path
        d="M 20 75 A 30 30 0 0 1 80 75"
        fill="none"
        stroke="url(#gaugeGradient)"
        strokeWidth="6"
        strokeLinecap="round"
        filter="url(#shadow)"
      />

      {/* Center circle */}
      <circle
        cx="50"
        cy="75"
        r="4"
        fill="#374151"
        filter="url(#shadow)"
      />

      {/* Animated needle */}
      <motion.g
        initial={{ rotate: -90 }}
        animate={{ rotate: needleRotation }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{ transformOrigin: "50px 75px" }}
      >
        <line
          x1="50"
          y1="75"
          x2="50"
          y2="50"
          stroke="#374151"
          strokeWidth="2"
          strokeLinecap="round"
          filter="url(#shadow)"
        />
        
        {/* Needle tip */}
        <circle
          cx="50"
          cy="50"
          r="1.5"
          fill="#6dbb00"
        />
      </motion.g>

      {/* Center highlight */}
      <circle
        cx="50"
        cy="75"
        r="2"
        fill="#ffffff"
        opacity="0.8"
      />
    </motion.svg>
  );
};

export default CreditScoreGaugeIcon;
