import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About — Yaza Group",
  description:
    "Yaza IT Solution and Consulting Private Limited. Founded on the belief that technology hiring deserves the same strategic thinking as every other important business decision.",
};

const facts = [
  { label: "Legal Name", value: "YAZA IT Solution and Consulting Private Limited" },
  { label: "Founded", value: "October 2024" },
  { label: "Incorporated", value: "16 October 2024" },
  { label: "Headquarters", value: "Jaipur, Rajasthan, India" },
  { label: "Founder", value: "Rishiraj Singh Shekhawat" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="About Yaza"
          title="Built Around the Work."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <p className="text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                Yaza Group was founded on a simple belief: technology hiring
                deserves the same strategic thinking as every other important
                business decision.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/60">
              <p>
                Too often, staffing is treated as a transaction — a role
                posted, resumes collected, a placement made. Yaza started
                differently. Every engagement begins with the same question:
                what does this work actually require?
              </p>
              <p>
                That discipline started with strategic staffing — placing the
                right technology professionals into critical roles. But as
                clients returned with harder problems — a stalled project, a
                team stretched thin, a delivery timeline under threat — the
                work naturally evolved. Staffing became augmentation.
                Augmentation became full project teams built around a stack,
                a timeline, and a delivery outcome.
              </p>
              <p>
                Yaza remains a consulting partner first, staffing partner
                second — a distinction that shapes every conversation we
                have, with clients and candidates alike.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                Company Facts
              </p>
            </Reveal>
            <div className="mt-10 divide-y divide-paper/10 border-y border-paper/10">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.05}>
                  <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between">
                    <span className="text-sm font-medium uppercase tracking-wide text-paper/40">
                      {f.label}
                    </span>
                    <span className="font-display text-lg text-paper sm:text-right">
                      {f.value}
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
