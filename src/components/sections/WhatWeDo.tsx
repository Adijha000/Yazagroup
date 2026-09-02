import { Reveal } from "../Reveal";
import { IconPeople, IconLayers, IconHandshake, IconRocket } from "../Icons";

const services = [
  {
    title: "Staffing",
    copy: "For roles that need the right people, not just any person.",
    tone: "bg-ink text-paper",
    Icon: IconPeople,
  },
  {
    title: "Project Augmentation",
    copy: "For teams that need more capacity without more overhead.",
    tone: "bg-moss-deep text-paper",
    Icon: IconLayers,
  },
  {
    title: "Engagement Models",
    copy: "Contract, Contract to Hire, and Permanent engagement models.",
    tone: "bg-amber-deep text-paper",
    Icon: IconHandshake,
  },
  {
    title: "Ready to Deliver",
    copy: "Access to experienced professionals, ready to start quickly.",
    tone: "bg-moss text-ink",
    Icon: IconRocket,
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

        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((s, i) => (
            <Reveal key={s.title} delay={i * 0.08}>
              <div
                className={`group relative flex h-full min-h-[260px] flex-col justify-between overflow-hidden rounded-3xl p-7 transition-transform duration-500 hover:-translate-y-1.5 ${s.tone}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-white/10 blur-2xl transition-opacity duration-500 group-hover:opacity-80" />
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium opacity-50">
                    0{i + 1}
                  </span>
                  <s.Icon className="h-8 w-8 opacity-80 transition-transform duration-500 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="font-display text-xl font-medium leading-snug">
                    {s.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed opacity-75">
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
