"use client";

import { motion } from "framer-motion";

const logos = [
  "LUMINA",
  "NOVA",
  "VERTEX",
  "AURORA",
  "NEXUS",
  "ORBIT",
];

function Trusted() {
  return (
    <section className="overflow-hidden border-y border-gray-100 bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">
        <p className="mb-10 text-center text-sm text-[#6B7280]">
          Selected brands
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex min-w-max gap-16"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className="text-2xl font-semibold tracking-widest text-gray-300"
              >
                {logo}
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default Trusted;