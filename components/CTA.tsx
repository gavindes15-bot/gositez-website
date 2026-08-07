"use client";

import { motion } from "framer-motion";

const CTA = () => {
  return (
    <section className="px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-20 text-center sm:px-16"
        >

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-white/20 blur-3xl" />

          <div className="relative z-10 mx-auto max-w-3xl">

            <p className="mb-4 text-sm font-medium text-white/80">
              Get Started
            </p>

            <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-6xl">
              Get Your Free Quote
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/90">
              Tell us about your project, and we'll help you create a website
              that looks amazing, performs smoothly, and helps your business
              grow. Let's build your site.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">

              <a
                href="/contact"
                className="rounded-full bg-white px-8 py-4 font-medium text-[#111111] shadow-lg transition hover:scale-105"
              >
                Get Your Free Quote
              </a>

              <a
                href="/contact"
                className="rounded-full border border-white/40 px-8 py-4 font-medium text-white transition hover:bg-white/10"
              >
                Contact Us
              </a>

            </div>

          </div>

        </motion.div>

      </div>
    </section>
  );
};

export default CTA;