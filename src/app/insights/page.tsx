import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: "Insights — Yaza Group",
  description: "Perspectives on technology staffing, augmentation, and building teams that work.",
};

const insights = [
  {
    title: "Why the best hires rarely come from a job board",
    topic: "Strategic Staffing",
  },
  {
    title: "Contract to hire as a smarter way to decide",
    topic: "Engagement Models",
  },
  {
    title: "Why augmentation is not a backup plan",
    topic: "Project Augmentation",
  },
  {
    title: "Reducing time to hire without lowering the bar",
    topic: "Consulting First",
  },
  {
    title: "What makes technical interviews useful",
    topic: "Hiring Process",
  },
  {
    title: "Planning headcount alongside growth",
    topic: "Workforce Planning",
  },
];

export default function InsightsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Insights"
          title="Perspectives Worth Sharing."
          copy="Strategic thinking on technology talent, drawn from how we actually work with clients and candidates."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-4xl px-6 lg:px-10">
            <div className="divide-y divide-ink/10 border-y border-ink/10">
              {insights.map((post, i) => (
                <Reveal key={post.title} delay={i * 0.06}>
                  <div className="group flex cursor-default flex-col gap-2 py-8 transition-colors sm:flex-row sm:items-baseline sm:justify-between sm:gap-8">
                    <span className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep sm:w-48 sm:shrink-0">
                      {post.topic}
                    </span>
                    <h3 className="font-display text-xl font-medium leading-snug text-ink transition-colors group-hover:text-amber-deep sm:text-2xl">
                      {post.title}
                    </h3>
                  </div>
                </Reveal>
              ))}
            </div>
            <Reveal delay={0.4}>
              <p className="mt-10 text-sm text-ink/40">
                Full essays are coming soon. Reach out if you&rsquo;d like to
                discuss any of these topics directly.
              </p>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
