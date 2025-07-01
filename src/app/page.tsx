"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorksContent2 from "@/components/HowItWorksContent2";
import BusinessSolutionsContent from "@/components/BusinessSolutionsContent";
import Footer from "@/components/Footer";

type Language = "bn" | "en";

export default function Home() {
  const [lang, setLang] = useState<Language>("bn");

  return (
    <main
      className="flex min-h-screen flex-col bg-[#fdfdfd]"
      data-oid="4vcr1h-"
    >
      <Header lang={lang} setLang={setLang} data-oid="dxi._ge" />

      {/* Card Stacking Container - Controls the sticky behavior */}
      <div className="relative" data-oid="1b0:-r_">
        {/* Phase 1: Hero Section - Sticky only within this container */}
        <div className="sticky top-0 h-screen z-10" data-oid="n18iboo">
          <Hero lang={lang} data-oid="7yimf:v" />
        </div>

        {/* Phase 2: How It Works Section - Slides over Hero and becomes sticky */}
        <div className="sticky top-0 h-screen z-20" data-oid="inu_bo5">
          <HowItWorksContent2 lang={lang} data-oid=".fiofj_" />
        </div>

        {/* Phase 3: Business Solutions - Single sticky page with internal card stacking */}
        <div className="sticky top-0 h-screen z-30" data-oid="8ji4:b7">
          <BusinessSolutionsContent lang={lang} data-oid="vi3y8gr" />
        </div>

        {/* Extra scroll space for card animations - reduced since animations end at 0.9 */}
        <div className="h-[120vh]" data-oid="afo:3e:"></div>
      </div>

      {/* Footer - Shows normally after stacking container */}
      <Footer lang={lang} data-oid="zi:a.xv" />
    </main>
  );
}
