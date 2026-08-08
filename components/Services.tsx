"use client";

import { Globe, Bot, RefreshCcw } from "lucide-react";

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
];

function Services() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
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
        </div>

        {/* Services */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
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
              </div>
            );
          })}
        </div>

        {/* Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/services"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
}

export default Services;