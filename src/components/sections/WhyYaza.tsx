import { Reveal } from "../Reveal";

const pillars = [
  { title: "Consulting Led", copy: "We start with the problem, not the resume." },
  { title: "Global Reach", copy: "A network that extends across India and beyond." },
  { title: "Precision", copy: "Fewer profiles, better matches." },
  { title: "Reliability", copy: "The same discipline, every engagement." },
  { title: "Range", copy: "Any IT role, any technology stack." },
];

export function WhyYaza() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
            Why Choose Us
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            A Partner Who Understands the Work.
          </h2>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink/55">
            Filling a role is easy. Understanding what a project truly
            needs before filling it takes more care, and that is where we
            choose to spend our effort.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-px overflow-hidden rounded-3xl border border-ink/10 bg-ink/10 sm:grid-cols-2 lg:grid-cols-5">
          {pillars.map((p, i) => (
            <Reveal key={p.title} delay={i * 0.06} y={16}>
              <div className="flex h-full flex-col gap-3 bg-paper p-7">
                <span className="font-display text-lg font-medium text-ink">
                  {p.title}
                </span>
                <p className="text-sm leading-relaxed text-ink/50">
                  {p.copy}
                </p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2} className="mt-16">
          <p className="text-balance text-center font-display text-2xl font-medium leading-snug text-ink sm:text-3xl md:text-4xl">
            We do not fill positions.
            <br />
            We build teams that work.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
