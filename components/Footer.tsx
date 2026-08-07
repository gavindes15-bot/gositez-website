"use client";

import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-gray-100 bg-white px-6 py-16">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid gap-12 md:grid-cols-4"
        >

          <div className="md:col-span-2">
            <h2 className="text-3xl font-semibold tracking-tight text-[#111111]">
              GOSITEZ
            </h2>

            <p className="mt-4 max-w-sm text-[#6B7280]">
              Premium websites, AI automation, and digital experiences built
              to help modern businesses grow online.
            </p>
          </div>


          <div>
            <h3 className="font-semibold text-[#111111]">
              Navigation
            </h3>

            <ul className="mt-4 space-y-3 text-[#6B7280]">
              <li>Home</li>
              <li>Services</li>
              <li>Portfolio</li>
              <li>Contact</li>
            </ul>
          </div>


          <div>
            <h3 className="font-semibold text-[#111111]">
              Services
            </h3>

            <ul className="mt-4 space-y-3 text-[#6B7280]">
              <li>Website Design</li>
              <li>AI Automation</li>
              <li>Branding</li>
              <li>Digital Solutions</li>
            </ul>
          </div>

        </motion.div>


        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-gray-100 pt-8 text-sm text-[#6B7280] sm:flex-row">

          <p>
            © {new Date().getFullYear()} Gositez. All rights reserved.
          </p>

          <div className="flex gap-6">
            <a href="#">
              Instagram
            </a>

            <a href="#">
              LinkedIn
            </a>
          </div>

        </div>

      </div>
    </footer>
  );
};

export default Footer;