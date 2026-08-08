"use client";

import Link from "next/link";

const projects = [
  {
    slug: "aloia",
    title: "Aloia",
    category: "E-commerce",
    date: "2026",
    description:
      "A premium e-commerce website designed to showcase Aloia's premium products.",
    image: "/portfolio/aloia.jpg",
  },
  {
    slug: "project-two",
    title: "Project Two",
    category: "Branding",
    date: "2026",
    description:
      "A complete visual identity created to give the brand a consistent and premium look.",
    image: "/portfolio/project-2.jpg",
  },
  {
    slug: "project-three",
    title: "Project Three",
    category: "Web Development",
    date: "2026",
    description:
      "A clean and conversion-focused digital experience built around the business.",
    image: "/portfolio/project-3.jpg",
  },
];

export default function PortfolioPage() {
  return (
    <>
      {/* Background gradients */}

      <div className="absolute right-0 top-[500px] -z-0 h-60 w-60 rounded-full bg-[#FF66C4]/10 blur-3xl sm:top-[600px] sm:h-72 sm:w-72" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="relative pt-20 text-center sm:pt-24">

          {/* Hero gradient glow */}
          <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[90%] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#5170FF]/10 via-[#FF66C4]/10 to-[#5170FF]/10 blur-3xl" />

          <p className="mb-5 inline-flex rounded-full border border-gray-200 bg-white px-4 py-1.5 text-xs text-[#6B7280] shadow-sm sm:mb-6 sm:px-5 sm:py-2 sm:text-sm">
            Our Portfolio
          </p>

          <h1 className="mx-auto max-w-5xl text-4xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Work we're{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              proud of.
            </span>
          </h1>

          <p className="mx-auto mt-6 max-w-2xl px-4 text-base leading-relaxed text-[#6B7280] sm:mt-8 sm:px-0 sm:text-lg">
            Explore some of the websites, brands, and digital experiences
            we've created for modern businesses.
          </p>
        </section>

        {/* Portfolio Grid */}
        <section className="mt-16 px-4 sm:mt-24 sm:px-0">
          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3 sm:gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={
                  project.slug === "aloia"
                    ? "/projects/aloia"
                    : `/projects/${project.slug}`
                }
                className="group block overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:rounded-3xl"
              >
                {/* Image */}
                <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="p-5 sm:p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-xs font-medium text-[#5170FF] sm:text-sm">
                      {project.category}
                    </span>

                    <span className="text-xs text-[#9CA3AF] sm:text-sm">
                      {project.date}
                    </span>
                  </div>

                  <h2 className="mt-3 text-xl font-semibold text-[#111111] sm:mt-4 sm:text-2xl">
                    {project.title}
                  </h2>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280] sm:mt-3 sm:text-base">
                    {project.description}
                  </p>

                  <div className="mt-5 text-sm font-medium text-[#111111] transition group-hover:text-[#5170FF] sm:mt-6">
                    View Project →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative mx-4 mt-20 mb-20 overflow-hidden rounded-[1.5rem] bg-[#111111] px-6 py-12 text-center sm:mx-0 sm:mt-28 sm:mb-28 sm:rounded-[2rem] sm:px-16 sm:py-16">
          <div className="absolute left-1/2 top-0 h-52 w-52 -translate-x-1/2 rounded-full bg-[#5170FF]/30 blur-3xl sm:h-64 sm:w-64" />

          <div className="relative z-10">
            <p className="text-xs font-medium text-[#FF66C4] sm:text-sm">
              YOUR PROJECT NEXT
            </p>

            <h2 className="mx-auto mt-3 max-w-3xl text-3xl font-semibold tracking-tight text-white sm:mt-4 sm:text-5xl">
              Want to see your business here?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-sm leading-relaxed text-gray-300 sm:mt-6 sm:text-base">
              Let's create something that makes your business stand out
              online.
            </p>

            <Link
              href="/contact"
              className="mt-6 inline-flex rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-7 py-3 text-sm font-medium text-white shadow-lg transition hover:scale-105 sm:mt-8 sm:px-8 sm:py-4"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}