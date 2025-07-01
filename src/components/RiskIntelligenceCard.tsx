"use client";

import BusinessSolutionCard from "./BusinessSolutionCard";
import { Shield } from "lucide-react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

interface RiskIntelligenceCardProps {
  lang: Language;
}

export default function RiskIntelligenceCard({
  lang,
}: RiskIntelligenceCardProps) {
  const content = {
    bn: {
      category: "ঝুঁকি বুদ্ধিমত্তা",
      title: "মূল্যায়ন, যাচাই, সিদ্ধান্ত",
      description:
        "বাংলাদেশী বাজারের গতিশীলতার জন্য বিশেষভাবে প্রশিক্ষিত মেশিন লার্নিং-চালিত মডেল সহ ঋণদাতাদের জন্য উন্নত ক্রেডিট মূল্যায়ন এবং ঝুঁকি মূল্যায়ন",
      features: [
        "৯৪% নির্ভুলতা সহ মেশিন লার্নিং ঝুঁকি মডেল",
        "রিয়েল-টাইম ঋণগ্রহীতা যাচাইকরণ এবং পরিচয় পরীক্ষা",
        "আচরণগত বিশ্লেষণ সহ উন্নত জালিয়াতি সনাক্তকরণ",
        "ব্যাখ্যাযোগ্য AI সহ স্বয়ংক্রিয় সিদ্ধান্ত সহায়তা",
        "বাংলাদেশ-নির্দিষ্ট কারণগুলির জন্য কাস্টম ঝুঁকি স্কোরিং",
        "বাংলাদেশ ব্যাংক নির্দেশিকা এবং নিয়মাবলীর সাথে একীকরণ",
      ],

      cta: "ঝুঁকি মূল্যায়ন করুন",
    },
    en: {
      category: "Risk Intelligence",
      title: "Assess, Verify, Decide",
      description:
        "Advanced credit assessment and risk evaluation for lenders with machine learning-powered models specifically trained for Bangladeshi market dynamics",
      features: [
        "Machine learning risk models with 94% accuracy",
        "Real-time borrower verification and identity checks",
        "Advanced fraud detection with behavioral analysis",
        "Automated decision support with explainable AI",
        "Custom risk scoring for Bangladesh-specific factors",
        "Integration with Bangladesh Bank guidelines and regulations",
      ],

      cta: "Assess Risk",
    },
  };

  const data = content[lang];

  const RiskDashboardMockup = () => (
    <div
      className="bg-white rounded-xl p-8 shadow-md border border-gray-200 relative overflow-hidden"
      data-oid="mjv31b-"
    >
      {/* Header with status indicator */}
      <div
        className="flex items-center justify-between mb-8"
        data-oid="7gw-nwu"
      >
        <div className="flex items-center gap-3" data-oid="pqdx.a2">
          <div
            className="w-3 h-3 rounded-full bg-green-500 animate-pulse"
            data-oid="85zpond"
          ></div>
          <span
            className="text-sm font-semibold text-gray-700"
            data-oid="g-navhg"
          >
            {lang === "bn" ? "লাইভ ঝুঁকি ড্যাশবোর্ড" : "Live Risk Dashboard"}
          </span>
        </div>
        <div
          className="flex items-center gap-2 bg-blue-50 px-3 py-1 rounded-full"
          data-oid="8qt-gfe"
        >
          <div
            className="w-2 h-2 rounded-full bg-blue-500"
            data-oid=".rt90a3"
          ></div>
          <span
            className="text-xs text-blue-700 font-medium"
            data-oid="jykeu9t"
          >
            {lang === "bn" ? "সক্রিয়" : "Active"}
          </span>
        </div>
      </div>

      {/* Key Performance Metrics */}
      <div
        className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-8"
        data-oid="x-6kbij"
      >
        <motion.div
          className="text-center p-4 bg-green-50 rounded-xl border border-green-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          data-oid="jmre2ov"
        >
          <div
            className="text-3xl font-bold text-green-600 mb-1"
            data-oid="dj0zc2_"
          >
            94%
          </div>
          <div
            className="text-xs text-green-700 font-medium"
            data-oid="-sr95ya"
          >
            {lang === "bn" ? "মডেল নির্ভুলতা" : "Model Accuracy"}
          </div>
        </motion.div>

        <motion.div
          className="text-center p-4 bg-blue-50 rounded-xl border border-blue-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          data-oid="--iz.j-"
        >
          <div
            className="text-3xl font-bold text-blue-600 mb-1"
            data-oid="m7hfb:v"
          >
            2.3s
          </div>
          <div className="text-xs text-blue-700 font-medium" data-oid="p3jk4m-">
            {lang === "bn" ? "প্রতিক্রিয়ার সময়" : "Response Time"}
          </div>
        </motion.div>

        <motion.div
          className="text-center p-4 bg-purple-50 rounded-xl border border-purple-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.3 }}
          data-oid="fidity8"
        >
          <div
            className="text-3xl font-bold text-purple-600 mb-1"
            data-oid="mbt3wau"
          >
            15K
          </div>
          <div
            className="text-xs text-purple-700 font-medium"
            data-oid="ok-923l"
          >
            {lang === "bn" ? "দৈনিক মূল্যায়ন" : "Daily Assessments"}
          </div>
        </motion.div>

        <motion.div
          className="text-center p-4 bg-red-50 rounded-xl border border-red-200"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          data-oid="-a4fg13"
        >
          <div
            className="text-3xl font-bold text-red-600 mb-1"
            data-oid="w-y_1j2"
          >
            99.2%
          </div>
          <div className="text-xs text-red-700 font-medium" data-oid="9ml.k.h">
            {lang === "bn" ? "জালিয়াতি সনাক্তকরণ" : "Fraud Detection"}
          </div>
        </motion.div>
      </div>

      {/* Risk Distribution Visualization */}
      <div className="space-y-4 mb-6" data-oid="8l201mt">
        <div className="flex items-center justify-between" data-oid="uqnp0k1">
          <h4
            className="text-sm font-semibold text-gray-700"
            data-oid="x6zyixd"
          >
            {lang === "bn" ? "ঝুঁকি বন্টন" : "Risk Distribution"}
          </h4>
          <span className="text-xs text-gray-500" data-oid="bilo0y2">
            {lang === "bn" ? "গত ৩০ দিন" : "Last 30 days"}
          </span>
        </div>

        {/* Enhanced Risk Bar */}
        <div className="relative" data-oid="8khgl5n">
          <div
            className="flex h-6 rounded-lg overflow-hidden shadow-inner border border-gray-200"
            data-oid="9y6lk8q"
          >
            <motion.div
              className="bg-green-500 flex-1 relative"
              initial={{ width: 0 }}
              animate={{ width: "40%" }}
              transition={{ duration: 1, delay: 0.5 }}
              data-oid="ca0i4yx"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-green-400 to-green-600"
                data-oid="ywfsa8z"
              ></div>
            </motion.div>
            <motion.div
              className="bg-yellow-500 flex-1 relative"
              initial={{ width: 0 }}
              animate={{ width: "30%" }}
              transition={{ duration: 1, delay: 0.7 }}
              data-oid="a47aok2"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-yellow-600"
                data-oid="k0jecxc"
              ></div>
            </motion.div>
            <motion.div
              className="bg-orange-500 relative"
              style={{ width: "20%" }}
              initial={{ width: 0 }}
              animate={{ width: "20%" }}
              transition={{ duration: 1, delay: 0.9 }}
              data-oid="7:vs2o6"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-orange-400 to-orange-600"
                data-oid="kvj9v0t"
              ></div>
            </motion.div>
            <motion.div
              className="bg-red-500 relative"
              style={{ width: "10%" }}
              initial={{ width: 0 }}
              animate={{ width: "10%" }}
              transition={{ duration: 1, delay: 1.1 }}
              data-oid="wupbw8x"
            >
              <div
                className="absolute inset-0 bg-gradient-to-r from-red-400 to-red-600"
                data-oid="iz5zc5n"
              ></div>
            </motion.div>
          </div>

          {/* Risk Labels */}
          <div
            className="grid grid-cols-4 mt-3 text-xs text-center"
            data-oid="h-oe8d6"
          >
            <div className="text-green-600 font-medium" data-oid="0b6ok59">
              {lang === "bn" ? "নিম্ন (40%)" : "Low (40%)"}
            </div>
            <div className="text-yellow-600 font-medium" data-oid="zw9ptwy">
              {lang === "bn" ? "মাঝারি (30%)" : "Medium (30%)"}
            </div>
            <div className="text-orange-600 font-medium" data-oid="_x74b0n">
              {lang === "bn" ? "উচ্চ (20%)" : "High (20%)"}
            </div>
            <div className="text-red-600 font-medium" data-oid="94.fvus">
              {lang === "bn" ? "সর্বোচ্চ (10%)" : "Critical (10%)"}
            </div>
          </div>
        </div>
      </div>

      {/* Real-time Activity Feed */}
      <div
        className="bg-gray-50 rounded-lg p-4 border border-gray-200"
        data-oid="gp8lmx5"
      >
        <div
          className="text-xs font-semibold text-gray-600 mb-3 uppercase tracking-wide"
          data-oid="9d64w_7"
        >
          {lang === "bn" ? "রিয়েল-টাইম কার্যকলাপ" : "Real-time Activity"}
        </div>
        <div className="space-y-2" data-oid="nc:6g40">
          {[
            {
              time: "2 min ago",
              action:
                lang === "bn"
                  ? "নতুন আবেদন প্রক্রিয়া"
                  : "New application processed",
              status: "approved",
            },
            {
              time: "5 min ago",
              action:
                lang === "bn"
                  ? "ঝুঁকি মূল্যায়ন সম্পন্ন"
                  : "Risk assessment completed",
              status: "pending",
            },
            {
              time: "8 min ago",
              action:
                lang === "bn"
                  ? "জালিয়াতি সনাক্ত করা হয়েছে"
                  : "Fraud detected",
              status: "alert",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex items-center justify-between py-2 border-b border-gray-200 last:border-b-0"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.2 + index * 0.1 }}
              data-oid="9plsl0d"
            >
              <div className="flex items-center gap-3" data-oid="c.ecz_j">
                <div
                  className={`w-2 h-2 rounded-full ${
                    item.status === "approved"
                      ? "bg-green-500"
                      : item.status === "pending"
                        ? "bg-yellow-500"
                        : "bg-red-500"
                  }`}
                  data-oid="f9qx:hn"
                ></div>
                <span className="text-xs text-gray-700" data-oid="12cny-h">
                  {item.action}
                </span>
              </div>
              <span className="text-xs text-gray-400" data-oid="9vur:qy">
                {item.time}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Subtle background pattern */}
      <div
        className="absolute top-0 right-0 w-40 h-40 opacity-3"
        data-oid="oenmc9p"
      >
        <div
          className="w-full h-full bg-gradient-to-br from-blue-100 to-purple-100 rounded-full transform translate-x-20 -translate-y-20"
          data-oid="zopwhop"
        ></div>
      </div>
    </div>
  );

  return (
    <BusinessSolutionCard
      icon={<Shield size={32} color="white" data-oid="ih83mul" />}
      category={data.category}
      title={data.title}
      description={data.description}
      features={data.features}
      mockup={<RiskDashboardMockup data-oid="o:afxj3" />}
      cta={data.cta}
      lang={lang}
      data-oid="jel4g8t"
    />
  );
}
