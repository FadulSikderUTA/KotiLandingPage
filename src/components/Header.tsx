"use client";
import React, { useState } from "react";
import Link from "next/link";

type Language = "bn" | "en";

interface HeaderProps {
  lang: Language;
  setLang: (lang: Language) => void;
}

const Header = ({ lang, setLang }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header
      className="absolute top-0 z-20 flex h-[80px] w-full items-center justify-between px-[5%]"
      data-oid="mlhaa.b"
    >
      {/* Logo */}
      <Link
        className="text-3xl font-bold text-[#0d0d0d] hover:text-[#6dbb00] transition-colors duration-300"
        href={lang === "bn" ? "/" : "/en"}
        data-oid="3vprikq"
      >
        Koti
      </Link>

      {/* Primary nav (collapsible on mobile) - WITH PROPER SPACING */}
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } max-lg:fixed max-lg:left-0 max-lg:top-[80px] max-lg:h-[calc(100vh-80px)] max-lg:w-full max-lg:flex-col max-lg:items-center max-lg:justify-start max-lg:gap-8 max-lg:bg-black max-lg:bg-opacity-90 max-lg:backdrop-blur-md max-lg:p-8 lg:flex`}
        data-oid="oe3sg9e"
      >
        {/* Navigation with proper spacing */}
        <nav
          className="flex flex-col gap-6 lg:flex-row lg:items-center lg:gap-8"
          data-oid="h6la4wi"
        >
          <Link
            className="text-[#0d0d0d] hover:text-[#6dbb00] transition-colors duration-300 font-medium"
            href="#credit-services"
            onClick={() => setIsMenuOpen(false)}
            data-oid="f1.3kkr"
          >
            {lang === "bn" ? "ক্রেডিট সেবা" : "Credit Services"}
          </Link>
          <Link
            className="text-[#0d0d0d] hover:text-[#6dbb00] transition-colors duration-300 font-medium"
            href="#personal-finance"
            onClick={() => setIsMenuOpen(false)}
            data-oid="2x8-590"
          >
            {lang === "bn" ? "ব্যক্তিগত অর্থায়ন" : "Personal Finance"}
          </Link>
          <Link
            className="text-[#0d0d0d] hover:text-[#6dbb00] transition-colors duration-300 font-medium"
            href="#business-solutions"
            onClick={() => setIsMenuOpen(false)}
            data-oid="gwrr:8j"
          >
            {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solutions"}
          </Link>
          <Link
            className="text-[#0d0d0d] hover:text-[#6dbb00] transition-colors duration-300 font-medium"
            href="#support"
            onClick={() => setIsMenuOpen(false)}
            data-oid="65td2:1"
          >
            {lang === "bn" ? "সহায়তা" : "Support"}
          </Link>
        </nav>
      </div>

      {/* Right utilities: language pills + store badges (always visible) - WITH PROPER SPACING */}
      <div className="flex items-center gap-4" data-oid="w_3i2gf">
        {/* App-store badges with better spacing */}
        <div className="hidden sm:flex items-center gap-3" data-oid=":4.:vaq">
          <span
            className="rounded-lg bg-[#0d0d0d]/10 backdrop-blur-md px-3 py-2 text-xs text-[#0d0d0d] border border-[#0d0d0d]/20 cursor-not-allowed select-none"
            data-oid="-nia:d4"
          >
            {lang === "bn" ? "শীঘ্রই • Play" : "Soon • Play"}
          </span>
          <span
            className="rounded-lg bg-[#0d0d0d]/10 backdrop-blur-md px-3 py-2 text-xs text-[#0d0d0d] border border-[#0d0d0d]/20 cursor-not-allowed select-none"
            data-oid="6qqgznx"
          >
            {lang === "bn" ? "শীঘ্রই • App" : "Soon • App"}
          </span>
        </div>

        {/* Language switcher */}
        <div
          className="flex items-center bg-[#0d0d0d]/10 backdrop-blur-md rounded-full p-1 border border-[#0d0d0d]/20"
          data-oid=".6vw302"
        >
          <button
            onClick={() => setLang("bn")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              lang === "bn"
                ? "bg-[#6dbb00] text-[#0d0d0d] shadow-lg"
                : "text-[#0d0d0d] hover:text-[#6dbb00]"
            }`}
            data-oid="76-9n3x"
          >
            বাং
          </button>
          <div className="mx-1 text-[#0d0d0d]/50" data-oid="nr1.y3a">
            |
          </div>
          <button
            onClick={() => setLang("en")}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
              lang === "en"
                ? "bg-[#6dbb00] text-[#0d0d0d] shadow-lg"
                : "text-[#0d0d0d] hover:text-[#6dbb00]"
            }`}
            data-oid="dsfp5ah"
          >
            EN
          </button>
        </div>

        {/* Hamburger */}
        <button
          className="z-30 ml-2 flex h-8 w-8 flex-col items-center justify-center gap-1 lg:hidden"
          onClick={toggleMenu}
          data-oid="k.kylvf"
        >
          <span
            className={`h-0.5 w-6 bg-[#0d0d0d] transition-all duration-300 ${
              isMenuOpen ? "translate-y-2 rotate-45" : ""
            }`}
            data-oid=":sf_8c7"
          />

          <span
            className={`h-0.5 w-6 bg-[#0d0d0d] transition-all duration-300 ${
              isMenuOpen ? "opacity-0" : ""
            }`}
            data-oid="hyv9gsm"
          />

          <span
            className={`h-0.5 w-6 bg-[#0d0d0d] transition-all duration-300 ${
              isMenuOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
            data-oid="5pdc2z2"
          />
        </button>
      </div>
    </header>
  );
};

export default Header;
