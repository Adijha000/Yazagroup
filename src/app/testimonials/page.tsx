import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { PageHero } from "@/components/PageHero";
import { Reveal } from "@/components/Reveal";
import { FinalCta } from "@/components/sections/FinalCta";

export const metadata: Metadata = {
  title: "Client Testimonials — Yaza Group",
  description: "What our clients say about working with Yaza Group.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHero
          eyebrow="Client Testimonials"
          title="What Our Clients Say."
          copy="As our client relationships grow, this page will carry their voice, direct feedback on what it is like to work with Yaza Group."
        />

        <section className="bg-paper py-24 md:py-32">
          <div className="mx-auto max-w-3xl px-6 lg:px-10">
            <Reveal>
              <div className="rounded-3xl border border-dashed border-ink/20 p-10 text-center sm:p-14">
                <p className="font-display text-2xl italic leading-relaxed text-ink/40 sm:text-3xl">
                  &ldquo;Client quote&rdquo;
                </p>
                <p className="mt-6 text-sm font-medium uppercase tracking-[0.12em] text-ink/35">
                  Name, Designation, Company
                </p>
                <p className="mt-2 text-xs text-ink/30">
                  Company logo, where permitted
                </p>
              </div>
              <p className="mt-8 text-center text-sm text-ink/40">
                Testimonials will be added here as client relationships are
                confirmed for publication.
              </p>
            </Reveal>
          </div>
        </section>

        <FinalCta />
      </main>
      <Footer />
    </>
  );
}
