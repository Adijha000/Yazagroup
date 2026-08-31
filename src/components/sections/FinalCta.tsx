import Link from "next/link";
import { Reveal } from "../Reveal";

export function FinalCta() {
  return (
    <section className="relative overflow-hidden bg-paper py-28 md:py-36">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute left-1/2 top-0 h-[420px] w-[420px] -translate-x-1/2 rounded-full bg-amber/10 blur-3xl" />
      </div>
      <div className="relative mx-auto max-w-3xl px-6 text-center lg:px-10">
        <Reveal>
          <h2 className="text-balance font-display text-3xl font-medium leading-tight text-ink sm:text-4xl md:text-5xl">
            The right expertise can change what&rsquo;s possible.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-ink/55">
            Whether your requirement is urgent or still taking shape,
            let&rsquo;s understand the work and find the right way forward.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full bg-ink px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:bg-amber-deep"
            >
              Talk to Our Team
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center rounded-full border border-ink/15 px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:border-ink/30"
            >
              Share Your Requirement
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
