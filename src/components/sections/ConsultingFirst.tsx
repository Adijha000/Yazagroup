import { Reveal } from "../Reveal";

const steps = [
  { label: "Requirement", detail: "What the project actually needs." },
  { label: "Understanding", detail: "The context, timeline, and constraints." },
  { label: "Expertise", detail: "The specific capability the work calls for." },
  { label: "Right Fit", detail: "The person or team that matches, not just fills." },
];

export function ConsultingFirst() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
              The Yaza Way
            </p>
            <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl md:text-[2.75rem]">
              Consulting First.
              <br />
              Staffing Second.
            </h2>
            <p className="mt-6 max-w-md text-balance text-lg leading-relaxed text-paper/60">
              We approach every engagement as consultants before we
              approach it as a staffing provider. That distinction shapes
              everything, how we scope a role, how we evaluate a fit, and
              how we measure success.
            </p>
          </Reveal>

          <div className="relative">
            <div className="absolute left-[15px] top-3 bottom-3 w-px bg-paper/15 md:left-[19px]" />
            <div className="space-y-10">
              {steps.map((s, i) => (
                <Reveal key={s.label} delay={i * 0.1}>
                  <div className="relative flex items-start gap-6 pl-0">
                    <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-amber/50 bg-ink text-xs font-medium text-amber md:h-10 md:w-10">
                      {i + 1}
                    </div>
                    <div className="pt-1">
                      <p className="font-display text-xl font-medium text-paper">
                        {s.label}
                      </p>
                      <p className="mt-1.5 text-sm text-paper/50">{s.detail}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
