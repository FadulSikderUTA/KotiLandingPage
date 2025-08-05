"use client";
import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { 
  trackWaitlistFormStart, 
  trackWaitlistSuccess, 
  trackWaitlistError 
} from '@/lib/analytics';

interface FooterProps {
  lang?: "bn" | "en";
}

const Footer = ({ lang = "bn" }: FooterProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    // Track form start event
    trackWaitlistFormStart('footer', lang, email.split('@')[1]);
    
    setIsLoading(true);
    setMessage("");
    
    try {
      const response = await fetch('/api/waitlist/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email: email.trim() }),
      });
      
      const data = await response.json();
      
      if (data.success) {
        // Track successful signup
        trackWaitlistSuccess(
          'footer', 
          lang, 
          data.data?.subscriber_id, 
          data.data?.email_sent,
          email.split('@')[1]
        );
        
        setIsSubmitted(true);
        setMessage(data.message);
        setEmail(""); // Clear the form
        setTimeout(() => {
          setIsSubmitted(false);
          setMessage("");
        }, 5000);
      } else {
        // Track failed signup
        trackWaitlistError('footer', lang, 'api_error', data.message);
        
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // Track network error
      trackWaitlistError('footer', lang, 'network_error', 'Network connection failed');
      
      console.error('Subscription error:', error);
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8" data-oid="xl8sjls">
      <div className="max-w-7xl mx-auto px-8" data-oid="footer-container">
        {/* Main Footer Content - Horizontal Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12" data-oid="footer-grid">
          
          {/* 1. Company Info Section */}
          <div className="lg:col-span-1" data-oid="koti-section">
            <Link
              href="/"
              className="text-3xl font-bold text-white mb-4 block"
              data-oid="koti-logo"
            >
              KOTI
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed mb-4" data-oid="koti-description">
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
            <p className="text-xs text-gray-400 italic">
              {lang === "bn" 
                ? "* আমরা বর্তমানে বাংলাদেশ ব্যাংক থেকে লাইসেন্স প্রাপ্তির প্রক্রিয়ায় রয়েছি।"
                : "* We are currently in the process of obtaining our license from Bangladesh Bank."
              }
            </p>
          </div>

          {/* 2. Services Section */}
          <div className="lg:col-span-1" data-oid="services-section">
            <h3 className="text-lg font-semibold text-white mb-4" data-oid="services-title">
              {lang === "bn" ? "সেবাসমূহ" : "Services"}
            </h3>
            <ul className="space-y-3 text-sm" data-oid="services-list">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "ক্রেডিট স্কোর পরীক্ষা" : "Credit Score Check"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "ব্যক্তিগত অর্থায়ন" : "Personal Finance"}
                </Link>
              </li>
              <li>
                <a href="/#business-solutions" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solutions"}
                </a>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "নিরাপত্তা ও বিশ্বস্ততা" : "Security & Trust"}
                </Link>
              </li>
            </ul>
          </div>

          {/* 3. Resources Section */}
          <div className="lg:col-span-1" data-oid="resources-section">
            <h3 className="text-lg font-semibold text-white mb-4" data-oid="resources-title">
              {lang === "bn" ? "সংস্থান" : "Resources"}
            </h3>
            <ul className="space-y-3 text-sm" data-oid="resources-list">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "আর্থিক শিক্ষা" : "Financial Education"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "সাহায্য কেন্দ্র" : "Help Center"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "যোগাযোগ করুন" : "Contact Us"}
                </Link>
              </li>
            </ul>
          </div>

          {/* 4. Legal Section */}
          <div className="lg:col-span-1" data-oid="legal-section">
            <h3 className="text-lg font-semibold text-white mb-4" data-oid="legal-title">
              {lang === "bn" ? "আইনি" : "Legal"}
            </h3>
            <ul className="space-y-3 text-sm" data-oid="legal-list">
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "সেবার শর্তাবলী" : "Terms of Service"}
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-[#5daa80] transition-colors duration-300">
                  {lang === "bn" ? "নিরাপত্তা নীতি" : "Security Policy"}
                </Link>
              </li>
            </ul>
          </div>

          {/* 5. Newsletter Section */}
          <div className="lg:col-span-1" data-oid="newsletter-section">
            <h3 className="text-lg font-semibold text-white mb-4" data-oid="newsletter-title">
              {lang === "bn" ? "নিউজলেটার" : "Newsletter"}
            </h3>
            <p className="text-gray-300 text-sm mb-4" data-oid="newsletter-description">
              {lang === "bn" 
                ? "আপডেট এবং নতুন ফিচার সম্পর্কে জানতে আমাদের নিউজলেটার সাবস্ক্রাইব করুন।"
                : "Subscribe to our newsletter for updates and new features."
              }
            </p>
            <form onSubmit={handleSubmit} className="space-y-3" data-oid="newsletter-form">
              <input 
                type="email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={lang === "bn" ? "আপনার ইমেইল" : "Enter your email"}
                required
                disabled={isLoading}
                className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#5daa80] transition-colors duration-300 disabled:opacity-50"
                data-oid="newsletter-input"
              />
              <motion.button 
                type="submit"
                disabled={isLoading || isSubmitted}
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
                className="w-full bg-[#5daa80] hover:bg-[#4d8a6a] text-white font-semibold py-3 px-4 rounded-lg transition-colors duration-300 disabled:opacity-50"
                data-oid="newsletter-btn"
              >
                {isLoading ? (lang === "bn" ? "যুক্ত হচ্ছে..." : "Joining...") : 
                 isSubmitted ? (lang === "bn" ? "যুক্ত হয়েছে!" : "Joined!") : 
                 (lang === "bn" ? "সাবস্ক্রাইব করুন" : "Subscribe")}
              </motion.button>
              
              {/* Success/Error Message */}
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`text-xs text-center p-2 rounded-lg ${
                    isSubmitted 
                      ? "bg-green-900/30 text-green-300 border border-green-800" 
                      : "bg-red-900/30 text-red-300 border border-red-800"
                  }`}
                >
                  {message}
                </motion.div>
              )}
            </form>
          </div>
        </div>

        {/* Connect With Us & Email - Centered */}
        <div className="flex flex-col items-center justify-center py-8 border-t border-gray-800" data-oid="connect-section">
          <h3 className="text-lg font-semibold text-white mb-4" data-oid="connect-title">
            {lang === "bn" ? "আমাদের সাথে যোগাযোগ করুন" : "Connect With Us"}
          </h3>
          <div className="flex gap-4 mb-6" data-oid="social-icons">
            <a
              href="https://www.facebook.com/profile.php?id=61576026151384"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook"
              className="group p-3 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
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
            >
              <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
              </svg>
            </a>
            <a
              href="mailto:info@kotibd.com"
              aria-label="Email"
              className="group p-3 bg-gray-800 rounded-full hover:bg-green-600 transition-all duration-300"
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
            >
              <svg className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
              </svg>
            </a>
          </div>
          
          {/* Email */}
          <div className="text-center" data-oid="email-info">
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

        {/* Bottom Section */}
        <div className="border-t border-gray-800 pt-8" data-oid="bottom-section">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4" data-oid="bottom-content">
            <p className="text-gray-400 text-sm" data-oid="copyright">
              © 2024 Koti Credit Bureau. {lang === "bn" ? "সকল অধিকার সংরক্ষিত।" : "All rights reserved."}
            </p>
            <div className="flex gap-6 text-sm" data-oid="bottom-links">
              <Link href="/about" className="text-gray-400 hover:text-[#5daa80] transition-colors duration-300">
                {lang === "bn" ? "গোপনীয়তা" : "Privacy"}
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-[#5daa80] transition-colors duration-300">
                {lang === "bn" ? "শর্তাবলী" : "Terms"}
              </Link>
              <Link href="/about" className="text-gray-400 hover:text-[#5daa80] transition-colors duration-300">
                {lang === "bn" ? "কুকিজ" : "Cookies"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;