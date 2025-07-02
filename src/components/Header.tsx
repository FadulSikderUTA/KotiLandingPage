"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";

type Language = "bn" | "en";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header = ({ lang, setLang }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Show header when at top of page
      if (currentScrollY <= 10) {
        setIsHeaderVisible(true);
      }
      // Hide header when scrolling down, show when scrolling up
      else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down & past threshold
        setIsHeaderVisible(false);
      } else if (currentScrollY < lastScrollY) {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    // Throttle scroll events for better performance
    let ticking = false;
    const throttledHandleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', throttledHandleScroll, { passive: true });
    
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
    };
  }, [lastScrollY]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Smooth scroll to specific sections
  const scrollToSection = (sectionNumber: number) => {
    const viewportHeight = window.innerHeight;
    let targetScroll = 0;

    switch (sectionNumber) {
      case 1: // Hero section
        targetScroll = 0;
        break;
      case 2: // HowItWorksContent2 section
        targetScroll = viewportHeight;
        break;
      case 3: // BusinessSolutionsContent section  
        targetScroll = viewportHeight * 2;
        break;
      default:
        targetScroll = 0;
    }

    window.scrollTo({
      top: targetScroll,
      behavior: 'smooth'
    });

    // Close mobile menu after navigation
    setIsMenuOpen(false);
  };

  return (
    <>
      {/* Yeeld-style floating pill header */}
      <header
        className={`fixed top-6 left-1/2 transform -translate-x-1/2 z-50 transition-all duration-300 ease-in-out ${
          isHeaderVisible ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0'
        }`}
        data-oid="6e4qj7p"
      >
        {/* Pill-shaped container matching Yeeld design */}
        <div className="flex items-center justify-between bg-[#1a1a1a]/95 backdrop-blur-xl rounded-full px-6 py-3 shadow-2xl border border-white/10 min-w-[320px] max-w-6xl">
          {/* Logo - Click to go to Hero section */}
          <button
            onClick={() => scrollToSection(1)}
            className="text-2xl font-bold text-white hover:text-[#5daa80] transition-colors duration-300 flex-shrink-0 cursor-pointer"
            data-oid="el86tr_"
          >
            Koti
          </button>

          {/* Desktop Navigation - centered */}
          <nav className="hidden lg:flex items-center gap-8 mx-8">
            <button
              onClick={() => scrollToSection(2)}
              className="text-white/90 hover:text-[#5daa80] transition-colors duration-300 font-medium text-sm cursor-pointer"
              data-oid="1em8vv-"
            >
              {lang === "bn" ? "কোটি কিভাবে কাজ করে" : "How Koti Work"}
            </button>
            <button
              onClick={() => scrollToSection(3)}
              className="text-white/90 hover:text-[#5daa80] transition-colors duration-300 font-medium text-sm cursor-pointer"
              data-oid="bb-bnvj"
            >
              {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solution"}
            </button>
            <Link
              className="text-white/90 hover:text-[#5daa80] transition-colors duration-300 font-medium text-sm"
              href="#support"
              data-oid="sp3.msi"
            >
              {lang === "bn" ? "সহায়তা" : "Support"}
            </Link>
          </nav>

          {/* Right side actions */}
          <div className="flex items-center gap-3 flex-shrink-0">
            {/* App store badges - Yeeld style with icons */}
            <div className="hidden md:flex items-center gap-2">
              {/* Google Play Store */}
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 border border-white/20 cursor-not-allowed">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                </svg>
                <span>{lang === "bn" ? "শীঘ্রই আসছে" : "Available Soon"}</span>
              </div>
              
              {/* Apple App Store */}
              <div className="flex items-center gap-2 rounded-full bg-white/10 px-3 py-1.5 text-xs text-white/80 border border-white/20 cursor-not-allowed">
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                </svg>
                <span>{lang === "bn" ? "শীঘ্রই আসছে" : "Available Soon"}</span>
              </div>
            </div>

            {/* Language switcher */}
            <div className="flex items-center bg-white/10 rounded-full p-1">
              <button
                onClick={() => setLang("bn")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  lang === "bn"
                    ? "bg-[#5daa80] text-black"
                    : "text-white/80 hover:text-white"
                }`}
              >
                বাং
              </button>
              <button
                onClick={() => setLang("en")}
                className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
                  lang === "en"
                    ? "bg-[#5daa80] text-black"
                    : "text-white/80 hover:text-white"
                }`}
              >
                EN
              </button>
            </div>

            {/* Mobile menu button */}
            <button
              className="lg:hidden ml-2 flex h-8 w-8 flex-col items-center justify-center gap-1"
              onClick={toggleMenu}
              data-oid="r1cv:12"
            >
              <span
                className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`h-0.5 w-5 bg-white transition-all duration-300 ${
                  isMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
              />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          
          {/* Mobile menu */}
          <div className="absolute top-24 left-1/2 transform -translate-x-1/2 w-[90%] max-w-md">
            <div className="bg-[#1a1a1a]/95 backdrop-blur-xl rounded-2xl p-6 shadow-2xl border border-white/10">
              <nav className="flex flex-col gap-4">
                <button
                  onClick={() => scrollToSection(2)}
                  className="text-white/90 hover:text-[#5daa80] transition-colors duration-300 font-medium py-2 text-left cursor-pointer"
                >
                  {lang === "bn" ? "কোটি কিভাবে কাজ করে" : "How Koti Work"}
                </button>
                <button
                  onClick={() => scrollToSection(3)}
                  className="text-white/90 hover:text-[#5daa80] transition-colors duration-300 font-medium py-2 text-left cursor-pointer"
                >
                  {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solution"}
                </button>
                <Link
                  className="text-white/90 hover:text-[#5daa80] transition-colors duration-300 font-medium py-2"
                  href="#support"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {lang === "bn" ? "সহায়তা" : "Support"}
                </Link>
                
                {/* Mobile app badges with icons */}
                <div className="flex flex-col gap-2 pt-4 border-t border-white/20">
                  <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 border border-white/20 cursor-not-allowed">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.61 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                    </svg>
                    <span>{lang === "bn" ? "শীঘ্রই • Google Play" : "Available Soon • Google Play"}</span>
                  </div>
                  <div className="flex items-center justify-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-white/80 border border-white/20 cursor-not-allowed">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.19 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.07,6.7 11.95,6.61C11.8,5.46 12.36,4.26 13,3.5Z"/>
                    </svg>
                    <span>{lang === "bn" ? "শীঘ্রই • App Store" : "Available Soon • App Store"}</span>
                  </div>
                </div>
              </nav>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
