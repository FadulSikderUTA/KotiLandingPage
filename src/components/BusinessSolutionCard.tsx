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
    <motion.div
      className="bg-white rounded-2xl p-8 shadow-lg border border-[#0d0d0d]/5 hover:shadow-2xl transition-all duration-500 h-full group"
      whileHover={{
        scale: 1.02,
        boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
      }}
      transition={{ duration: 0.3 }}
      data-oid="ge54:ph"
    >
      <div className="flex items-center gap-4 mb-8" data-oid="dso4n7n">
        <motion.div
          className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#6dbb00] to-[#5da600] flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ duration: 0.2 }}
          data-oid="99cyrm:"
        >
          {icon}
        </motion.div>
        <div className="flex-1" data-oid="s27:f3t">
          <div
            className="text-xs uppercase tracking-wide text-[#6dbb00] font-semibold mb-1 transition-colors duration-300 group-hover:text-[#5da600]"
            data-oid="7yhpudb"
          >
            {category}
          </div>
          <h3
            className="text-xl md:text-2xl lg:text-3xl font-bold text-[#0d0d0d] leading-tight group-hover:text-[#6dbb00] transition-colors duration-300"
            data-oid="avln33x"
          >
            {title}
          </h3>
        </div>
      </div>
      <p
        className="text-[#0d0d0d]/70 mb-8 leading-relaxed text-sm md:text-base lg:text-lg"
        data-oid="oll5u2r"
      >
        {description}
      </p>
      <div
        className="mb-8 rounded-xl bg-gray-50 p-6 shadow-inner border border-gray-100 group-hover:bg-gray-100 transition-all duration-300"
        data-oid="na1f_aq"
      >
        {mockup}
      </div>
      <div className="space-y-4 mb-8" data-oid=".hjfauc">
        {features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 group/feature"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            data-oid="jnzn8b0"
          >
            <div
              className="w-2 h-2 rounded-full bg-[#6dbb00] mt-2.5 flex-shrink-0 group-hover/feature:scale-125 transition-transform duration-200"
              data-oid="ul--g_j"
            ></div>
            <span
              className="text-sm md:text-base text-[#0d0d0d]/80 leading-relaxed group-hover/feature:text-[#0d0d0d] transition-colors duration-200"
              data-oid="dhz9rjk"
            >
              {feature}
            </span>
          </motion.div>
        ))}
      </div>
      <motion.button
        className="w-full bg-gradient-to-r from-[#6dbb00] to-[#5da600] text-white font-semibold py-4 px-6 rounded-xl hover:from-[#5da600] hover:to-[#4d9500] transition-all duration-300 shadow-lg hover:shadow-xl text-sm md:text-base lg:text-lg"
        whileHover={{
          scale: 1.02,
          boxShadow: "0 10px 25px -5px rgba(109, 187, 0, 0.4)",
        }}
        whileTap={{ scale: 0.98 }}
        transition={{ duration: 0.2 }}
        data-oid="5cczde4"
      >
        {cta}
      </motion.button>
    </motion.div>
  );
}
