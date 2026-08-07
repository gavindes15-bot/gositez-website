"use client";

import { motion } from "framer-motion";

const stats = [
  {
    number: "20+",
    label: "Websites Built",
  },
  {
    number: "7",
    label: "Day Turnaround",
  },
  {
    number: "100%",
    label: "Happy Clients",
  },
];

function Results() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Our Results
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Want to see what we can create?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B7280]">
            We combine creative design, technology, and strategy to help
            businesses build a stronger digital presence.
          </p>
        </motion.div>


        {/* Stats */}
        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm transition hover:shadow-xl"
            >
              <h3 className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-5xl font-semibold text-transparent">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg text-[#6B7280]">
                {stat.label}
              </p>
            </motion.div>
          ))}

        </div>


        {/* Portfolio Button */}
        <div className="mt-16 flex justify-center">
          <a
            href="/portfolio"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105"
          >
            View Our Portfolio
          </a>
        </div>

      </div>
    </section>
  );
}

export default Results;