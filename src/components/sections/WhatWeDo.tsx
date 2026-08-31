import { Reveal } from "../Reveal";

const services = [
  {
    title: "Strategic Staffing",
    copy: "The right professionals for critical technology roles.",
    tone: "bg-ink text-paper",
  },
  {
    title: "Project Augmentation",
    copy: "Additional expertise and capacity for teams already moving.",
    tone: "bg-moss-deep text-paper",
  },
  {
    title: "Complete Project Teams",
    copy: "The people and capabilities needed to take an initiative from idea to delivery.",
    tone: "bg-amber-deep text-paper",
  },
];

export function WhatWeDo() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
            What We Do
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            Expertise, Built Around the Work.
          </h2>
        </Reveal>

        <div className="mt-16 grid gap-6 md:grid-cols-3">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.1}>
              <div
                className={`group relative flex h-full min-h-[320px] flex-col justify-between overflow-hidden rounded-3xl p-8 transition-transform duration-500 hover:-translate-y-1.5 ${s.tone}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/5 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                <span className="text-sm font-medium opacity-50">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="font-display text-2xl font-medium leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-70">
                    {s.copy}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
