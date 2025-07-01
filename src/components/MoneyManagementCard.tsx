"use client";

import React from "react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

interface MoneyManagementCardProps {
  lang: Language;
}

export default function MoneyManagementCard({
  lang,
}: MoneyManagementCardProps) {
  const content = {
    bn: {
      category: "অর্থ ব্যবস্থাপনা",
      description:
        "বুদ্ধিমান খরচ বিশ্লেষণ সহ ব্যক্তিগত বাজেট টুলস এবং এখনই কিনুন পরে পরিশোধ করুন সেবা",
      features: [
        "AI সুপারিশ সহ বুদ্ধিমান বাজেট",
        "নমনীয় শর্তে BNPL পেমেন্ট অপশন",
        "খরচ ট্র্যাকিং এবং শ্রেণীবিভাগ",
        "অতিরিক্ত খরচের জন্য স্মার্ট সতর্কতা",
      ],

      cta: "অর্থ ব্যবস্থাপনা করুন",
    },
    en: {
      category: "Money Management",
      description:
        "Personal budgeting tools and Buy Now Pay Later services with intelligent spending analytics",
      features: [
        "Intelligent budgeting with AI recommendations",
        "BNPL payment options with flexible terms",
        "Expense tracking and categorization",
        "Smart alerts for overspending",
      ],

      cta: "Manage Money",
    },
  };

  const t = content[lang];

  return (
    <div className="w-full h-full p-6 flex flex-col" data-oid="vknc.te">
      {/* Header */}
      <div className="flex justify-between items-start mb-4" data-oid=".5c2qe0">
        <div data-oid="kh6:f1a">
          <h3
            className="text-xl font-bold text-[#0d0d0d] uppercase mb-1"
            data-oid="3wr:-6i"
          >
            {t.category}
          </h3>
          <p className="text-sm text-[#0d0d0d]/70 max-w-2xl" data-oid="01z35fi">
            {t.description}
          </p>
        </div>
        <motion.a
          href="#"
          className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm group"
          whileHover={{ scale: 1.05 }}
          data-oid="-acyjj_"
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
            data-oid="on3c8vg"
          >
            <polyline points="9 18 15 12 9 6" data-oid="o8ot22i" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Features Grid */}
      <div className="flex-1 space-y-3" data-oid="pkor_11">
        {t.features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-3 p-3 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            data-oid="l039905"
          >
            <motion.div
              className="w-8 h-8 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 5 }}
              data-oid="w:4z1c2"
            >
              {index === 0 && (
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="4-83yxf"
                >
                  <circle cx="12" cy="12" r="10" data-oid=":x._8.e" />
                  <path d="m9 12 2 2 4-4" data-oid="hqcfcye" />
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
                  data-oid="ur1rzv6"
                >
                  <rect
                    x="1"
                    y="4"
                    width="22"
                    height="16"
                    rx="2"
                    ry="2"
                    data-oid="feir1cy"
                  />
                  <line x1="1" y1="10" x2="23" y2="10" data-oid="ugohec2" />
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
                  data-oid="uwat57r"
                >
                  <line x1="12" y1="1" x2="12" y2="23" data-oid="nf5d-s8" />
                  <path
                    d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    data-oid="zmd:rog"
                  />
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
                  data-oid=".thgtjz"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    data-oid="ycst:6a"
                  />
                  <line x1="12" y1="9" x2="12" y2="13" data-oid="uvj_c-2" />
                  <line x1="12" y1="17" x2="12.01" y2="17" data-oid="q55cp.9" />
                </svg>
              )}
            </motion.div>
            <p
              className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors leading-relaxed"
              data-oid="dvh2y0p"
            >
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
