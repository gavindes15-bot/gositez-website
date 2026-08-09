import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "About Gositez | Founded by Gavin De Silva",
  description:
    "Learn about Gositez, a Dubai-based digital agency founded by Gavin De Silva, creating modern websites, automation, and branding for businesses.",
  keywords: [
    "Gositez",
    "Gositez Dubai",
    "Gositez UAE",
    "Gavin De Silva",
    "Gavin De Silva Gositez",
    "Gositez founder",
    "Gositez website",
    "digital agency Dubai",
  ],
  alternates: {
    canonical: "/about",
  },
  openGraph: {
    title: "About Gositez | Founded by Gavin De Silva",
    description:
      "Learn about Gositez, a Dubai-based digital agency founded by Gavin De Silva, creating modern websites, automation, and branding for businesses.",
    url: "/about",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Gositez | Founded by Gavin De Silva",
    description:
      "Learn about Gositez, a Dubai-based digital agency founded by Gavin De Silva, creating modern websites, automation, and branding for businesses.",
  },
};

export default function AboutPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-24">

      {/* Background gradients */}
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="absolute right-0 top-[650px] -z-0 h-72 w-72 rounded-full bg-[#FF66C4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Hero */}
        <section className="pt-20 text-center">

          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            About Gositez
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            We build digital experiences that{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              move businesses forward.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Gositez is a digital agency focused on creating modern websites,
            automation, and branding for businesses that want to stand out
            online.
          </p>

        </section>


        {/* About */}
        <section className="mt-24 grid gap-12 md:grid-cols-2 md:items-center">

          <div>

            <p className="text-sm font-medium text-[#5170FF]">
              WHO WE ARE
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              More than just another agency.
            </h2>

          </div>


          <div>

            <p className="leading-relaxed text-[#6B7280]">
              We believe businesses deserve more than a basic online
              presence. Your website, branding, and digital systems should
              communicate what makes your business different and make it
              easier for customers to choose you.
            </p>

            <p className="mt-5 leading-relaxed text-[#6B7280]">
              That's why we combine clean design, modern technology, and
              practical digital solutions to create experiences that look
              great and work for your business.
            </p>

          </div>

        </section>


        {/* Founder */}
        <section className="mt-28">

          <div className="overflow-hidden rounded-[2rem] border border-gray-100 bg-gradient-to-br from-[#5170FF]/5 via-white to-[#FF66C4]/5 p-8 sm:p-12">

            <div className="grid gap-10 md:grid-cols-[0.8fr_1.2fr] md:items-center">

              {/* Founder heading */}
              <div>

                <p className="text-sm font-medium text-[#5170FF]">
                  THE FOUNDER
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
                  Built from a simple idea.
                </h2>

                <p className="mt-5 text-lg font-medium text-[#111111]">
                  Gavin De Silva
                </p>

                <p className="mt-1 text-sm text-[#6B7280]">
                  Founder of Gositez
                </p>

              </div>


              {/* Founder story */}
              <div>

                <p className="leading-relaxed text-[#6B7280]">
                  Gositez started with a simple problem: I wanted a high-quality
                  website for a business without having to spend thousands of
                  dollars just to get something that looked professional.
                </p>

                <p className="mt-5 leading-relaxed text-[#6B7280]">
                  As I looked around, I realised other businesses were facing
                  the same problem. Many wanted a strong online presence, but
                  professional digital services could feel expensive,
                  complicated, or out of reach.
                </p>

                <p className="mt-5 leading-relaxed text-[#6B7280]">
                  That's where Gositez came from — building modern websites,
                  branding, and digital solutions that look premium without
                  unnecessary complexity.
                </p>

              </div>

            </div>

          </div>

        </section>


        {/* What We Do */}
        <section className="mt-28">

          <div className="text-center">

            <p className="text-sm font-medium text-[#5170FF]">
              WHAT WE DO
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              Everything you need to grow online.
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#6B7280]">
              From your first impression to the systems behind your
              business, we help create a stronger digital presence.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

              <div className="text-4xl">
                ✦
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#111111]">
                Web Development
              </h3>

              <p className="mt-3 leading-relaxed text-[#6B7280]">
                Modern, responsive websites designed around your business
                and your customers.
              </p>

            </div>


            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

              <div className="text-4xl">
                ⚡
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#111111]">
                Automation
              </h3>

              <p className="mt-3 leading-relaxed text-[#6B7280]">
                Smart automation and AI solutions that help businesses
                respond faster and capture more opportunities.
              </p>

            </div>


            <div className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm">

              <div className="text-4xl">
                ◈
              </div>

              <h3 className="mt-6 text-xl font-semibold text-[#111111]">
                Branding
              </h3>

              <p className="mt-3 leading-relaxed text-[#6B7280]">
                Professional visual identities that make businesses
                recognizable, consistent, and memorable.
              </p>

            </div>

          </div>

        </section>


        {/* Values */}
        <section className="mt-28">

          <div className="rounded-[2rem] border border-gray-100 bg-gradient-to-br from-[#5170FF]/5 via-white to-[#FF66C4]/5 p-8 sm:p-12">

            <div className="grid gap-12 md:grid-cols-2">

              <div>

                <p className="text-sm font-medium text-[#5170FF]">
                  OUR APPROACH
                </p>

                <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
                  Simple. Modern. Effective.
                </h2>

                <p className="mt-5 leading-relaxed text-[#6B7280]">
                  We don't believe in unnecessary complexity. Every project
                  should have a clear purpose, a strong design, and a
                  straightforward experience for the people using it.
                </p>

              </div>


              <div className="grid gap-6 sm:grid-cols-2">

                <div>

                  <h3 className="font-semibold text-[#111111]">
                    Quality
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    We focus on details that make the final experience feel
                    polished and professional.
                  </p>

                </div>


                <div>

                  <h3 className="font-semibold text-[#111111]">
                    Creativity
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    Every business is different, so every solution should
                    feel unique.
                  </p>

                </div>


                <div>

                  <h3 className="font-semibold text-[#111111]">
                    Simplicity
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    Clean interfaces and clear experiences always come
                    first.
                  </p>

                </div>


                <div>

                  <h3 className="font-semibold text-[#111111]">
                    Results
                  </h3>

                  <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                    Beautiful design matters, but it should also help your
                    business achieve its goals.
                  </p>

                </div>

              </div>

            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="relative mt-28 overflow-hidden rounded-[2rem] bg-[#111111] px-8 py-16 text-center sm:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#5170FF]/30 blur-3xl" />

          <div className="relative z-10">

            <p className="text-sm font-medium text-[#FF66C4]">
              LET'S WORK TOGETHER
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Ready to build something great?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Tell us about your business and let's create something that
              makes your brand stand out online.
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