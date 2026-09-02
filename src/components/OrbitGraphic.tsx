"use client";

import { motion } from "framer-motion";

export function OrbitGraphic({ className }: { className?: string }) {
  return (
    <div className={className} style={{ perspective: "800px" }}>
      <motion.div
        className="relative h-full w-full"
        style={{ transformStyle: "preserve-3d" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border border-amber/25"
          style={{ rotateX: 68, rotateZ: -12 }}
          animate={{ rotateZ: [-12, 348] }}
          transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1.5 left-1/2 h-3 w-3 -translate-x-1/2 rounded-full bg-amber shadow-[0_0_16px_2px_var(--color-amber)]" />
        </motion.div>
        <motion.div
          className="absolute inset-6 rounded-full border border-sky-soft/25"
          style={{ rotateX: 68, rotateZ: 40 }}
          animate={{ rotateZ: [40, -320] }}
          transition={{ duration: 34, repeat: Infinity, ease: "linear" }}
        >
          <span className="absolute -top-1.5 left-1/2 h-2.5 w-2.5 -translate-x-1/2 rounded-full bg-sky-soft shadow-[0_0_14px_2px_var(--color-sky-soft)]" />
        </motion.div>
        <div className="absolute inset-14 rounded-full border border-moss/20" />
      </motion.div>
    </div>
  );
}
