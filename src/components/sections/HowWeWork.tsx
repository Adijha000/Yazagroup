import { Reveal } from "../Reveal";

const steps = [
  {
    n: "01",
    title: "Understand the requirement.",
    copy: "Technical and business context alike.",
  },
  {
    n: "02",
    title: "Identify genuine fit.",
    copy: "Not simply available talent.",
  },
  {
    n: "03",
    title: "Share a focused shortlist.",
    copy: "Fewer profiles. Better matches.",
  },
  {
    n: "04",
    title: "Support the transition.",
    copy: "Until the fit is proven.",
  },
];

export function HowWeWork() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
            How We Work
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            A precise, unhurried process.
          </h2>
        </Reveal>

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 md:block" />
          <div className="grid gap-10 md:grid-cols-4 md:gap-6">
            {steps.map((s, i) => (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="relative">
                  <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-sm text-ink/70">
                    {s.n}
                  </div>
                  <h3 className="font-display text-xl font-medium leading-snug text-ink">
                    {s.title}
                  </h3>
                  <p className="mt-2 text-sm text-ink/50">{s.copy}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
