"use client";

import BusinessSolutionCard from "./BusinessSolutionCard";
import { Lock } from "lucide-react";

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

  const SecurityMockup = () => (
    <div className="bg-white rounded-lg p-4 shadow-inner" data-oid="7sg1mfw">
      <div
        className="flex justify-between items-center mb-4"
        data-oid="d4yxvok"
      >
        <div className="text-sm font-semibold text-gray-600" data-oid="dkkrsfa">
          System Status
        </div>
        <div
          className="text-xs text-green-600 font-semibold"
          data-oid="_r3fm:z"
        >
          Protected
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-2 text-center text-xs"
        data-oid="tmjl-1m"
      >
        <div data-oid="d5c4uyh">
          <div className="font-bold text-green-600" data-oid="nu3dpzj">
            99.9%
          </div>
          <div data-oid="0147qcv">Detection Rate</div>
        </div>
        <div data-oid="b9a.kai">
          <div className="font-bold text-blue-600" data-oid="g.fn.xu">
            24/7
          </div>
          <div data-oid="ao:os8e">Operational</div>
        </div>
      </div>
    </div>
  );

  return (
    <BusinessSolutionCard
      icon={<Lock size={32} color="white" data-oid="z-e863." />}
      category={data.category}
      title={data.title}
      description={data.description}
      features={data.features}
      mockup={<SecurityMockup data-oid="cy_qm5v" />}
      cta={data.cta}
      lang={lang}
      data-oid="6lv0xk1"
    />
  );
}
