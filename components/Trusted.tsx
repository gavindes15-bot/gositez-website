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
    <section className="py-16">
      <div className="mx-auto max-w-6xl">
        <p className="mb-10 text-center text-sm font-medium uppercase tracking-widest text-gray-400">
          Featured brands
        </p>

        <div className="relative flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
            className="flex min-w-max items-center gap-20"
          >
            {[...logos, ...logos].map((logo, index) => (
              <div
                key={index}
                className={`
                  whitespace-nowrap text-gray-300
                  ${
                    logo === "LUMINA"
                      ? "text-2xl font-semibold tracking-[0.22em]"
                      : logo === "NOVA"
                      ? "text-3xl font-bold tracking-tight"
                      : logo === "VERTEX"
                      ? "text-2xl font-medium tracking-[0.12em]"
                      : logo === "AURORA"
                      ? "text-2xl font-semibold tracking-[0.18em]"
                      : logo === "NEXUS"
                      ? "text-2xl font-bold tracking-[0.08em]"
                      : "text-2xl font-medium tracking-[0.25em]"
                  }
                `}
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