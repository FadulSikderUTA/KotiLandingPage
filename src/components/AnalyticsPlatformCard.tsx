"use client";

import { motion } from "framer-motion";
import { BarChart } from "lucide-react";

type Language = "bn" | "en";

interface AnalyticsPlatformCardProps {
  lang: Language;
}

export default function AnalyticsPlatformCard({
  lang,
}: AnalyticsPlatformCardProps) {
  const content = {
    bn: {
      category: "অ্যানালিটিক্স প্ল্যাটফর্ম",
      title: "ডেটা-চালিত বৃদ্ধির অন্তর্দৃষ্টি",
      description:
        "রিয়েল-টাইম ড্যাশবোর্ড সহ কৌশলগত ব্যবসায়িক সিদ্ধান্তের জন্য বাজার বুদ্ধিমত্তা এবং গ্রাহক আচরণ বিশ্লেষণ",
      features: [
        "গ্রাহক বিভাগীকরণ এবং লক্ষ্য নির্ধারণ বিশ্লেষণ",
        "বাজারের প্রবণতা অন্তর্দৃষ্টি এবং প্রতিযোগিতামূলক বুদ্ধিমত্তা",
        "পোর্টফোলিও পারফরমেন্স মেট্রিক্স এবং বেঞ্চমার্কিং",
        "বৃদ্ধির সুযোগের জন্য ভবিষ্যদ্বাণীমূলক মডেলিং",
      ],

      cta: "ডেটা বিশ্লেষণ করুন",
    },
    en: {
      category: "Analytics Platform",
      title: "Data-Driven Growth Insights",
      description:
        "Market intelligence and customer behavior analytics for strategic business decisions with real-time dashboards",
      features: [
        "Customer segmentation and targeting analysis",
        "Market trend insights and competitive intelligence",
        "Portfolio performance metrics and benchmarking",
        "Predictive modeling for growth opportunities",
      ],

      cta: "Analyze Data",
    },
  };

  const data = content[lang];

  return (
    <div className="w-full h-full p-4 flex flex-col">
      {/* Header - Compact */}
      <div className="flex justify-between items-start mb-3">
        <div>
          <h3 className="text-lg font-bold text-[#0d0d0d] uppercase mb-1">
            {data.category}
          </h3>
          <p className="text-xs text-[#0d0d0d]/70 max-w-2xl">
            {data.description}
          </p>
        </div>
        <motion.a
          href="#"
          className="text-[#5daa80] font-medium flex items-center gap-1 hover:gap-2 transition-all text-xs group"
          whileHover={{ scale: 1.05 }}
        >
          {data.cta}
          <motion.svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="group-hover:translate-x-1 transition-transform"
          >
            <polyline points="9 18 15 12 9 6" />
          </motion.svg>
        </motion.a>
      </div>

      {/* Analytics Display - Compact White Card */}
      <motion.div
        className="bg-white rounded-xl p-3 shadow-md mb-3 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white rounded-lg p-3 shadow-inner" data-oid="6fucdiy">
          <div
            className="flex justify-between items-center mb-3"
            data-oid="1ijmcnk"
          >
            <div className="text-xs font-semibold text-gray-600" data-oid="yg4di2g">
              Growth Metrics
            </div>
            <div
              className="text-xs text-green-600 font-semibold"
              data-oid="7rxj8-l"
            >
              +15%
            </div>
          </div>
          <div
            className="h-20 bg-gray-100 rounded-lg flex items-end p-2"
            data-oid="s93e9l5"
          >
            <div
              className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
              style={{ height: "60%" }}
              data-oid="7kk7384"
            ></div>
            <div
              className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
              style={{ height: "80%" }}
              data-oid="vqgfrw2"
            ></div>
            <div
              className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
              style={{ height: "50%" }}
              data-oid="9eg2as_"
            ></div>
            <div
              className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
              style={{ height: "70%" }}
              data-oid="w1eqo2n"
            ></div>
          </div>
        </div>
      </motion.div>

      {/* Features Grid - Compact */}
      <div className="flex-1 space-y-2">
        {data.features.map((feature, index) => (
          <motion.div
            key={index}
            className="flex items-start gap-2 p-2 rounded-lg bg-white/80 hover:bg-white transition-all duration-300 cursor-pointer group"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.02 }}
          >
            <motion.div
              className="w-6 h-6 bg-[#5daa80] rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform"
              whileHover={{ rotate: 5 }}
            >
              <BarChart size={14} color="white" />
            </motion.div>
            <p className="text-xs text-[#0d0d0d]/80 group-hover:text-[#0d0d0d] transition-colors leading-relaxed">
              {feature}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
