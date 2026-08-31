import { Reveal } from "../Reveal";

export function Problem() {
  return (
    <section className="bg-paper py-28 md:py-36">
      <div className="mx-auto max-w-3xl px-6 lg:px-10">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
            Introduction
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
            Every growing business eventually faces the same question: how
            do you scale without losing quality.
          </h2>
        </Reveal>

        <Reveal delay={0.12} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/55">
          <p>
            For some, it shows up as a project that needs an extra set of
            hands. For others, it is a role that has stayed open too long.
            Yaza Group works alongside businesses through both moments,
            bringing the right people into the right projects, at the right
            time.
          </p>
          <p>
            We operate as a consulting partner first. We start by
            understanding the problem, what the project needs, what the
            team is missing, and what success looks like once the right
            person is in place.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
