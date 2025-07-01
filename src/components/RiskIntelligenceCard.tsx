"use client";

import React from "react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

interface RiskIntelligenceCardProps {
  lang: Language;
}

export default function RiskIntelligenceCard({
  lang,
}: RiskIntelligenceCardProps) {
  const content = {
    bn: {
      category: "ঝুঁকি বুদ্ধিমত্তা",
      description:
        "বাংলাদেশী বাজারের গতিশীলতার জন্য বিশেষভাবে প্রশিক্ষিত মেশিন লার্নিং-চালিত মডেল সহ ঋণদাতাদের জন্য উন্নত ক্রেডিট মূল্যায়ন",
      features: [
        "৯৪% নির্ভুলতা সহ মেশিন লার্নিং ঝুঁকি মডেল",
        "রিয়েল-টাইম ঋণগ্রহীতা যাচাইকরণ এবং পরিচয় পরীক্ষা",
        "আচরণগত বিশ্লেষণ সহ উন্নত জালিয়াতি সনাক্তকরণ",
        "ব্যাখ্যাযোগ্য AI সহ স্বয়ংক্রিয় সিদ্ধান্ত সহায়তা",
      ],
      cta: "ঝুঁকি মূল্যায়ন করুন",
    },
    en: {
      category: "Risk Intelligence",
      description:
        "Advanced credit assessment and risk evaluation for lenders with machine learning-powered models specifically trained for Bangladeshi market dynamics",
      features: [
        "Machine learning risk models with 94% accuracy",
        "Real-time borrower verification and identity checks",
        "Advanced fraud detection with behavioral analysis",
        "Automated decision support with explainable AI",
      ],
      cta: "Assess Risk",
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
          href="#"
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

      {/* Performance Metrics Display - Compact White Card */}
      <motion.div
        className="bg-white rounded-xl p-3 shadow-md mb-3 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        data-oid="wmvg-t6"
      >
        {/* Key Metrics Grid - Compact */}
        <div className="grid grid-cols-2 gap-3 mb-3" data-oid="sz799gy">
          <div className="text-center p-2 bg-green-50 rounded-lg border border-green-200" data-oid="6740_sw">
            <div className="text-2xl font-bold text-green-600 mb-1" data-oid="345-lb4">94%</div>
            <div className="text-xs text-green-700 font-medium" data-oid="ofe7_7y">
              {lang === "bn" ? "মডেল নির্ভুলতা" : "Model Accuracy"}
            </div>
          </div>
          <div className="text-center p-2 bg-blue-50 rounded-lg border border-blue-200" data-oid="9opviz1">
            <div className="text-2xl font-bold text-blue-600 mb-1" data-oid="-1lkqj9">2.3s</div>
            <div className="text-xs text-blue-700 font-medium" data-oid="k26bh67">
              {lang === "bn" ? "প্রতিক্রিয়ার সময়" : "Response Time"}
            </div>
          </div>
        </div>

        {/* Risk Distribution Bar - Compact */}
        <div className="space-y-2" data-oid="vup4--e">
          <div className="flex justify-between text-xs font-medium text-gray-600" data-oid=":9hlr93">
            <span>{lang === "bn" ? "ঝুঁকি বন্টন" : "Risk Distribution"}</span>
            <span>{lang === "bn" ? "গত ৩০ দিন" : "Last 30 days"}</span>
          </div>
          <div className="flex h-2 rounded-lg overflow-hidden shadow-inner border border-gray-200" data-oid="hyafksj">
            <div className="bg-green-500 flex-1" style={{ width: "40%" }}></div>
            <div className="bg-yellow-500 flex-1" style={{ width: "30%" }}></div>
            <div className="bg-orange-500" style={{ width: "20%" }}></div>
            <div className="bg-red-500" style={{ width: "10%" }}></div>
          </div>
          <div className="grid grid-cols-4 text-xs text-center text-gray-500" data-oid="m2sz.dk">
            <span>{lang === "bn" ? "নিম্ন" : "Low"}</span>
            <span>{lang === "bn" ? "মাঝারি" : "Medium"}</span>
            <span>{lang === "bn" ? "উচ্চ" : "High"}</span>
            <span>{lang === "bn" ? "সর্বোচ্চ" : "Critical"}</span>
          </div>
        </div>
      </motion.div>

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
                  <path d="M9 12l2 2 4-4" data-oid="4csv72s" />
                  <circle cx="12" cy="12" r="10" data-oid="fvj_chi" />
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
                  <path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" data-oid="vmkkyk-" />
                  <circle cx="8.5" cy="7" r="4" data-oid="19od_3o" />
                  <polyline points="17,11 19,13 23,9" data-oid="aqw9j3k" />
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
                  data-oid="_94cf_7"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" data-oid="gfx3:x6" />
                  <path d="M9 12l2 2 4-4" data-oid="ksw1z1l" />
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
                  data-oid="6.ataxb"
                >
                  <circle cx="12" cy="12" r="3" data-oid="x3wosc9" />
                  <path d="M12 1v6m0 6v6m11-7h-6m-6 0H1" data-oid="oj5pr_2" />
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
