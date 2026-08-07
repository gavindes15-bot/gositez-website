"use client";

import { motion } from "framer-motion";
import {
  Globe,
  Bot,
  RefreshCcw,
  LayoutTemplate,
  Palette,
  Search,
} from "lucide-react";

const services = [
  {
    title: "Website Design",
    description:
      "Beautiful, high-performance websites designed to impress visitors and convert them into customers.",
    icon: Globe,
  },
  {
    title: "AI & DM Automation",
    description:
      "Automate customer conversations, capture leads, and streamline business workflows with intelligent AI-powered systems.",
    icon: Bot,
  },
  {
    title: "Website Redesign",
    description:
      "Transform outdated websites into modern digital experiences that match your brand.",
    icon: RefreshCcw,
  },
  {
    title: "Landing Pages",
    description:
      "High-converting landing pages designed for campaigns, launches, and growth.",
    icon: LayoutTemplate,
  },
  {
    title: "Branding",
    description:
      "Create a consistent visual identity with logos, colors, and brand systems.",
    icon: Palette,
  },
  {
    title: "SEO Optimization",
    description:
      "Improve your online visibility with optimized websites built for search engines.",
    icon: Search,
  },
];

function Services() {
  return (
    <section id="services" className="bg-white px-6 py-32">
      <div className="mx-auto max-w-7xl">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-3xl"
        >
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Services
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Everything you need to build a powerful online presence.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            From websites to AI-powered systems, we create digital solutions
            that help modern businesses grow.
          </p>
        </motion.div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={service.title}
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
                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-white shadow-lg">
                  <Icon size={24} />
                </div>

                <h3 className="text-xl font-semibold text-[#111111]">
                  {service.title}
                </h3>

                <p className="mt-4 leading-relaxed text-[#6B7280]">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="/services"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105"
          >
            View All Services
          </a>
        </div>

      </div>
    </section>
  );
}

export default Services;