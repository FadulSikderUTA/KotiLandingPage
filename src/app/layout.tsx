import type { Metadata } from "next";
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/next';
import { organizationSchema, websiteSchema } from '@/lib/schema';
import "./globals.css";

export const metadata: Metadata = {
  title: "Koti Credit Bureau | Your Trusted Credit Score Partner",
  description: "Koti Credit Bureau provides reliable credit score services for businesses and individuals in Bangladesh. Check your Koti score and build your financial future.",
  robots: {
    index: true,
    follow: true,
  },
};
export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" data-oid=".r2r-f6">
      <head>
        <meta name="viewport" content="width=1024, initial-scale=1, user-scalable=yes" />
        
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(websiteSchema),
          }}
        />
        
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#5daa80" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="antialiased" data-oid="l4_qovo">
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
