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
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="absolute right-0 top-[600px] -z-0 h-72 w-72 rounded-full bg-[#FF66C4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Hero */}
        <section className="pt-20 text-center">
          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            Our Portfolio
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Work we're{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              proud of.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Explore some of the websites, brands, and digital experiences
            we've created for modern businesses.
          </p>
        </section>

        {/* Portfolio Grid */}
        <section className="mt-24">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={
                  project.slug === "aloia"
                    ? "/projects/aloia"
                    : `/projects/${project.slug}`
                }
                className="group block overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl"
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
                <div className="p-7">
                  <div className="flex items-center justify-between gap-4">
                    <span className="text-sm font-medium text-[#5170FF]">
                      {project.category}
                    </span>

                    <span className="text-sm text-[#9CA3AF]">
                      {project.date}
                    </span>
                  </div>

                  <h2 className="mt-4 text-2xl font-semibold text-[#111111]">
                    {project.title}
                  </h2>

                  <p className="mt-3 leading-relaxed text-[#6B7280]">
                    {project.description}
                  </p>

                  <div className="mt-6 text-sm font-medium text-[#111111] transition group-hover:text-[#5170FF]">
                    View Project →
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="relative mt-28 overflow-hidden rounded-[2rem] bg-[#111111] px-8 py-16 text-center sm:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#5170FF]/30 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-medium text-[#FF66C4]">
              YOUR PROJECT NEXT
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Want to see your business here?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Let's create something that makes your business stand out
              online.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105"
            >
              Start a Project
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}