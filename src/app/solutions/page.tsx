import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FinalCta } from "@/components/sections/FinalCta";
import { IconPeople, IconLayers } from "@/components/Icons";

export const metadata: Metadata = {
  title: "Solutions — Yaza Group",
  description:
    "Individual specialists or full project teams, shaped around the work, not a template.",
};

const audiences = [
  "Startups scaling their technology teams",
  "Enterprises managing complex, multi phase projects",
  "Organizations, in India and beyond, seeking a dependable talent partner",
];

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Solutions"
          title="Shaped Around the Work, Not a Template."
          copy="Some engagements need one specialist. Others need a full team. We size the solution to the problem, not the other way around."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 p-10">
                  <div>
                    <IconPeople className="mb-5 h-9 w-9 text-amber-deep" />
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                      One Requirement
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-medium leading-snug text-ink">
                      Individual Specialists
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink/55">
                      Developers, testers, architects, cloud and data
                      professionals, DevOps specialists, brought in for the
                      specific expertise a role demands.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-10 text-paper">
                  <div>
                    <IconLayers className="mb-5 h-9 w-9 text-amber" />
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                      A Full Delivery Effort
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-medium leading-snug">
                      Full Project Teams
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-paper/60">
                      Assembled around your stack, timeline, and delivery
                      expectations, so a new initiative can move from day
                      one.
                    </p>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                Who We Work With
              </p>
            </Reveal>
            <div className="mt-10 divide-y divide-paper/10 border-y border-paper/10">
              {audiences.map((a, i) => (
                <Reveal key={a} delay={i * 0.08}>
                  <p className="py-7 text-balance font-display text-xl font-medium leading-snug text-paper sm:text-2xl">
                    {a}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <Ecosystem />
        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
