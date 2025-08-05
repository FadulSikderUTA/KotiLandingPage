import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us - Koti Credit Bureau | Meet Our Expert Team",
  description: "Meet the experienced team behind Bangladesh's first AI-powered credit scoring platform. Learn about our founders, directors, and mission to improve financial inclusion.",
  keywords: [
    "Koti Credit Bureau team",
    "credit scoring Bangladesh",
    "financial technology founders",
    "Bangladesh fintech leaders",
    "credit bureau about us",
    "financial inclusion Bangladesh"
  ],
  authors: [
    { name: "Barrister Md Anisuzz Aman", url: "https://www.kotibd.com/about" },
    { name: "Fadul Sikder", url: "https://www.kotibd.com/about" }
  ],
  creator: "Koti Credit Bureau",
  publisher: "Koti Credit Bureau",
  openGraph: {
    title: "About Us - Koti Credit Bureau | Meet Our Expert Team",
    description: "Meet the experienced team behind Bangladesh's first AI-powered credit scoring platform. Learn about our founders, directors, and mission to improve financial inclusion.",
    url: "https://www.kotibd.com/about",
    siteName: "Koti Credit Bureau",
    images: [
      {
        url: "https://www.kotibd.com/og-about.jpg",
        width: 1200,
        height: 630,
        alt: "Koti Credit Bureau Team"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Koti Credit Bureau | Meet Our Expert Team",
    description: "Meet the experienced team behind Bangladesh's first AI-powered credit scoring platform.",
    images: ["https://www.kotibd.com/og-about.jpg"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1
    }
  },
  alternates: {
    canonical: "https://www.kotibd.com/about",
    languages: {
      "en-US": "https://www.kotibd.com/about",
      "bn-BD": "https://www.kotibd.com/about"
    }
  }
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}