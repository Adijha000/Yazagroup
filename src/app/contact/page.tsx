import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { ContactForm } from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — Yaza Group",
  description: "Whether the need is urgent or still taking shape, we are ready to listen.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative overflow-hidden bg-ink pt-40 pb-24 md:pt-48 md:pb-32">
          <div className="pointer-events-none absolute inset-0 opacity-40">
            <div className="absolute -top-40 right-0 h-[480px] w-[480px] rounded-full bg-amber/10 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 lg:px-10">
            <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
              <div>
                <Reveal>
                  <p className="mb-6 text-xs font-medium uppercase tracking-[0.14em] text-amber">
                    Contact
                  </p>
                  <h1 className="text-balance font-display text-4xl font-medium leading-[1.1] text-paper sm:text-5xl">
                    Let&rsquo;s Talk.
                  </h1>
                  <p className="mt-6 max-w-sm text-balance text-lg leading-relaxed text-paper/60">
                    Whether the need is urgent or still taking shape, we are
                    ready to listen.
                  </p>

                  <div className="mt-12 space-y-6 border-t border-paper/10 pt-8">
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/40">
                        Office
                      </p>
                      <p className="mt-2 font-display text-lg text-paper">
                        Jaipur, Rajasthan, India
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/40">
                        Email
                      </p>
                      <p className="mt-2 font-display text-lg text-paper/50">
                        [ configure contact email ]
                      </p>
                    </div>
                    <div>
                      <p className="text-xs font-medium uppercase tracking-[0.14em] text-paper/40">
                        Phone
                      </p>
                      <p className="mt-2 font-display text-lg text-paper/50">
                        [ configure contact number ]
                      </p>
                    </div>
                  </div>
                </Reveal>
              </div>

              <Reveal delay={0.15}>
                <div className="rounded-3xl border border-paper/10 bg-paper/[0.03] p-8 sm:p-10">
                  <ContactForm />
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
