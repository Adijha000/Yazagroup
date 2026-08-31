import { Reveal } from "../Reveal";

const stats = [
  { value: "Global", label: "Client Reach" },
  { value: "2024", label: "Founded" },
  { value: "Consulting", label: "Our Core" },
  { value: "Jaipur", label: "Headquartered" },
];

export function StatsBar() {
  return (
    <section className="bg-paper py-16 md:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08} y={14}>
              <div className="text-center sm:text-left">
                <p className="font-display text-3xl font-medium text-ink sm:text-4xl">
                  {s.value}
                </p>
                <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.12em] text-ink/40">
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
