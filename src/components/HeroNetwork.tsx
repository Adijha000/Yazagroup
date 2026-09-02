"use client";

import { motion } from "framer-motion";

type Node = { x: number; y: number; r: number; delay: number; color: string };

const AMBER = "var(--color-amber)";
const SKY = "var(--color-sky-soft)";
const MOSS = "var(--color-moss)";

const nodes: Node[] = [
  { x: 60, y: 90, r: 3.2, delay: 0, color: AMBER },
  { x: 180, y: 40, r: 2.4, delay: 0.15, color: SKY },
  { x: 260, y: 130, r: 4, delay: 0.3, color: AMBER },
  { x: 340, y: 60, r: 2.6, delay: 0.1, color: SKY },
  { x: 400, y: 160, r: 3.4, delay: 0.4, color: MOSS },
  { x: 150, y: 210, r: 2.8, delay: 0.25, color: AMBER },
  { x: 300, y: 260, r: 3, delay: 0.5, color: SKY },
  { x: 90, y: 300, r: 2.4, delay: 0.35, color: MOSS },
  { x: 420, y: 300, r: 2.4, delay: 0.2, color: AMBER },
  { x: 230, y: 330, r: 3.6, delay: 0.55, color: SKY },
];

const edges: [number, number][] = [
  [0, 1],
  [1, 2],
  [2, 3],
  [3, 4],
  [1, 5],
  [2, 5],
  [5, 6],
  [6, 4],
  [5, 7],
  [6, 9],
  [7, 9],
  [6, 8],
  [4, 8],
];

export function HeroNetwork() {
  return (
    <svg
      viewBox="0 0 480 380"
      className="h-full w-full"
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <radialGradient id="nodeGlowAmber" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={AMBER} stopOpacity="0.9" />
          <stop offset="100%" stopColor={AMBER} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlowSky" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={SKY} stopOpacity="0.9" />
          <stop offset="100%" stopColor={SKY} stopOpacity="0" />
        </radialGradient>
        <radialGradient id="nodeGlowMoss" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor={MOSS} stopOpacity="0.9" />
          <stop offset="100%" stopColor={MOSS} stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke={SKY} strokeOpacity="0.22" strokeWidth="1">
        {edges.map(([a, b], i) => {
          const n1 = nodes[a];
          const n2 = nodes[b];
          return (
            <motion.line
              key={i}
              x1={n1.x}
              y1={n1.y}
              x2={n2.x}
              y2={n2.y}
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 0.22 }}
              transition={{ duration: 1.4, delay: 0.4 + i * 0.06, ease: "easeOut" }}
            />
          );
        })}
      </g>

      {nodes.map((n, i) => {
        const glowId =
          n.color === AMBER ? "nodeGlowAmber" : n.color === SKY ? "nodeGlowSky" : "nodeGlowMoss";
        return (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.r * 5} fill={`url(#${glowId})`} opacity="0.35" />
            <motion.circle
              cx={n.x}
              cy={n.y}
              r={n.r}
              fill={n.color}
              initial={{ scale: 0, opacity: 0 }}
              animate={{
                scale: [0, 1.2, 1],
                opacity: 1,
                y: [0, -4, 0],
              }}
              transition={{
                scale: { duration: 0.6, delay: n.delay },
                opacity: { duration: 0.6, delay: n.delay },
                y: {
                  duration: 4 + i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: n.delay + 1,
                },
              }}
            />
          </g>
        );
      })}
    </svg>
  );
}
