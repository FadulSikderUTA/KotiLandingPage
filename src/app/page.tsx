"use client";
import { useState, useEffect } from "react";
import { trackPageView, trackLanguageSwitch, trackMobileViewport } from '@/lib/analytics';
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import HowItWorksContent2 from "@/components/HowItWorksContent2";
import BusinessSolutionsContent from "@/components/BusinessSolutionsContent";
import Footer from "@/components/Footer";

type Language = "bn" | "en";

export default function Home() {
  const [lang, setLang] = useState<Language>("en");

  // Track page view and mobile viewport on component mount
  useEffect(() => {
    trackPageView('home', lang);
    
    // Track mobile viewport usage
    const isMobile = window.innerWidth <= 1023;
    if (isMobile) {
      trackMobileViewport(
        'mobile',
        `${window.innerWidth}x${window.innerHeight}`,
        navigator.userAgent
      );
    }
  }, []);

  // Create enhanced setLang function with analytics
  const handleLanguageChange = (newLang: Language) => {
    trackLanguageSwitch(lang, newLang, 'home');
    setLang(newLang);
  };

  useEffect(() => {
    // Handle hash navigation when page loads
    const handleHashNavigation = () => {
      const hash = window.location.hash;
      if (hash) {
        const viewportHeight = window.innerHeight;
        let targetScroll = 0;
        
        switch (hash) {
          case '#how-it-works':
            targetScroll = viewportHeight;
            break;
          case '#business-solutions':
            targetScroll = viewportHeight * 2;
            break;
          default:
            targetScroll = 0;
        }
        
        // Delay to ensure page is fully loaded
        setTimeout(() => {
          window.scrollTo({
            top: targetScroll,
            behavior: 'smooth'
          });
        }, 100);
      }
    };

    handleHashNavigation();
    
    // Also handle hash changes while on the page
    window.addEventListener('hashchange', handleHashNavigation);
    
    return () => {
      window.removeEventListener('hashchange', handleHashNavigation);
    };
  }, []);

  return (
    <main
      className="flex min-h-screen flex-col bg-[#fdfdfd]"
      data-oid="ex.hzry"
    >
      <Header lang={lang} setLang={handleLanguageChange} data-oid="qdz-pd4" />

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
