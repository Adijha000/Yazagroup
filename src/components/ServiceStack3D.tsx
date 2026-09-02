"use client";

import { motion } from "framer-motion";
import { IconPeople, IconLayers, IconContract } from "./Icons";

const cards = [
  {
    label: "Strategic Staffing",
    tag: "Roles filled with intent",
    Icon: IconPeople,
    accent: "var(--color-amber)",
    x: -34,
    y: 10,
    rotate: -9,
    z: 10,
    delay: 0.15,
    float: 3.6,
  },
  {
    label: "Project Augmentation",
    tag: "Capacity, on demand",
    Icon: IconLayers,
    accent: "var(--color-sky-soft)",
    x: 26,
    y: -34,
    rotate: 6,
    z: 40,
    delay: 0.32,
    float: 4.4,
  },
  {
    label: "Engagement Models",
    tag: "Contract to permanent",
    Icon: IconContract,
    accent: "var(--color-moss)",
    x: 10,
    y: 62,
    rotate: -3,
    z: 70,
    delay: 0.48,
    float: 5,
  },
];

export function ServiceStack3D() {
  return (
    <div
      className="relative h-full w-full"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute inset-0 flex items-center justify-center">
        {cards.map((c) => (
          <motion.div
            key={c.label}
            initial={{ opacity: 0, y: c.y + 30, rotate: c.rotate, scale: 0.9 }}
            animate={{
              opacity: 1,
              y: [c.y, c.y - 10, c.y],
              rotate: c.rotate,
              scale: 1,
            }}
            transition={{
              opacity: { duration: 0.7, delay: c.delay },
              scale: { duration: 0.7, delay: c.delay },
              y: {
                duration: c.float,
                repeat: Infinity,
                ease: "easeInOut",
                delay: c.delay + 0.6,
              },
            }}
            style={{
              x: c.x,
              zIndex: c.z,
              transformStyle: "preserve-3d",
            }}
            className="absolute w-[230px] rounded-2xl border border-paper/15 bg-paper/[0.06] p-5 shadow-2xl backdrop-blur-md sm:w-[250px]"
          >
            <div
              className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl"
              style={{
                backgroundColor: `color-mix(in srgb, ${c.accent} 22%, transparent)`,
                color: c.accent,
              }}
            >
              <c.Icon className="h-5 w-5" />
            </div>
            <p className="font-display text-base font-medium leading-snug text-paper">
              {c.label}
            </p>
            <p className="mt-1 text-xs text-paper/50">{c.tag}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
