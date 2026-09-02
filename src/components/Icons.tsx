type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export function IconPeople({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="12" cy="10" r="4.5" />
      <path d="M4 27c0-4.4 3.6-8 8-8s8 3.6 8 8" />
      <circle cx="23" cy="12" r="3.6" opacity="0.6" />
      <path d="M20.5 27c.2-3.6 3-6.4 6.5-6.6" opacity="0.6" />
    </svg>
  );
}

export function IconLayers({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M16 4 L28 11 L16 18 L4 11 Z" />
      <path d="M4 17 L16 24 L28 17" opacity="0.6" />
      <path d="M4 23 L16 30 L28 23" opacity="0.35" />
    </svg>
  );
}

export function IconHandshake({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M3 15 L9 9 L14 12 L18 9 L23 13" />
      <path d="M3 15 L9 21 L12 19" />
      <path d="M23 13 L29 17 L24 23 L20 20" />
      <path d="M12 19 L15 22 L18 20 L20 22" />
    </svg>
  );
}

export function IconRocket({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M16 3c4 3 6 8 6 13 0 3-1 6-2.5 8.5L16 29l-3.5-4.5C11 22 10 19 10 16c0-5 2-10 6-13Z" />
      <circle cx="16" cy="14" r="2.4" />
      <path d="M10 20l-4 3 1-5" opacity="0.6" />
      <path d="M22 20l4 3-1-5" opacity="0.6" />
    </svg>
  );
}

export function IconTarget({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="16" r="12" />
      <circle cx="16" cy="16" r="7" opacity="0.6" />
      <circle cx="16" cy="16" r="2" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconGlobe({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="16" r="12" />
      <ellipse cx="16" cy="16" rx="5" ry="12" />
      <path d="M4 16h24M6 9.5h20M6 22.5h20" opacity="0.6" />
    </svg>
  );
}

export function IconShield({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <path d="M16 3l11 4v8c0 7-4.7 11.6-11 14-6.3-2.4-11-7-11-14V7l11-4Z" />
      <path d="M11.5 16.5l3 3 6-6.5" />
    </svg>
  );
}

export function IconGrid({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <rect x="4" y="4" width="9" height="9" rx="1.5" />
      <rect x="19" y="4" width="9" height="9" rx="1.5" opacity="0.6" />
      <rect x="4" y="19" width="9" height="9" rx="1.5" opacity="0.6" />
      <rect x="19" y="19" width="9" height="9" rx="1.5" opacity="0.35" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="16" r="12" />
      <path d="M20.5 11.5 L17.5 17.5 L11.5 20.5 L14.5 14.5 Z" />
    </svg>
  );
}

export function IconAnchor({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} {...base}>
      <circle cx="16" cy="7" r="3" />
      <path d="M16 10v18" />
      <path d="M8 19a8 8 0 0 0 16 0" />
      <path d="M10 16h12" opacity="0.6" />
    </svg>
  );
}
