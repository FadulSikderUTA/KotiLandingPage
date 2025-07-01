"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import PersonalCreditHubCard from "./PersonalCreditHubCard";
import FinancialEducationCard from "./FinancialEducationCard";
import MoneyManagementCard from "./MoneyManagementCard";
import RiskIntelligenceCard from "./RiskIntelligenceCard";
import AnalyticsPlatformCard from "./AnalyticsPlatformCard";
import DeveloperAPICard from "./DeveloperAPICard";
import PortfolioManagementCard from "./PortfolioManagementCard";
import FraudDetectionCard from "./FraudDetectionCard";

type Language = "bn" | "en";

interface BusinessSolutionsContentProps {
  lang: Language;
}

export default function BusinessSolutionsContent({
  lang,
}: BusinessSolutionsContentProps) {
  const { scrollYProgress } = useScroll();

  // Remove slide-up animation for immediate stacking - Page 3 should be on top of Page 2 from start
  // No transforms needed for page entrance - let sticky positioning handle the stacking behavior
  // const pageY = useTransform(scrollYProgress, [0.3, 0.4], ['100vh', '0vh']);
  // const pageOpacity = useTransform(scrollYProgress, [0.3, 0.35], [0, 1]);

  // Cards slide in from bottom but DON'T move existing cards up
  // Just like the three main pages - each new card slides over the previous ones
  // NO upward movement - pure stacking with z-index

  const card1Y = useTransform(scrollYProgress, [0.4, 0.5], ["100vh", "0vh"]);
  const card23Y = useTransform(scrollYProgress, [0.5, 0.6], ["100vh", "0vh"]);
  const card4Y = useTransform(scrollYProgress, [0.58, 0.68], ["100vh", "0vh"]);
  const card56Y = useTransform(scrollYProgress, [0.66, 0.76], ["100vh", "0vh"]);
  const card78Y = useTransform(scrollYProgress, [0.74, 0.84], ["100vh", "0vh"]);

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd] z-30"
      data-oid="3u5rex."
    >
      {/* Page Container - Immediately stacks on top of Page 2 */}
      <motion.div
        className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        data-oid="e8zerdi"
      >
        {/* Fixed Header - Always visible at top */}
        <div
          className="absolute top-0 left-0 right-0 z-50 text-center px-8 py-8 bg-white/95 backdrop-blur-md border-b border-gray-100"
          data-oid=":awsfq."
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d0d] tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-oid="4evukw8"
          >
            {lang === "bn" ? "ব্যবসায়িক সমাধান" : "BUSINESS SOLUTIONS"}
          </motion.h1>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-[#0d0d0d]/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            data-oid="xyqlgiu"
          >
            {lang === "bn"
              ? "বিশ্বস্ত ডেটা এবং স্মার্ট অ্যানালিটিক্স দিয়ে আপনার ব্যবসায়িক সিদ্ধান্তগুলি রূপান্তরিত করতে ব্যাপক ক্রেডিট ব্যুরো সেবা"
              : "Comprehensive credit bureau services to transform your business decisions with reliable data and smart analytics"}
          </motion.p>
        </div>

        {/* Card Stacking Area - Pure stacking like main pages, no upward movement */}
        <div className="absolute inset-0 top-40 bg-white" data-oid="1.usvaa">
          {/* Card 1: Personal Credit Hub - Slides in and stays in place */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card1Y,
              zIndex: 1,
            }}
            data-oid="va5i.qf"
          >
            <div
              className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-4xl"
              data-oid="9689bmn"
            >
              <PersonalCreditHubCard lang={lang} data-oid="dy.1mlc" />
            </div>
          </motion.div>

          {/* Cards 2-3: Education + Money Management - Slides over Card 1 */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card23Y,
              zIndex: 5,
            }}
            data-oid="af:-4fr"
          >
            <div className="w-full max-w-4xl" data-oid="rrtg1o8">
              <div
                className="flex bg-white rounded-2xl overflow-hidden shadow-xl gap-0"
                data-oid="w3v0s9f"
              >
                <div className="flex-1" data-oid="t6r_vnt">
                  <FinancialEducationCard lang={lang} data-oid="zc6pza." />
                </div>
                <div className="flex-1" data-oid="53i7wun">
                  <MoneyManagementCard lang={lang} data-oid="sldp3oa" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Risk Intelligence - Slides over Cards 2-3 */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card4Y,
              zIndex: 10,
            }}
            data-oid="xr2brco"
          >
            <div
              className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-4xl"
              data-oid="2cs2:yz"
            >
              <RiskIntelligenceCard lang={lang} data-oid="op-zq2c" />
            </div>
          </motion.div>

          {/* Cards 5-6: Analytics + API - Slides over Card 4 */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card56Y,
              zIndex: 20,
            }}
            data-oid="jhk1j85"
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              data-oid="kniazuu"
            >
              <div
                className="bg-white border-r border-gray-100"
                data-oid="m6_adh4"
              >
                <AnalyticsPlatformCard lang={lang} data-oid="0bcubfh" />
              </div>
              <div className="bg-white" data-oid="8-aev3n">
                <DeveloperAPICard lang={lang} data-oid="aecmukb" />
              </div>
            </div>
          </motion.div>

          {/* Cards 7-8: Portfolio + Fraud - Slides over Cards 5-6 */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card78Y,
              zIndex: 30,
            }}
            data-oid="2fojgd1"
          >
            <div
              className="grid grid-cols-1 lg:grid-cols-2 gap-0 w-full max-w-4xl bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden"
              data-oid="zv6homg"
            >
              <div
                className="bg-white border-r border-gray-100"
                data-oid="47cbm:b"
              >
                <PortfolioManagementCard lang={lang} data-oid="crtt8wc" />
              </div>
              <div className="bg-white" data-oid="-b8_poz">
                <FraudDetectionCard lang={lang} data-oid="nxkwcqy" />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
