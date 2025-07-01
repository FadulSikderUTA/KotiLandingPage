"use client";

import { motion } from "framer-motion";
import { Link } from "lucide-react";

type Language = "bn" | "en";

interface DeveloperAPICardProps {
  lang: Language;
}

export default function DeveloperAPICard({ lang }: DeveloperAPICardProps) {
  const content = {
    bn: {
      category: "ইন্টিগ্রেশন প্ল্যাটফর্ম",
      title: "একীভূত করুন, স্কেল করুন, উদ্ভাবন করুন",
      description:
        "বিস্তৃত ডকুমেন্টেশন সহ ফিনটেক সংস্থাগুলির জন্য ব্যাপক API প্ল্যাটফর্ম এবং ইন্টিগ্রেশন পরিষেবা",
      features: [
        "বিস্তৃত ডকুমেন্টেশন সহ RESTful API",
        "রিয়েল-টাইম ওয়েবহুক বিজ্ঞপ্তি",
        "কাস্টম ইন্টিগ্রেশন সমর্থন এবং পরামর্শ",
        "স্বয়ংক্রিয় সিদ্ধান্ত সরঞ্জাম এবং ওয়ার্কফ্লো",
      ],

      cta: "API অন্বেষণ করুন",
    },
    en: {
      category: "Integration Platform",
      title: "Integrate, Scale, Innovate",
      description:
        "Comprehensive API platform and integration services for fintech companies with comprehensive documentation",
      features: [
        "RESTful API with comprehensive documentation",
        "Real-time webhook notifications",
        "Custom integration support and consulting",
        "Automated decisioning tools and workflows",
      ],

      cta: "Explore APIs",
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

      {/* API Display - Compact White Card */}
      <motion.div
        className="bg-white rounded-xl p-3 shadow-md mb-3 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div
          className="bg-gray-800 text-white rounded-lg p-3 shadow-inner font-mono text-xs"
          data-oid="pnoy:9d"
        >
          <div
            className="flex justify-between items-center mb-2"
            data-oid="sv2kz3_"
          >
            <div className="text-gray-400" data-oid="etoxlwr">
              POST /v1/scores
            </div>
            <div className="text-green-400" data-oid="rbclgg7">
              200 OK
            </div>
          </div>
          <pre data-oid="7ihfnj9">
            <code data-oid="-6izamu">
              {`{
  "score": 765,
  "status": "approved"
}`}
            </code>
          </pre>
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
              <Link size={14} color="white" />
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
