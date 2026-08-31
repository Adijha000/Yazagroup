import { Reveal } from "./Reveal";

export function PageHero({
  eyebrow,
  title,
  copy,
}: {
  eyebrow: string;
  title: string;
  copy?: string;
}) {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-20 md:pt-48 md:pb-24">
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-amber/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        <Reveal>
          <p className="mb-6 text-xs font-medium uppercase tracking-[0.14em] text-amber">
            {eyebrow}
          </p>
          <h1 className="text-balance font-display text-4xl font-medium leading-[1.1] text-paper sm:text-5xl md:text-6xl">
            {title}
          </h1>
          {copy && (
            <p className="mt-6 max-w-xl text-balance text-lg leading-relaxed text-paper/60">
              {copy}
            </p>
          )}
        </Reveal>
      </div>
    </section>
  );
}
