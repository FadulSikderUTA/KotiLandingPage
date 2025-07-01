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
    <motion.div
      className="bg-[#f3f3f3] rounded-2xl overflow-hidden shadow-lg transition-all duration-300 h-full"
      style={{ border: "3px solid #5daa80" }}
      whileHover={{
        boxShadow: "0 20px 40px rgba(93, 170, 128, 0.15)",
        transform: "translateY(-2px)",
      }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      data-oid="w68rrzs"
    >
      <div className="w-full h-full p-6 flex flex-col" data-oid="-ads3n2">
        {/* Header */}
        <div
          className="flex justify-between items-start mb-4"
          data-oid="fkq-40g"
        >
          <div data-oid="stcs9by">
            <h3
              className="text-xl font-bold text-[#0d0d0d] uppercase mb-1"
              data-oid="99qygy7"
            >
              {t.category}
            </h3>
            <p
              className="text-sm text-[#0d0d0d]/70 max-w-2xl"
              data-oid="apovbn_"
            >
              {t.description}
            </p>
          </div>
          <motion.a
            href="#"
            className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm group"
            whileHover={{ scale: 1.05 }}
            data-oid="i9x_eqa"
          >
            {t.cta}
            <motion.svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="group-hover:translate-x-1 transition-transform"
              data-oid="2k9585m"
            >
              <polyline points="9 18 15 12 9 6" data-oid="tjp6-1u" />
            </motion.svg>
          </motion.a>
        </div>

        {/* Features Grid */}
        <div className="flex-1 space-y-3" data-oid="1:m9f1b">
          {t.features.map((feature, index) => (
            <motion.div
              key={index}
              className="flex items-start gap-3 p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              data-oid="r16mrcg"
            >
              <motion.div
                className="w-8 h-8 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 5 }}
                data-oid="lt34e69"
              >
                {index === 0 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="2.53en-"
                  >
                    <path
                      d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"
                      data-oid="7.mgvcc"
                    />

                    <path
                      d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"
                      data-oid="ym4lxqr"
                    />
                  </svg>
                )}
                {index === 1 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="nxy710a"
                  >
                    <polygon
                      points="23 7 16 12 23 17 23 7"
                      data-oid="qfmcs.h"
                    />

                    <rect
                      x="1"
                      y="5"
                      width="15"
                      height="14"
                      rx="2"
                      ry="2"
                      data-oid="lry.23h"
                    />
                  </svg>
                )}
                {index === 2 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="2dfy.wm"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      data-oid="2.xbwni"
                    />

                    <polyline points="14,2 14,8 20,8" data-oid="nz.an66" />
                    <path d="M16 13l-3-3 3-3" data-oid="bp.dao3" />
                    <path d="M8 13h7" data-oid="3f1v6dy" />
                  </svg>
                )}
                {index === 3 && (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="qo5u:9:"
                  >
                    <circle cx="12" cy="8" r="7" data-oid="qkrccrh" />
                    <polyline
                      points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"
                      data-oid="kjydsx9"
                    />
                  </svg>
                )}
              </motion.div>
              <p
                className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors leading-relaxed"
                data-oid="mi880e6"
              >
                {feature}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}
