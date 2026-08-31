import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Services — Yaza Group",
  description:
    "Staffing and project augmentation, across contract, contract to hire, and permanent engagement models. Consulting first, staffing second.",
};

const services = [
  {
    title: "Staffing",
    copy: "We help businesses bring in professionals who are ready to contribute from day one across development, testing, architecture, cloud, data, and DevOps disciplines.",
    tone: "bg-ink text-paper",
  },
  {
    title: "Project Augmentation",
    copy: "When a project needs more capacity, we deploy professionals who integrate into existing teams and workflows with minimal ramp up time. When a project needs to be built from the ground up, we bring our team to take it from a blank page to delivery.",
    tone: "bg-amber-deep text-paper",
  },
];

const engagementModels = [
  { title: "Contract", copy: "For defined project timelines." },
  { title: "Contract to Hire", copy: "To validate fit before a permanent commitment." },
  { title: "Permanent Hiring", copy: "For core, long term positions." },
];

const process = [
  { n: "01", title: "Understand the requirement, technical and business context alike." },
  { n: "02", title: "Identify professionals who are a genuine fit, not just available." },
  { n: "03", title: "Share a focused shortlist, not a long list." },
  { n: "04", title: "Support onboarding until the fit is proven." },
];

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Services"
          title="Consulting First, Staffing Second."
          copy="We approach every engagement as consultants before we approach it as a staffing provider. That distinction shapes everything, how we scope a role, how we evaluate a fit, and how we measure success."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-10">
            <div className="grid gap-6 md:grid-cols-2">
              {services.map((s, i) => (
                <Reveal key={s.title} delay={i * 0.1}>
                  <div
                    className={`flex h-full min-h-[280px] flex-col justify-between rounded-3xl p-8 sm:p-10 ${s.tone}`}
                  >
                    <span className="text-sm font-medium opacity-50">
                      0{i + 1}
                    </span>
                    <div>
                      <h3 className="font-display text-2xl font-medium leading-snug">
                        {s.title}
                      </h3>
                      <p className="mt-3 text-base leading-relaxed opacity-70">
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

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                How We Work
              </p>
            </Reveal>
            <div className="relative mt-16">
              <div className="absolute left-0 right-0 top-6 hidden h-px bg-ink/10 md:block" />
              <div className="grid gap-10 md:grid-cols-4 md:gap-6">
                {process.map((s, i) => (
                  <Reveal key={s.n} delay={i * 0.1}>
                    <div className="relative">
                      <div className="relative z-10 mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-sm text-ink/70">
                        {s.n}
                      </div>
                      <p className="font-display text-lg font-medium leading-snug text-ink">
                        {s.title}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
