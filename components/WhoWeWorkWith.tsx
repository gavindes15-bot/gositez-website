"use client";

import { motion } from "framer-motion";

const audiences = [
  {
    emoji: "🛍️",
    title: "E-Commerce Brands",
    description:
      "Helping online stores create premium shopping experiences that build trust and increase sales.",
  },
  {
    emoji: "🎥",
    title: "Content Creators",
    description:
      "Building professional websites and digital platforms that help creators grow their personal brand.",
  },
  {
    emoji: "🚀",
    title: "Startups",
    description:
      "Creating scalable digital experiences that help new businesses launch and stand out.",
  },
  {
    emoji: "🏢",
    title: "Small Businesses",
    description:
      "Helping local businesses improve their online presence with modern websites and automation.",
  },
];

function WhoWeWorkWith() {
  return (
    <section className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Who We Work With
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Helping ambitious businesses grow online.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            From growing startups to established brands, we create digital
            experiences built around your goals.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >
              <div className="mb-6 text-4xl">
                {item.emoji}
              </div>

              <h3 className="text-xl font-semibold text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#6B7280]">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default WhoWeWorkWith;