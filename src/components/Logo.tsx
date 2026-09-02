type LogoMarkProps = {
  className?: string;
  variant?: "light" | "dark";
};

const INDIA_PATH =
  "M98.0 30.0 L103.1 40.0 L110.8 48.0 L121.0 56.0 L131.2 66.0 " +
  "L135.0 76.0 L128.6 80.0 L121.0 76.0 L113.3 84.0 L118.4 96.0 " +
  "L113.3 110.0 L117.2 124.0 L113.3 140.0 L108.2 156.0 L100.6 170.0 " +
  "L94.2 156.0 L90.3 140.0 L87.8 124.0 L83.9 110.0 L87.8 96.0 " +
  "L81.4 84.0 L75.0 76.0 L78.8 64.0 L85.2 56.0 L90.3 48.0 L94.2 40.0 Z";

export function LogoMark({ className, variant = "dark" }: LogoMarkProps) {
  const ringColor = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";
  const negativeSpace = variant === "dark" ? "var(--color-paper)" : "var(--color-ink)";

  return (
    <svg
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      role="img"
      aria-label="Yaza Group"
    >
      <defs>
        <linearGradient id="yazaSun" x1="20" y1="20" x2="100" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-amber-soft)" />
          <stop offset="100%" stopColor="var(--color-amber-deep)" />
        </linearGradient>
        <linearGradient id="yazaGlobe" x1="100" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="var(--color-ink-soft)" />
          <stop offset="100%" stopColor="var(--color-ink)" />
        </linearGradient>
        <clipPath id="yazaCircle">
          <circle cx="100" cy="100" r="80" />
        </clipPath>
        <clipPath id="yazaLeft">
          <rect x="10" y="10" width="90" height="180" />
        </clipPath>
        <clipPath id="yazaRight">
          <rect x="100" y="10" width="90" height="180" />
        </clipPath>
      </defs>

      {/* sun rays */}
      <g clipPath="url(#yazaLeft)">
        {Array.from({ length: 9 }).map((_, i) => {
          const angle = -100 + i * 22.5;
          const rad = (angle * Math.PI) / 180;
          const x1 = 100 + Math.cos(rad) * 82;
          const y1 = 100 + Math.sin(rad) * 82;
          const x2 = 100 + Math.cos(rad) * 96;
          const y2 = 100 + Math.sin(rad) * 96;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#yazaSun)"
              strokeWidth="6"
              strokeLinecap="round"
            />
          );
        })}
      </g>

      <g clipPath="url(#yazaCircle)">
        <rect x="10" y="10" width="90" height="180" fill="url(#yazaSun)" />
        <rect x="100" y="10" width="90" height="180" fill="url(#yazaGlobe)" />

        {/* globe lattice */}
        <g clipPath="url(#yazaRight)" stroke="rgba(247,243,234,0.5)" strokeWidth="1.4" fill="none">
          <path d="M100 20 C140 45 140 155 100 180" />
          <path d="M100 20 C160 55 160 145 100 180" />
          <ellipse cx="145" cy="100" rx="45" ry="35" transform="rotate(-18 145 100)" />
          <ellipse cx="140" cy="100" rx="42" ry="20" transform="rotate(10 140 100)" />
        </g>
        <g clipPath="url(#yazaRight)" fill="var(--color-amber-soft)">
          <circle cx="122" cy="52" r="3" />
          <circle cx="150" cy="60" r="3" />
          <circle cx="168" cy="90" r="3" />
          <circle cx="165" cy="122" r="3" />
          <circle cx="140" cy="145" r="3" />
          <circle cx="115" cy="130" r="2.4" />
        </g>

        {/* India, unified negative space */}
        <path d={INDIA_PATH} fill="var(--color-paper)" fillOpacity="0.96" />
      </g>

      <circle
        cx="100"
        cy="100"
        r="80"
        stroke={ringColor}
        strokeOpacity="0.12"
        strokeWidth="1.5"
        fill="none"
      />
    </svg>
  );
}

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
};

export function Logo({
  className,
  markClassName = "h-9 w-9",
  wordmarkClassName = "text-xl",
  variant = "dark",
  showTagline = false,
}: LogoProps) {
  const textColor = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";
  const taglineColor = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";

  return (
    <span className={`inline-flex items-center gap-2.5 ${className ?? ""}`}>
      <LogoMark className={`${markClassName} shrink-0`} variant={variant} />
      <span className="inline-flex flex-col leading-none">
        <span
          className={`font-display font-medium tracking-tight ${wordmarkClassName}`}
          style={{ color: textColor }}
        >
          Yaza
          <span style={{ color: "var(--color-amber)" }}>.</span>
        </span>
        {showTagline && (
          <span
            className="mt-1 text-[9px] font-medium uppercase tracking-[0.16em] opacity-50"
            style={{ color: taglineColor }}
          >
            Business Consulting &amp; Services
          </span>
        )}
      </span>
    </span>
  );
}
