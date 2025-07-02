"use client";

import { useState, useEffect, useMemo } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import CreditScoreGaugeIcon from "./CreditScoreGaugeIcon";
import BenefitsBurstIcon from "./BenefitsBurstIcon";
import MorphingArrow from "./MorphingArrow";

type Language = "bn" | "en";

const toBengaliNumerals = (num: number): string => {
  const bengaliDigits = ["০", "১", "২", "৩", "৪", "৫", "৬", "৭", "৮", "৯"];
  return num
    .toString()
    .split("")
    .map((d) => bengaliDigits[parseInt(d, 10)] ?? d)
    .join("");
};

interface HowItWorksContent2Props {
  lang: Language;
}

export default function HowItWorksContent2({ lang }: HowItWorksContent2Props) {
  /* ------------------------------------------------------------------ */
  /*                         ❶   SCROLL ANIMATION SETUP                 */
  /* ------------------------------------------------------------------ */
  const { scrollYProgress } = useScroll();

  // Remove slide-up animation for immediate stacking - Page 2 should be on top of Page 1 from start
  // No transforms needed - let sticky positioning handle the stacking behavior
  // const cardY = useTransform(scrollYProgress, [0, 0.3], ['100vh', '0vh']);
  // const cardOpacity = useTransform(scrollYProgress, [0, 0.2], [0, 1]);

  /* ------------------------------------------------------------------ */
  /*                         ❷   STATIC  DATA                           */
  /* ------------------------------------------------------------------ */
  const content = useMemo(
    () => ({
      bn: {
        buildCircle: "স্কোর গড়ুন",
        benefitsCircle: "সুবিধা পান",
        buildTitle: "স্কোর গড়ার উপায়",
        benefitsTitle: "কে কে ব্যবহার করে আপনার কোটি স্কোর?",
        buildCards: [
          {
            title: "ক্রেডিট কার্ড",
            image: "/credit-card.png",
            activities: [
              { description: "সময়মতো পেমেন্ট", points: 10 },
              { description: "কম ব্যবহার", points: 6 },
              { description: "একাধিক কার্ড", points: 8 },
            ],
          },
          {
            title: "ব্যাংকিং",
            image: "/bank.png",
            activities: [
              { description: "নিয়মিত সঞ্চয়", points: 6 },
              { description: "ব্যাংক লেনদেন", points: 4 },
              { description: "বিনিয়োগ", points: 8 },
            ],
          },
          {
            title: "ইউটিলিটি বিল",
            image: "/utility-bill.png",
            activities: [
              { description: "বিদ্যুৎ বিল", points: 5 },
              { description: "বাড়ি ভাড়া", points: 7 },
              { description: "পানির বিল", points: 3 },
            ],
          },
          {
            title: "মোবাইল পেমেন্ট",
            image: "/mobile-payment.png",
            activities: [
              { description: "নাগাদ রিচার্জ", points: 3 },
              { description: "মার্চেন্ট পেমেন্ট", points: 2 },
              { description: "মোবাইল বিল", points: 4 },
            ],
          },
        ],

        benefitsCards: [
          {
            title: "ব্যাংক ও এনবিএফআই",
            image: "/banks-nbfi.png",
            uses: [
              {
                description: "ঋণ অনুমোদন",
                impact: { high: "দ্রুত অনুমোদন", low: "প্রত্যাখ্যাত" },
              },
              {
                description: "সুদের হার নির্ধারণ",
                impact: { high: "কম সুদ", low: "উচ্চ সুদ" },
              },
            ],
          },
          {
            title: "বীমা কোম্পানি",
            image: "/insurance-companies.png",
            uses: [
              {
                description: "প্রিমিয়াম নির্ধারণ",
                impact: { high: "২০% কম", low: "উচ্চ প্রিমিয়াম" },
              },
              {
                description: "ঝুঁকি মূল্যায়ন",
                impact: { high: "কম ঝুঁকি", low: "উচ্চ ঝুঁকি" },
              },
            ],
          },
          {
            title: "বাড়িওয়ালা",
            image: "/landlords.png",
            uses: [
              {
                description: "ভাড়াটিয়া যাচাই",
                impact: { high: "সহজ অনুমোদন", low: "কঠিন যাচাই" },
              },
              {
                description: "জামানত নির্ধারণ",
                impact: { high: "কম জামানত", low: "উচ্চ জামানত" },
              },
            ],
          },
          {
            title: "নিয়োগকর্তা",
            image: "/employers.png",
            uses: [
              {
                description: "চাকরি নিয়োগ",
                impact: { high: "অগ্রাধিকার", low: "বাধাগ্রস্ত" },
              },
              {
                description: "আর্থিক বিশ্বস্ততা",
                impact: { high: "উচ্চ আস্থা", low: "কম আস্থা" },
              },
            ],
          },
          {
            title: "সেবা প্রদানকারী",
            image: "/service-providers.png",
            uses: [
              {
                description: "সংযোগ অনুমোদন",
                impact: { high: "তাৎক্ষণিক", low: "বিলম্বিত" },
              },
              {
                description: "ডিপোজিট নির্ধারণ",
                impact: { high: "কম অগ্রিম", low: "বেশি অগ্রিম" },
              },
            ],
          },
          {
            title: "ব্যবসায়িক অংশীদার",
            image: "/business-partners.png",
            uses: [
              {
                description: "ক্রেডিট লাইন",
                impact: { high: "উচ্চ সীমা", low: "কম সীমা" },
              },
              {
                description: "সাপ্লাইয়ার ক্রেডিট",
                impact: { high: "ভাল শর্তে", low: "কঠিন শর্ত" },
              },
            ],
          },
        ],
      },
      en: {
        buildCircle: "Build Score",
        benefitsCircle: "Get Benefits",
        buildTitle: "Ways to Build Score",
        benefitsTitle: "Who Uses Your Koti Score?",
        buildCards: [
          {
            title: "Credit Cards",
            image: "/credit-card.png",
            activities: [
              { description: "Timely Payment", points: 10 },
              { description: "Low Usage", points: 6 },
              { description: "Multiple Cards", points: 8 },
            ],
          },
          {
            title: "Banking",
            image: "/bank.png",
            activities: [
              { description: "Regular Savings", points: 6 },
              { description: "Bank Transactions", points: 4 },
              { description: "Investment", points: 8 },
            ],
          },
          {
            title: "Utility Bill",
            image: "/utility-bill.png",
            activities: [
              { description: "Electricity Bill", points: 5 },
              { description: "House Rent", points: 7 },
              { description: "Water Bill", points: 3 },
            ],
          },
          {
            title: "Mobile Payment",
            image: "/mobile-payment.png",
            activities: [
              { description: "Nagad Recharge", points: 3 },
              { description: "Merchant Payment", points: 2 },
              { description: "Mobile Bill", points: 4 },
            ],
          },
        ],

        benefitsCards: [
          {
            title: "Banks & NBFIs",
            image: "/banks-nbfi.png",
            uses: [
              {
                description: "Loan Approvals",
                impact: { high: "Fast Approval", low: "Rejected" },
              },
              {
                description: "Interest Rate Setting",
                impact: { high: "Lower Rates", low: "Higher Rates" },
              },
            ],
          },
          {
            title: "Insurance Companies",
            image: "/insurance-companies.png",
            uses: [
              {
                description: "Premium Setting",
                impact: { high: "20% Less", low: "High Premium" },
              },
              {
                description: "Risk Assessment",
                impact: { high: "Low Risk", low: "High Risk" },
              },
            ],
          },
          {
            title: "Landlords",
            image: "/landlords.png",
            uses: [
              {
                description: "Tenant Verification",
                impact: { high: "Easy Approval", low: "Strict Checks" },
              },
              {
                description: "Deposit Setting",
                impact: { high: "Low Deposit", low: "High Deposit" },
              },
            ],
          },
          {
            title: "Employers",
            image: "/employers.png",
            uses: [
              {
                description: "Job Hiring",
                impact: { high: "Priority", low: "Hindered" },
              },
              {
                description: "Financial Trust",
                impact: { high: "High Trust", low: "Low Trust" },
              },
            ],
          },
          {
            title: "Service Providers",
            image: "/service-providers.png",
            uses: [
              {
                description: "Connection Approval",
                impact: { high: "Instant", low: "Delayed" },
              },
              {
                description: "Deposit Setting",
                impact: { high: "Low Advance", low: "High Advance" },
              },
            ],
          },
          {
            title: "Business Partners",
            image: "/business-partners.png",
            uses: [
              {
                description: "Credit Lines",
                impact: { high: "High Limits", low: "Low Limits" },
              },
              {
                description: "Supplier Credit",
                impact: { high: "Good Terms", low: "Strict Terms" },
              },
            ],
          },
        ],
      },
    }),
    [],
  );

  const data = content[lang];

  /* ------------------------------------------------------------------ */
  /*                         ❸   STATE & TIMERS                         */
  /* ------------------------------------------------------------------ */
  const [buildIndex, setBuildIndex] = useState(0);
  const [benefitIndex, setBenefitIndex] = useState(0);

  useEffect(() => {
    const buildTimer = setInterval(() => {
      setBuildIndex((prev) => (prev + 1) % data.buildCards.length);
    }, 5000);
    const benefitsTimer = setInterval(() => {
      setBenefitIndex((prev) => (prev + 1) % data.benefitsCards.length);
    }, 6000);
    return () => {
      clearInterval(buildTimer);
      clearInterval(benefitsTimer);
    };
  }, [data.buildCards.length, data.benefitsCards.length]);

  /* ------------------------------------------------------------------ */
  /*                        ❹   HELPER COMPONENTS                       */
  /* ------------------------------------------------------------------ */

  const CarouselDots = ({ items, currentIndex, onDotClick }: any) => (
    <div className="mt-6 flex justify-center gap-2" data-oid="b:qv11.">
      {items.map((_: any, idx: number) => (
        <button
          key={idx}
          onClick={() => onDotClick(idx)}
          className={`w-3 h-3 rounded-full transition-all ${idx === currentIndex ? "bg-[#5daa80] scale-125" : "bg-gray-300 hover:bg-gray-400"}`}
          data-oid="90byls4"
        />
      ))}
    </div>
  );

  const ThreeCardCarousel = ({
    cards,
    currentIndex,
    onCardClick,
    showPoints = false,
  }: any) => {
    const totalCards = cards.length;
    const [dragOffset, setDragOffset] = useState(0);
    const [isDragging, setIsDragging] = useState(false);
    const [isTransitioning, setIsTransitioning] = useState(false);

    const getCardStyle = (index: number, realTimeDragOffset = 0) => {
      const offset = (index - currentIndex + totalCards) % totalCards;
      const baseX =
        offset === 0
          ? 0
          : offset === 1
            ? 140
            : offset === totalCards - 1
              ? -140
              : offset > 1 && offset < totalCards - 1
                ? 300
                : -300;

      // Apply real-time drag offset to all visible cards
      const adjustedX = baseX + realTimeDragOffset;

      if (offset === 0) {
        // Center card
        return { x: adjustedX, scale: 1, opacity: 1, zIndex: 2 };
      }
      if (offset === 1) {
        // Right card
        return { x: adjustedX, scale: 0.85, opacity: 0.7, zIndex: 1 };
      }
      if (offset === totalCards - 1) {
        // Left card
        return { x: adjustedX, scale: 0.85, opacity: 0.7, zIndex: 1 };
      }
      // Other cards are hidden but may become visible during drag
      return {
        x: adjustedX,
        scale: 0.7,
        opacity: realTimeDragOffset !== 0 ? 0.3 : 0,
        zIndex: 0,
      };
    };

    const handleDragStart = () => {
      setIsDragging(true);
    };

    const handleDrag = (event: any, { offset }: any) => {
      setDragOffset(offset.x);
    };

    const handleCardTransition = (targetIndex: number) => {
      if (isTransitioning) return;

      setIsTransitioning(true);
      onCardClick(targetIndex);

      // Reset transition state after animation completes
      setTimeout(() => {
        setIsTransitioning(false);
      }, 800);
    };

    const handleDragEnd = (event: any, { offset, velocity }: any) => {
      const swipeThreshold = 60;
      setIsDragging(false);
      setDragOffset(0);

      if (offset.x < -swipeThreshold || velocity.x < -300) {
        // Swiped left (next card)
        handleCardTransition((currentIndex + 1) % totalCards);
      } else if (offset.x > swipeThreshold || velocity.x > 300) {
        // Swiped right (previous card)
        handleCardTransition((currentIndex - 1 + totalCards) % totalCards);
      }
    };

    const getTransitionProps = (offset: number) => {
      if (isDragging) {
        return {
          type: "tween" as const,
          duration: 0,
        };
      }

      // Staggered spring transitions for sweeping effect
      const delay = offset === 0 ? 0 : offset === 1 ? 0.1 : 0.05;

      return {
        type: "spring" as const,
        stiffness: 350,
        damping: 35,
        mass: 0.8,
        delay: isTransitioning ? delay : 0,
      };
    };

    return (
      <div
        className="relative w-full h-96 flex items-center justify-center overflow-hidden"
        data-oid="y8nyz-7"
      >
        <AnimatePresence initial={false} data-oid="m4917gb">
          {cards.map((card: any, index: number) => {
            const offset = (index - currentIndex + totalCards) % totalCards;
            const isVisible = offset <= 1 || offset >= totalCards - 1;

            // During drag, show additional cards that might become visible
            const shouldRender =
              isVisible || (isDragging && Math.abs(dragOffset) > 50);

            if (!shouldRender) return null;

            return (
              <motion.div
                key={index}
                className="absolute"
                initial={false}
                animate={getCardStyle(index, isDragging ? dragOffset : 0)}
                transition={getTransitionProps(offset)}
                drag={isVisible ? "x" : false}
                dragConstraints={{ left: -200, right: 200 }}
                dragElastic={0.2}
                onDragStart={handleDragStart}
                onDrag={handleDrag}
                onDragEnd={handleDragEnd}
                onClick={() => {
                  if (!isDragging && !isTransitioning && offset !== 0) {
                    handleCardTransition(index);
                  }
                }}
                style={{
                  cursor: isVisible
                    ? isDragging
                      ? "grabbing"
                      : "grab"
                    : "pointer",
                }}
                whileHover={
                  isVisible && !isTransitioning
                    ? { scale: offset === 0 ? 1.02 : 0.9 }
                    : {}
                }
                whileTap={
                  isVisible && !isTransitioning
                    ? { scale: offset === 0 ? 1.05 : 0.85 }
                    : {}
                }
                data-oid="y6lmsqf"
              >
                <Card
                  card={card}
                  isCenter={offset === 0}
                  lang={lang}
                  showPoints={showPoints}
                  isDragging={isDragging && offset === 0}
                  data-oid="_l4q..m"
                />
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    );
  };

  const Card = ({
    card,
    isCenter,
    lang,
    showPoints,
    isDragging = false,
  }: any) => {
    return (
      <div
        className={`relative w-72 h-96 rounded-2xl overflow-hidden shadow-xl cursor-pointer ${isDragging ? "shadow-2xl" : ""}`}
        data-oid="53:t-dn"
      >
        {/* background */}
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${card.image})` }}
          animate={{
            scale: isCenter ? 1.1 : 1.05,
            filter: isCenter ? "brightness(0.8)" : "brightness(0.5)",
            boxShadow: isDragging
              ? "0 25px 50px -12px rgba(0, 0, 0, 0.5)"
              : "0 10px 25px -5px rgba(0, 0, 0, 0.3)",
          }}
          transition={{ duration: 0.6 }}
          data-oid="3-sabgw"
        />

        {/* overlay */}
        <div
          className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"
          data-oid="lj5vwum"
        />

        {/* Enhanced glow effect during drag */}
        {isDragging && (
          <motion.div
            className="absolute inset-0 bg-gradient-to-t from-[#5daa80]/30 via-transparent to-transparent"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
            data-oid="wrqjyzn"
          />
        )}
        {/* content */}
        <div className="absolute inset-x-0 bottom-0 p-4" data-oid="o31djvq">
          <motion.div
            className="bg-black/70 backdrop-blur-md rounded-xl px-4 py-3"
            animate={{
              backgroundColor: isDragging
                ? "rgba(0, 0, 0, 0.85)"
                : "rgba(0, 0, 0, 0.7)",
              scale: isDragging ? 1.05 : 1,
            }}
            transition={{ duration: 0.2 }}
            data-oid="shp2kz9"
          >
            {/* Main category title */}
            <h3
              className="text-white font-bold text-base mb-2"
              data-oid="a_-b41a"
            >
              {card.title}
            </h3>

            {/* Credit Score Bar for benefit cards */}
            {card.uses && (
              <div className="mb-3" data-oid="g3w5s.g">
                <div
                  className="w-full h-2 bg-gradient-to-r from-red-500 via-orange-400 via-yellow-400 via-lime-400 to-green-500 rounded-full relative"
                  data-oid="ym6wojx"
                >
                  {/* Score indicator needle - positioned at good score (765 equivalent) */}
                  <div
                    className="absolute top-0 right-2 w-0.5 h-2 bg-white rounded-full shadow-lg"
                    data-oid="u:y0t51"
                  ></div>
                </div>
                <div
                  className="flex justify-between text-xs text-white/60 mt-1"
                  data-oid="se6dx-2"
                >
                  <span data-oid="l8qpjyr">
                    {lang === "bn" ? "৩০০" : "300"}
                  </span>
                  <span data-oid="n81ng4m">
                    {lang === "bn" ? "৮৫০" : "850"}
                  </span>
                </div>
              </div>
            )}

            {/* Activities list for build cards */}
            {card.activities && showPoints ? (
              <div className="space-y-1" data-oid="e4bj1a8">
                {card.activities.map((activity: any, idx: number) => (
                  <div
                    key={idx}
                    className="flex items-center justify-between"
                    data-oid="_lw1.rk"
                  >
                    <span className="text-white/80 text-xs" data-oid="fyt4a9w">
                      {activity.description}
                    </span>
                    <span
                      className="bg-[#5daa80] text-white rounded-full px-2 py-0.5 text-xs font-semibold"
                      data-oid="vr94lso"
                    >
                      +
                      {lang === "bn"
                        ? toBengaliNumerals(activity.points)
                        : activity.points}
                    </span>
                  </div>
                ))}
              </div>
            ) : card.uses ? (
              /* Simplified uses list for benefit cards - just outcomes with colors */
              <div className="space-y-2" data-oid="46s8ctl">
                {card.uses.map((use: any, idx: number) => (
                  <div key={idx} className="space-y-1" data-oid="ls2wzz.">
                    <div
                      className="text-white/90 text-xs font-medium"
                      data-oid="a9fijfq"
                    >
                      {use.description}
                    </div>
                    <div
                      className="flex items-center justify-between text-xs"
                      data-oid="p8i79f."
                    >
                      <span
                        className="text-green-300 font-medium"
                        data-oid="ymtb0yc"
                      >
                        {use.impact.high}
                      </span>
                      <span
                        className="text-red-300 font-medium"
                        data-oid="i73ys-8"
                      >
                        {use.impact.low}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              /* Fallback for cards without activities or uses */
              <div
                className="flex items-center justify-between"
                data-oid="dib2ql9"
              >
                <span className="text-white/80 text-xs" data-oid="xh3w58o">
                  {card.description}
                </span>
                {showPoints && card.points && (
                  <span
                    className="bg-[#5daa80] text-white rounded-full px-2 py-0.5 text-xs font-semibold"
                    data-oid="ip0rj1s"
                  >
                    +
                    {lang === "bn"
                      ? toBengaliNumerals(card.points)
                      : card.points}
                  </span>
                )}
              </div>
            )}
          </motion.div>
        </div>
      </div>
    );
  };

  /* ------------------------------------------------------------------ */
  /*                         ❺   RENDER  UI                            */
  /* ------------------------------------------------------------------ */
  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd] z-20"
      data-oid="_pfbq5w"
    >
      {/* Card Container - Immediately stacks on top of Hero */}
      <motion.div
        className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        data-oid="g_z0mp:"
      >
        {/* Card Content */}
        <div
          className="relative z-10 h-full flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8 overflow-hidden"
          data-oid="no5eiyo"
        >
          {/* Main Heading - Yeeld Style */}
          <div className="text-center mb-8" data-oid="76z49.k">
            <motion.h1
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d0d] tracking-tight mb-3"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              data-oid="blwpj64"
            >
              {lang === "bn" ? "আবিষ্কার করুন কোটি" : "DISCOVER KOTI"}
            </motion.h1>
            <motion.p
              className="text-sm md:text-base text-[#0d0d0d]/70 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              data-oid="k8dtc0h"
            >
              {lang === "bn"
                ? "আপনার আর্থিক যাত্রায় স্মার্ট ক্রেডিট স্কোরিং এর শক্তি আবিষ্কার করুন। প্রতিদিনের কাজে স্কোর গড়ুন, অসংখ্য সুবিধা পান।"
                : "Discover the power of smart credit scoring in your financial journey. Build your score through everyday actions, unlock countless opportunities."}
            </motion.p>
          </div>

          {/* Modern Process Flow */}
          <motion.div
            className="mb-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            data-oid="1l7dt2r"
          >
            <div className="relative" data-oid="fpa7ptz">
              {/* Background gradient line */}
              <div
                className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#5daa80]/30 to-transparent transform -translate-y-1/2"
                data-oid="1f3cu.."
              ></div>

              <div
                className="flex items-center justify-between relative"
                data-oid="qkcss5d"
              >
                {/* Build Score Card */}
                <div
                  className="bg-white rounded-2xl p-4 shadow-lg border border-[#0d0d0d]/5 backdrop-blur-sm relative z-10 flex-1 max-w-xs mx-2"
                  data-oid="w.bs2n3"
                >
                  <div className="text-center" data-oid="g0vr2aw">
                    <div
                      className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center shadow-md"
                      data-oid="8ww-010"
                    >
                      <CreditScoreGaugeIcon
                        score={765}
                        size={32}
                        data-oid="w9n35px"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-[#0d0d0d] mb-2"
                      data-oid="t47z4pp"
                    >
                      {data.buildCircle}
                    </h3>
                    <p
                      className="text-[#0d0d0d]/60 text-xs leading-relaxed"
                      data-oid="8pxm6pr"
                    >
                      {lang === "bn"
                        ? "দৈনন্দিন আর্থিক কার্যক্রমের মাধ্যমে"
                        : "Through everyday financial activities"}
                    </p>
                  </div>
                </div>

                {/* Modern Morphing Arrow Flow */}
                <div
                  className="flex-shrink-0 mx-4 relative z-20"
                  data-oid="enhy5gx"
                >
                  <MorphingArrow data-oid="_:3_5yk" />
                </div>

                {/* Get Benefits Card */}
                <div
                  className="bg-white rounded-2xl p-4 shadow-lg border border-[#0d0d0d]/5 backdrop-blur-sm relative z-10 flex-1 max-w-xs mx-2"
                  data-oid="ssudfkz"
                >
                  <div className="text-center" data-oid="1dsf1n2">
                    <div
                      className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center shadow-md"
                      data-oid="lnhxfzo"
                    >
                      <BenefitsBurstIcon
                        size={32}
                        animated={true}
                        data-oid="_nsuwxc"
                      />
                    </div>
                    <h3
                      className="text-lg font-bold text-[#0d0d0d] mb-2"
                      data-oid="xvb8p.w"
                    >
                      {data.benefitsCircle}
                    </h3>
                    <p
                      className="text-[#0d0d0d]/60 text-xs leading-relaxed"
                      data-oid="iu:cs-3"
                    >
                      {lang === "bn"
                        ? "প্রতিষ্ঠানের কাছে বিশ্বস্ততা অর্জন করুন"
                        : "Gain trust with institutions"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* carousels */}
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-6xl mx-auto"
            data-oid="4yt3p5w"
          >
            {/* build */}
            <div
              className="flex flex-col items-center justify-center"
              data-oid="fuaj:-w"
            >
              <h2
                className="text-center text-lg font-bold mb-4 w-full"
                data-oid="ji9k0c."
              >
                {data.buildTitle}
              </h2>
              <ThreeCardCarousel
                cards={data.buildCards}
                currentIndex={buildIndex}
                onCardClick={setBuildIndex}
                showPoints
                data-oid="wb0h7e:"
              />

              <CarouselDots
                items={data.buildCards}
                currentIndex={buildIndex}
                onDotClick={setBuildIndex}
                data-oid="vwtqypj"
              />
            </div>
            {/* benefits */}
            <div
              className="flex flex-col items-center justify-center"
              data-oid="i4c78_8"
            >
              <h2
                className="text-center text-lg font-bold mb-4 w-full"
                data-oid="zu0-b2x"
              >
                {data.benefitsTitle}
              </h2>
              <ThreeCardCarousel
                cards={data.benefitsCards}
                currentIndex={benefitIndex}
                onCardClick={setBenefitIndex}
                data-oid="fhmaa6q"
              />

              <CarouselDots
                items={data.benefitsCards}
                currentIndex={benefitIndex}
                onDotClick={setBenefitIndex}
                data-oid="fozo_p4"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
