type LogoMarkProps = {
  className?: string;
  variant?: "light" | "dark";
};

/**
 * Yaza Group brand symbol.
 * Right hemisphere: radiating sun ticks (energy, new beginnings).
 * Left hemisphere: a solid arc (world / earth) whose inner edge is cut
 * with a soft asymmetric curve — a quiet, non-literal echo of a coastline.
 * Interior: three connected nodes (AI / expertise network) orbiting a
 * central hub, drawn with the same organic curvature as the earth arc.
 */
export function LogoMark({ className, variant = "dark" }: LogoMarkProps) {
  const ink = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";
  const amber = "var(--color-amber)";

  return (
    <svg
      viewBox="0 0 96 96"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Yaza Group"
    >
      {/* outer ring */}
      <circle
        cx="48"
        cy="48"
        r="34"
        stroke={ink}
        strokeWidth="1.4"
        opacity="0.35"
      />

      {/* left hemisphere: solid earth arc with an asymmetric inner cut */}
      <path
        d="M48 14
           A34 34 0 0 0 48 82
           C41 76 36.5 66 38 55
           C39.3 45.5 35 39 30.5 33
           C36.5 22 41.5 16 48 14 Z"
        fill={ink}
      />

      {/* right hemisphere: radiating sun ticks */}
      <g stroke={amber} strokeWidth="2.2" strokeLinecap="round">
        <line x1="48" y1="10" x2="48" y2="17" />
        <line x1="63.5" y1="14.5" x2="60" y2="20.5" />
        <line x1="75" y1="26" x2="68.5" y2="30" />
        <line x1="80" y1="41.5" x2="73" y2="42.7" />
        <line x1="80" y1="54.5" x2="73" y2="53.3" />
        <line x1="75" y1="70" x2="68.5" y2="66" />
        <line x1="63.5" y1="81.5" x2="60" y2="75.5" />
        <line x1="48" y1="86" x2="48" y2="79" />
      </g>

      {/* central hub */}
      <circle cx="48" cy="48" r="3.4" fill={amber} />

      {/* expertise network nodes */}
      <g fill={amber}>
        <circle cx="61" cy="40" r="2.1" />
        <circle cx="60" cy="59" r="2.1" />
        <circle cx="52" cy="66" r="1.7" opacity="0.8" />
      </g>
      <g stroke={amber} strokeWidth="1.1" opacity="0.65">
        <line x1="50.4" y1="46.6" x2="59.2" y2="40.8" />
        <line x1="50.4" y1="49.6" x2="58.2" y2="58.4" />
        <line x1="58.2" y1="60.6" x2="53.2" y2="65.2" />
      </g>
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  variant?: "light" | "dark";
};

export function Logo({
  className,
  markClassName = "h-9 w-9",
  wordmarkClassName = "text-xl",
  variant = "dark",
}: LogoProps) {
  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={markClassName} variant={variant} />
      <span
        className={`font-display font-medium tracking-tight ${wordmarkClassName}`}
        style={{ color: variant === "dark" ? "var(--color-ink)" : "var(--color-paper)" }}
      >
        Yaza<span style={{ color: "var(--color-amber)" }}>.</span>
      </span>
    </span>
  );
}
