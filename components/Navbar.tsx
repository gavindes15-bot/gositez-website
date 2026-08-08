"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav
      className={`fixed left-0 right-0 top-0 z-50 transition-all duration-300 ${
        scrolled || menuOpen
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link
          href="/"
          className="text-2xl font-semibold tracking-tight text-[#111111]"
          onClick={closeMenu}
        >
          Gositez
        </Link>

        {/* Desktop Navigation */}
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

        {/* Desktop CTA */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
          className="hidden md:block"
        >
          <Link
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-3 text-sm font-medium text-white shadow-lg"
          >
            Start a Project
          </Link>
        </motion.div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="relative z-50 flex h-10 w-10 items-center justify-center rounded-xl text-[#111111] md:hidden"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="border-t border-gray-100 bg-white px-6 py-6 md:hidden">
          <div className="flex flex-col gap-5">
            <Link
              href="/"
              onClick={closeMenu}
              className="text-base font-medium text-[#111111]"
            >
              Home
            </Link>

            <Link
              href="/services"
              onClick={closeMenu}
              className="text-base font-medium text-[#111111]"
            >
              Services
            </Link>

            <Link
              href="/portfolio"
              onClick={closeMenu}
              className="text-base font-medium text-[#111111]"
            >
              Portfolio
            </Link>

            <Link
              href="/about"
              onClick={closeMenu}
              className="text-base font-medium text-[#111111]"
            >
              About
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="text-base font-medium text-[#111111]"
            >
              Contact
            </Link>

            <Link
              href="/contact"
              onClick={closeMenu}
              className="mt-2 w-full rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-3 text-center text-sm font-medium text-white shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}