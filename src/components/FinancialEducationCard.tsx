"use client";

import React from "react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

interface FinancialEducationCardProps {
  lang: Language;
}

export default function FinancialEducationCard({
  lang,
}: FinancialEducationCardProps) {
  const content = {
    bn: {
      category: "আর্থিক শিক্ষা",
      description:
        "বাংলাদেশী ভোক্তাদের জন্য বিশেষভাবে ডিজাইন করা ব্যাপক আর্থিক সাক্ষরতা কর্মসূচি এবং শিক্ষা সম্পদ",
      features: [
        "বাংলা এবং ইংরেজিতে ইন্টারেক্টিভ কোর্স",
        "ভিডিও টিউটোরিয়াল এবং ব্যবহারিক অনুশীলনী",
        "আর্থিক সাক্ষরতার জন্য সার্টিফিকেশন প্রোগ্রাম",
        "গ্যামিফাইড শেখার অভিজ্ঞতা",
      ],

      cta: "শেখা শুরু করুন",
    },
    en: {
      category: "Financial Education",
      description:
        "Comprehensive financial literacy programs and educational resources designed specifically for Bangladeshi consumers",
      features: [
        "Interactive courses in Bengali and English",
        "Video tutorials and practical exercises",
        "Certification programs for financial literacy",
        "Gamified learning experience",
      ],

      cta: "Start Learning",
    },
  };

  const t = content[lang];

  return (
    <div className="w-full h-full p-4 flex flex-col" data-oid="jzbd__d">
      {/* Header - Compact */}
      <div className="flex justify-between items-start mb-3" data-oid="ta0tygx">
        <div data-oid="6m7qu4e">
          <h3
            className="text-lg font-bold text-[#0d0d0d] uppercase mb-1"
            data-oid=":ro6vkk"
          >
            {t.category}
          </h3>
          <p className="text-xs text-[#0d0d0d]/70 max-w-2xl" data-oid="-:il4.q">
            {t.description}
          </p>
        </div>
        <motion.a
          href="/about"
          className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-xs group"
          whileHover={{ scale: 1.05 }}
          data-oid="rzb1cvn"
        >
          {t.cta}
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-1 transition-transform"
            data-oid="yeqaoim"
          >
            <polyline points="9 18 15 12 9 6" data-oid="mwqkmyi" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Features Grid - Compact */}
      <div className="flex-1 space-y-2" data-oid="2fp7211">
        {t.features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-2 p-2 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            data-oid="akglhqt"
          >
            <motion.div
              className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 5 }}
              data-oid="xzkqc62"
            >
              {index === 0 && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="0gxmgvu"
                >
                  <path
                    d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                    data-oid="4csv72s"
                  />
                  <path
                    d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                    data-oid="fvj_chi"
                  />
                </svg>
              )}
              {index === 1 && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="ab.6re9"
                >
                  <polygon points="23 7 16 12 23 17 23 7" data-oid="vmkkyk-" />
                  <rect
                    x="1"
                    y="5"
                    width="15"
                    height="14"
                    rx="2"
                    ry="2"
                    data-oid="19od_3o"
                  />
                </svg>
              )}
              {index === 2 && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="aqw9j3k"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    data-oid="_94cf_7"
                  />
                  <polyline points="14,2 14,8 20,8" data-oid="gfx3:x6" />
                  <path d="M16 13l-3-3 3-3" data-oid="ksw1z1l" />
                  <path d="M8 13h7" data-oid="6.ataxb" />
                </svg>
              )}
              {index === 3 && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="x3wosc9"
                >
                  <circle cx="12" cy="8" r="7" data-oid="oj5pr_2" />
                  <polyline
                    points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                    data-oid="_22-p9i"
                  />
                </svg>
              )}
            </motion.div>
            <p
              className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors leading-relaxed"
              data-oid="q7fs0r:"
            >
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
