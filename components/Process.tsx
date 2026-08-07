"use client";

import { motion } from "framer-motion";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, and what you need to achieve online.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a premium design direction focused on your brand, users, and conversions.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your website using modern technology with speed, performance, and responsiveness in mind.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "We launch your website and help you improve your digital presence as your business grows.",
  },
];

function Process() {
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
            Our Process
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Simple process. Exceptional results.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            From the first conversation to launch day, we make building your
            digital presence simple and seamless.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-lg font-semibold text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold text-[#111111]">
                  {step.title}
                </h3>
              </div>

              <p className="leading-relaxed text-[#6B7280]">
                {step.description}
              </p>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Process;