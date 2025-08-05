"use client";
import { useState } from "react";
import Header from "@/components/Header";
import AboutUsContent from "@/components/AboutUsContent";
import Footer from "@/components/Footer";

type Language = "bn" | "en";

export default function AboutPageClient() {
  const [lang, setLang] = useState<Language>("en");

  return (
    <main className="flex min-h-screen flex-col bg-[#fdfdfd]">
      <Header lang={lang} setLang={setLang} />
      <AboutUsContent lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}