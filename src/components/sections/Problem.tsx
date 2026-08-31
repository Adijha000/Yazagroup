import { Reveal } from "../Reveal";

const moments = [
  "A project needs another pair of hands.",
  "A critical role stays open too long.",
  "A deadline gets closer.",
  "The existing team needs capacity.",
];

export function Problem() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <h2 className="text-balance text-center font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            Growth creates new pressure.
          </h2>
        </Reveal>

        <div className="mt-14 space-y-5">
          {moments.map((m, i) => (
            <Reveal key={m} delay={i * 0.08}>
              <p className="text-balance text-center font-display text-xl italic leading-relaxed text-ink/55 sm:text-2xl">
                {m}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.4} className="mt-16">
          <p className="text-center text-base text-ink/50">
            Businesses face these moments every day.
          </p>
          <p className="mt-3 text-balance text-center font-display text-2xl font-medium text-ink sm:text-3xl">
            Yaza steps in when the work demands more.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
