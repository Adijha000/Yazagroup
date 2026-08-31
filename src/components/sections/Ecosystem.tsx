"use client";

import { motion } from "framer-motion";
import { Reveal } from "../Reveal";

const capabilities = [
  "Development",
  "Testing & QA",
  "Architecture",
  "Cloud",
  "Data",
  "DevOps",
  "Business Analysis",
  "Product",
  "Security",
  "Platform Engineering",
];

export function Ecosystem() {
  return (
    <section className="bg-ink py-28 md:py-36">
      <div className="mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <Reveal>
          <p className="text-xs font-medium uppercase tracking-[0.14em] text-amber">
            The Expertise Ecosystem
          </p>
          <h2 className="mt-5 text-balance font-display text-3xl font-medium leading-tight text-paper sm:text-4xl md:text-5xl">
            Any Role. Any Technology.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-balance text-lg leading-relaxed text-paper/60">
            We are not built around a fixed list of skills. We are built
            around understanding what the work requires.
          </p>
        </Reveal>

        <div className="mt-16 flex flex-wrap justify-center gap-3">
          {capabilities.map((c, i) => (
            <motion.span
              key={c}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              whileHover={{ scale: 1.06 }}
              className="cursor-default rounded-full border border-paper/15 px-5 py-2.5 text-sm text-paper/80 transition-colors hover:border-amber/50 hover:bg-amber/10 hover:text-amber"
            >
              {c}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
