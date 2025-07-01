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
      data-oid="91::8q-"
    >
      {/* Company Info Section */}
      <div
        className="flex h-full w-[250px] flex-col place-items-center gap-6 max-md:w-full"
        data-oid="ft8odv6"
      >
        <Link
          href={lang === "bn" ? "/" : "/en"}
          className="text-3xl font-bold text-gray-800"
          data-oid="wjd3n_."
        >
          Koti
        </Link>
        <div className="text-center text-gray-600" data-oid="58e432y">
          {lang === "bn" ? (
            <>
              ঢাকা, বাংলাদেশ
              <br data-oid="h14ud8l" />
              ক্রেডিট স্কোরিং ব্যুরো
              <br data-oid="5aopu:7" />
              আপনার আর্থিক ভবিষ্যৎ
            </>
          ) : (
            <>
              Dhaka, Bangladesh
              <br data-oid="tq9_1sa" />
              Credit Scoring Bureau
              <br data-oid="qmqdzc0" />
              Your Financial Future
            </>
          )}
        </div>
        <div
          className="mt-3 text-lg font-semibold text-gray-800"
          data-oid="tlwn52w"
        >
          {lang === "bn" ? "আমাদের ফলো করুন" : "Follow us"}
        </div>
        <div className="flex gap-4 text-2xl" data-oid="u1p2xzh">
          <a
            href="#"
            aria-label="Facebook"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="qluo9ss"
          >
            <i className="bi bi-facebook" data-oid="y3wk3r.">
              📘
            </i>
          </a>
          <a
            href="#"
            aria-label="Twitter"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="hsp-mcl"
          >
            <i className="bi bi-twitter" data-oid="s2-p5kt">
              🐦
            </i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            aria-label="Instagram"
            data-oid="u_6k05x"
          >
            <i className="bi bi-instagram" data-oid="vkebv.5">
              📷
            </i>
          </a>
          <a
            href="#"
            className="text-gray-600 hover:text-green-600 transition-colors duration-300"
            aria-label="LinkedIn"
            data-oid="ubmr9nk"
          >
            <i className="bi bi-linkedin" data-oid="wq:l9z.">
              💼
            </i>
          </a>
        </div>
      </div>

      {/* Services Section */}
      <div
        className="flex h-full w-[250px] flex-col gap-4 max-md:w-full"
        data-oid="0gk38p8"
      >
        <h2
          className="text-3xl max-md:text-xl font-semibold text-gray-800"
          data-oid="0dtld3v"
        >
          {lang === "bn" ? "সেবাসমূহ" : "Services"}
        </h2>
        <div className="flex flex-col gap-3 max-md:text-sm" data-oid="7vr8_1:">
          <Link
            href={lang === "bn" ? "/credit" : "/en/credit"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="o38s976"
          >
            {lang === "bn" ? "ক্রেডিট স্কোর চেক" : "Credit Score Check"}
          </Link>
          <Link
            href={lang === "bn" ? "/finance" : "/en/finance"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="b_84bs9"
          >
            {lang === "bn" ? "ব্যক্তিগত ফিন্যান্স" : "Personal Finance"}
          </Link>
          <Link
            href={lang === "bn" ? "/business" : "/en/business"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="e.phv-9"
          >
            {lang === "bn" ? "ব্যবসায়িক সমাধান" : "Business Solutions"}
          </Link>
          <Link
            href={lang === "bn" ? "/security" : "/en/security"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="yev4tzp"
          >
            {lang === "bn" ? "নিরাপত্তা ও বিশ্বাস" : "Security & Trust"}
          </Link>
        </div>
      </div>

      {/* Resources Section */}
      <div
        className="flex h-full w-[250px] flex-col gap-4 max-md:w-full"
        data-oid="h:hhk13"
      >
        <h2
          className="text-3xl max-md:text-xl font-semibold text-gray-800"
          data-oid="qld3l:4"
        >
          {lang === "bn" ? "সহায়তা" : "Resources"}
        </h2>
        <div className="flex flex-col gap-3 max-md:text-sm" data-oid="kz_mola">
          <Link
            href={lang === "bn" ? "/learn" : "/en/learn"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid=".s2hcoz"
          >
            {lang === "bn" ? "আর্থিক শিক্ষা" : "Financial Education"}
          </Link>
          <Link
            href={lang === "bn" ? "/support" : "/en/support"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="mu9z24_"
          >
            {lang === "bn" ? "সাহায্য কেন্দ্র" : "Help Center"}
          </Link>
          <Link
            href={lang === "bn" ? "/support" : "/en/support"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="a6a82wd"
          >
            {lang === "bn" ? "যোগাযোগ" : "Contact Us"}
          </Link>
          <Link
            href={lang === "bn" ? "/privacy" : "/en/privacy"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="jsvtsbl"
          >
            {lang === "bn" ? "গোপনীয়তা নীতি" : "Privacy Policy"}
          </Link>
          <Link
            href={lang === "bn" ? "/terms" : "/en/terms"}
            className="footer-link text-gray-600 hover:text-green-600 transition-colors duration-300"
            data-oid="7d4198d"
          >
            {lang === "bn" ? "সেবার শর্তাবলী" : "Terms of Service"}
          </Link>
        </div>
      </div>

      <style jsx data-oid="dxot14p">{`
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
