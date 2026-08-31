import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Careers — Yaza Group",
  description:
    "Opportunities across contract, contract to hire, and permanent roles. A team that listens before it places you.",
};

const reasons = [
  "Opportunities across contract, contract to hire, and permanent roles",
  "Clients across India and beyond",
  "A team that listens before it places you",
];

const journey = [
  { n: "01", title: "Share your profile." },
  { n: "02", title: "Talk to us about what you are looking for." },
  { n: "03", title: "Get matched to roles that genuinely fit." },
  { n: "04", title: "Interview with our support alongside you." },
  { n: "05", title: "Start strong, with us still checking in." },
];

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Careers"
          title="Build Your Next Chapter With Us."
          copy="If you are an experienced technology professional exploring your next opportunity, we would like to know your story."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber-deep">
                Why Professionals Choose Yaza Group
              </p>
            </Reveal>
            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {reasons.map((r, i) => (
                <Reveal key={r} delay={i * 0.08}>
                  <p className="rounded-2xl border border-ink/10 p-6 text-lg leading-relaxed text-ink/70">
                    {r}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-ink py-24 md:py-32">
          <div className="mx-auto max-w-6xl px-6 lg:px-10">
            <Reveal className="max-w-xl">
              <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
                How It Works
              </p>
              <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl">
                Your Next Role Should Fit More Than Your Resume.
              </h2>
            </Reveal>

            <div className="relative mt-16">
              <div className="absolute left-[23px] top-2 bottom-2 w-px bg-paper/10" />
              <div className="space-y-10">
                {journey.map((j, i) => (
                  <Reveal key={j.n} delay={i * 0.08}>
                    <div className="relative flex items-start gap-6">
                      <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-amber/40 bg-ink font-display text-sm text-amber">
                        {j.n}
                      </div>
                      <p className="pt-3 font-display text-xl font-medium text-paper">
                        {j.title}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-2xl px-6 text-center lg:px-10">
            <Reveal>
              <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl">
                Ready to build your next chapter?
              </h2>
              <p className="mx-auto mt-6 max-w-md text-balance text-lg leading-relaxed text-ink/55">
                Share your profile and tell us what you are looking for. We
                will take it from there.
              </p>
              <div className="mt-10">
                <Link
                  href="/contact"
                  className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-amber-deep"
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
