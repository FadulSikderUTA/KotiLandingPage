"use client";

import BusinessSolutionCard from "./BusinessSolutionCard";
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

  const APIMockup = () => (
    <div
      className="bg-gray-800 text-white rounded-lg p-4 shadow-inner font-mono text-xs"
      data-oid="r17azz0"
    >
      <div
        className="flex justify-between items-center mb-2"
        data-oid="0ln0z6m"
      >
        <div className="text-gray-400" data-oid="dq1-v2o">
          POST /v1/scores
        </div>
        <div className="text-green-400" data-oid="cnb59xz">
          200 OK
        </div>
      </div>
      <pre data-oid="oa8hp_x">
        <code data-oid="kw.c5dx">
          {`{
  "score": 765,
  "status": "approved"
}`}
        </code>
      </pre>
    </div>
  );

  return (
    <BusinessSolutionCard
      icon={<Link size={32} color="white" data-oid="rewfdjd" />}
      category={data.category}
      title={data.title}
      description={data.description}
      features={data.features}
      mockup={<APIMockup data-oid="lhp2ug8" />}
      cta={data.cta}
      lang={lang}
      data-oid="-b0o-.v"
    />
  );
}
