import Link from "next/link";

const projects = {
  "aloia": {
    title: "Aloia",
    category: "E-commerce",
    date: "2026",
    description:
      "A modern website designed to give the brand a stronger online presence.",
    image: "/portfolio/aloia.jpg",
  },
  "project-two": {
    title: "Project Two",
    category: "Branding",
    date: "2026",
    description:
      "A complete visual identity created to give the brand a consistent and premium look.",
    image: "/portfolio/project-2.jpg",
  },
  "project-three": {
    title: "Project Three",
    category: "Web Development",
    date: "2026",
    description:
      "A clean and conversion-focused digital experience built around the business.",
    image: "/portfolio/project-3.jpg",
  },
};

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const project = projects[slug as keyof typeof projects];

  if (!project) {
    return (
      <main className="min-h-screen bg-white px-6 py-32 text-center">
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
      </main>
    );
  }

  return (
    <main className="relative overflow-hidden bg-white px-6 py-24">

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


        {/* Main Project Image */}
        <section className="mt-16">

          <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gray-100 shadow-xl">

            <img
              src={project.image}
              alt={project.title}
              className="w-full object-cover"
            />

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
              This project was created to give the business a stronger
              digital presence and a modern experience for its customers.
              Every part of the project was designed around the brand,
              audience, and business goals.
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