import { Reveal } from "../Reveal";

const reasons = [
  "A consulting mindset, not a transactional one",
  "Global reach, with strong roots across India",
  "Speed that never comes before fit",
  "Talent across diverse technology stacks",
  "A partner for the long run, not just the next hire",
];

export function WhyBusinesses() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <Reveal className="max-w-2xl">
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl md:text-5xl">
            Why Businesses Work With Us.
          </h2>
        </Reveal>

        <div className="mt-14 divide-y divide-paper/10 border-y border-paper/10">
          {reasons.map((r, i) => (
            <Reveal key={r} delay={i * 0.06}>
              <p className="py-6 text-balance font-display text-xl font-medium leading-snug text-paper sm:text-2xl">
                {r}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
