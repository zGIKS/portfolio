interface XIconProps {
  className?: string;
}

export function XIcon({ className = "h-4 w-4" }: XIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path
        fill="currentColor"
        d="M18.3 3H21l-6.6 7.5L22 21h-6.2l-4-5.1L6.7 21H4l7.1-8.1L2 3h6.3l3.6 4.6L18.3 3Zm-1.1 16h1.7L8.8 5H7.1l10.1 14Z"
      />
    </svg>
  );
}
