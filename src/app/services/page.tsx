import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Services — Yaza Group",
  description:
    "Strategic Staffing, Project Augmentation, and Complete Project Teams — contract, contract-to-hire, and permanent, always consulting-first.",
};

const services = [
  {
    title: "Strategic Staffing",
    copy: "The right professionals for critical technology roles — sourced against the actual requirement, not a keyword match.",
    tone: "bg-ink text-paper",
  },
  {
    title: "Project Augmentation",
    copy: "Additional expertise and capacity for teams already moving, brought in without disrupting how they work.",
    tone: "bg-moss-deep text-paper",
  },
  {
    title: "Complete Project Teams",
    copy: "The people and capabilities needed to take an initiative from idea to delivery, assembled around a stack and a timeline.",
    tone: "bg-amber-deep text-paper",
  },
];

const engagementModels = [
  {
    title: "Contract",
    copy: "Defined-term expertise for a specific project, deliverable, or capacity gap.",
  },
  {
    title: "Contract to Hire",
    copy: "A structured way to evaluate fit on real work before making a permanent decision.",
  },
  {
    title: "Permanent Hiring",
    copy: "Long-term technology professionals matched against your team's actual needs, not a generic role brief.",
  },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="The Right Capability. For the Work Ahead."
          copy="Every engagement starts with the same question — what does the work actually require? The service model follows from the answer."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-3">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div
                    className={`flex h-full min-h-[300px] flex-col justify-between rounded-3xl p-8 ${s.tone}`}
                  >
                    <span className="text-sm font-medium opacity-50">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-sm leading-relaxed opacity-70">
                        {s.copy}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                Engagement Models
              </p>
              <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
                Shaped to how you need to move.
              </h2>
            </Reveal>

            <div className="mt-14 divide-y divide-paper/10 border-y border-paper/10">
              {engagementModels.map((e, i) => (
                <Reveal key={e.title} delay={i * 0.08}>
                  <div className="flex flex-col gap-2 py-8 md:flex-row md:items-baseline md:justify-between md:gap-8">
                    <h3 className="font-display text-2xl font-medium text-paper sm:text-3xl">
                      {e.title}
                    </h3>
                    <p className="max-w-md text-paper/50 md:text-right">
                      {e.copy}
                    </p>
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
