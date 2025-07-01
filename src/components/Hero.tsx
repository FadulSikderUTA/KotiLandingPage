"use client";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

type Language = "bn" | "en";

interface HeroProps {
  lang: Language;
}

const Hero = ({ lang }: HeroProps) => {
  const [animatedScore, setAnimatedScore] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      let currentScore = 0;
      const interval = setInterval(() => {
        currentScore += 5;
        setAnimatedScore(currentScore);

        if (currentScore >= 765) {
          clearInterval(interval);
          setAnimatedScore(765);
        }
      }, 20);
      return () => clearInterval(interval);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  // MATHEMATICAL CALCULATION - Real-time bar position based on current score
  const calculateBarPosition = (score: number): number => {
    return Math.max(0, Math.min(100, ((score - 300) / (850 - 300)) * 100));
  };

  // Function to convert numbers to Bengali numerals
  const toBengaliNumerals = (num: number): string => {
    const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
    return num
      .toString()
      .split("")
      .map((digit) => bengaliDigits[parseInt(digit)])
      .join("");
  };

  // Helper function to get risk category
  const getRiskCategory = (score: number) => {
    if (score >= 750)
      return { category: "Excellent", color: "bg-green-500", range: "750+" };
    if (score >= 700)
      return { category: "Very Good", color: "bg-lime-400", range: "700-749" };
    if (score >= 650)
      return { category: "Good", color: "bg-yellow-400", range: "650-699" };
    if (score >= 600)
      return { category: "Fair", color: "bg-orange-400", range: "600-649" };
    return { category: "Poor", color: "bg-red-500", range: "300-599" };
  };

  const content = {
    bn: {
      title: "আপনার কোটি স্কোর কত?",
      fullSlogan:
        "আপনার ক্রেডিট, আপনার শক্তি: প্রতিদিনের ছোট পছন্দে গড়ুন বড় অর্থনৈতিক প্রভাব",
      button: "কোটি স্কোর চেক করুন",
      scoreLabel: "কোটি স্কোর",
      scoreRange: "পরিসীমা: ৩০০-৮৫০",
      categories: {
        Excellent: "চমৎকার",
        "Very Good": "খুব ভাল",
        Good: "ভাল",
        Fair: "মোটামুটি",
        Poor: "দুর্বল",
      },
    },
    en: {
      title: "What's Your Koti Score?",
      fullSlogan:
        "Your Credit, Your Power: Turn everyday small choices into big economic impact",
      button: "Check Koti Score",
      scoreLabel: "Koti Score",
      scoreRange: "Range: 300-850",
      categories: {
        Excellent: "Excellent",
        "Very Good": "Very Good",
        Good: "Good",
        Fair: "Fair",
        Poor: "Poor",
      },
    },
  };

  const currentContent = content[lang];
  const riskInfo = getRiskCategory(animatedScore);
  const currentBarPosition = calculateBarPosition(animatedScore);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd]"
      data-oid="mjnlw11"
    >
      {/* Balanced scaling - fills most of viewport with nice white space border */}
      <div
        className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
        data-oid="5omrsib"
      >
        {/* Image as background for the container only */}
        <div className="absolute inset-0" data-oid="mvwt4rl">
          <Image
            src="/hero-image.png"
            alt="Koti Credit Services"
            fill
            className="object-cover"
            priority
            data-oid="0ku1s6l"
          />

          {/* Overlay for better text readability */}
          <div
            className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/30"
            data-oid="4zxrgom"
          />
        </div>

        {/* Content positioned over the contained background like Yeeld */}
        <div
          className="relative z-10 h-full flex items-center"
          data-oid="8sqqqrc"
        >
          <div
            className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-16"
            data-oid=".l71wk6"
          >
            {/* STANDARDIZED GRID - Fixed gap between left content and right card */}
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center h-full"
              data-oid="1lykgmm"
            >
              {/* Left column - Text content - FIXED WIDTH */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-4 sm:space-y-6 lg:space-y-8"
                data-oid="besoru8"
              >
                <div
                  className="space-y-3 sm:space-y-4 lg:space-y-6"
                  data-oid="tzu_yjt"
                >
                  <h1
                    className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-white"
                    data-oid="wsr.n0b"
                  >
                    <span className="block" data-oid="d0bfgb1">
                      {currentContent.title}
                    </span>
                  </h1>

                  {/* Complete slogan */}
                  <h2
                    className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl font-medium text-white/90 leading-relaxed max-w-2xl"
                    data-oid="dmf35sb"
                  >
                    {currentContent.fullSlogan}
                  </h2>
                </div>

                {/* AISales-style button */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center gap-2 sm:gap-3 rounded-full bg-[#6dbb00] px-4 sm:px-6 lg:px-8 py-2.5 sm:py-3 lg:py-4 text-sm sm:text-base lg:text-lg font-semibold text-[#0d0d0d] shadow-lg transition-all duration-300 hover:bg-[#5da600] hover:shadow-xl"
                  data-oid="cm4zc1m"
                >
                  <span data-oid="ehdcmze">{currentContent.button}</span>
                  <span data-oid="q96m2o8">→</span>
                </motion.button>
              </motion.div>

              {/* Right column - Koti Score visualization - BIGGER CONTAINER */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
                data-oid="4e7x14i"
              >
                {/* BIGGER Koti Score Card - Increased size */}
                <div
                  className="w-full max-w-lg rounded-xl sm:rounded-2xl lg:rounded-3xl bg-white/10 backdrop-blur-md border border-white/20 p-6 sm:p-8 lg:p-12 shadow-2xl"
                  data-oid="9uezztv"
                >
                  {/* Score display - ALL ANIMATIONS START AT SAME TIME (delay: 0.8) */}
                  <div className="text-center mb-8 lg:mb-10" data-oid="31y0:_.">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.6, delay: 0.8 }}
                      className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#6dbb00] mb-4"
                      data-oid="ok5_dg5"
                    >
                      {lang === "bn"
                        ? toBengaliNumerals(animatedScore)
                        : animatedScore}
                    </motion.div>
                    <div
                      className="text-lg sm:text-xl lg:text-2xl font-medium text-white/90 mb-3"
                      data-oid="602b75h"
                    >
                      {currentContent.scoreLabel}
                    </div>
                    <div
                      className="text-sm sm:text-base text-white/70"
                      data-oid=":bligmm"
                    >
                      {currentContent.scoreRange}
                    </div>
                  </div>

                  {/* Score Range Bar - WIDER BAR */}
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mb-8"
                    data-oid="2l7nv15"
                  >
                    {/* Score range visualization - MUCH BIGGER BAR */}
                    <div
                      className="relative h-14 lg:h-16 bg-white/20 rounded-xl overflow-hidden mb-8"
                      data-oid="03p7xce"
                    >
                      {/* Smooth gradient background - Red to Green transition */}
                      <div
                        className="absolute inset-0 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-lime-400 to-green-500 rounded-xl"
                        data-oid="r7bke0n"
                      ></div>

                      {/* Optional: Add subtle shadow overlay for depth */}
                      <div
                        className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/10 rounded-xl"
                        data-oid="b.im3pq"
                      ></div>

                      {/* MATHEMATICALLY SYNCHRONIZED pointer - moves with score in real-time */}
                      <motion.div
                        className="absolute top-0 h-full transform -translate-x-1/2"
                        style={{ left: `${currentBarPosition}%` }}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3, delay: 0.8 }}
                        data-oid="2igii._"
                      >
                        {/* Pointer line */}
                        <div
                          className="w-1.5 h-full bg-white shadow-lg"
                          data-oid="z4-9w82"
                        ></div>
                        {/* Triangle pointer at top */}
                        <div
                          className="absolute -top-3 left-1/2 transform -translate-x-1/2"
                          data-oid="arydi.w"
                        >
                          <div
                            className="w-0 h-0 border-l-[8px] border-r-[8px] border-b-[10px] border-l-transparent border-r-transparent border-b-white"
                            data-oid="hy5hik4"
                          ></div>
                        </div>
                        {/* Triangle pointer at bottom */}
                        <div
                          className="absolute -bottom-3 left-1/2 transform -translate-x-1/2"
                          data-oid="xs5:fk0"
                        >
                          <div
                            className="w-0 h-0 border-l-[8px] border-r-[8px] border-t-[10px] border-l-transparent border-r-transparent border-t-white"
                            data-oid="ty8q.2y"
                          ></div>
                        </div>
                        {/* Glowing effect */}
                        <div
                          className="absolute inset-0 w-1.5 h-full bg-white opacity-50 blur-sm"
                          data-oid="0bsblmt"
                        ></div>
                      </motion.div>
                    </div>

                    {/* Score range labels with actual ranges - BIGGER TEXT */}
                    <div
                      className="grid grid-cols-5 gap-0 text-sm text-white/80 mb-6"
                      data-oid="pyc3l00"
                    >
                      <div className="text-center" data-oid="tz0vaxw">
                        <div
                          className="text-red-300 font-semibold mb-1"
                          data-oid="kgn7-c9"
                        >
                          {currentContent.categories["Poor"]}
                        </div>
                        <div className="text-xs opacity-70" data-oid="d3v_9:4">
                          (
                          {lang === "bn"
                            ? `${toBengaliNumerals(300)}-${toBengaliNumerals(599)}`
                            : "300-599"}
                          )
                        </div>
                      </div>
                      <div className="text-center" data-oid="r7ddw_r">
                        <div
                          className="text-orange-300 font-semibold mb-1"
                          data-oid="njqz-9w"
                        >
                          {currentContent.categories["Fair"]}
                        </div>
                        <div className="text-xs opacity-70" data-oid="0jytziq">
                          (
                          {lang === "bn"
                            ? `${toBengaliNumerals(600)}-${toBengaliNumerals(649)}`
                            : "600-649"}
                          )
                        </div>
                      </div>
                      <div className="text-center" data-oid="gvk7dtk">
                        <div
                          className="text-yellow-300 font-semibold mb-1"
                          data-oid="y7q0ymy"
                        >
                          {currentContent.categories["Good"]}
                        </div>
                        <div className="text-xs opacity-70" data-oid="q721sna">
                          (
                          {lang === "bn"
                            ? `${toBengaliNumerals(650)}-${toBengaliNumerals(699)}`
                            : "650-699"}
                          )
                        </div>
                      </div>
                      <div className="text-center" data-oid="1w57jd8">
                        <div
                          className="text-lime-300 font-semibold mb-1"
                          data-oid="i3ae0eu"
                        >
                          {currentContent.categories["Very Good"]}
                        </div>
                        <div className="text-xs opacity-70" data-oid="4vpz5t3">
                          (
                          {lang === "bn"
                            ? `${toBengaliNumerals(700)}-${toBengaliNumerals(749)}`
                            : "700-749"}
                          )
                        </div>
                      </div>
                      <div className="text-center" data-oid="h1zrx4v">
                        <div
                          className="text-green-300 font-semibold mb-1"
                          data-oid="59n-rx7"
                        >
                          {currentContent.categories["Excellent"]}
                        </div>
                        <div className="text-xs opacity-70" data-oid="o5f4oq:">
                          (
                          {lang === "bn"
                            ? `${toBengaliNumerals(750)}+`
                            : "750+"}
                          )
                        </div>
                      </div>
                    </div>

                    {/* Current category badge - REAL-TIME UPDATES based on current score */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: 0.8 }}
                      className="text-center mt-6"
                      data-oid="n8em0wk"
                    >
                      <div
                        className={`inline-block px-6 py-3 rounded-full text-white font-semibold text-base ${riskInfo.color}`}
                        data-oid="hw4_ghf"
                      >
                        {
                          currentContent.categories[
                            riskInfo.category as keyof typeof currentContent.categories
                          ]
                        }
                      </div>
                      <div
                        className="text-sm text-white/70 mt-2"
                        data-oid="gd.f65:"
                      >
                        {lang === "bn"
                          ? toBengaliNumerals(
                              parseInt(riskInfo.range.split("-")[0]),
                            )
                          : riskInfo.range.split("-")[0]}
                        {riskInfo.range.includes("-") && (
                          <>
                            -
                            {lang === "bn"
                              ? toBengaliNumerals(
                                  parseInt(riskInfo.range.split("-")[1]),
                                )
                              : riskInfo.range.split("-")[1]}
                          </>
                        )}
                        {riskInfo.range.includes("+") && "+"}
                      </div>
                    </motion.div>
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
