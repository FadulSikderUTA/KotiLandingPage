"use client";
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { 
  trackPageView, 
  trackWaitlistFormStart, 
  trackWaitlistSuccess, 
  trackWaitlistError 
} from '@/lib/analytics';

type Language = "bn" | "en";

interface AboutUsContentProps {
  lang: Language;
}

interface TeamMember {
  name: string;
  title: string;
  description: string;
  image?: string;
  category: "founder" | "director" | "advisor";
}

const AboutUsContent = ({ lang }: AboutUsContentProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [animatedScore, setAnimatedScore] = useState(0);

  // Track page view on component mount
  useEffect(() => {
    trackPageView('about-us', lang);
  }, [lang]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) return;
    
    // Track form start event
    trackWaitlistFormStart('about-us', lang, email.split('@')[1]);
    
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
          'about-us', 
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
        trackWaitlistError('about-us', lang, 'api_error', data.message);
        
        setMessage(data.message || "Something went wrong. Please try again.");
      }
    } catch (error) {
      // Track network error
      trackWaitlistError('about-us', lang, 'network_error', 'Network connection failed');
      
      console.error('Subscription error:', error);
      setMessage("Network error. Please check your connection and try again.");
    } finally {
      setIsLoading(false);
    }
  };

  // Credit score animation for mobile mockup
  useEffect(() => {
    const timer = setTimeout(() => {
      let currentScore = 0;
      const interval = setInterval(() => {
        currentScore += 5;
        setAnimatedScore(currentScore);
        if (currentScore >= 765) {
          clearInterval(interval);
          setAnimatedScore(765);
        }
      }, 20);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  const teamMembers: TeamMember[] = [
    {
      name: "Barrister Md Anisuzz Aman",
      title: "Founder & Director",
      description: "Head of compliance & MLRO SMF17. A Barrister with experience in financial regulation and compliance. Member of the Bar of England & Wales with LLM in Financial Regulation and Compliance (Fintech Focus) from BPP University, London",
      image: "/team/anis.jpeg",
      category: "founder"
    },
    {
      name: "Fadul Sikder",
      title: "Co-Founder & DCTO",
      description: "Graduate Researcher at the University of Texas, Arlington. A cutting-edge technologist specializing in AI, cybersecurity, and scalable fintech infrastructure. AI and ML system security expert",
      image: "/team/fadul.png",
      category: "founder"
    },
    {
      name: "Anthony Wilcox",
      title: "Chairperson & Director",
      description: "Seasoned financial services leader with over 25 years of executive experience. Former CEO and Managing Director of Danske Bank UK and Lloyds Banking Group's International Division, overseeing multi-billion-pound portfolios",
      category: "director"
    },
    {
      name: "Mizanur Rahman",
      title: "Managing Director & CEO",
      description: "Banking executive with over three decades of leadership experience in investment management, digital banking, and credit operations. Former Senior Executive Vice President at Islami Bank Bangladesh PLC",
      category: "director"
    },
    {
      name: "Preston Brown",
      title: "Director",
      description: "Dynamic entrepreneur and CEO of Yeeld Technologies Ltd, building cutting-edge digital finance platforms focused on consumer empowerment and financial inclusion. FCA-regulated technology partner",
      category: "director"
    },
    {
      name: "Abdul Malek Mangal",
      title: "Director",
      description: "Seasoned fintech executive with over a decade of leadership experience. Director of V Send Ltd, a UK-based FCA-authorized payment institution, driving digital innovation and operational resilience",
      category: "director"
    },
    {
      name: "Md Mushfiqur Rahman",
      title: "Director & CTO",
      description: "Technology leader with over two decades of experience in banking technology, cybersecurity, and digital transformation. Senior Vice President and CITO of First Security Islami Bank PLC",
      category: "director"
    },
    {
      name: "Galib Ibn Anwarul Azim",
      title: "Director",
      description: "Distinguished professional with over 11 years spanning central banking, fintech regulation, and digital finance innovation. Former Assistant Director at Bangladesh Bank and senior roles at UNCDF",
      category: "director"
    }
  ];

const content = {
    bn: {
      title: "দলের সাথে পরিচয়",
      subtitle: "আপনার ক্রেডিট, আপনার শক্তি: প্রতিদিনের ছোট পছন্দগুলিকে বড় অর্থনৈতিক প্রভাবে পরিণত করুন",
      description: "বাংলাদেশের প্রথম AI-চালিত ক্রেডিট স্কোরিং অ্যাপের পেছনের দল। আমরা আর্থিক অন্তর্ভুক্তি এবং স্বচ্ছতা বৃদ্ধির জন্য কাজ করছি।",
      foundersTitle: "প্রতিষ্ঠাতা",
      boardTitle: "পরিচালনা পর্ষদ",
      emailPlaceholder: "আপনার ইমেইল ঠিকানা লিখুন",
      joinButton: "এখনই যোগ দিন",
      successMessage: "ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করব।",
      benefits: [
        "প্রথম অ্যাক্সেস পাবেন",
        "বিশেষ প্রিমিয়াম ফিচার",
        "ফ্রি ক্রেডিট রিপোর্ট",
        "এক্সক্লুসিভ সুবিধা"
      ],
      disclaimer: "* আমরা বর্তমানে বাংলাদেশ ব্যাংক থেকে লাইসেন্স প্রাপ্তির প্রক্রিয়ায় রয়েছি।"
    },
    en: {
      title: "About Us",
      subtitle: "Your Credit, Your Power: Turn everyday small choices into big economic impact",
      description: "The team behind Bangladesh's first AI-powered credit scoring app. We're committed to increasing financial inclusion and transparency across Bangladesh.",
      foundersTitle: "Founders",
      boardTitle: "Board of Directors",
      emailPlaceholder: "Enter your email address",
      joinButton: "Join Now",
      successMessage: "Thank you! We'll be in touch soon.",
      benefits: [
        "First Access",
        "Premium Features",
        "Free Credit Report",
        "Exclusive Benefits"
      ],
      disclaimer: "* We are currently in the process of obtaining our license from Bangladesh Bank."
    }
  };

  const currentContent = content[lang];

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd]"
      data-oid="about-section"
    >
      {/* 96vw Container - Same structure as WaitlistContent and Hero */}
      <div
        className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
        data-oid="about-container"
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#5daa80]/20 via-white to-[#5daa80]/10" />
        
        {/* Content positioned over background like WaitlistContent */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-16">
            
            {/* Grid layout exactly like WaitlistContent - Two columns */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center h-full">
              
              {/* Left column - About Us content with prominent Join Waitlist */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8"
              >
                {/* Title and description - Lower position to avoid header cutoff */}
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#0d0d0d]">
                    {currentContent.title}
                  </h1>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0d0d0d]/70 leading-relaxed max-w-2xl">
                    {currentContent.description}
                  </p>
                </div>

                {/* Prominent Join Waitlist Section - Higher on page */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  className="bg-gradient-to-br from-[#5daa80]/15 to-[#4d8a6a]/15 rounded-2xl p-6 border-2 border-[#5daa80]/30 shadow-lg"
                >
                  <div className="space-y-4">
                    <h3 className="text-xl lg:text-2xl font-bold text-[#0d0d0d] text-center">
                      Join the Financial Revolution
                    </h3>
                    
                    <p className="text-sm lg:text-base text-[#0d0d0d]/70 text-center">
                      Kindly join the waitlist to get future updates and be among the first to experience our platform.
                    </p>
                    
                    {/* Benefits grid like WaitlistContent */}
                    <div className="grid grid-cols-2 gap-3">
                      {currentContent.benefits.map((benefit, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
                          className="flex items-center gap-2"
                        >
                          <div className="w-2 h-2 bg-[#5daa80] rounded-full" />
                          <span className="text-sm md:text-base text-[#0d0d0d]/80 font-medium">
                            {benefit}
                          </span>
                        </motion.div>
                      ))}
                    </div>
                    
                    {/* Email signup form like WaitlistContent */}
                    <motion.form
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.8, delay: 0.5 }}
                      onSubmit={handleSubmit}
                      className="space-y-3"
                    >
                      <div className="flex flex-col sm:flex-row gap-3">
                        <input
                          type="email"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder={currentContent.emailPlaceholder}
                          required
                          disabled={isLoading}
                          className="flex-1 px-4 py-3 lg:py-4 rounded-xl border-2 border-gray-300 focus:border-[#5daa80] focus:ring-2 focus:ring-[#5daa80]/20 outline-none transition-all text-[#0d0d0d] text-sm lg:text-base bg-white/80 disabled:opacity-50"
                        />
                        <motion.button
                          whileHover={{ scale: isLoading ? 1 : 1.05 }}
                          whileTap={{ scale: isLoading ? 1 : 0.95 }}
                          type="submit"
                          disabled={isLoading || isSubmitted}
                          className="px-6 py-3 lg:py-4 bg-[#5daa80] text-[#0d0d0d] font-semibold rounded-xl hover:bg-[#4d9470] transition-all shadow-lg hover:shadow-xl text-sm lg:text-base disabled:opacity-50"
                        >
                          {isLoading ? "Joining..." : isSubmitted ? "Joined!" : currentContent.joinButton}
                        </motion.button>
                      </div>
                      
                      {/* Success/Error Message */}
                      {message && (
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className={`text-sm text-center p-3 rounded-lg ${
                            isSubmitted 
                              ? "bg-green-50 text-green-700 border border-green-200" 
                              : "bg-red-50 text-red-700 border border-red-200"
                          }`}
                        >
                          {message}
                        </motion.div>
                      )}
                    </motion.form>
                  </div>
                </motion.div>

                {/* Enhanced Team Section with scaled up styling */}
                <div className="space-y-8">
                  {/* Our Team Section Header */}
                  <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.6 }}
                  >
                    <h3 className="text-xl lg:text-2xl font-bold text-[#0d0d0d] mb-6">Our Team</h3>
                  </motion.div>

                  {/* Founders - Enhanced layout with larger styling */}
                  <div className="space-y-4">
                    <h4 className="text-lg lg:text-xl font-bold text-[#0d0d0d]">{currentContent.foundersTitle}</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {teamMembers.filter(m => m.category === "founder").map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                          whileHover={{ scale: 1.05, boxShadow: "0 20px 40px -10px rgba(93, 170, 128, 0.4)" }}
                          className="bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-5 border border-[#5daa80]/15 hover:border-[#5daa80]/40 cursor-pointer group"
                        >
                          <div className="flex items-center gap-4">
                            <div className="relative w-16 h-16 flex-shrink-0">
                              <motion.div 
                                whileHover={{ scale: 1.15, rotate: 5 }}
                                className="absolute inset-0 bg-gradient-to-br from-[#5daa80] to-[#4d8a6a] rounded-full p-0.5 shadow-lg group-hover:shadow-xl transition-all duration-300"
                              >
                                <div className="relative w-full h-full bg-white rounded-full p-0.5">
                                  {member.image ? (
                                    <Image
                                      src={member.image}
                                      alt={member.name}
                                      fill
                                      className="object-cover rounded-full"
                                    />
                                  ) : (
                                    <div className="w-full h-full bg-gradient-to-br from-[#5daa80]/20 to-[#4d8a6a]/20 rounded-full flex items-center justify-center">
                                      <span className="text-sm font-bold text-[#5daa80]">
                                        {member.name.split(' ').filter(n => n !== 'Md' && n !== 'Barrister').map(n => n[0]).join('')}
                                      </span>
                                    </div>
                                  )}
                                </div>
                              </motion.div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <h5 className="text-base lg:text-lg font-bold text-[#0d0d0d] group-hover:text-[#5daa80] transition-colors duration-300 mb-1">
                                {member.name}
                              </h5>
                              <p className="text-sm lg:text-base font-semibold text-[#5daa80] mb-2">{member.title}</p>
                              <p className="text-xs lg:text-sm text-[#0d0d0d]/70 leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
                                {member.description}
                              </p>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  {/* Board of Directors - Enhanced grid with larger styling */}
                  <div className="space-y-4">
                    <h4 className="text-lg lg:text-xl font-bold text-[#0d0d0d]">{currentContent.boardTitle}</h4>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {teamMembers.filter(m => m.category === "director").map((member, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 15 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ duration: 0.5, delay: 0.9 + index * 0.05 }}
                          whileHover={{ scale: 1.08, boxShadow: "0 15px 30px -8px rgba(93, 170, 128, 0.3)" }}
                          className="bg-white/90 backdrop-blur-sm rounded-xl shadow-md hover:shadow-xl transition-all duration-300 p-4 border border-[#5daa80]/10 hover:border-[#5daa80]/30 cursor-pointer group"
                        >
                          <div className="flex flex-col items-center text-center">
                            <motion.div 
                              whileHover={{ scale: 1.2, rotate: -5 }}
                              className="w-12 h-12 bg-gradient-to-br from-[#5daa80] to-[#4d8a6a] rounded-full flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 mb-3"
                            >
                              <span className="text-white font-bold text-sm">
                                {member.name.split(' ').filter(n => n !== 'Md' && n !== 'Barrister').slice(0, 2).map(n => n[0]).join('')}
                              </span>
                            </motion.div>
                            <h5 className="text-sm lg:text-base font-bold text-[#0d0d0d] group-hover:text-[#5daa80] transition-colors duration-300 line-clamp-2 mb-1">
                              {member.name}
                            </h5>
                            <p className="text-xs lg:text-sm font-medium text-[#5daa80]/80 line-clamp-2">{member.title}</p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Right column - Phone mockup like WaitlistContent */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Phone container - same dimensions as WaitlistContent */}
                  <div className="relative w-[280px] h-[580px] sm:w-[320px] sm:h-[640px] lg:w-[360px] lg:h-[720px]">
                    
                    {/* Phone frame */}
                    <div className="absolute inset-0 bg-[#0d0d0d] rounded-[3rem] p-3 shadow-2xl">
                      
                      {/* Screen area */}
                      <div className="w-full h-full bg-white rounded-[2.5rem] overflow-hidden relative">
                        
                        {/* Status bar */}
                        <div className="absolute top-0 left-0 right-0 h-12 bg-[#0d0d0d] flex items-center justify-between px-6 text-white text-sm">
                          <span>9:41</span>
                          <div className="flex gap-1">
                            <div className="w-4 h-2 bg-white rounded-sm"></div>
                            <div className="w-6 h-2 bg-white rounded-sm opacity-60"></div>
                            <div className="w-1 h-2 bg-white rounded-sm"></div>
                          </div>
                        </div>

                        {/* App content */}
                        <div className="pt-12 h-full bg-gradient-to-b from-[#5daa80]/10 to-white">
                          
                          {/* App header */}
                          <div className="px-6 py-4 border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-[#0d0d0d]">KOTI</h3>
                            <p className="text-sm text-[#0d0d0d]/60">Your Credit, Your Power</p>
                          </div>

                          {/* Credit score display with animation */}
                          <div className="px-6 py-8 text-center">
                            <div className="relative w-32 h-32 mx-auto mb-4">
                              {/* Circular progress */}
                              <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  fill="none"
                                  stroke="#e5e7eb"
                                  strokeWidth="6"
                                />
                                <motion.circle
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  fill="none"
                                  stroke="#5daa80"
                                  strokeWidth="6"
                                  strokeDasharray={`${(animatedScore/850) * 283} 283`}
                                  className="transition-all duration-1000"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <motion.div 
                                    className="text-3xl font-bold text-[#5daa80]"
                                    key={animatedScore}
                                  >
                                    {animatedScore}
                                  </motion.div>
                                  <div className="text-xs text-[#0d0d0d]/60">Excellent</div>
                                </div>
                              </div>
                            </div>
                            <p className="text-xs text-[#0d0d0d]/70 font-medium">Range: 300-850</p>
                          </div>

                          {/* Key features */}
                          <div className="px-6 space-y-3">
                            <motion.div 
                              className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 1.0 }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#5daa80] rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">📊</span>
                                </div>
                                <span className="text-sm font-medium">Real-time Monitoring</span>
                              </div>
                              <span className="text-xs text-[#5daa80] font-semibold">Active</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 1.1 }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#5daa80] rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">🎯</span>
                                </div>
                                <span className="text-sm font-medium">AI Insights</span>
                              </div>
                              <span className="text-xs text-[#5daa80] font-semibold">24/7</span>
                            </motion.div>
                            
                            <motion.div 
                              className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm"
                              initial={{ x: -20, opacity: 0 }}
                              animate={{ x: 0, opacity: 1 }}
                              transition={{ delay: 1.2 }}
                            >
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#5daa80] rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">🔒</span>
                                </div>
                                <span className="text-sm font-medium">Secure & Private</span>
                              </div>
                              <span className="text-xs text-[#5daa80] font-semibold">Protected</span>
                            </motion.div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow effect like WaitlistContent */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#5daa80]/20 to-[#5daa80]/40 rounded-full blur-3xl -z-10 opacity-60" />
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsContent;