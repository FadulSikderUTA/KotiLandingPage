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
    <div className="bg-white rounded-lg p-4 shadow-inner" data-oid="r829kyu">
      <div
        className="flex justify-between items-center mb-4"
        data-oid="dn4qcua"
      >
        <div className="text-sm font-semibold text-gray-600" data-oid="pc6j0fw">
          System Status
        </div>
        <div
          className="text-xs text-green-600 font-semibold"
          data-oid="xjsrq7p"
        >
          Protected
        </div>
      </div>
      <div
        className="grid grid-cols-2 gap-2 text-center text-xs"
        data-oid="s4aj:cl"
      >
        <div data-oid="p.l6kio">
          <div className="font-bold text-green-600" data-oid="phc_2:b">
            99.9%
          </div>
          <div data-oid="fsy86-5">Detection Rate</div>
        </div>
        <div data-oid="_q2-kuq">
          <div className="font-bold text-blue-600" data-oid="y-av0c4">
            24/7
          </div>
          <div data-oid="7ci2kx9">Operational</div>
        </div>
      </div>
    </div>
  );

  return (
    <BusinessSolutionCard
      icon={<Lock size={32} color="white" data-oid="572m02c" />}
      category={data.category}
      title={data.title}
      description={data.description}
      features={data.features}
      mockup={<SecurityMockup data-oid="o7ur:96" />}
      cta={data.cta}
      lang={lang}
      data-oid="fpn5x80"
    />
  );
}
