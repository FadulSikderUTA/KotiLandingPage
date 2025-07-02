import type { Metadata } from "next";
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
      <body className="antialiased" data-oid="l4_qovo">
        {children}
      </body>
    </html>
  );
}
