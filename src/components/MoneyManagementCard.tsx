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
    <div className="w-full h-full p-4 flex flex-col" data-oid="8spzg1k">
      {/* Header - Compact */}
      <div className="flex justify-between items-start mb-3" data-oid="zc5hg_3">
        <div data-oid="tlzdbi_">
          <h3
            className="text-lg font-bold text-[#0d0d0d] uppercase mb-1"
            data-oid=".v.ahwm"
          >
            {t.category}
          </h3>
          <p className="text-xs text-[#0d0d0d]/70 max-w-2xl" data-oid="via3uw3">
            {t.description}
          </p>
        </div>
        <motion.a
          href="#"
          className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-xs group"
          whileHover={{ scale: 1.05 }}
          data-oid="76-ctgi"
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
            data-oid="ro840py"
          >
            <polyline points="9 18 15 12 9 6" data-oid="82f67g6" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Features Grid - Compact */}
      <div className="flex-1 space-y-2" data-oid="itvcqjz">
        {t.features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-2 p-2 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
            data-oid="cp7ubcf"
          >
            <motion.div
              className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 5 }}
              data-oid="t8c8_:b"
            >
              {index === 0 && (
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="2qrd1ew"
                >
                  <circle cx="12" cy="12" r="10" data-oid="ogbn32e" />
                  <path d="m9 12 2 2 4-4" data-oid="d7_ujl:" />
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
                  data-oid="rc8rnxx"
                >
                  <rect
                    x="1"
                    y="4"
                    width="22"
                    height="16"
                    rx="2"
                    ry="2"
                    data-oid="-tci63b"
                  />
                  <line x1="1" y1="10" x2="23" y2="10" data-oid="hu86qch" />
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
                  data-oid="-y0l7yr"
                >
                  <line x1="12" y1="1" x2="12" y2="23" data-oid="xi2vj5g" />
                  <path
                    d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"
                    data-oid="xktpoia"
                  />
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
                  data-oid="1bgqskd"
                >
                  <path
                    d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"
                    data-oid="o419xej"
                  />
                  <line x1="12" y1="9" x2="12" y2="13" data-oid="ut-z6os" />
                  <line x1="12" y1="17" x2="12.01" y2="17" data-oid="ixi_w5g" />
                </svg>
              )}
            </motion.div>
            <p
              className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors leading-relaxed"
              data-oid="96rg1eg"
            >
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
