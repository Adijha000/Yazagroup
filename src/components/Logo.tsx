import Image from "next/image";

type LogoProps = {
  className?: string;
  markClassName?: string;
  wordmarkClassName?: string;
  variant?: "light" | "dark";
  showTagline?: boolean;
};

export function Logo({
  className,
  markClassName = "h-11 w-11",
  wordmarkClassName = "text-xl",
  variant = "dark",
  showTagline = false,
}: LogoProps) {
  const textColor = variant === "dark" ? "var(--color-ink)" : "var(--color-paper)";

  return (
    <span className={`inline-flex items-center gap-3 ${className ?? ""}`}>
      <Image
        src="/brand/yaza-icon.png"
        alt="Yaza Group"
        width={256}
        height={256}
        priority
        className={`${markClassName} shrink-0 object-contain`}
      />
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
            style={{ color: textColor }}
          >
            Business Consulting &amp; Services
          </span>
        )}
      </span>
    </span>
  );
}
