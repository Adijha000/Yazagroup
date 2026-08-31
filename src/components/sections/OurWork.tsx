import { Reveal } from "../Reveal";

const areas = [
  {
    title: "Technology Staffing",
    copy: "For growing startups building out core engineering capability.",
  },
  {
    title: "Project Augmentation",
    copy: "For enterprise delivery teams under deadline pressure.",
  },
  {
    title: "Specialist Placements",
    copy: "Across cloud, data, and DevOps engagements.",
  },
];

export function OurWork() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
            Our Work
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl md:text-5xl">
            Proof Is in the Placement.
          </h2>
          <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-paper/60">
            We measure our work by what happens after the placement, how
            quickly someone becomes productive, how well they fit the team,
            and whether the client comes back for the next requirement.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mt-14 text-xs font-medium uppercase tracking-[0.14em] text-paper/40">
            Where We Have Delivered
          </p>
        </Reveal>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          {areas.map((a, i) => (
            <Reveal key={a.title} delay={i * 0.1}>
              <div className="h-full rounded-3xl border border-paper/10 p-8 transition-colors hover:border-amber/30">
                <h3 className="font-display text-xl font-medium text-paper">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-paper/50">
                  {a.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.3}>
          <p className="mt-10 text-sm text-paper/40">
            Detailed case studies will be added here as client engagements
            are finalized for publication.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
