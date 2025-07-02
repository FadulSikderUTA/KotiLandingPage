import type { Metadata } from "next";
import "./globals.css";
export const metadata: Metadata = {
  title: "Koti",
  description: "Landing page for Koti",
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
