"use client";

import Link from "next/link";

const mainServices = [
  {
    title: "Website Redesign",
    description:
      "Give your existing website a fresh, modern look designed to improve the experience for your customers.",
    features: [
      "Modern visual redesign",
      "Improved user experience",
      "Mobile responsive design",
      "Performance improvements",
      "Clear calls-to-action",
    ],
  },
  {
    title: "Full Premium Website",
    description:
      "A complete custom website built around your business, brand, goals, and customers.",
    features: [
      "Custom website design",
      "Premium UI/UX",
      "Fully responsive",
      "SEO-ready structure",
      "Conversion-focused pages",
    ],
  },
  {
    title: "Website Maintenance",
    description:
      "Keep your website updated, reliable, and performing well with ongoing support.",
    features: [
      "Website updates",
      "Content changes",
      "Bug fixes",
      "Performance monitoring",
      "Ongoing improvements",
    ],
  },
];

const addons = [
  {
    emoji: "🌍",
    title: "Full Website Translation",
    description:
      "Have your website translated into any language of your choice.",
  },
  {
    emoji: "🔎",
    title: "Advanced SEO Setup",
    description:
      "A comprehensive SEO setup designed to give your website a stronger foundation for search engines.",
  },
  {
    emoji: "🛠️",
    title: "Monthly Maintenance",
    description:
      "Ongoing updates, improvements, fixes, and support to keep your website running smoothly.",
  },
];

export default function WebDevelopmentPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-24">

      {/* Background gradients */}
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="absolute right-0 top-[500px] -z-0 h-72 w-72 rounded-full bg-[#FF66C4]/10 blur-3xl" />


      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Hero */}
        <section className="pt-20 text-center">

          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            Web Development
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Websites built to{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              stand out.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            From redesigns to complete premium websites, we create modern
            digital experiences that help businesses look better and grow
            online.
          </p>

        </section>


        {/* Main Services */}
        <section className="mt-24">

          <div className="mb-10">
            <p className="text-sm font-medium text-[#5170FF]">
              WHAT WE DO
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Choose the right solution
            </h2>
          </div>


          <div className="grid gap-8 lg:grid-cols-3">

            {mainServices.map((service, index) => (
              <div
                key={service.title}
                className={`flex flex-col rounded-3xl border p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  index === 1
                    ? "border-[#5170FF]/20 bg-gradient-to-b from-[#5170FF]/5 to-white"
                    : "border-gray-100 bg-white"
                }`}
              >

                {index === 1 && (
                  <div className="mb-5 inline-flex w-fit rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-4 py-1.5 text-xs font-medium text-white">
                    Most Popular
                  </div>
                )}

                <h3 className="text-2xl font-semibold text-[#111111]">
                  {service.title}
                </h3>

                <p className="mt-4 min-h-[84px] leading-relaxed text-[#6B7280]">
                  {service.description}
                </p>


                <div className="my-7 h-px bg-gray-100" />


                <ul className="space-y-4">

                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex items-start gap-3 text-sm text-[#444444]"
                    >
                      <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-xs text-white">
                        ✓
                      </span>

                      {feature}
                    </li>
                  ))}

                </ul>


                <Link
                  href="/contact"
                  className="mt-8 rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-3 text-center text-sm font-medium text-white shadow-md transition hover:scale-[1.02]"
                >
                  Get a Quote
                </Link>

              </div>
            ))}

          </div>

        </section>


        {/* Add-ons */}
        <section className="mt-28">

          <div className="text-center">

            <p className="text-sm font-medium text-[#5170FF]">
              ADD-ONS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Need a little more?
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#6B7280]">
              Add extra services to your website package whenever your
              business needs them.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {addons.map((addon) => (
              <div
                key={addon.title}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-4xl">
                  {addon.emoji}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#111111]">
                  {addon.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[#6B7280]">
                  {addon.description}
                </p>

              </div>
            ))}

          </div>

        </section>


        {/* CTA */}
        <section className="relative mt-28 overflow-hidden rounded-[2rem] bg-[#111111] px-8 py-16 text-center sm:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#5170FF]/30 blur-3xl" />

          <div className="relative z-10">

            <p className="text-sm font-medium text-[#FF66C4]">
              LET'S BUILD
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Not sure which package is right for you?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Every business is different. Tell us what you're looking to
              build and we'll help you find the right solution for your
              website.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105"
            >
              Get Your Free Quote
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}