const audiences = [
  {
    emoji: "🛍️",
    title: "E-Commerce Brands",
    description:
      "Helping online stores create premium shopping experiences that build trust and increase sales.",
  },
  {
    emoji: "🎥",
    title: "Content Creators",
    description:
      "Building professional websites and digital platforms that help creators grow their personal brand.",
  },
  {
    emoji: "🚀",
    title: "Startups",
    description:
      "Creating scalable digital experiences that help new businesses launch and stand out.",
  },
  {
    emoji: "🏢",
    title: "Small Businesses",
    description:
      "Helping local businesses improve their online presence with modern websites and automation.",
  },
];

function WhoWeWorkWith() {
  return (
    <section className="py-12 sm:py-14">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-medium text-[#6B7280]">
            Who We Work With
          </p>

          <h2 className="text-4xl font-semibold tracking-tight text-[#111111] sm:text-6xl">
            Helping ambitious businesses grow online.
          </h2>

          <p className="mt-6 text-lg text-[#6B7280]">
            From growing startups to established brands, we create digital
            experiences built around your goals.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="rounded-3xl border border-gray-100 bg-white p-8 shadow-sm"
            >
              <div className="mb-6 text-4xl">{item.emoji}</div>

              <h3 className="text-xl font-semibold text-[#111111]">
                {item.title}
              </h3>

              <p className="mt-4 leading-relaxed text-[#6B7280]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default WhoWeWorkWith;