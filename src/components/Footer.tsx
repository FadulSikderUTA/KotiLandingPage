"use client";
import React from "react";
import Link from "next/link";

interface FooterProps {
  lang?: "bn" | "en";
}

const Footer = ({ lang = "bn" }: FooterProps) => {
  return (
    <footer
      className="mt-auto flex w-full place-content-around gap-3 p-[5%] px-[10%] text-black max-md:flex-col bg-gray-50"
      data-oid="zo1q6hd"
    >
      {/* Company Info Section */}
      <div
        className="flex h-full w-[250px] flex-col place-items-center gap-6 max-md:w-full"
        data-oid="e9wq6wo"
      >
        <Link
          href={lang === "bn" ? "/" : "/en"}
          className="text-3xl font-bold text-gray-800"
          data-oid="r6_:u32"
        >
          Koti
        </Link>
        <div className="text-center text-gray-600" data-oid="3m3r4o2">
          {lang === "bn" ? (
            <>
              ঢাকা, বাংলাদেশ
              <br data-oid="yt6vi4h" />
              ক্রেডিট স্কোরিং ব্যুরো
              <br data-oid="rni3t32" />
              আপনার আর্থিক ভবিষ্যৎ
            </>
          ) : (
            <>
              Dhaka, Bangladesh
              <br data-oid="aai05-6" />
              Credit Scoring Bureau
              <br data-oid="751zq2k" />
              Your Financial Future
            </>
          )}
        </div>
        <div
          className="mt-3 text-lg font-semibold text-gray-800"
          data-oid="-.0.uu0"
        >
          {lang === "bn" ? "আমাদের ফলো করুন" : "Follow us"}
        </div>
        <div className="flex gap-4 text-2xl" data-oid="tisdsf7">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="7skv-7n"
          >
            <i className="bi bi-facebook" data-oid="56zr-bg">
              📘
            </i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="7749e_w"
          >
            <i className="bi bi-twitter" data-oid="no-26os">
              🐦
            </i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            aria-label="Instagram"
            data-oid="614x25u"
          >
            <i className="bi bi-instagram" data-oid="-..4.rv">
              📷
            </i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            aria-label="LinkedIn"
            data-oid="w8:ajwk"
          >
            <i className="bi bi-linkedin" data-oid="yoo_bqh">
              💼
            </i>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="flex h-full w-[250px] flex-col gap-4 max-md:w-full"
        data-oid="uz1dtgx"
      >
        <h2
          className="text-3xl max-md:text-xl font-semibold text-gray-800"
          data-oid="a36.ep."
        >
          {lang === "bn" ? "সেবাসমূহ" : "Services"}
        </h2>
        <div className="flex flex-col gap-3 max-md:text-sm" data-oid="sz5om0j">
          <Link
            href={lang === "bn" ? "/credit" : "/en/credit"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="3zgblww"
          >
            {lang === "bn" ? "ক্রেডিট স্কোর চেক" : "Credit Score Check"}
          </Link>
          <Link
            href={lang === "bn" ? "/finance" : "/en/finance"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="b66xfxy"
          >
            {lang === "bn" ? "ব্যক্তিগত ফিন্যান্স" : "Personal Finance"}
          </Link>
          <Link
            href={lang === "bn" ? "/business" : "/en/business"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="-lsm.e3"
          >
            {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solutions"}
          </Link>
          <Link
            href={lang === "bn" ? "/security" : "/en/security"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="qt0ctcg"
          >
            {lang === "bn" ? "নিরাপত্তা ও বিশ্বাস" : "Security & Trust"}
          </Link>
        </div>
      </div>

      {/* Resources Section */}
      <div
        className="flex h-full w-[250px] flex-col gap-4 max-md:w-full"
        data-oid="ytws868"
      >
        <h2
          className="text-3xl max-md:text-xl font-semibold text-gray-800"
          data-oid="twt8422"
        >
          {lang === "bn" ? "সহায়তা" : "Resources"}
        </h2>
        <div className="flex flex-col gap-3 max-md:text-sm" data-oid="f_y28m3">
          <Link
            href={lang === "bn" ? "/learn" : "/en/learn"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="-wacnhe"
          >
            {lang === "bn" ? "আর্থিক শিক্ষা" : "Financial Education"}
          </Link>
          <Link
            href={lang === "bn" ? "/support" : "/en/support"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="78l:ec2"
          >
            {lang === "bn" ? "সাহায্য কেন্দ্র" : "Help Center"}
          </Link>
          <Link
            href={lang === "bn" ? "/support" : "/en/support"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="nt38mtf"
          >
            {lang === "bn" ? "যোগাযোগ" : "Contact Us"}
          </Link>
          <Link
            href={lang === "bn" ? "/privacy" : "/en/privacy"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="qcsipgw"
          >
            {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
          </Link>
          <Link
            href={lang === "bn" ? "/terms" : "/en/terms"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="tvy43ob"
          >
            {lang === "bn" ? "সেবার শর্তাবলী" : "Terms of Service"}
          </Link>
        </div>
      </div>

      <style jsx data-oid="hpgpuia">{`
        .footer-link {
          color: #4b5563;
          transition: color 0.3s;
        }

        .footer-link:hover {
          color: #16a34a;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
