"use client";
import { useState } from "react";
import { motion } from "framer-motion";

type Language = "bn" | "en";

interface WaitlistContentProps {
  lang: Language;
}

const WaitlistContent = ({ lang }: WaitlistContentProps) => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle waitlist signup
    setIsSubmitted(true);
    setTimeout(() => setIsSubmitted(false), 3000);
  };

  const content = {
    bn: {
      title: "ফিনান্সিয়াল বিপ্লবে যোগ দিন",
      subtitle: "স্মার্ট ক্রেডিট। স্মার্ট পছন্দ।",
      description: "বাংলাদেশের প্রথম AI-চালিত ক্রেডিট স্কোরিং অ্যাপের প্রথম ব্যবহারকারী হয়ে উঠুন। আপনার আর্থিক ভবিষ্যৎ এখনই শুরু করুন।",
      emailPlaceholder: "আপনার ইমেইল ঠিকানা",
      joinButton: "ওয়েটলিস্টে যোগ দিন",
      successMessage: "ধন্যবাদ! আমরা শীঘ্রই যোগাযোগ করব।",
      benefits: [
        "প্রথম অ্যাক্সেস পাবেন",
        "বিশেষ প্রিমিয়াম ফিচার",
        "ফ্রি ক্রেডিট রিপোর্ট",
        "এক্সক্লুসিভ সুবিধা"
      ]
    },
    en: {
      title: "Join the Financial Revolution",
      subtitle: "Smart Credit. Smarter Choices.",
      description: "Be among the first to experience Bangladesh's first AI-powered credit scoring app. Your financial future starts now.",
      emailPlaceholder: "Enter your email address",
      joinButton: "Join Waitlist",
      successMessage: "Thank you! We'll be in touch soon.",
      benefits: [
        "First Access",
        "Premium Features",
        "Free Credit Report",
        "Exclusive Benefits"
      ]
    },
  };

  const currentContent = content[lang];

  return (
    <section
      className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd]"
      data-oid="waitlist-section"
    >
      {/* Card Container - Same structure as Hero and HowItWorks2 */}
      <div
        className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl"
        data-oid="waitlist-container"
      >
        {/* Background with gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#6dbb00]/20 via-white to-[#6dbb00]/10" />
        
        {/* Content positioned over background */}
        <div className="relative z-10 h-full flex items-center">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-6 sm:py-8 lg:py-16">
            
            {/* Grid layout like Hero page */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 xl:gap-20 items-center h-full">
              
              {/* Left column - Waitlist content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6 lg:space-y-8"
              >
                {/* Title and subtitle */}
                <div className="space-y-4 lg:space-y-6">
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tight text-[#0d0d0d]">
                    {currentContent.title}
                  </h1>
                  
                  <h2 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold text-[#6dbb00]">
                    {currentContent.subtitle}
                  </h2>
                  
                  <p className="text-sm sm:text-base md:text-lg lg:text-xl text-[#0d0d0d]/70 leading-relaxed max-w-2xl">
                    {currentContent.description}
                  </p>
                </div>

                {/* Benefits list */}
                <div className="grid grid-cols-2 gap-3 max-w-md">
                  {currentContent.benefits.map((benefit, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                      className="flex items-center gap-2"
                    >
                      <div className="w-2 h-2 bg-[#6dbb00] rounded-full" />
                      <span className="text-sm md:text-base text-[#0d0d0d]/80 font-medium">
                        {benefit}
                      </span>
                    </motion.div>
                  ))}
                </div>

                {/* Email signup form */}
                <motion.form
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  onSubmit={handleSubmit}
                  className="flex flex-col sm:flex-row gap-3 max-w-md"
                >
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder={currentContent.emailPlaceholder}
                    required
                    className="flex-1 px-4 py-3 lg:py-4 rounded-xl border border-gray-200 focus:border-[#6dbb00] focus:ring-2 focus:ring-[#6dbb00]/20 outline-none transition-all text-[#0d0d0d] text-sm lg:text-base"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={isSubmitted}
                    className="px-6 py-3 lg:py-4 bg-[#6dbb00] text-[#0d0d0d] font-semibold rounded-xl hover:bg-[#5da600] transition-all shadow-lg hover:shadow-xl text-sm lg:text-base disabled:opacity-50"
                  >
                    {isSubmitted ? currentContent.successMessage : currentContent.joinButton}
                  </motion.button>
                </motion.form>
              </motion.div>

              {/* Right column - Phone mockup inspired by AI Sales and Yeeld */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex justify-center lg:justify-end"
              >
                <div className="relative">
                  {/* Phone container - inspired by AI Sales dimensions */}
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
                        <div className="pt-12 h-full bg-gradient-to-b from-[#6dbb00]/10 to-white">
                          
                          {/* App header */}
                          <div className="px-6 py-4 border-b border-gray-100">
                            <h3 className="text-2xl font-bold text-[#0d0d0d]">KOTI</h3>
                            <p className="text-sm text-[#0d0d0d]/60">Your Credit, Your Power</p>
                          </div>

                          {/* Credit score display */}
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
                                <circle
                                  cx="50"
                                  cy="50"
                                  r="45"
                                  fill="none"
                                  stroke="#6dbb00"
                                  strokeWidth="6"
                                  strokeDasharray={`${(765/850) * 283} 283`}
                                  className="transition-all duration-1000"
                                />
                              </svg>
                              <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-center">
                                  <div className="text-3xl font-bold text-[#6dbb00]">765</div>
                                  <div className="text-xs text-[#0d0d0d]/60">Excellent</div>
                                </div>
                              </div>
                            </div>
                          </div>

                          {/* Quick features */}
                          <div className="px-6 space-y-3">
                            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#6dbb00] rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">💳</span>
                                </div>
                                <span className="text-sm font-medium">Credit Cards</span>
                              </div>
                              <span className="text-xs text-[#6dbb00] font-semibold">+24 pts</span>
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#6dbb00] rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">🏦</span>
                                </div>
                                <span className="text-sm font-medium">Banking</span>
                              </div>
                              <span className="text-xs text-[#6dbb00] font-semibold">+18 pts</span>
                            </div>
                            
                            <div className="flex items-center justify-between p-3 bg-white rounded-xl shadow-sm">
                              <div className="flex items-center gap-3">
                                <div className="w-8 h-8 bg-[#6dbb00] rounded-lg flex items-center justify-center">
                                  <span className="text-white text-sm">📱</span>
                                </div>
                                <span className="text-sm font-medium">Mobile Payment</span>
                              </div>
                              <span className="text-xs text-[#6dbb00] font-semibold">+9 pts</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    
                    {/* Glow effect behind phone - similar to AI Sales hero-img-bg */}
                    <div className="absolute -inset-8 bg-gradient-to-r from-[#6dbb00]/20 to-[#6dbb00]/40 rounded-full blur-3xl -z-10 opacity-60" />
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

export default WaitlistContent; 