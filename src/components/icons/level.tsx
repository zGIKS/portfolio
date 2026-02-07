interface LevelIconProps {
  className?: string;
}

export function LevelIcon({ className = "h-10 w-10 md:h-12 md:w-12" }: LevelIconProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="levelGrad" x1="0" x2="1">
          <stop offset="0%" stopColor="#ff7a4a" />
          <stop offset="100%" stopColor="#ff4a2a" />
        </linearGradient>
      </defs>
      <polygon
        points="50,4 94,26 94,74 50,96 6,74 6,26"
        fill="#0f1720"
        stroke="url(#levelGrad)"
        strokeWidth="4"
        strokeLinejoin="round"
      />
    </svg>
  );
}