"use client";

import Link from "next/link";

const services = [
  {
    emoji: "🌐",
    title: "Web Development",
    description:
      "Premium websites built with modern design, fast performance, and experiences that help businesses grow.",
    link: "/services/web-development",
  },
  {
    emoji: "🤖",
    title: "AI & DM Automation",
    description:
      "Smart automation systems that help businesses capture leads, reply faster, and save valuable time.",
    link: "/services/dm-automation",
  },
  {
    emoji: "🎨",
    title: "Branding",
    description:
      "Complete brand identities including logos, visuals, and digital assets that make businesses stand out.",
    link: "/services/branding",
  },
];

export default function ServicesPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-32">

      {/* Floating gradient blobs */}
      <div className="absolute left-1/2 top-20 -z-0 h-72 w-72 -translate-x-1/2 rounded-full bg-[#5170FF]/20 blur-3xl" />

      <div className="absolute right-10 top-40 -z-0 h-64 w-64 rounded-full bg-[#FF66C4]/20 blur-3xl" />


      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Heading */}
        <div className="mx-auto max-w-4xl text-center">

          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            What We Offer
          </p>


          <h1 className="text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Our{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              Services
            </span>
          </h1>


          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Explore the digital solutions we create to help businesses grow,
            connect with customers, and stand out online.
          </p>

        </div>


        {/* Service Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">

          {services.map((service) => (
            <div
              key={service.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
            >

              <div className="text-5xl">
                {service.emoji}
              </div>


              <h2 className="mt-6 text-2xl font-semibold text-[#111111]">
                {service.title}
              </h2>


              <p className="mt-4 leading-relaxed text-[#6B7280]">
                {service.description}
              </p>


              <Link
                href={service.link}
                className="mt-8 inline-block rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-3 font-medium text-white transition hover:scale-105"
              >
                Learn More
              </Link>

            </div>
          ))}

        </div>

      </div>

    </main>
  );
}