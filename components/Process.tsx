"use client";

const steps = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, audience, and what you need to achieve online.",
  },
  {
    number: "02",
    title: "Design",
    description:
      "We create a premium design direction focused on your brand, users, and conversions.",
  },
  {
    number: "03",
    title: "Development",
    description:
      "We build your website using modern technology with speed, performance, and responsiveness in mind.",
  },
  {
    number: "04",
    title: "Launch & Growth",
    description:
      "We launch your website and help you improve your digital presence as your business grows.",
  },
];

function Process() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Our Process
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Simple process. Exceptional results.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            From the first conversation to launch day, we make building your
            digital presence simple and seamless.
          </p>
        </div>

        {/* Process Steps */}
        <div className="mt-12 grid gap-8 md:grid-cols-2">
          {steps.map((step) => (
            <div
              key={step.number}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-r from-[#5170FF] to-[#FF66C4] text-lg font-semibold text-white shadow-lg">
                  {step.number}
                </div>

                <h3 className="text-2xl font-semibold text-[#111111]">
                  {step.title}
                </h3>
              </div>

              <p className="leading-relaxed text-[#6B7280]">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Process;