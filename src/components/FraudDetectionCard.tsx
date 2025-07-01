"use client";

import { motion } from "framer-motion";
import { Lock, Shield } from "lucide-react";

type Language = "bn" | "en";

interface FraudDetectionCardProps {
  lang: Language;
}

export default function FraudDetectionCard({ lang }: FraudDetectionCardProps) {
  const content = {
    bn: {
      category: "নিরাপত্তা সমাধান",
      title: "সনাক্ত করুন, প্রতিরোধ করুন, রক্ষা করুন",
      description:
        "AI-চালিত হুমকি সনাক্তকরণ সহ আর্থিক প্রতিষ্ঠানগুলির জন্য উন্নত জালিয়াতি সনাক্তকরণ এবং সম্মতি সমাধান",
      features: [
        "AI-চালিত জালিয়াতি সনাক্তকরণ সিস্টেম",
        "মাল্টি-লেয়ার পরিচয় যাচাইকরণ",
        "সম্মতি পর্যবেক্ষণ এবং রিপোর্টিং",
        "রিয়েল-টাইম হুমকি বুদ্ধিমত্তা এবং প্রতিক্রিয়া",
      ],

      cta: "অপারেশন সুরক্ষিত করুন",
    },
    en: {
      category: "Security Solutions",
      title: "Detect, Prevent, Protect",
      description:
        "Advanced fraud detection and compliance solutions for financial institutions with AI-powered threat detection",
      features: [
        "AI-powered fraud detection system",
        "Multi-layer identity verification",
        "Compliance monitoring and reporting",
        "Real-time threat intelligence and response",
      ],

      cta: "Secure Operations",
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

      {/* Security Display - Compact White Card */}
      <motion.div
        className="bg-white rounded-xl p-3 shadow-md mb-3 hover:shadow-lg transition-all duration-300"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="bg-white rounded-lg p-3 shadow-inner" data-oid="f3gy62k">
          <div
            className="flex justify-between items-center mb-3"
            data-oid="owfh4rh"
          >
            <div className="text-xs font-semibold text-gray-600" data-oid="zy3wbco">
              Security Status
            </div>
            <div className="text-xs text-green-600 font-semibold flex items-center gap-1" data-oid="jxnhxue">
              <Shield size={12} color="green" />
              SECURE
            </div>
          </div>
          <div className="space-y-2" data-oid="hvyryqr">
            <div className="flex justify-between items-center" data-oid="ilprtny">
              <div className="text-xs text-gray-600" data-oid="3epg33s">
                Threat Detection
              </div>
              <div className="text-xs text-green-600 font-semibold" data-oid="d5mwfv1">
                99.9%
              </div>
            </div>
            <div className="flex justify-between items-center" data-oid="ooojzn8">
              <div className="text-xs text-gray-600" data-oid="xhz:uoz">
                Fraud Blocked
              </div>
              <div className="text-xs text-red-600 font-semibold" data-oid="tggm8h3">
                247 Today
              </div>
            </div>
            <div className="flex justify-between items-center" data-oid="f6t.lni">
              <div className="text-xs text-gray-600" data-oid="0n3y2jd">
                Response Time
              </div>
              <div className="text-xs text-blue-600 font-semibold" data-oid="r-kbqkx">
                0.3ms
              </div>
            </div>
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
              <Shield size={14} color="white" />
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
