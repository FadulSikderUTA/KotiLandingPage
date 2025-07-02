"use client";
import React from "react";
import Link from "next/link";

interface FooterProps {
  lang?: "bn" | "en";
}

const Footer = ({ lang = "bn" }: FooterProps) => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" data-oid="xl8sjls">
      <div className="max-w-7xl mx-auto px-8" data-oid="footer-container">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12" data-oid="footer-grid">
          
          {/* Company Info Section */}
          <div className="col-span-1 md:col-span-1" data-oid="0klk02t">
            <Link
              href={lang === "bn" ? "/" : "/en"}
              className="text-4xl font-bold text-white mb-6 block"
              data-oid="yz5a-h6"
            >
              KOTI
            </Link>
            <p className="text-gray-300 mb-6 leading-relaxed" data-oid="ub_8cw-">
              {lang === "bn" ? (
                <>
                  বাংলাদেশের প্রথম ডিজিটাল ক্রেডিট স্কোরিং প্ল্যাটফর্ম। 
                  আপনার আর্থিক ভবিষ্যৎ গড়ুন আমাদের সাথে।
                </>
              ) : (
                <>
                  Bangladesh's first digital credit scoring platform. 
                  Build your financial future with us.
                </>
              )}
            </p>
            
            {/* Social Media Icons */}
            <div className="space-y-4" data-oid="social-section">
              <h3 className="text-lg font-semibold text-white" data-oid="h4rg0u-">
                {lang === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Connect With Us"}
              </h3>
              <div className="flex gap-4" data-oid="_tsjcxn">
                <a
                  href="https://www.facebook.com/profile.php?id=61576026151384"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="group p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
                  data-oid="rezy7uw"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://x.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="X (Twitter)"
                  className="group p-3 bg-gray-800 rounded-full hover:bg-black transition-all duration-300"
                  data-oid="4cicxt-"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                <a
                  href="mailto:info@kotibd.com"
                  aria-label="Email"
                  className="group p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-all duration-300"
                  data-oid="i89p7cc"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/koti-credit-bureau/about/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="group p-3 bg-gray-800 rounded-full hover:bg-blue-700 transition-all duration-300"
                  data-oid="mlakg6t"
                >
                  <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
              </div>
              
              {/* Contact Email */}
              <div className="mt-6" data-oid="contact-email">
                <h4 className="text-sm font-semibold text-white mb-2">
                  {lang === "bn" ? "ইমেইল" : "Email"}
                </h4>
                <a 
                  href="mailto:info@kotibd.com"
                  className="text-[#5daa80] hover:text-[#4d8a6a] transition-colors duration-300 text-sm"
                >
                  info@kotibd.com
                </a>
              </div>
            </div>
          </div>

          {/* Services Section */}
          <div className="space-y-6" data-oid="tgbm49w">
            <h3 className="text-xl font-bold text-white" data-oid="bddm9k0">
              {lang === "bn" ? "সেবাসমূহ" : "Services"}
            </h3>
            <div className="space-y-3" data-oid="-67rvcu">
              <Link
                href={lang === "bn" ? "/credit" : "/en/credit"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="xkq5de4"
              >
                {lang === "bn" ? "ক্রেডিট স্কোর চেক" : "Credit Score Check"}
              </Link>
              <Link
                href={lang === "bn" ? "/finance" : "/en/finance"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="9.1xszc"
              >
                {lang === "bn" ? "ব্যক্তিগত ফিন্যান্স" : "Personal Finance"}
              </Link>
              <Link
                href={lang === "bn" ? "/business" : "/en/business"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="gtma223"
              >
                {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solutions"}
              </Link>
              <Link
                href={lang === "bn" ? "/security" : "/en/security"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="j4pjrt2"
              >
                {lang === "bn" ? "নিরাপত্তা ও বিশ্বাস" : "Security & Trust"}
              </Link>
            </div>
          </div>

          {/* Resources Section */}
          <div className="space-y-6" data-oid="lo5ikol">
            <h3 className="text-xl font-bold text-white" data-oid="0c5i9bv">
              {lang === "bn" ? "সহায়তা" : "Resources"}
            </h3>
            <div className="space-y-3" data-oid="k_ve1b9">
              <Link
                href={lang === "bn" ? "/learn" : "/en/learn"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="qy:6108"
              >
                {lang === "bn" ? "আর্থিক শিক্ষা" : "Financial Education"}
              </Link>
              <Link
                href={lang === "bn" ? "/support" : "/en/support"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="ak6jzlv"
              >
                {lang === "bn" ? "সাহায্য কেন্দ্র" : "Help Center"}
              </Link>
              <Link
                href={lang === "bn" ? "/contact" : "/en/contact"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="kf2smz2"
              >
                {lang === "bn" ? "যোগাযোগ" : "Contact Us"}
              </Link>
            </div>
          </div>

          {/* Newsletter Section */}
          <div className="space-y-6" data-oid="newsletter-section">
            <h3 className="text-xl font-bold text-white">
              {lang === "bn" ? "নিউজলেটার" : "Newsletter"}
            </h3>
            <p className="text-gray-300 text-sm">
              {lang === "bn" 
                ? "আপডেট এবং নতুন ফিচার সম্পর্কে জানতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন।"
                : "Subscribe to our newsletter for updates and new features."
              }
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={lang === "bn" ? "আপনার ইমেইল ঠিকানা" : "Enter your email"}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#5daa80] transition-colors duration-300"
                data-oid="newsletter-input"
              />
              <button 
                type="button"
                className="w-full bg-[#5daa80] hover:bg-[#4d8a6a] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300"
                data-oid="newsletter-btn"
              >
                {lang === "bn" ? "সাবস্ক্রাইব করুন" : "Subscribe"}
              </button>
            </div>
          </div>

          {/* Legal Section */}
          <div className="space-y-6" data-oid="legal-section">
            <h3 className="text-xl font-bold text-white">
              {lang === "bn" ? "আইনি তথ্য" : "Legal"}
            </h3>
            <div className="space-y-3">
              <Link
                href={lang === "bn" ? "/privacy" : "/en/privacy"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="--l4bv:"
              >
                {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
              </Link>
              <Link
                href={lang === "bn" ? "/terms" : "/en/terms"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
                data-oid="borom_h"
              >
                {lang === "bn" ? "সেবার শর্তাবলী" : "Terms of Service"}
              </Link>
              <Link
                href={lang === "bn" ? "/security-policy" : "/en/security-policy"}
                className="block text-gray-300 hover:text-white transition-colors duration-300"
              >
                {lang === "bn" ? "নিরাপত্তা নীতি" : "Security Policy"}
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-800 pt-8" data-oid="footer-bottom">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            
            {/* Copyright */}
            <div className="text-gray-400 text-sm">
              © 2025 KOTI. {lang === "bn" ? "সমস্ত অধিকার সংরক্ষিত।" : "All rights reserved."}
            </div>

            {/* Location & Additional Info */}
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-gray-400 text-sm">
              <span>
                {lang === "bn" ? "ঢাকা, বাংলাদেশ" : "Dhaka, Bangladesh"}
              </span>
              <span className="hidden md:block">•</span>
              <span>
                {lang === "bn" ? "ক্রেডিট স্কোরিং ব্যুরো" : "Credit Scoring Bureau"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
