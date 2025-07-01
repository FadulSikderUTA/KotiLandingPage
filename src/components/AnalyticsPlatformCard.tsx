"use client";

import BusinessSolutionCard from "./BusinessSolutionCard";
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

  const AnalyticsMockup = () => (
    <div className="bg-white rounded-lg p-4 shadow-inner" data-oid="qib.gsb">
      <div
        className="flex justify-between items-center mb-4"
        data-oid="36apim3"
      >
        <div className="text-sm font-semibold text-gray-600" data-oid="lr8w5p.">
          Growth Metrics
        </div>
        <div
          className="text-xs text-green-600 font-semibold"
          data-oid="1-66tyk"
        >
          +15%
        </div>
      </div>
      <div
        className="h-32 bg-gray-100 rounded-lg flex items-end p-2"
        data-oid="rgvw-qx"
      >
        <div
          className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
          style={{ height: "60%" }}
          data-oid="sa1h5ri"
        ></div>
        <div
          className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
          style={{ height: "80%" }}
          data-oid="m-.h04t"
        ></div>
        <div
          className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
          style={{ height: "50%" }}
          data-oid="j9mmitc"
        ></div>
        <div
          className="bg-gradient-to-t from-green-400 to-green-600 rounded-t-md w-1/4"
          style={{ height: "70%" }}
          data-oid="vki-t4g"
        ></div>
      </div>
    </div>
  );

  return (
    <BusinessSolutionCard
      icon={<BarChart size={32} color="white" data-oid="l6.y0.r" />}
      category={data.category}
      title={data.title}
      description={data.description}
      features={data.features}
      mockup={<AnalyticsMockup data-oid="mkpkak2" />}
      cta={data.cta}
      lang={lang}
      data-oid="xta42ij"
    />
  );
}
