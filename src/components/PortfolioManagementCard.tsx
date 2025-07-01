"use client";

import { motion } from "framer-motion";
import { LayoutDashboard, PieChart } from "lucide-react";

type Language = "bn" | "en";

interface PortfolioManagementCardProps {
  lang: Language;
}

export default function PortfolioManagementCard({
  lang,
}: PortfolioManagementCardProps) {
  const content = {
    bn: {
      category: "পোর্টফোলিও ম্যানেজমেন্ট",
      title: "নিরীক্ষণ, সতর্কতা, অপ্টিমাইজ",
      description:
        "আর্থিক প্রতিষ্ঠানগুলির জন্য বুদ্ধিমান সতর্কতা এবং কর্মক্ষমতা অপ্টিমাইজেশান সরঞ্জাম সহ অবিচ্ছিন্ন পোর্টফোলিও পর্যবেক্ষণ",
      features: [
        "রিয়েল-টাইম পোর্টফোলিও স্বাস্থ্য পর্যবেক্ষণ",
        "স্বয়ংক্রিয় ঝুঁকি সতর্কতা এবং বিজ্ঞপ্তি",
        "কর্মক্ষমতা বেঞ্চমার্কিং এবং অপ্টিমাইজেশান",
        "পোর্টফোলিও পুনঃব্যালেন্সিংয়ের জন্য স্মার্ট অ্যালগরিদম",
      ],

      cta: "পোর্টফোলিও নিরীক্ষণ করুন",
    },
    en: {
      category: "Portfolio Management",
      title: "Monitor, Alert, Optimize",
      description:
        "Continuous portfolio monitoring with intelligent alerts and performance optimization tools for financial institutions",
      features: [
        "Real-time portfolio health monitoring",
        "Automated risk alerts and notifications",
        "Performance benchmarking and optimization",
        "Smart algorithms for portfolio rebalancing",
      ],

      cta: "Monitor Portfolio",
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

      {/* Portfolio Display - Compact White Card */}
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
              Portfolio Balance
            </div>
            <div className="text-xs text-[#5daa80] font-semibold" data-oid="jxnhxue">
              +12.5%
            </div>
          </div>
          <div className="space-y-2" data-oid="hvyryqr">
            <div className="flex justify-between items-center" data-oid="ilprtny">
              <div className="text-xs text-gray-600" data-oid="3epg33s">
                Stocks
              </div>
              <div
                className="w-16 bg-gray-200 rounded h-1.5"
                data-oid="p6vy8qm"
              >
                <div
                  className="bg-green-500 h-1.5 rounded"
                  style={{ width: "60%" }}
                  data-oid="qhqpjzx"
                ></div>
              </div>
              <div className="text-xs font-semibold" data-oid="d5mwfv1">60%</div>
            </div>
            <div className="flex justify-between items-center" data-oid="ooojzn8">
              <div className="text-xs text-gray-600" data-oid="xhz:uoz">
                Bonds
              </div>
              <div
                className="w-16 bg-gray-200 rounded h-1.5"
                data-oid="9aw57_l"
              >
                <div
                  className="bg-blue-500 h-1.5 rounded"
                  style={{ width: "30%" }}
                  data-oid="yznttce"
                ></div>
              </div>
              <div className="text-xs font-semibold" data-oid="tggm8h3">30%</div>
            </div>
            <div className="flex justify-between items-center" data-oid="f6t.lni">
              <div className="text-xs text-gray-600" data-oid="0n3y2jd">
                Cash
              </div>
              <div
                className="w-16 bg-gray-200 rounded h-1.5"
                data-oid="xdyy9qk"
              >
                <div
                  className="bg-yellow-500 h-1.5 rounded"
                  style={{ width: "10%" }}
                  data-oid="tzpyeo6"
                ></div>
              </div>
              <div className="text-xs font-semibold" data-oid="r-kbqkx">10%</div>
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
              <PieChart size={14} color="white" />
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
