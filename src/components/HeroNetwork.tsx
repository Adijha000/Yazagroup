"use client";

import { motion } from "framer-motion";

type Node = { x: number; y: number; r: number; delay: number };

const nodes: Node[] = [
  { x: 60, y: 90, r: 3.2, delay: 0 },
  { x: 180, y: 40, r: 2.4, delay: 0.15 },
  { x: 260, y: 130, r: 4, delay: 0.3 },
  { x: 340, y: 60, r: 2.6, delay: 0.1 },
  { x: 400, y: 160, r: 3.4, delay: 0.4 },
  { x: 150, y: 210, r: 2.8, delay: 0.25 },
  { x: 300, y: 260, r: 3, delay: 0.5 },
  { x: 90, y: 300, r: 2.4, delay: 0.35 },
  { x: 420, y: 300, r: 2.4, delay: 0.2 },
  { x: 230, y: 330, r: 3.6, delay: 0.55 },
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
        <radialGradient id="nodeGlow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--color-amber)" stopOpacity="0.9" />
          <stop offset="100%" stopColor="var(--color-amber)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <g stroke="var(--color-amber)" strokeOpacity="0.28" strokeWidth="1">
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
              animate={{ pathLength: 1, opacity: 0.28 }}
              transition={{ duration: 1.4, delay: 0.4 + i * 0.06, ease: "easeOut" }}
            />
          );
        })}
      </g>

      {nodes.map((n, i) => (
        <g key={i}>
          <circle cx={n.x} cy={n.y} r={n.r * 5} fill="url(#nodeGlow)" opacity="0.35" />
          <motion.circle
            cx={n.x}
            cy={n.y}
            r={n.r}
            fill="var(--color-amber)"
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
      ))}
    </svg>
  );
}
