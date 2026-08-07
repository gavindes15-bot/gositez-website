"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/70 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">

        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[#111111]"
        >
          Gositez
        </Link>


        {/* Navigation */}
        <div className="hidden items-center gap-8 md:flex">

          <Link
            href="/"
            className="text-sm text-[#6B7280] transition hover:text-[#111111]"
          >
            Home
          </Link>


          <Link
            href="/services"
            className="text-sm text-[#6B7280] transition hover:text-[#111111]"
          >
            Services
          </Link>


          <Link
            href="/portfolio"
            className="text-sm text-[#6B7280] transition hover:text-[#111111]"
          >
            Portfolio
          </Link>


          <Link
            href="/about"
            className="text-sm text-[#6B7280] transition hover:text-[#111111]"
          >
            About
          </Link>


          <Link
            href="/contact"
            className="text-sm text-[#6B7280] transition hover:text-[#111111]"
          >
            Contact
          </Link>

        </div>


        {/* CTA Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-3 text-sm font-medium text-white shadow-lg"
          >
            Start a Project
          </Link>
        </motion.div>

      </div>
    </nav>
  );
}