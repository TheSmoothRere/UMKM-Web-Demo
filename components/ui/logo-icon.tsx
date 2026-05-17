export function LogoIcon({ className, size = 16 }: Readonly<{ className?: string; size?: number }>) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      className={className}
      aria-hidden="true"
    >
      <path
        d="M12 95 L60 25 L108 95"
        stroke="#1A1A2E"
        strokeWidth={10}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 95 L60 45 L90 95"
        stroke="#C7522B"
        strokeWidth={8}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 95 L60 65 L74 95"
        stroke="#D4A853"
        strokeWidth={6}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
