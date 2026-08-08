"use client";

const stats = [
  {
    number: "20+",
    label: "Websites Built",
  },
  {
    number: "7",
    label: "Day Turnaround",
  },
  {
    number: "100%",
    label: "Happy Clients",
  },
];

function Results() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="text-center">
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Our Results
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Want to see what we can create?
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-[#6B7280]">
            We combine creative design, technology, and strategy to help
            businesses build a stronger digital presence.
          </p>
        </div>

        {/* Stats */}
        <div className="mt-12 grid gap-6 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl border border-gray-100 bg-white p-10 text-center shadow-sm"
            >
              <h3 className="bg-gradient-to-r from-[#5170FF] to-[#FF66C4] bg-clip-text text-5xl font-semibold text-transparent">
                {stat.number}
              </h3>

              <p className="mt-4 text-lg text-[#6B7280]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>

        {/* Portfolio Button */}
        <div className="mt-12 flex justify-center">
          <a
            href="/portfolio"
            className="rounded-full bg-gradient-to-r from-[#5170FF] to-[#FF66C4] px-8 py-4 font-medium text-white shadow-lg"
          >
            View Our Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

export default Results;