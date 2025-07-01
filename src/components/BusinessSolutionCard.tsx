"use client";

import { motion } from "framer-motion";

type Language = "bn" | "en";

interface BusinessSolutionCardProps {
  icon: React.ReactNode;
  category: string;
  title: string;
  description: string;
  features: string[];
  mockup: React.ReactNode;
  cta: string;
  lang: Language;
}

export default function BusinessSolutionCard({
  icon,
  category,
  title,
  description,
  features,
  mockup,
  cta,
  lang,
}: BusinessSolutionCardProps) {
  return (
    <div className="w-full h-full p-6 flex flex-col" data-oid="5a-cu6w">
      {/* Header */}
      <div className="flex justify-between items-start mb-4" data-oid="zl3qpb2">
        <div data-oid="w7zmkws">
          <div className="flex items-center gap-3 mb-3" data-oid="_9ki4ka">
            <motion.div
              className="w-12 h-12 rounded-xl bg-[#5daa80] flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ duration: 0.2 }}
              data-oid="y6-hqgq"
            >
          {icon}
            </motion.div>
        <div>
              <div className="text-xs uppercase tracking-wide text-[#5daa80] font-semibold mb-1" data-oid="osswmin">
            {category}
              </div>
              <h3 className="text-xl font-bold text-[#0d0d0d] uppercase" data-oid="yxxf0h8">
                {title}
              </h3>
            </div>
          </div>
          <p className="text-sm text-[#0d0d0d]/70 max-w-2xl" data-oid="vb9zgg2">
            {description}
          </p>
        </div>
        <motion.a
          href="#"
          className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm group"
          whileHover={{ scale: 1.05 }}
          data-oid="qj9usde"
        >
          {cta}
          <motion.svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-1 transition-transform"
            data-oid="83:hxle"
          >
            <polyline points="9 18 15 12 9 6" data-oid="i.u-rzi" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Mockup Display Area */}
      <div className="flex-1 mb-6" data-oid="imarbu6">
        <div className="bg-white rounded-xl p-4 shadow-md mb-4 hover:shadow-lg transition-all duration-300" data-oid="pizyyo5">
          {mockup}
        </div>
      </div>

      {/* Features Grid */}
      <div className="space-y-3" data-oid="5a-cu6w-features">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            data-oid={`feature-${index}`}
          >
            <motion.div
              className="w-8 h-8 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 5 }}
              data-oid={`feature-icon-${index}`}
            >
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </motion.div>
            <p className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors leading-relaxed">
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
