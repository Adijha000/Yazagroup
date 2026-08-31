import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Yaza Group",
  description:
    "Contract, contract-to-hire, and permanent technology opportunities across India and beyond. A team that listens before placing.",
};

const journey = [
  { n: "01", title: "Share your profile.", copy: "Tell us about your experience and where you want to grow." },
  { n: "02", title: "Tell us what you're looking for.", copy: "Contract, contract-to-hire, or permanent — your call." },
  { n: "03", title: "Get matched to the right opportunities.", copy: "Not every open role. The ones that actually fit." },
  { n: "04", title: "Interview with support.", copy: "Prepared, informed, and never left guessing." },
  { n: "05", title: "Start strong.", copy: "Support continues through the transition, not just the offer." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Build Your Next Chapter With Us."
          copy="Contract opportunities. Contract-to-hire. Permanent roles. Across India and beyond — with a team that listens before placing."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                Your Path Forward
              </p>
              <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Your Next Role Should Fit More Than Your Resume.
              </h2>
            </Reveal>

            <div className="relative mt-16">
              <div className="absolute left-[23px] top-2 bottom-2 w-px bg-ink/10" />
              <div className="space-y-10">
                {journey.map((j, i) => (
                  <Reveal key={j.n} delay={i * 0.08}>
                    <div className="relative flex items-start gap-6">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-ink/15 bg-paper font-display text-sm text-ink/70">
                        {j.n}
                      </div>
                      <div className="pt-2">
                        <p className="font-display text-xl font-medium text-ink">
                          {j.title}
                        </p>
                        <p className="mt-1.5 text-sm text-ink/50">{j.copy}</p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
            <Reveal>
              <h2 className="text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
                Ready to build your next chapter?
              </h2>
              <p className="mx-auto mt-6 max-w-md text-balance text-lg leading-relaxed text-paper/60">
                Share your profile and tell us what you&rsquo;re looking for
                — we&rsquo;ll take it from there.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber-soft"
                >
                  Submit Your Profile
                </Link>
              </div>
            </Reveal>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
