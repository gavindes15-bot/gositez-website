"use client";

import { useState } from "react";

const services = [
  {
    id: "website",
    title: "Website",
    description: "A premium website for your business.",
  },
  {
    id: "automation",
    title: "DM Automation",
    description: "Automate customer enquiries and conversations.",
  },
  {
    id: "chatbot",
    title: "AI Chatbot",
    description: "An AI assistant that responds to enquiries.",
  },
  {
    id: "branding",
    title: "Branding",
    description: "Build a stronger and more consistent brand.",
  },
  {
    id: "other",
    title: "Something Else",
    description: "Tell us what you have in mind.",
  },
];

const websiteTypes = [
  "New website",
  "Website redesign",
  "Shopify / E-commerce",
  "Website maintenance",
  "Not sure yet",
];

const budgets = [
  "Under AED 1,000",
  "AED 1,000 – 2,500",
  "AED 2,500 – 5,000",
  "AED 5,000+",
  "Not sure yet",
];

export default function ContactPage() {
  const [step, setStep] = useState(1);
  const [service, setService] = useState("");
  const [websiteType, setWebsiteType] = useState("");
  const [budget, setBudget] = useState("");

  const [formData, setFormData] = useState({
    name: "",
    business: "",
    email: "",
    phone: "",
    message: "",
  });

  const selectedService = services.find(
    (item) => item.id === service
  );

  const updateField = (
    field: keyof typeof formData,
    value: string
  ) => {
    setFormData((current) => ({
      ...current,
      [field]: value,
    }));
  };

  const nextStep = () => {
    setStep((current) => Math.min(current + 1, 4));
  };

  const previousStep = () => {
    setStep((current) => Math.max(current - 1, 1));
  };

  const sendInquiry = () => {
    const subject = `New Gositez Inquiry - ${
      selectedService?.title || "General"
    }`;

    const body = `
New Gositez Inquiry

SERVICE
${selectedService?.title || "Not specified"}

WEBSITE TYPE
${websiteType || "Not specified"}

BUDGET
${budget || "Not specified"}

CONTACT DETAILS
Name: ${formData.name}
Business: ${formData.business}
Email: ${formData.email}
Phone / WhatsApp: ${formData.phone || "Not provided"}

PROJECT DETAILS
${formData.message || "No additional details provided."}
`;

    window.location.href = `mailto:gositez.services@gmail.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  };

  return (
    <main className="relative overflow-hidden px-6 pb-20">
      {/* Background gradients */}
      <div className="absolute left-1/2 top-20 -z-0 h-80 w-80 -translate-x-1/2 rounded-full bg-[#5170FF]/15 blur-3xl" />

      <div className="absolute right-0 top-[600px] -z-0 h-72 w-72 rounded-full bg-[#FF66C4]/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl">
        {/* Hero */}
        <section className="pt-20 text-center">
          <p className="mb-6 inline-flex rounded-full border border-gray-200 bg-white px-5 py-2 text-sm text-[#6B7280] shadow-sm">
            Start a Project
          </p>

          <h1 className="mx-auto max-w-5xl text-5xl font-semibold tracking-tight text-[#111111] sm:text-7xl">
            Let&apos;s build something{" "}
            <span className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-transparent">
              great.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-lg leading-relaxed text-[#6B7280]">
            Tell us what you&apos;re looking for and a little about your
            business. We&apos;ll help you figure out the right solution.
          </p>
        </section>

        {/* Form */}
        <section className="mx-auto mt-16 max-w-4xl">
          <div className="rounded-[2rem] border border-gray-100 bg-white p-7 shadow-xl sm:p-10">
            {/* Progress */}
            <div className="mb-10">
              <div className="flex items-center justify-between text-sm">
                <span className="font-medium text-[#111111]">
                  Step {step} of 4
                </span>

                <span className="text-[#9CA3AF]">
                  {step === 1 && "Choose a service"}
                  {step === 2 && "Project details"}
                  {step === 3 && "About you"}
                  {step === 4 && "Final details"}
                </span>
              </div>

              <div className="mt-4 h-1.5 overflow-hidden rounded-full bg-gray-100">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] transition-all duration-500"
                  style={{
                    width: `${step * 25}%`,
                  }}
                />
              </div>
            </div>

            {/* STEP 1 */}
            {step === 1 && (
              <div>
                <h2 className="text-3xl font-semibold text-[#111111]">
                  What can we help with?
                </h2>

                <p className="mt-3 text-[#6B7280]">
                  Select the service you&apos;re interested in.
                </p>

                <div className="mt-8 grid gap-4 sm:grid-cols-2">
                  {services.map((item) => {
                    const selected = service === item.id;

                    return (
                      <button
                        key={item.id}
                        type="button"
                        onClick={() => setService(item.id)}
                        className={`rounded-2xl border p-6 text-left transition ${
                          selected
                            ? "border-[#5170FF] bg-[#5170FF]/5 shadow-md"
                            : "border-gray-200 bg-white hover:border-[#5170FF]/40 hover:shadow-sm"
                        }`}
                      >
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold text-[#111111]">
                              {item.title}
                            </h3>

                            <p className="mt-2 text-sm leading-relaxed text-[#6B7280]">
                              {item.description}
                            </p>
                          </div>

                          <div
                            className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border ${
                              selected
                                ? "border-[#5170FF] bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-white"
                                : "border-gray-300"
                            }`}
                          >
                            {selected && "✓"}
                          </div>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <button
                  type="button"
                  disabled={!service}
                  onClick={nextStep}
                  className="mt-8 w-full rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:scale-[1.01] disabled:cursor-not-allowed disabled:opacity-40"
                >
                  Continue
                </button>
              </div>
            )}

            {/* STEP 2 */}
            {step === 2 && (
              <div>
                <h2 className="text-3xl font-semibold text-[#111111]">
                  Tell us about the project.
                </h2>

                <p className="mt-3 text-[#6B7280]">
                  A few details will help us understand what you need.
                </p>

                {service === "website" && (
                  <div className="mt-8">
                    <label className="text-sm font-medium text-[#111111]">
                      What type of website?
                    </label>

                    <div className="mt-4 grid gap-3 sm:grid-cols-2">
                      {websiteTypes.map((item) => (
                        <button
                          key={item}
                          type="button"
                          onClick={() => setWebsiteType(item)}
                          className={`rounded-2xl border px-5 py-4 text-left text-sm transition ${
                            websiteType === item
                              ? "border-[#5170FF] bg-[#5170FF]/5 text-[#111111]"
                              : "border-gray-200 text-[#6B7280] hover:border-[#5170FF]/40"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-8">
                  <label className="text-sm font-medium text-[#111111]">
                    What&apos;s your approximate budget?
                  </label>

                  <div className="mt-4 grid gap-3 sm:grid-cols-2">
                    {budgets.map((item) => (
                      <button
                        key={item}
                        type="button"
                        onClick={() => setBudget(item)}
                        className={`rounded-2xl border px-5 py-4 text-left text-sm transition ${
                          budget === item
                            ? "border-[#5170FF] bg-[#5170FF]/5 text-[#111111]"
                            : "border-gray-200 text-[#6B7280] hover:border-[#5170FF]/40"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="w-1/3 rounded-full border border-gray-200 px-6 py-4 text-sm font-medium text-[#111111] transition hover:bg-gray-50"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    className="w-2/3 rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-4 text-sm font-medium text-white shadow-lg"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 3 */}
            {step === 3 && (
              <div>
                <h2 className="text-3xl font-semibold text-[#111111]">
                  Tell us about yourself.
                </h2>

                <p className="mt-3 text-[#6B7280]">
                  This helps us know who we&apos;re speaking with.
                </p>

                <div className="mt-8 grid gap-6 sm:grid-cols-2">
                  <div>
                    <label className="text-sm font-medium text-[#111111]">
                      Your name
                    </label>

                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        updateField("name", e.target.value)
                      }
                      placeholder="Your name"
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5170FF] focus:ring-2 focus:ring-[#5170FF]/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#111111]">
                      Business name
                    </label>

                    <input
                      type="text"
                      value={formData.business}
                      onChange={(e) =>
                        updateField("business", e.target.value)
                      }
                      placeholder="Your business"
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5170FF] focus:ring-2 focus:ring-[#5170FF]/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#111111]">
                      Email
                    </label>

                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        updateField("email", e.target.value)
                      }
                      placeholder="you@example.com"
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5170FF] focus:ring-2 focus:ring-[#5170FF]/10"
                    />
                  </div>

                  <div>
                    <label className="text-sm font-medium text-[#111111]">
                      WhatsApp / Phone
                    </label>

                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        updateField("phone", e.target.value)
                      }
                      placeholder="+971..."
                      className="mt-2 w-full rounded-2xl border border-gray-200 px-4 py-3 outline-none transition focus:border-[#5170FF] focus:ring-2 focus:ring-[#5170FF]/10"
                    />
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="w-1/3 rounded-full border border-gray-200 px-6 py-4 text-sm font-medium text-[#111111] transition hover:bg-gray-50"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={nextStep}
                    disabled={
                      !formData.name ||
                      !formData.business ||
                      !formData.email
                    }
                    className="w-2/3 rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-4 text-sm font-medium text-white shadow-lg disabled:cursor-not-allowed disabled:opacity-40"
                  >
                    Continue
                  </button>
                </div>
              </div>
            )}

            {/* STEP 4 */}
            {step === 4 && (
              <div>
                <h2 className="text-3xl font-semibold text-[#111111]">
                  Anything else?
                </h2>

                <p className="mt-3 text-[#6B7280]">
                  Give us a little more information about what you&apos;re
                  looking to achieve.
                </p>

                <div className="mt-8">
                  <label className="text-sm font-medium text-[#111111]">
                    Tell us about your project
                  </label>

                  <textarea
                    rows={7}
                    value={formData.message}
                    onChange={(e) =>
                      updateField("message", e.target.value)
                    }
                    placeholder="Tell us about your business, what you're looking to build, and anything else we should know..."
                    className="mt-2 w-full resize-none rounded-2xl border border-gray-200 px-4 py-4 outline-none transition focus:border-[#5170FF] focus:ring-2 focus:ring-[#5170FF]/10"
                  />
                </div>

                {/* Summary */}
                <div className="mt-6 rounded-2xl bg-gray-50 p-5">
                  <p className="text-xs font-medium uppercase tracking-wide text-[#9CA3AF]">
                    Your inquiry
                  </p>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {selectedService && (
                      <span className="rounded-full bg-white px-4 py-2 text-sm text-[#111111] shadow-sm">
                        {selectedService.title}
                      </span>
                    )}

                    {websiteType && (
                      <span className="rounded-full bg-white px-4 py-2 text-sm text-[#111111] shadow-sm">
                        {websiteType}
                      </span>
                    )}

                    {budget && (
                      <span className="rounded-full bg-white px-4 py-2 text-sm text-[#111111] shadow-sm">
                        {budget}
                      </span>
                    )}
                  </div>
                </div>

                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={previousStep}
                    className="w-1/3 rounded-full border border-gray-200 px-6 py-4 text-sm font-medium text-[#111111] transition hover:bg-gray-50"
                  >
                    Back
                  </button>

                  <button
                    type="button"
                    onClick={sendInquiry}
                    className="w-2/3 rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-6 py-4 text-sm font-medium text-white shadow-lg transition hover:scale-[1.01]"
                  >
                    Send Inquiry
                  </button>
                </div>

                <p className="mt-4 text-center text-xs text-[#9CA3AF]">
                  Your email app will open with the inquiry ready to send
                  to Gositez.
                </p>
              </div>
            )}
          </div>
        </section>

        {/* Direct contact */}
        <section className="mt-16 grid gap-6 md:grid-cols-2">
          <a
            href="mailto:gositez.services@gmail.com"
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-[#5170FF]">
              EMAIL US
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#111111]">
              gositez.services@gmail.com
            </h3>

            <p className="mt-2 text-sm text-[#6B7280]">
              Send us a message directly.
            </p>
          </a>

          <a
            href="https://www.instagram.com/gositez/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-3xl border border-gray-100 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
          >
            <p className="text-sm font-medium text-[#FF66C4]">
              INSTAGRAM
            </p>

            <h3 className="mt-3 text-xl font-semibold text-[#111111]">
              @gositez
            </h3>

            <p className="mt-2 text-sm text-[#6B7280]">
              Message us on Instagram.
            </p>
          </a>
        </section>

        {/* Reassurance */}
        <section className="mt-20 text-center">
          <p className="text-sm font-medium text-[#5170FF]">
            NOT SURE WHAT YOU NEED?
          </p>

          <h2 className="mt-3 text-3xl font-semibold tracking-tight text-[#111111]">
            That&apos;s completely fine.
          </h2>

          <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-[#6B7280]">
            Just tell us about your business and what you&apos;re trying
            to achieve. We&apos;ll help you figure out the right solution.
          </p>
        </section>

        {/* Bottom CTA */}
        <section className="relative mt-20 overflow-hidden rounded-[2rem] bg-[#111111] px-8 py-14 text-center sm:px-16">
          <div className="absolute left-1/2 top-0 h-64 w-64 -translate-x-1/2 rounded-full bg-[#5170FF]/30 blur-3xl" />

          <div className="relative z-10">
            <p className="text-sm font-medium text-[#FF66C4]">
              GOSITEZ
            </p>

            <h2 className="mx-auto mt-3 max-w-2xl text-3xl font-semibold text-white sm:text-4xl">
              Your next digital project starts here.
            </h2>
          </div>
        </section>
      </div>
    </main>
  );
}