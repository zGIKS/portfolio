interface LinkedinIconProps {
  className?: string;
}

export function LinkedinIcon({ className = "h-4 w-4" }: LinkedinIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M20.4 20.4h-3.4v-5.3c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.4H9.8V9.8h3.2v1.5h.1c.4-.8 1.5-1.7 3.2-1.7 3.5 0 4.1 2.3 4.1 5.3v5.5ZM5.9 8.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.2 20.4h3.4V9.8H4.2v10.6Z"
      />
    </svg>
  );
}
