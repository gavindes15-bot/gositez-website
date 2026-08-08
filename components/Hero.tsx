"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-white px-6 pb-24 pt-32">
      
      {/* Floating gradient blobs */}
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5170FF]/20 blur-3xl" />
      <div className="absolute right-10 top-40 -z-0 h-64 w-64 rounded-full bg-[#FF66C4]/20 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        
        {/* Small badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-8 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm"
        >
          Premium Web Design Agency
        </motion.div>

        {/* Main headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl"
        >
          Designed for growth.{" "}
          <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
            Built to perform.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]"
        >
          Gositez creates premium websites, Shopify stores, and digital
          experiences designed to help modern businesses grow online.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <a
            href="/contact"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 text-center font-medium text-white shadow-lg transition hover:scale-105"
          >
            Start a Project
          </a>

          <a
            href="/portfolio"
            className="rounded-full border border-gray-200 px-8 py-4 text-center font-medium text-[#111111] transition hover:bg-gray-50"
          >
            View Work
          </a>
        </motion.div>

      </div>
    </section>
  );
}