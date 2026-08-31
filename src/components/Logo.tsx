type LogoMarkProps = {
  className?: string;
  variant?: "light" | "dark";
};

const INDIA_PATH =
  "M96.1 35.0 L102.4 43.9 L111.8 49.9 L123.7 55.9 L129.2 64.9 " +
  "L122.9 70.8 L115.0 67.8 L108.7 76.8 L111.8 88.8 L108.7 103.7 " +
  "L110.3 121.6 L107.1 139.6 L102.4 157.5 L96.1 172.4 L91.3 157.5 " +
  "L88.2 139.6 L85.0 121.6 L86.6 103.7 L83.4 88.8 L86.6 76.8 " +
  "L80.3 70.8 L77.1 61.9 L81.9 55.9 L88.2 49.9 L93.9 43.9 Z";

export function LogoMark({ className, variant = "dark" }: LogoMarkProps) {
  const ringColor = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";

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
          <stop offset="0%" stopColor="#f3b93e" />
          <stop offset="100%" stopColor="var(--color-amber-deep)" />
        </linearGradient>
        <linearGradient id="yazaGlobe" x1="100" y1="20" x2="180" y2="180" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#1f3a63" />
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
        <g clipPath="url(#yazaRight)" stroke="rgba(247,243,234,0.55)" strokeWidth="1.4" fill="none">
          <path d="M100 20 C140 45 140 155 100 180" />
          <path d="M100 20 C160 55 160 145 100 180" />
          <ellipse cx="145" cy="100" rx="45" ry="35" transform="rotate(-18 145 100)" />
          <ellipse cx="140" cy="100" rx="42" ry="20" transform="rotate(10 140 100)" />
        </g>
        <g clipPath="url(#yazaRight)" fill="var(--color-paper)">
          <circle cx="122" cy="52" r="3" />
          <circle cx="150" cy="60" r="3" />
          <circle cx="168" cy="90" r="3" />
          <circle cx="165" cy="122" r="3" />
          <circle cx="140" cy="145" r="3" />
          <circle cx="115" cy="130" r="2.4" />
        </g>

        {/* India, unified negative space */}
        <path d={INDIA_PATH} fill="var(--color-paper)" />
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
        Yaza
      </span>
    </span>
  );
}
