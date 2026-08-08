"use client";

import Link from "next/link";

const services = [
  {
    emoji: "💬",
    title: "Direct Message Automation",
    price: "AED 800",
    description:
      "Automate your incoming DMs so customers can get instant answers, enquiries can be captured, and leads don't get missed.",
    features: [
      "Instant DM replies",
      "Automated enquiry flows",
      "Lead collection",
      "FAQ responses",
      "Booking and quote flows",
      "Custom conversation paths",
    ],
    button: "Inquire Now",
  },
  {
    emoji: "🤖",
    title: "AI Chatbot",
    description:
      "An AI-powered chatbot that can instantly respond to customer enquiries and guide visitors toward the right information or next step.",
    features: [
      "AI-powered conversations",
      "Instant responses",
      "Handles common enquiries",
      "Custom business knowledge",
      "Lead qualification",
      "Quote and enquiry assistance",
    ],
    button: "Inquire Now",
  },
];

export default function DMAutomationPage() {
  return (
    <main className="relative overflow-hidden bg-white px-6 py-24">

      {/* Background gradients */}
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="absolute right-0 top-[550px] -z-0 h-72 w-72 rounded-full bg-[#FF66C4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Hero */}
        <section className="pt-20 text-center">

          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            AI & DM Automation
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl lg:text-8xl">
            Never miss an{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              enquiry.
            </span>
          </h1>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Turn conversations into opportunities with automated DMs and
            AI-powered chatbots that respond to customers instantly.
          </p>

        </section>


        {/* Services */}
        <section className="mt-24">

          <div className="grid gap-8 lg:grid-cols-2">

            {services.map((service) => (
              <div
                key={service.title}
                className="flex flex-col rounded-3xl border border-gray-100 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-10"
              >

                {/* Icon */}
                <div className="text-5xl">
                  {service.emoji}
                </div>


                {/* Title + Price */}
                <div className="mt-6 flex flex-wrap items-center justify-between gap-3">

                  <h2 className="text-2xl font-semibold text-[#111111]">
                    {service.title}
                  </h2>

                  {service.price && (
                    <span className="rounded-full bg-[#111111] px-4 py-2 text-sm font-medium text-white">
                      {service.price}
                    </span>
                  )}

                </div>


                {/* Description */}
                <p className="mt-4 leading-relaxed text-[#6B7280]">
                  {service.description}
                </p>


                <div className="my-7 h-px bg-gray-100" />


                {/* Features */}
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


                {/* Button */}
                <Link
                  href="/contact"
                  className="mt-8 rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-3 text-center text-sm font-medium text-white shadow-md transition hover:scale-[1.02]"
                >
                  {service.button}
                </Link>

              </div>
            ))}

          </div>

        </section>


        {/* How it works */}
        <section className="mt-28">

          <div className="text-center">

            <p className="text-sm font-medium text-[#5170FF]">
              HOW IT WORKS
            </p>

            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111] sm:text-4xl">
              From enquiry to opportunity
            </h2>

            <p className="mx-auto mt-4 max-w-2xl text-[#6B7280]">
              Automation takes care of repetitive conversations while you
              focus on running your business.
            </p>

          </div>


          <div className="mt-12 grid gap-6 md:grid-cols-3">

            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-semibold text-[#5170FF]">
                01
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#111111]">
                Customer reaches out
              </h3>

              <p className="mt-3 leading-relaxed text-[#6B7280]">
                A customer sends a DM or starts a conversation with your
                business.
              </p>
            </div>


            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-semibold text-[#5170FF]">
                02
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#111111]">
                Automation responds
              </h3>

              <p className="mt-3 leading-relaxed text-[#6B7280]">
                Your automated system instantly responds and guides the
                customer through the conversation.
              </p>
            </div>


            <div className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm">
              <div className="text-3xl font-semibold text-[#5170FF]">
                03
              </div>

              <h3 className="mt-5 text-xl font-semibold text-[#111111]">
                Lead gets captured
              </h3>

              <p className="mt-3 leading-relaxed text-[#6B7280]">
                Important information is collected so you can follow up and
                turn enquiries into customers.
              </p>
            </div>

          </div>

        </section>


        {/* CTA */}
        <section className="relative mt-28 overflow-hidden rounded-[2rem] bg-[#111111] px-8 py-16 text-center sm:px-16">

          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#5170FF]/30 blur-3xl" />

          <div className="relative z-10">

            <p className="text-sm font-medium text-[#FF66C4]">
              READY TO AUTOMATE?
            </p>

            <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
              Stop letting enquiries slip through the cracks.
            </h2>

            <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-gray-300">
              Tell us about your business and what you want to automate.
              We'll help you find the right solution.
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