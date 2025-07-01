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
      data-oid="xek5d.j"
    >
      {/* Page Container - Immediately stacks on top of Page 2 */}
      <motion.div
        className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-white"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        data-oid="f3mda8j"
      >
        {/* Fixed Header - Always visible at top */}
        <div
          className="absolute top-0 left-0 right-0 z-50 text-center px-8 py-8 bg-white/95 backdrop-blur-md border-b border-gray-100"
          data-oid="fkncc94"
        >
          <motion.h1
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d0d] tracking-tight mb-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            data-oid="d17zc5n"
          >
            {lang === "bn" ? "ব্যবসায়িক সমাধান" : "BUSINESS SOLUTIONS"}
          </motion.h1>
          <motion.p
            className="text-sm md:text-base lg:text-lg text-[#0d0d0d]/70 max-w-4xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            data-oid="p1v57:9"
          >
            {lang === "bn"
              ? "বিশ্বস্ত ডেটা এবং স্মার্ট অ্যানালিটিক্স দিয়ে আপনার ব্যবসায়িক সিদ্ধান্তগুলি রূপান্তরিত করতে ব্যাপক ক্রেডিট ব্যুরো সেবা"
              : "Comprehensive credit bureau services to transform your business decisions with reliable data and smart analytics"}
          </motion.p>
        </div>

        {/* Card Stacking Area - All cards same height for consistency */}
        <div className="absolute inset-0 top-40 bg-white" data-oid="c4g9qky">
          {/* Card 1: Personal Credit Hub - Standardized height */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card1Y,
              zIndex: 1,
            }}
            data-oid="vg3xec."
          >
            <div
              className="bg-white rounded-2xl shadow-xl border border-gray-100 w-full max-w-4xl h-[480px]"
              data-oid="yi8zy25"
            >
              <PersonalCreditHubCard lang={lang} data-oid="dhgjk44" />
            </div>
          </motion.div>

          {/* Cards 2-3: Education + Money Management - Same height as other cards */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card23Y,
              zIndex: 5,
            }}
            data-oid="c.v6js2"
          >
            <div className="w-full max-w-4xl h-[480px]" data-oid="7lwq066">
              <div
                className="flex bg-[#f3f3f3] rounded-2xl overflow-hidden shadow-xl border-[3px] border-[#5daa80] h-full"
                data-oid="xe6q-9k"
              >
                <div
                  className="flex-1 border-r border-[#5daa80]/50"
                  data-oid="wup5uvu"
                >
                  <FinancialEducationCard lang={lang} data-oid="hr_fpq1" />
                </div>
                <div className="flex-1" data-oid=":23t9od">
                  <MoneyManagementCard lang={lang} data-oid="0b8ydg8" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Risk Intelligence - Same height as other cards */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card4Y,
              zIndex: 10,
            }}
            data-oid="ne3uecb"
          >
            <div
              className="bg-[#f3f3f3] rounded-2xl shadow-xl border-[3px] border-[#5daa80] w-full max-w-4xl h-[480px]"
              data-oid="lmgfody"
            >
              <RiskIntelligenceCard lang={lang} data-oid="0pb2fux" />
            </div>
          </motion.div>

          {/* Cards 5-6: Analytics + API - Same height and layout as cards 2-3 */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card56Y,
              zIndex: 20,
            }}
            data-oid="_v1rp4k"
          >
            <div
              className="w-full max-w-4xl h-[480px] bg-[#f3f3f3] rounded-2xl shadow-xl border-[3px] border-[#5daa80] overflow-hidden"
              data-oid="ksl63r4"
            >
              <div className="flex h-full">
                <div
                  className="flex-1 bg-white border-r border-[#5daa80]/50"
                  data-oid="c_2.1ua"
                >
                  <AnalyticsPlatformCard lang={lang} data-oid="f2of.gz" />
                </div>
                <div className="flex-1 bg-white" data-oid="dxk2izw">
                  <DeveloperAPICard lang={lang} data-oid="l4sm9ok" />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Cards 7-8: Portfolio + Fraud - Same height and layout as cards 2-3 and 5-6 */}
          <motion.div
            className="absolute left-0 right-0 flex justify-center px-8 top-8"
            style={{
              y: card78Y,
              zIndex: 30,
            }}
            data-oid="q6mzx4c"
          >
            <div
              className="w-full max-w-4xl h-[480px] bg-[#f3f3f3] rounded-2xl shadow-xl border-[3px] border-[#5daa80] overflow-hidden"
              data-oid="0mbmw:6"
            >
              <div className="flex h-full">
                <div
                  className="flex-1 bg-white border-r border-[#5daa80]/50"
                  data-oid="6a8bbnd"
                >
                  <PortfolioManagementCard lang={lang} data-oid="adc7m02" />
                </div>
                <div className="flex-1 bg-white" data-oid="va-dgty">
                  <FraudDetectionCard lang={lang} data-oid="d-7apj-" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
