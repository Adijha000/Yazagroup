import { Reveal } from "../Reveal";

const groups = [
  { title: "Startups", copy: "Scaling technology teams." },
  { title: "Enterprises", copy: "Managing complex and multi-phase projects." },
  {
    title: "Global Organizations",
    copy: "Looking for dependable expertise across India and beyond.",
  },
];

export function WhoWeWorkWith() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl md:text-5xl">
            Built for Teams That Are Moving Forward.
          </h2>
        </Reveal>

        <div className="mt-16 divide-y divide-paper/10 border-y border-paper/10">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between md:gap-8">
                <h3 className="font-display text-2xl font-medium text-paper sm:text-3xl">
                  {g.title}
                </h3>
                <p className="text-paper/50 md:text-right">{g.copy}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
