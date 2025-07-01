"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

const toBengaliNumerals = (num: number): string => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৷", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((digit) => bengaliDigits[parseInt(digit)])
    .join("");
};

interface HowItWorksContentProps {
  lang: Language;
}

export default function HowItWorksContent({ lang }: HowItWorksContentProps) {
  const [buildIndex, setBuildIndex] = useState(0);
  const [benefitsIndex, setBenefitsIndex] = useState(0);

  const content = {
    bn: {
      title: "কোটি কীভাবে কাজ করে",
      buildCircle: "স্কোর গড়ুন",
      benefitsCircle: "সুবিধা পান",
      buildTitle: "স্কোর গড়ার উপায়",
      benefitsTitle: "কে কে ব্যবহার করে আপনার কোটি স্কোর?",
      buildCards: [
        {
          title: "মোবাইল পেমেন্ট",
          description: "ডিজিটাল পেমেন্ট সিস্টেম",
          points: 5,
          image: "/hero-image.png",
        },
        {
          title: "ব্যাংকিং",
          description: "নিয়মিত ব্যাংকিং কার্যক্রম",
          points: 8,
          image: "/hero-image.png",
        },
        {
          title: "বিনিয়োগ",
          description: "দীর্ঘমেয়াদী বিনিয়োগ",
          points: 10,
          image: "/hero-image.png",
        },
        {
          title: "ক্রেডিট কার্ড",
          description: "দায়িত্বশীল ব্যবহার",
          points: 12,
          image: "/hero-image.png",
        },
      ],

      benefitsCards: [
        {
          title: "ব্যাংক",
          description: "ঋণ অনুমোদনে ব্যবহার",
          image: "/hero-image.png",
        },
        {
          title: "বীমা কোম্পানি",
          description: "প্রিমিয়াম নির্ধারণে",
          image: "/hero-image.png",
        },
        {
          title: "সেবা প্রদানকারী",
          description: "সংযোগ অনুমোদনে",
          image: "/hero-image.png",
        },
        {
          title: "নিয়োগকর্তা",
          description: "চাকরি নিয়োগে",
          image: "/hero-image.png",
        },
        {
          title: "ব্যবসায়িক অংশীদার",
          description: "ক্রেডিট সিদ্ধান্তে",
          image: "/hero-image.png",
        },
        {
          title: "আর্থিক প্রতিষ্ঠান",
          description: "ঝুঁকি মূল্যায়নে",
          image: "/hero-image.png",
        },
      ],
    },
    en: {
      title: "How Koti Works",
      buildCircle: "Build Score",
      benefitsCircle: "Get Benefits",
      buildTitle: "Ways to Build Score",
      benefitsTitle: "Who Uses Your Koti Score?",
      buildCards: [
        {
          title: "Mobile Payment",
          description: "Digital payment systems",
          points: 5,
          image: "/hero-image.png",
        },
        {
          title: "Banking",
          description: "Regular banking activities",
          points: 8,
          image: "/hero-image.png",
        },
        {
          title: "Investment",
          description: "Long-term investments",
          points: 10,
          image: "/hero-image.png",
        },
        {
          title: "Credit Cards",
          description: "Responsible usage",
          points: 12,
          image: "/hero-image.png",
        },
      ],

      benefitsCards: [
        {
          title: "Banks",
          description: "For loan approvals",
          image: "/hero-image.png",
        },
        {
          title: "Insurance",
          description: "For premium setting",
          image: "/hero-image.png",
        },
        {
          title: "Service Providers",
          description: "For connection approvals",
          image: "/hero-image.png",
        },
        {
          title: "Employers",
          description: "For job hiring",
          image: "/hero-image.png",
        },
        {
          title: "Business Partners",
          description: "For credit decisions",
          image: "/hero-image.png",
        },
        {
          title: "Financial Institutions",
          description: "For risk assessment",
          image: "/hero-image.png",
        },
      ],
    },
  };

  const currentContent = content[lang];

  // Auto-scroll with faster timing for sweeping effect
  useEffect(() => {
    const buildTimer = setInterval(() => {
      setBuildIndex((prev) => (prev + 1) % currentContent.buildCards.length);
    }, 3000); // Faster sweeping

    const benefitsTimer = setInterval(() => {
      setBenefitsIndex(
        (prev) => (prev + 1) % currentContent.benefitsCards.length,
      );
    }, 3500); // Faster sweeping with slight offset

    return () => {
      clearInterval(buildTimer);
      clearInterval(benefitsTimer);
    };
  }, [currentContent]);

  // True horizontal sliding carousel with smooth left-to-right motion
  const ThreeCardCarousel = ({
    cards,
    currentIndex,
    showPoints = false,
    onCardClick,
  }: any) => {
    return (
      <div className="relative w-full h-80 overflow-hidden" data-oid="l:4zmbu">
        {/* Sliding container */}
        <motion.div
          className="flex items-center h-full"
          animate={{
            x: `calc(-${currentIndex * 100}% + 50% - 160px)`, // Center the current card
          }}
          transition={{
            duration: 0.8,
            ease: [0.25, 0.46, 0.45, 0.94], // Smooth easing
          }}
          style={{
            width: `${cards.length * 320}px`, // Width for all cards
          }}
          data-oid="y9wk7fa"
        >
          {/* Render all cards in sequence */}
          {cards.map((card: any, index: number) => {
            const isCenter = index === currentIndex;
            const distance = Math.abs(index - currentIndex);

            return (
              <motion.div
                key={index}
                className="flex-shrink-0 mx-4"
                animate={{
                  scale: isCenter ? 1 : 0.85,
                  opacity: distance > 1 ? 0.3 : isCenter ? 1 : 0.7,
                  zIndex: isCenter ? 20 : 10,
                }}
                transition={{
                  duration: 0.6,
                  ease: "easeInOut",
                }}
                onClick={() => onCardClick(index)}
                style={{
                  width: "320px",
                }}
                data-oid="vxqo:0j"
              >
                <Card
                  card={card}
                  showPoints={showPoints}
                  lang={lang}
                  isCenter={isCenter}
                  data-oid="w2kmvfk"
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    );
  };

  // Enhanced card component with smooth content transitions
  const Card = ({ card, showPoints, lang, isCenter }: any) => {
    return (
      <motion.div
        className="relative w-80 h-64 rounded-3xl overflow-hidden cursor-pointer"
        whileHover={isCenter ? { scale: 1.05 } : { scale: 0.9 }}
        transition={{ duration: 0.3 }}
        style={{
          boxShadow: isCenter
            ? "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 40px rgba(109, 187, 0, 0.15)"
            : "0 10px 25px -5px rgba(0, 0, 0, 0.15)",
        }}
        data-oid="x8-01zg"
      >
        {/* Background Image with smooth scaling */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${card.image})`,
          }}
          animate={{
            filter: isCenter
              ? "brightness(0.8) saturate(1.1)"
              : "brightness(0.6) saturate(0.8)",
            scale: isCenter ? 1.1 : 1.05,
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          data-oid="3cjkugs"
        />

        {/* Enhanced gradient overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"
          data-oid="zpot44m"
        />

        {/* Glow effect for center card */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-t from-[#6dbb00]/20 via-transparent to-transparent"
          animate={{
            opacity: isCenter ? 1 : 0,
          }}
          transition={{ duration: 0.4 }}
          data-oid="4avo7ye"
        />

        {/* Content with smooth appearance */}
        <div
          className="absolute bottom-0 left-0 right-0 p-6"
          data-oid="xwxryu1"
        >
          <motion.div
            className="bg-black/70 backdrop-blur-lg rounded-2xl px-6 py-4 border border-white/30"
            animate={{
              y: isCenter ? 0 : 10,
              opacity: isCenter ? 1 : 0.8,
              scale: isCenter ? 1 : 0.95,
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            data-oid="99w5f3x"
          >
            <div
              className={`flex items-center ${showPoints ? "justify-between" : "justify-center"}`}
              data-oid="h5j32ux"
            >
              <motion.div
                className={showPoints ? "" : "text-center"}
                animate={{
                  opacity: 1,
                }}
                transition={{ duration: 0.4, delay: 0.1 }}
                data-oid="upjv5jc"
              >
                <motion.h3
                  className={`text-white font-bold ${isCenter ? "text-xl" : "text-lg"} mb-1`}
                  animate={{
                    fontSize: isCenter ? "1.25rem" : "1.125rem",
                  }}
                  transition={{ duration: 0.4 }}
                  data-oid="21rtep9"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  className={`text-white/90 ${isCenter ? "text-sm" : "text-xs"}`}
                  animate={{
                    fontSize: isCenter ? "0.875rem" : "0.75rem",
                  }}
                  transition={{ duration: 0.4 }}
                  data-oid="qpgu0iz"
                >
                  {card.description}
                </motion.p>
              </motion.div>
              {showPoints && (
                <motion.div
                  className={`bg-gradient-to-r from-[#6dbb00] to-[#5da600] text-white px-4 py-2 rounded-2xl font-bold ${isCenter ? "text-lg" : "text-md"} shadow-lg`}
                  whileHover={{ scale: 1.1 }}
                  animate={{
                    scale: isCenter ? 1 : 0.9,
                    opacity: isCenter ? 1 : 0.8,
                  }}
                  transition={{ duration: 0.4 }}
                  data-oid="flwliz0"
                >
                  +
                  {lang === "bn" ? toBengaliNumerals(card.points) : card.points}
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </motion.div>
    );
  };

  return (
    <section
      id="how-it-works"
      className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd]"
      data-oid="li2cumg"
    >
      <div
        className="relative w-[96vw] h-[110vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-[#fdfdfd]"
        data-oid="_-ocwfn"
      >
        <div className="h-full flex flex-col p-8" data-oid="5ntgk86">
          {/* Header */}
          <div className="text-center mb-8" data-oid="uxhj64y">
            <h1
              className="text-4xl font-bold text-[#0d0d0d] mb-8"
              data-oid="wue5oyq"
            >
              {currentContent.title}
            </h1>

            {/* Modern Build Score + Get Benefits Design */}
            <div
              className="flex items-center justify-center gap-8 mb-12"
              data-oid="qhvdmx:"
            >
              {/* Build Score Modern Card */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
                data-oid="df5ozzl"
              >
                <div
                  className="relative bg-gradient-to-br from-[#6dbb00] to-[#5da600] rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
                  data-oid="xk62y7z"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
                    data-oid="7w_7ubl"
                  ></div>
                  <div className="relative" data-oid=".j.mkoc">
                    <div
                      className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                      data-oid="98vx0lv"
                    >
                      <span className="text-2xl" data-oid="k5tyo.p">
                        📈
                      </span>
                    </div>
                    <h3
                      className="text-white font-bold text-2xl mb-2"
                      data-oid="e3cgldj"
                    >
                      {currentContent.buildCircle}
                    </h3>
                    <p className="text-white/80 text-sm" data-oid="56gwgll">
                      {lang === "bn"
                        ? "আপনার ক্রেডিট যাত্রা শুরু করুন"
                        : "Start your credit journey"}
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Animated Arrow */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
                className="flex items-center"
                data-oid="q.9vyen"
              >
                <div className="relative flex items-center" data-oid="8u6dsae">
                  {/* Animated line with moving light effect */}
                  <div
                    className="w-20 h-1 bg-gradient-to-r from-[#6dbb00] to-[#5da600] rounded-full relative overflow-hidden"
                    data-oid="_32cj93"
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-transparent via-white/50 to-transparent"
                      animate={{
                        x: [-100, 100],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      data-oid="68k-sm6"
                    />
                  </div>
                  {/* Arrow head */}
                  <motion.div
                    animate={{
                      x: [0, 5, 0],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    className="ml-2"
                    data-oid="w2zzaei"
                  >
                    <div
                      className="w-0 h-0 border-t-6 border-b-6 border-l-10 border-t-transparent border-b-transparent border-l-[#6dbb00] filter drop-shadow-sm"
                      data-oid="um512y_"
                    ></div>
                  </motion.div>
                </div>
              </motion.div>

              {/* Get Benefits Modern Card */}
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="text-center"
                data-oid="-e4_dez"
              >
                <div
                  className="relative bg-gradient-to-br from-[#6dbb00] to-[#5da600] rounded-3xl p-8 shadow-2xl border border-white/20 backdrop-blur-sm"
                  data-oid="jnamz-_"
                >
                  <div
                    className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent rounded-3xl"
                    data-oid="4qxgtw8"
                  ></div>
                  <div className="relative" data-oid="cbov7tc">
                    <div
                      className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-2xl flex items-center justify-center"
                      data-oid="vu481zd"
                    >
                      <span className="text-2xl" data-oid="c87anor">
                        🎯
                      </span>
                    </div>
                    <h3
                      className="text-white font-bold text-2xl mb-2"
                      data-oid="ds:8p02"
                    >
                      {currentContent.benefitsCircle}
                    </h3>
                    <p className="text-white/80 text-sm" data-oid="wjfyfxo">
                      {lang === "bn"
                        ? "আর্থিক সুবিধা উপভোগ করুন"
                        : "Enjoy financial benefits"}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Main Content */}
          <div
            className="flex-1 grid grid-cols-1 lg:grid-cols-2 gap-8"
            data-oid="nrwagzr"
          >
            {/* Left: Build Score */}
            <div className="space-y-6" data-oid="8pr-trl">
              <h2
                className="text-2xl font-bold text-[#0d0d0d] text-center"
                data-oid="u-7tc8a"
              >
                {currentContent.buildTitle}
              </h2>

              <ThreeCardCarousel
                cards={currentContent.buildCards}
                currentIndex={buildIndex}
                showPoints={true}
                onCardClick={setBuildIndex}
                data-oid="ib4.p0_"
              />

              {/* Navigation Dots */}
              <div className="flex justify-center gap-2" data-oid="e95gl2c">
                {currentContent.buildCards.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setBuildIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === buildIndex
                        ? "bg-[#6dbb00] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    data-oid="yt20ulo"
                  />
                ))}
              </div>
            </div>

            {/* Right: Who Uses */}
            <div className="space-y-6" data-oid="lbcj.wm">
              <h2
                className="text-2xl font-bold text-[#0d0d0d] text-center"
                data-oid="i76c-yu"
              >
                {currentContent.benefitsTitle}
              </h2>

              <ThreeCardCarousel
                cards={currentContent.benefitsCards}
                currentIndex={benefitsIndex}
                showPoints={false}
                onCardClick={setBenefitsIndex}
                data-oid="2t5ab:q"
              />

              {/* Navigation Dots - Fixed to track benefitsIndex properly */}
              <div className="flex justify-center gap-2" data-oid="ty9dmrb">
                {currentContent.benefitsCards.map((_, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setBenefitsIndex(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === benefitsIndex
                        ? "bg-[#6dbb00] scale-125"
                        : "bg-gray-300 hover:bg-gray-400"
                    }`}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    data-oid="i2nh50h"
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
