import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "About Us — Yaza Group",
  description:
    "Yaza IT Solution and Consulting Private Limited. Founded on the belief that technology hiring deserves the same strategic thinking as any other business decision.",
};

const facts = [
  { label: "Legal Name", value: "YAZA IT Solution and Consulting Private Limited" },
  { label: "Incorporation Date", value: "16 October 2024" },
  { label: "Industry", value: "Business Consulting and Services" },
  { label: "Headquarters", value: "Jaipur, Rajasthan" },
  { label: "Registered Address", value: "Ansal Sushant City, Kalwar Road, Jaipur, 303706" },
  { label: "Founder", value: "Rishiraj Singh Shekhawat" },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero eyebrow="About Us" title="Who We Are." />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <p className="text-balance font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                Yaza Group is a business consulting and services firm built
                around a simple belief, that the right people make the
                difference between a project that struggles and one that
                succeeds.
              </p>
            </Reveal>
            <Reveal delay={0.1} className="mt-8 space-y-5 text-lg leading-relaxed text-ink/60">
              <p>
                We work with organizations that need to strengthen a team
                quickly, whether through a single specialist or a complete
                project team. We know that finding experienced talent takes
                time, especially under pressure. So we stay ready. Our
                network of experienced professionals means we can respond
                quickly, without cutting corners on fit.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                Our Story
              </p>
              <p className="mt-6 text-lg leading-relaxed text-paper/65">
                Founded in October 2024 and based in Jaipur, Yaza Group began
                with a straightforward idea, that technology hiring deserves
                the same strategic thinking as any other business decision.
                That idea has shaped how we work with every client since,
                with reach that now extends well beyond India.
              </p>
              <p className="mt-5 text-lg leading-relaxed text-paper/65">
                Over time, our work naturally grew beyond staffing alone.
                Clients began asking us to do more than find people, they
                wanted a partner who could understand a project deeply
                enough to support it directly. That is how project
                augmentation became part of who we are. We take the time to
                understand what a project actually needs, and bring in our
                own team of developers, testers, architects, business
                analysts, and other specialists to support and complete
                work already underway. We take on new projects the same
                way, building them from the ground up when a client needs a
                team, not just a hire.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 text-center lg:px-10">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                Our Approach
              </p>
              <p className="mt-6 text-balance font-display text-2xl italic font-medium leading-snug text-ink sm:text-3xl">
                The right project starts with the right people.
              </p>
              <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink/60">
                We take time to understand what a client actually needs,
                the skills, the context, the timeline, before we suggest a
                single person. It takes a little longer upfront. It saves
                considerably more later.
              </p>
            </Reveal>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                Company Details
              </p>
            </Reveal>
            <div className="mt-10 divide-y divide-paper/10 border-y border-paper/10">
              {facts.map((f, i) => (
                <Reveal key={f.label} delay={i * 0.05}>
                  <div className="flex flex-col gap-1 py-6 sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="shrink-0 text-sm font-medium uppercase tracking-wide text-paper/40">
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
