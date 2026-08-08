"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#F8F8F8] py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-4"
        >
          {/* Brand */}
          <div className="md:col-span-2">
            <Link
              href="/"
              className="text-3xl font-semibold tracking-tight text-[#111111]"
            >
              GOSITEZ
            </Link>

            <p className="mt-4 max-w-sm text-[#6B7280]">
              Premium websites, AI automation, and digital experiences built
              to help modern businesses grow online.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-semibold text-[#111111]">Navigation</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  Services
                </Link>
              </li>

              <li>
                <Link
                  href="/portfolio"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  Portfolio
                </Link>
              </li>

              <li>
                <Link
                  href="/about"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  href="/contact"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-[#111111]">Services</h3>

            <ul className="mt-4 space-y-3">
              <li>
                <Link
                  href="/services"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  Website Design
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  AI & DM Automation
                </Link>
              </li>

              <li>
                <Link
                  href="/services"
                  className="text-[#6B7280] transition hover:text-[#111111]"
                >
                  Website Redesign
                </Link>
              </li>
            </ul>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-12 flex flex-col justify-between gap-4 border-t border-gray-200 pt-8 text-sm text-[#6B7280] sm:flex-row">
          <p>© {new Date().getFullYear()} Gositez. All rights reserved.</p>

          <div className="flex gap-6">
            <a
              href="https://www.instagram.com/gositez/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition hover:text-[#111111]"
            >
              Instagram
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;