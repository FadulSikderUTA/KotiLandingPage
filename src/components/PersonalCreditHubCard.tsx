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
    <div className="w-full max-w-6xl mx-auto p-3 h-full flex flex-col" data-oid="o3yn07y">
      {/* MAIN RECTANGULAR CARD - Compact Version */}
      <motion.div
        className="bg-[#f3f3f3] rounded-2xl shadow-lg transition-all duration-300 flex-1 flex flex-col"
        style={{ border: "3px solid #5daa80" }}
        whileHover={{
          boxShadow: "0 20px 40px rgba(93, 170, 128, 0.15)",
          transform: "translateY(-2px)",
        }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        data-oid="rh_66n1"
      >
        <div className="p-4 flex-1 flex flex-col" data-oid="m46tyge">
          {/* Header Row - Compact */}
          <div
            className="flex justify-between items-start mb-3"
            data-oid="aiyc4rx"
          >
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              data-oid="rkhe8oz"
            >
              <h2
                className="text-lg font-bold text-[#0d0d0d] uppercase mb-1"
                data-oid="vrdp62_"
              >
                {t.title}
              </h2>
              <p
                className="text-xs text-[#0d0d0d]/70 max-w-2xl"
                data-oid="vu-xw-q"
              >
                {t.subtitle}
              </p>
            </motion.div>
            <motion.a
              href="#"
              className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-xs group"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              data-oid="x9zp_:e"
            >
              {t.learnMore}
              <motion.svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="group-hover:translate-x-1 transition-transform"
                data-oid="_pnypjq"
              >
                <polyline points="9 18 15 12 9 6" data-oid="us48-gu" />
              </motion.svg>
            </motion.a>
          </div>

          {/* Score Display Area - Compact White Card */}
          <motion.div
            className="bg-white rounded-xl p-3 shadow-md mb-3 hover:shadow-lg transition-all duration-300 flex-1"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            data-oid="wmvg-t6"
          >
            {/* Score and Bar - Horizontal Layout - Compact */}
            <div className="flex items-center gap-4 mb-3" data-oid="sz799gy">
              {/* Score Number - Smaller */}
              <div className="text-center" data-oid="6740_sw">
                <motion.div
                  className="text-3xl font-bold text-[#5daa80]"
                  key={Math.round(displayScore)}
                  initial={{ scale: 1.1 }}
                  animate={{ scale: 1 }}
                  transition={{ duration: 0.3 }}
                  data-oid="345-lb4"
                >
                  {Math.round(displayScore)}
                </motion.div>
                <div
                  className="text-xs text-gray-600 mt-0.5"
                  data-oid="ofe7_7y"
                >
                  KOTI SCORE
                </div>
              </div>

              {/* Gradient Bar - Smaller */}
              <div className="flex-1" data-oid="9opviz1">
                <div
                  className="relative h-6 rounded-full overflow-hidden"
                  data-oid="-1lkqj9"
                >
                  {/* Exact gradient from Hero.tsx */}
                  <div
                    className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-lime-400 to-green-500"
                    data-oid="k26bh67"
                  ></div>
                  {/* Score pointer */}
                  <motion.div
                    className="absolute top-0 h-full w-1.5 bg-white rounded-full shadow-lg"
                    animate={{ left: `${((displayScore - 300) / 550) * 100}%` }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    data-oid="1ma0e2q"
                  />
                </div>
                <div
                  className="flex justify-between mt-1 text-xs text-gray-500"
                  data-oid="vup4--e"
                >
                  <span data-oid=":9hlr93">300</span>
                  <span data-oid="hyafksj">850</span>
                </div>
              </div>
            </div>

            {/* Credit Factors - Compact */}
            <div className="grid grid-cols-5 gap-1 mb-3" data-oid="m2sz.dk">
              {Object.entries(factors).map(([key, value], index) => (
                <motion.div
                  key={key}
                  className="text-center p-2 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors cursor-pointer"
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  data-oid="jss4zgf"
                >
                  <motion.div
                    className={`text-sm font-bold ${(value as number) > 0 ? "text-[#5daa80]" : "text-red-500"}`}
                    key={value}
                    initial={{ scale: 1.2 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.3 }}
                    data-oid="ciahgsq"
                  >
                    {(value as number) > 0 ? "+" : ""}
                    {value}
                  </motion.div>
                  <div className="text-xs text-gray-600" data-oid="64n561a">
                    {t.factors[key as keyof typeof t.factors]}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features Grid - 2x2 Compact */}
            <div className="grid grid-cols-2 gap-2" data-oid="xr2xga5">
              {/* Monitoring */}
              <motion.div
                className="flex items-start gap-2 p-2 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                whileHover={{ scale: 1.02 }}
                data-oid="3w2vxm3"
              >
                <motion.div
                  className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                  data-oid="s7h7v9w"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="fg9ghxq"
                  >
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2" data-oid="uvhuf04" />
                  </svg>
                </motion.div>
                <p
                  className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                  data-oid="sbnr0_c"
                >
                  {t.features.monitoring}
                </p>
              </motion.div>

              {/* Reports */}
              <motion.div
                className="flex items-start gap-2 p-2 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                whileHover={{ scale: 1.02 }}
                data-oid="tli.cgt"
              >
                <motion.div
                  className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: -5 }}
                  data-oid="tt8r9ed"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="eue9g.x"
                  >
                    <path
                      d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"
                      data-oid="p6qf7dm"
                    />
                    <polyline points="14,2 14,8 20,8" data-oid="avcwjxd" />
                    <line x1="16" y1="13" x2="8" y2="13" data-oid="9i:oen_" />
                    <line x1="16" y1="17" x2="8" y2="17" data-oid="5_ho834" />
                    <polyline points="10,9 9,9 8,9" data-oid="lq1p10j" />
                  </svg>
                </motion.div>
                <p
                  className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                  data-oid="qese2:d"
                >
                  {t.features.reports}
                </p>
              </motion.div>

              {/* AI Insights */}
              <motion.div
                className="flex items-start gap-2 p-2 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                whileHover={{ scale: 1.02 }}
                data-oid="pofvrnm"
              >
                <motion.div
                  className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: 5 }}
                  data-oid="7-w53uc"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="3eeq8kt"
                  >
                    <circle cx="12" cy="12" r="10" data-oid="f.zlqvd" />
                    <path d="M12 16v-4m0-4h.01" data-oid="aq3h:p4" />
                  </svg>
                </motion.div>
                <p
                  className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                  data-oid="r4flhz."
                >
                  {t.features.insights}
                </p>
              </motion.div>

              {/* Protection */}
              <motion.div
                className="flex items-start gap-2 p-2 rounded-xl bg-[#5daa80]/5 hover:bg-[#5daa80]/10 transition-all duration-300 cursor-pointer group"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.9 }}
                whileHover={{ scale: 1.02 }}
                data-oid=":c-6:.e"
              >
                <motion.div
                  className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
                  whileHover={{ rotate: -5 }}
                  data-oid=".ez2_wo"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    data-oid="fy22hi6"
                  >
                    <path
                      d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                      data-oid="n4_g81j"
                    />
                  </svg>
                </motion.div>
                <p
                  className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors"
                  data-oid="5wl8t0h"
                >
                  {t.features.protection}
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
