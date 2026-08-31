import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Insights — Yaza Group",
  description:
    "Practical thinking on talent, teams, and technology delivery, written for the people who build businesses, not just the people who staff them.",
};

const essays = [
  {
    title: "Why the Best Hires Rarely Come From a Job Board",
    body: "The strongest technology professionals are rarely searching. They are working, delivering, and quietly open to the right opportunity, if someone happens to ask. Job boards catch people between roles. Real networks catch people at their best. This is the quiet advantage of working with a partner who already knows where to look, and who to call first.",
  },
  {
    title: "Contract to Hire, a Smarter Way to Decide",
    body: "Permanent hiring asks you to be certain before you have any real evidence. The contract to hire flips that order. You watch someone work before you commit to them long term, and the decision that follows is no longer a guess. For roles where fit matters as much as skill, that difference is worth the extra step.",
  },
  {
    title: "Augmentation Is Not a Backup Plan",
    body: "Teams often reach for augmentation only when a deadline is already at risk. Used proactively, it is not a rescue measure, it is a growth lever, capacity added exactly where a project needs it, without the long runway of a permanent hire. The businesses that use it well treat it as strategy, not emergency response.",
  },
];

const moreOnTheWay = [
  "Reducing time to hire without lowering the bar",
  "What makes a technical interview actually useful",
  "Planning headcount alongside growth, not after it",
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Perspectives Worth Sharing."
          copy="Practical thinking on talent, teams, and technology delivery, written for the people who build businesses, not just the people who staff them."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl divide-y divide-ink/10 px-6 lg:px-10">
            {essays.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.1}>
                <article className="py-12 first:pt-0">
                  <h2 className="font-display text-2xl font-medium leading-snug text-ink sm:text-3xl">
                    {e.title}
                  </h2>
                  <p className="mt-5 text-lg leading-relaxed text-ink/60">
                    {e.body}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        <section className="bg-ink py-20 md:py-28">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                More on the Way
              </p>
              <ul className="mt-6 space-y-4">
                {moreOnTheWay.map((m) => (
                  <li
                    key={m}
                    className="font-display text-xl font-medium text-paper/80 sm:text-2xl"
                  >
                    {m}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
