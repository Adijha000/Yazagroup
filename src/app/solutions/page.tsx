import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { Ecosystem } from "@/components/sections/Ecosystem";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Solutions — Yaza Group",
  description:
    "Individual specialists or full project teams — shaped around the work, not a template.",
};

export default function SolutionsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Solutions"
          title="Shaped Around the Work. Not a Template."
          copy="Some requirements need one specific expert. Others need a full team built around a stack, a timeline, and a delivery outcome. We start by understanding which."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              <Reveal>
                <div className="flex h-full flex-col justify-between rounded-3xl border border-ink/10 p-10">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                      One Requirement
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-medium leading-snug text-ink">
                      Individual Specialists
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-ink/55">
                      Specific expertise for specific requirements — a
                      senior engineer, an architect, a data specialist —
                      matched against the exact gap in your team.
                    </p>
                  </div>
                </div>
              </Reveal>

              <Reveal delay={0.1}>
                <div className="flex h-full flex-col justify-between rounded-3xl bg-ink p-10 text-paper">
                  <div>
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                      A Full Delivery Effort
                    </span>
                    <h3 className="mt-4 font-display text-3xl font-medium leading-snug">
                      Full Project Teams
                    </h3>
                    <p className="mt-4 text-lg leading-relaxed text-paper/60">
                      Complete capabilities built around a stack, a
                      timeline, and a delivery requirement — assembled to
                      move as one team from day one.
                    </p>
                  </div>
                </div>
              </Reveal>
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
