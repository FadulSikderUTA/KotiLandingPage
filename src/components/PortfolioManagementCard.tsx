"use client";

import BusinessSolutionCard from "./BusinessSolutionCard";
import { LayoutDashboard } from "lucide-react";

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

  const PortfolioMockup = () => (
    <div className="bg-white rounded-lg p-4 shadow-inner" data-oid="pdnjvkc">
      <div
        className="flex justify-between items-center mb-4"
        data-oid="r_6lkhs"
      >
        <div className="text-sm font-semibold text-gray-600" data-oid="g38ru5r">
          Portfolio Health
        </div>
        <div
          className="text-xs text-green-600 font-semibold"
          data-oid="92oo4xm"
        >
          98%
        </div>
      </div>
      <div
        className="grid grid-cols-3 gap-2 text-center text-xs"
        data-oid="4x.0bis"
      >
        <div data-oid="hliqgz6">
          <div className="font-bold text-blue-600" data-oid="8obtnsv">
            24/7
          </div>
          <div data-oid="5jq60pu">Monitoring</div>
        </div>
        <div data-oid="l8pu.1f">
          <div className="font-bold text-yellow-600" data-oid="qpct4h8">
            12
          </div>
          <div data-oid="kb5:hl4">Alerts</div>
        </div>
        <div data-oid="t2oippm">
          <div className="font-bold text-green-600" data-oid="_8s13e4">
            A+
          </div>
          <div data-oid="6u6h-07">Health Score</div>
        </div>
      </div>
    </div>
  );

  return (
    <BusinessSolutionCard
      icon={<LayoutDashboard size={32} color="white" data-oid="459qnpo" />}
      category={data.category}
      title={data.title}
      description={data.description}
      features={data.features}
      mockup={<PortfolioMockup data-oid="agtbfv2" />}
      cta={data.cta}
      lang={lang}
      data-oid="glou1pk"
    />
  );
}
