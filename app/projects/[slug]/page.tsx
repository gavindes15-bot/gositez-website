"use client";

import Link from "next/link";
import { use, useState } from "react";

const projects = {
  aloia: {
    title: "Aloia",
    category: "E-commerce",
    date: "2026",
    description:
      "A premium e-commerce experience designed to showcase Aloia's abayas and create a seamless shopping journey.",
    about:
      "Aloia is a premium abaya brand that needed a refined online store to match its visual identity. We designed a clean, modern e-commerce experience focused on showcasing the collections, creating a smooth browsing experience, and making it easy for customers to discover and purchase products.",
    images: [
      "/portfolio/aloia-1.jpg",
      "/portfolio/aloia-2.jpg",
      "/portfolio/aloia-3.jpg",
    ],
  },

  "project-two": {
    title: "SOGAH by M.A",
    category: "E-commerce",
    date: "2026",
    description:
      "A refined e-commerce experience designed to showcase Sogah by M.A's curated gift kits and sets.",
    about:
      "Sogah by M.A is a curated gifting brand focused on thoughtfully assembled gift kits and sets. The website was designed to create a premium and elegant shopping experience, making it easy for customers to explore the collections, discover the perfect gift, and confidently place an order.",
    images: [
      "/portfolio/project-2-1.jpg",
      "/portfolio/project-2-2.jpg",
      "/portfolio/project-2-3.jpg",
    ],
  },

  "project-three": {
    title: "Aureon",
    category: "E-commerce",
    date: "2026",
    description:
      "A premium e-commerce experience designed to showcase Aureon's refined linen essentials and timeless collections.",
    about:
      "Aureon is a premium linen essentials brand focused on quality, simplicity, and timeless design. The website was created to reflect the brand's refined aesthetic while providing a clean and effortless shopping experience for customers exploring its collections.",
    images: [
      "/portfolio/project-3-1.jpg",
      "/portfolio/project-3-2.jpg",
      "/portfolio/project-3-3.jpg",
    ],
  },
};

export default function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = use(params);

  const [currentImage, setCurrentImage] = useState(0);

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="relative min-h-screen overflow-hidden px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-4xl font-semibold text-[#111111]">
            Project not found
          </h1>

          <p className="mt-4 text-[#6B7280]">
            This project doesn't exist.
          </p>

          <Link
            href="/portfolio"
            className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white"
          >
            Back to Portfolio
          </Link>
        </div>
      </main>
    );
  }

  const previousImage = () => {
    setCurrentImage((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentImage((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <main className="relative min-h-screen overflow-hidden px-6 py-20">
      {/* Background gradient */}
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Back button */}
        <Link
          href="/portfolio"
          className="text-sm font-medium text-[#6B7280] transition hover:text-[#111111]"
        >
          ← Back to Portfolio
        </Link>

        {/* Header */}
        <section className="pt-16">
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full bg-[#5170FF]/10 px-4 py-2 text-sm font-medium text-[#5170FF]">
              {project.category}
            </span>

            <span className="text-sm text-[#9CA3AF]">
              {project.date}
            </span>
          </div>

          <h1 className="mt-6 max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl">
            {project.title}
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            {project.description}
          </p>
        </section>

        {/* Project Carousel */}
        <section className="mt-16">
          <div className="relative">

            {/* Image */}
            <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-100 shadow-xl">
              <img
                src={project.images[currentImage]}
                alt={`${project.title} preview ${currentImage + 1}`}
                className="block h-auto w-full"
              />
            </div>

            {/* Previous */}
            <button
              onClick={previousImage}
              aria-label="Previous image"
              className="absolute left-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#111111] shadow-lg backdrop-blur transition hover:scale-105"
            >
              ←
            </button>

            {/* Next */}
            <button
              onClick={nextImage}
              aria-label="Next image"
              className="absolute right-5 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/90 text-xl text-[#111111] shadow-lg backdrop-blur transition hover:scale-105"
            >
              →
            </button>

            {/* Dots */}
            <div className="mt-5 flex justify-center gap-2">
              {project.images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImage(index)}
                  aria-label={`Go to image ${index + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    currentImage === index
                      ? "w-6 bg-[#111111]"
                      : "w-2 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

          </div>
        </section>

        {/* Project Details */}
        <section className="mt-20 grid gap-12 md:grid-cols-[1fr_2fr]">

          <div>
            <p className="text-sm font-medium text-[#5170FF]">
              THE PROJECT
            </p>

            <h2 className="mt-3 text-3xl font-semibold text-[#111111]">
              About the project
            </h2>
          </div>

          <div>
            <p className="leading-relaxed text-[#6B7280]">
              {project.about}
            </p>
          </div>

        </section>

        {/* What We Built */}
        <section className="mt-20">

          <p className="text-sm font-medium text-[#5170FF]">
            WHAT WE BUILT
          </p>

          <h2 className="mt-3 text-3xl font-semibold text-[#111111]">
            Project highlights
          </h2>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

            {[
              "Custom design",
              "Responsive experience",
              "Modern UI/UX",
              "Mobile optimisation",
              "SEO-ready structure",
              "Conversion-focused layout",
            ].map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <div className="flex items-center gap-3">

                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-xs text-white">
                    ✓
                  </span>

                  <span className="font-medium text-[#111111]">
                    {item}
                  </span>

                </div>
              </div>
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
              Want something like this?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Let's create a website or digital experience built around your
              business.
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
    </main>
  );
}