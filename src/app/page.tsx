"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorksContent2 from "@/components/HowItWorksContent2";
import BusinessSolutionsContent from "@/components/BusinessSolutionsContent";
import Footer from "@/components/Footer";

type Language = "bn" | "en";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <main
      className="flex min-h-screen flex-col bg-[#fdfdfd]"
      data-oid="ex.hzry"
    >
      <Header lang={lang} setLang={setLang} data-oid="qdz-pd4" />

      {/* Card Stacking Container - Controls the sticky behavior */}
      <div className="relative" data-oid="d4l9uhy">
        {/* Phase 1: Hero Section - Sticky positioned, floating header will appear above */}
        <div className="sticky top-0 h-screen z-10" data-oid="p0j56dd">
          <Hero lang={lang} data-oid="7wqa84m" />
        </div>

        {/* Phase 2: How It Works Section - Slides over Hero and becomes sticky */}
        <div className="sticky top-0 h-screen z-20" data-oid="yzdb_.n">
          <HowItWorksContent2 lang={lang} data-oid="thljd5l" />
        </div>

        {/* Phase 3: Business Solutions - Single sticky page with internal card stacking */}
        <div className="sticky top-0 h-screen z-30" data-oid="g3-gpjn">
          <BusinessSolutionsContent lang={lang} data-oid="zqt6ymw" />
        </div>

        {/* Extra scroll space for card animations - reduced since animations end at 0.9 */}
        <div className="h-[120vh]" data-oid="2vhg51."></div>
      </div>

      {/* Footer - Shows normally after stacking container */}
      <Footer lang={lang} data-oid="l3:.s75" />
    </main>
  );
}
