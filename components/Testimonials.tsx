"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote:
      "Owner of GoSitez",
    name: "Gavin De Silva",
    role: "Business Owner",
  },
  {
    quote:
      "The design quality and attention to detail exceeded our expectations.",
    name: "Stephen De Silva",
    role: "Janiter",
  },
  {
    quote:
      "A smooth process from start to finish. The final result looked amazing.",
    name: "Client Name",
    role: "Entrepreneur",
  },
];

function Testimonials() {
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
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Loved by businesses building their future online.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            See what our clients say about working with Gositez.
          </p>
        </motion.div>


        <div className="mt-16 grid gap-6 md:grid-cols-3">

          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name + index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:shadow-xl"
            >

              <p className="text-lg leading-relaxed text-[#111111]">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4">

                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] font-semibold text-white">
                  G
                </div>

                <div>
                  <h3 className="font-semibold text-[#111111]">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-[#6B7280]">
                    {testimonial.role}
                  </p>
                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Testimonials;