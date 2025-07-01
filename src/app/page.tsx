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
      data-oid="rxxkb:v"
    >
      <Header lang={lang} setLang={setLang} data-oid="8tfyf94" />

      {/* Card Stacking Container - Controls the sticky behavior */}
      <div className="relative" data-oid="3ti-urv">
        {/* Phase 1: Hero Section - Sticky only within this container */}
        <div className="sticky top-0 h-screen z-10" data-oid="_584y5j">
          <Hero lang={lang} data-oid="6ya:tj7" />
        </div>

        {/* Phase 2: How It Works Section - Slides over Hero and becomes sticky */}
        <div className="sticky top-0 h-screen z-20" data-oid="kruvb0r">
          <section
            className="relative min-h-screen w-full flex items-center justify-center px-3 py-3 bg-[#fdfdfd] z-20"
            data-oid="ffuegc-"
          >
            {/* Card Container - Immediately stacks on top of Hero */}
            <motion.div
              className="relative w-[96vw] h-[94vh] rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-2xl bg-white"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              data-oid="ww193b7"
            >
              {/* Card Content */}
              <div
                className="relative z-10 h-full flex flex-col items-center py-4 px-4 sm:px-6 lg:px-8 overflow-hidden"
                data-oid="-7yulde"
              >
                {/* Main Heading - Yeeld Style */}
                <div className="text-center mb-8" data-oid="4qc-jic">
                  <motion.h1
                    className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0d0d0d] tracking-tight mb-3"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    data-oid="uttuvwn"
                  >
                    {lang === "bn" ? "আবিষ্কার করুন কোটি" : "DISCOVER KOTI"}
                  </motion.h1>
                  <motion.p
                    className="text-sm md:text-base text-[#0d0d0d]/70 max-w-2xl mx-auto leading-relaxed"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    data-oid="mhd1_4c"
                  >
                    {lang === "bn"
                      ? "আপনার আর্থিক যাত্রায় স্মার্ট ক্রেডিট স্কোরিং এর শক্তি আবিষ্কার করুন। প্রতিদিনের কাজে স্কোর গড়ুন, অসংখ্য সুবিধা পান।"
                      : "Discover the power of smart credit scoring in your financial journey. Build your score through everyday actions, unlock countless opportunities."}
                  </motion.p>
                </div>

                {/* Modern Process Flow */}
                <motion.div
                  className="mb-8 w-full max-w-4xl"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                  data-oid="i.ncwij"
                >
                  <div className="relative" data-oid="o2iceta">
                    {/* Background gradient line */}
                    <div
                      className="absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#6dbb00]/30 to-transparent transform -translate-y-1/2"
                      data-oid="2w8d1p:"
                    ></div>

                    <div
                      className="flex items-center justify-between relative"
                      data-oid="lnziol_"
                    >
                      {/* Build Score Card */}
                      <div
                        className="bg-white rounded-2xl p-4 shadow-lg border border-[#0d0d0d]/5 backdrop-blur-sm relative z-10 flex-1 max-w-xs mx-2"
                        data-oid=".m-e9n."
                      >
                        <div className="text-center" data-oid="awnjwvx">
                          <div
                            className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center shadow-md"
                            data-oid="d.4hid9"
                          >
                            <CreditScoreGaugeIcon
                              score={765}
                              size={32}
                              data-oid="1p70_zh"
                            />
                          </div>
                          <h3
                            className="text-lg font-bold text-[#0d0d0d] mb-2"
                            data-oid="5cldqul"
                          >
                            {data.buildCircle}
                          </h3>
                          <p
                            className="text-[#0d0d0d]/60 text-xs leading-relaxed"
                            data-oid="mjih7zn"
                          >
                            {lang === "bn"
                              ? "দৈনন্দিন আর্থিক কার্যক্রমের মাধ্যমে"
                              : "Through everyday financial activities"}
                          </p>
                        </div>
                      </div>

                      {/* Modern Morphing Arrow Flow */}
                      <div
                        className="flex-shrink-0 mx-4 relative z-20"
                        data-oid="7v9aija"
                      >
                        <MorphingArrow data-oid="xupzbd0" />
                      </div>

                      {/* Get Benefits Card */}
                      <div
                        className="bg-white rounded-2xl p-4 shadow-lg border border-[#0d0d0d]/5 backdrop-blur-sm relative z-10 flex-1 max-w-xs mx-2"
                        data-oid="q270-r-"
                      >
                        <div className="text-center" data-oid="-nbs-l5">
                          <div
                            className="w-12 h-12 mx-auto mb-3 rounded-xl bg-white flex items-center justify-center shadow-md"
                            data-oid="nwxe69r"
                          >
                            <BenefitsBurstIcon
                              size={32}
                              animated={true}
                              data-oid="40xiiun"
                            />
                          </div>
                          <h3
                            className="text-lg font-bold text-[#0d0d0d] mb-2"
                            data-oid="zajt.h3"
                          >
                            {data.benefitsCircle}
                          </h3>
                          <p
                            className="text-[#0d0d0d]/60 text-xs leading-relaxed"
                            data-oid="qxlplbr"
                          >
                            {lang === "bn"
                              ? "প্রতিষ্ঠানের কাছে বিশ্বস্ততা অর্জন করুন"
                              : "Gain trust with institutions"}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* carousels */}
                <div
                  className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 w-full max-w-6xl mx-auto"
                  data-oid="w.6olo."
                >
                  {/* build */}
                  <div
                    className="flex flex-col items-center justify-center"
                    data-oid="9j9e9q0"
                  >
                    <h2
                      className="text-center text-lg font-bold mb-4 w-full"
                      data-oid="_q1mt7_"
                    >
                      {data.buildTitle}
                    </h2>
                    <ThreeCardCarousel
                      cards={data.buildCards}
                      currentIndex={buildIndex}
                      onCardClick={setBuildIndex}
                      showPoints
                      data-oid="a2tu7sh"
                    />

                    <CarouselDots
                      items={data.buildCards}
                      currentIndex={buildIndex}
                      onDotClick={setBuildIndex}
                      data-oid="15sy:gr"
                    />
                  </div>
                  {/* benefits */}
                  <div
                    className="flex flex-col items-center justify-center"
                    data-oid="99lmf5l"
                  >
                    <h2
                      className="text-center text-lg font-bold mb-4 w-full"
                      data-oid="2.s_3mx"
                    >
                      {data.benefitsTitle}
                    </h2>
                    <ThreeCardCarousel
                      cards={data.benefitsCards}
                      currentIndex={benefitIndex}
                      onCardClick={setBenefitIndex}
                      data-oid="z6zfv3f"
                    />

                    <CarouselDots
                      items={data.benefitsCards}
                      currentIndex={benefitIndex}
                      onDotClick={setBenefitIndex}
                      data-oid="0sdnm7w"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </section>
        </div>

        {/* Phase 3: Business Solutions - Single sticky page with internal card stacking */}
        <div className="sticky top-0 h-screen z-30" data-oid="mkcr4fe">
          <BusinessSolutionsContent lang={lang} data-oid="emgj-b6" />
        </div>

        {/* Extra scroll space for card animations - reduced since animations end at 0.9 */}
        <div className="h-[120vh]" data-oid="lctt5gy"></div>
      </div>

      {/* Footer - Shows normally after stacking container */}
      <Footer lang={lang} data-oid="3.k40ic" />
    </main>
  );
}
