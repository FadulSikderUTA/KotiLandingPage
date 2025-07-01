"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

interface PersonalCreditHubCardProps {
  lang: Language;
}

export default function PersonalCreditHubCard({
  lang,
}: PersonalCreditHubCardProps) {
  // Credit score simulation with realistic scenarios
  const [displayScore, setDisplayScore] = useState(720);
  const [targetScore, setTargetScore] = useState(720);
  const [scenario, setScenario] = useState(0);

  // Realistic credit factors with proper weightings
  const [factors, setFactors] = useState({
    paymentHistory: 40, // Excellent payment history
    creditUsage: 25, // Good utilization
    accountAge: 18, // Decent history length
    hardInquiries: -3, // Few inquiries
    accountTypes: 15, // Good account mix
  });

  // Content translations
  const content = {
    en: {
      title: "PERSONAL CREDIT HUB",
      subtitle:
        "Complete credit monitoring, reports, and score tracking for Bangladeshi consumers",
      learnMore: "Learn More",
      factors: {
        paymentHistory: "Payment History",
        creditUsage: "Credit Usage",
        accountAge: "Account Age",
        hardInquiries: "Hard Inquiries",
        accountTypes: "Account Types",
      },
      features: {
        monitoring: "Real-time credit score monitoring with instant alerts",
        reports: "Detailed credit reports in Bengali and English",
        insights: "AI-powered personalized score improvement tips",
        protection: "Advanced identity theft and fraud protection",
      },
    },
    bn: {
      title: "ব্যক্তিগত ক্রেডিট হাব",
      subtitle:
        "বাংলাদেশী ভোক্তাদের জন্য সম্পূর্ণ ক্রেডিট মনিটরিং, রিপোর্ট এবং স্কোর ট্র্যাকিং",
      learnMore: "আরও জানুন",
      factors: {
        paymentHistory: "পেমেন্ট ইতিহাস",
        creditUsage: "ক্রেডিট ব্যবহার",
        accountAge: "অ্যাকাউন্ট বয়স",
        hardInquiries: "হার্ড অনুসন্ধান",
        accountTypes: "অ্যাকাউন্ট ধরন",
      },
      features: {
        monitoring: "তাৎক্ষণিক সতর্কতা সহ রিয়েল-টাইম ক্রেডিট স্কোর মনিটরিং",
        reports: "বাংলা এবং ইংরেজিতে বিস্তারিত ক্রেডিট রিপোর্ট",
        insights: "AI-চালিত ব্যক্তিগতকৃত স্কোর উন্নতির পরামর্শ",
        protection: "উন্নত পরিচয় চুরি এবং জালিয়াতি সুরক্ষা",
      },
    },
  };

  const t = content[lang];

  // Three realistic credit scenarios with gradual transitions
  const creditScenarios = [
    {
      name: "Good Credit Profile",
      baseScore: 720,
      factors: {
        paymentHistory: 40, // Strong payment history
        creditUsage: 25, // 15% utilization
        accountAge: 18, // 4 years average age
        hardInquiries: -3, // 2 recent inquiries
        accountTypes: 15, // Good account mix
      },
    },
    {
      name: "After Missing Payments",
      baseScore: 675, // Dropped 45 points
      factors: {
        paymentHistory: 32, // Missed some payments
        creditUsage: 20, // Higher utilization 30%
        accountAge: 18, // Same history length
        hardInquiries: -8, // More inquiries from loan shopping
        accountTypes: 15, // Same account mix
      },
    },
    {
      name: "Recovery with Good Habits",
      baseScore: 710, // Recovered 35 points
      factors: {
        paymentHistory: 38, // Rebuilding payment history
        creditUsage: 28, // Improved utilization to 10%
        accountAge: 20, // History grew longer
        hardInquiries: -5, // Inquiries aged out
        accountTypes: 17, // Added account diversity
      },
    },
  ];

  // Animate score smoothly with realistic speed
  useEffect(() => {
    const timer = setInterval(() => {
      setDisplayScore((prev) => {
        const diff = targetScore - prev;
        if (Math.abs(diff) < 0.5) return targetScore;
        return prev + diff * 0.06; // Slower, more realistic animation
      });
    }, 60);
    return () => clearInterval(timer);
  }, [targetScore]);

  // Cycle through the 3 realistic scenarios
  useEffect(() => {
    const cycleTimer = setInterval(() => {
      const nextScenario = (scenario + 1) % creditScenarios.length;
      const currentScenario = creditScenarios[nextScenario];

      setScenario(nextScenario);
      setTargetScore(currentScenario.baseScore);
      setFactors(currentScenario.factors);
    }, 5000); // Longer duration to see the changes

    return () => clearInterval(cycleTimer);
  }, [scenario]);

  return (
    <div className="w-full max-w-6xl mx-auto p-4" data-oid="pbp1:fd">
      {/* MAIN RECTANGULAR CARD - Yeeld Style with Visible Border */}
      <motion.div
        className="bg-[#f3f3f3] rounded-2xl overflow-hidden shadow-lg transition-all duration-300"
        style={{ border: "3px solid #5daa80" }}
        whileHover={{
          boxShadow: "0 20px 40px rgba(93, 170, 128, 0.15)",
          transform: "translateY(-2px)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-oid="5cgy-.b"
      >
        <div className="p-6" data-oid="-w05:-m">
          {/* Header Row */}
          <div
            className="flex justify-between items-start mb-4"
            data-oid="ly_p.4d"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-oid="x1s:uwt"
            >
              <h2
                className="text-xl font-bold text-[#0d0d0d] uppercase mb-1"
                data-oid="t87:4im"
              >
                {t.title}
              </h2>
              <p
                className="text-sm text-[#0d0d0d]/70 max-w-2xl"
                data-oid="ik4gsl0"
              >
                {t.subtitle}
              </p>
            </motion.div>
            <motion.a
              href="#"
              className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-sm group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              data-oid="q1-3mb4"
            >
              {t.learnMore}
              <motion.svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
                data-oid="bmg5-rq"
              >
                <polyline points="9 18 15 12 9 6" data-oid="xprftwc" />
              </motion.svg>
            </motion.a>
          </div>

          {/* Score Display Area - White Card */}
          <motion.div
            className="bg-white rounded-xl p-5 shadow-md mb-5 hover:shadow-lg transition-all duration-300"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            data-oid="mzqyu2w"
          >
            {/* Score and Bar - Horizontal Layout */}
            <div className="flex items-center gap-6 mb-4" data-oid="ta3iasw">
              {/* Score Number */}
              <div className="text-center" data-oid="yo2djpr">
                <motion.div
                  className="text-5xl font-bold text-[#5daa80]"
                  key={Math.round(displayScore)}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-oid="8p7omlx"
                >
                  {Math.round(displayScore)}
                </motion.div>
                <div
                  className="text-xs text-gray-600 mt-0.5"
                  data-oid=".b2y.5z"
                >
                  KOTI SCORE
                </div>
              </div>

              {/* Gradient Bar */}
              <div className="flex-1" data-oid="sm7q:ir">
                <div
                  className="relative h-10 rounded-full overflow-hidden"
                  data-oid="e257n6y"
                >
                  {/* Exact gradient from Hero.tsx */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-lime-400 to-green-500"
                    data-oid="sf_6xxi"
                  ></div>
                  {/* Score pointer */}
                  <motion.div
                    className="absolute top-0 h-full w-2 bg-white rounded-full shadow-lg"
                    animate={{ left: `${((displayScore - 300) / 550) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    data-oid="d4k4an5"
                  />
                </div>
                <div
                  className="flex justify-between mt-2 text-xs text-gray-500"
                  data-oid="2br_:ui"
                >
                  <span data-oid="3ne54p1">300</span>
                  <span data-oid="404.zcm">850</span>
                </div>
              </div>
            </div>

            {/* Credit Factors - Animated */}
            <div className="grid grid-cols-5 gap-2" data-oid="xj1eskn">
              {Object.entries(factors).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="text-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  data-oid="k3ees.h"
                >
                  <motion.div
                    className={`text-base font-bold ${(value as number) > 0 ? "text-[#5daa80]" : "text-red-500"}`}
                    key={value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    data-oid="etdb.z6"
                  >
                    {(value as number) > 0 ? "+" : ""}
                    {value}
                  </motion.div>
                  <div className="text-xs text-gray-600" data-oid="1r150xm">
                    {t.factors[key as keyof typeof t.factors]}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Features Grid - 2x2 with Enhanced Styling */}
          <div className="grid grid-cols-2 gap-3" data-oid="76dsevl">
            {/* Monitoring */}
            <motion.div
              className="flex items-start gap-3 p-3 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              whileHover={{ scale: 1.02 }}
              data-oid="nv.5_c8"
            >
              <motion.div
                className="w-10 h-10 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 5 }}
                data-oid="5ej9gmj"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="sa_1a:8"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-oid="0fw9dud" />
                </svg>
              </motion.div>
              <p
                className="text-sm text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                data-oid="pqv4.vm"
              >
                {t.features.monitoring}
              </p>
            </motion.div>

            {/* Reports */}
            <motion.div
              className="flex items-start gap-3 p-3 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              whileHover={{ scale: 1.02 }}
              data-oid="_3fkjor"
            >
              <motion.div
                className="w-10 h-10 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: -5 }}
                data-oid="m_k_2xu"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="koi_3dt"
                >
                  <path
                    d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                    data-oid="b9_2qfu"
                  />

                  <polyline points="14,2 14,8 20,8" data-oid="4_jizoo" />
                  <line x1="16" y1="13" x2="8" y2="13" data-oid="cw6.:ld" />
                  <line x1="16" y1="17" x2="8" y2="17" data-oid="-v2nnhj" />
                  <polyline points="10,9 9,9 8,9" data-oid="nm:eqw_" />
                </svg>
              </motion.div>
              <p
                className="text-sm text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                data-oid="dl_tit2"
              >
                {t.features.reports}
              </p>
            </motion.div>

            {/* AI Insights */}
            <motion.div
              className="flex items-start gap-3 p-3 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              whileHover={{ scale: 1.02 }}
              data-oid="64scg-1"
            >
              <motion.div
                className="w-10 h-10 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: 5 }}
                data-oid="2-pj2ux"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="n1hcbrm"
                >
                  <circle cx="12" cy="12" r="10" data-oid="wlgw7x1" />
                  <path d="M12 16v-4m0-4h.01" data-oid="ia:kxh-" />
                </svg>
              </motion.div>
              <p
                className="text-sm text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                data-oid="c5r_ei4"
              >
                {t.features.insights}
              </p>
            </motion.div>

            {/* Protection */}
            <motion.div
              className="flex items-start gap-3 p-3 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.02 }}
              data-oid="k36:_k1"
            >
              <motion.div
                className="w-10 h-10 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                whileHover={{ rotate: -5 }}
                data-oid="dk8knj9"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="white"
                  strokeWidth="2"
                  data-oid="izqcr0x"
                >
                  <path
                    d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                    data-oid="yuohoe3"
                  />
                </svg>
              </motion.div>
              <p
                className="text-sm text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                data-oid="e.vo8-d"
              >
                {t.features.protection}
              </p>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
