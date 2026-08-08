"use client";

import Link from "next/link";

const features = [
  "Custom logo design",
  "Complete brand identity",
  "Colour palette & typography",
  "Instagram branding",
  "Social media templates",
  "Brand guidelines",
];

const brandingServices = [
  {
    emoji: "✦",
    title: "Logo Design",
    description:
      "A memorable logo designed to represent your business and create a strong first impression.",
  },
  {
    emoji: "🎨",
    title: "Brand Identity",
    description:
      "A consistent visual identity with colours, typography, and design elements built around your brand.",
  },
  {
    emoji: "📱",
    title: "Social Media Branding",
    description:
      "Professional social media visuals that keep your brand looking consistent across every platform.",
  },
];

export default function BrandingPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-24">

      {/* Background gradients */}
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="absolute right-0 top-[600px] -z-0 h-72 w-72 rounded-full bg-[#FF66C4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Hero */}
        <section className="pt-20 text-center">

          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            Branding
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Build a brand people{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              remember.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            From logos to complete visual identities, we create branding that
            gives your business a professional and consistent look.
          </p>

        </section>


        {/* Main Branding Package */}
        <section className="mt-24">

          <div className="mx-auto max-w-4xl rounded-3xl border border-[#5170FF]/15 bg-gradient-to-br from-[#5170FF]/5 via-white to-[#FF66C4]/5 p-8 shadow-sm sm:p-12">

            <div className="flex flex-col gap-8 md:flex-row md:items-start md:justify-between">

              <div className="max-w-xl">

                <div className="text-5xl">
                  ✨
                </div>

                <h2 className="mt-6 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
                  Complete Brand Identity
                </h2>

                <p className="mt-4 leading-relaxed text-[#6B7280]">
                  Everything you need to create a strong, consistent, and
                  professional visual identity for your business.
                </p>

              </div>

              <Link
                href="/contact"
                className="shrink-0 rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-7 py-3 text-center text-sm font-medium text-white shadow-md transition hover:scale-[1.02]"
              >
                Inquire Now
              </Link>

            </div>


            <div className="my-8 h-px bg-gray-200" />


            <div className="grid gap-4 sm:grid-cols-2">

              {features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 text-sm text-[#444444]"
                >

                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-xs text-white">
                    ✓
                  </span>

                  {feature}

                </div>
              ))}

            </div>

          </div>

        </section>


        {/* Branding Services */}
        <section className="mt-28">

          <div className="text-center">

            <p className="text-sm font-medium text-[#5170FF]">
              WHAT'S INCLUDED
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Everything your brand needs
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#6B7280]">
              Create a consistent visual identity that works across your
              website, social media, and marketing.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            {brandingServices.map((service) => (
              <div
                key={service.title}
                className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-lg"
              >

                <div className="text-4xl">
                  {service.emoji}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-[#111111]">
                  {service.title}
                </h3>

                <p className="mt-3 leading-relaxed text-[#6B7280]">
                  {service.description}
                </p>

              </div>
            ))}

          </div>

        </section>


        {/* CTA */}
        <section className="relative mt-28 overflow-hidden rounded-[2rem] bg-[#111111] px-8 py-16 text-center sm:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#FF66C4]/30 blur-3xl" />

          <div className="relative z-10">

            <p className="text-sm font-medium text-[#FF66C4]">
              BUILD YOUR BRAND
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to make your brand stand out?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Tell us about your business and what you're looking to create.
              We'll help you build a brand that represents it properly.
            </p>

            <Link
              href="/contact"
              className="mt-8 inline-flex rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg transition hover:scale-105"
            >
              Inquire Now
            </Link>

          </div>

        </section>

      </div>
    </main>
  );
}