"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { HeroNetwork } from "../HeroNetwork";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-ink pt-40 pb-24 md:pt-48 md:pb-32">
      {/* ambient background texture */}
      <div className="pointer-events-none absolute inset-0 opacity-40">
        <div className="absolute -top-40 right-0 h-[560px] w-[560px] rounded-full bg-amber/10 blur-3xl" />
        <div className="absolute bottom-0 left-0 h-[420px] w-[420px] rounded-full bg-moss/20 blur-3xl" />
      </div>
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "radial-gradient(circle, var(--color-paper) 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-paper/15 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.14em] text-paper/60"
            >
              Business Consulting and Services
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="text-balance font-display text-4xl font-medium leading-[1.08] text-paper sm:text-5xl lg:text-6xl"
            >
              Expertise, Right When It Matters.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.22 }}
              className="mt-7 max-w-xl text-balance text-lg leading-relaxed text-paper/65"
            >
              Yaza Group is a business consulting firm helping organizations
              staff critical roles and strengthen project teams, on demand,
              with people who are ready to deliver.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.34 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-amber px-7 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-amber-soft"
              >
                Talk to Our Team
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center rounded-full border border-paper/20 px-7 py-3.5 text-sm font-medium text-paper transition-colors hover:border-paper/40 hover:bg-paper/5"
              >
                Our Services
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative h-[340px] w-full sm:h-[400px] lg:h-[440px]"
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
