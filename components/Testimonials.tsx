"use client";

const testimonials = [
  {
    quote: "Owner of GoSitez",
    name: "Gavin De Silva",
    role: "Business Owner",
  },
  {
    quote:
      "The design quality and attention to detail exceeded our expectations.",
    name: "Stephen De Silva",
    role: "Janiter",
  },
  {
    quote:
      "A smooth process from start to finish. The final result looked amazing.",
    name: "Client Name",
    role: "Entrepreneur",
  },
];

function Testimonials() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Testimonials
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Loved by businesses building their future online.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            See what our clients say about working with Gositez.
          </p>
        </div>

        {/* Testimonials */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name + index}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <p className="text-lg leading-relaxed text-[#111111]">
                "{testimonial.quote}"
              </p>

              <div className="mt-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] font-semibold text-white">
                  G
                </div>

                <div>
                  <h3 className="font-semibold text-[#111111]">
                    {testimonial.name}
                  </h3>

                  <p className="text-sm text-[#6B7280]">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Testimonials;