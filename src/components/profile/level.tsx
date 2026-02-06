export function Level() {
  return (
    <div className="flex w-full items-center justify-center gap-3 bg-muted px-4 py-3 h-[58px] md:justify-start">
      <span className="text-lg">Level</span>
      <span className="relative inline-flex h-7 w-7 items-center justify-center text-[10px] font-semibold text-red-500">
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 h-full w-full"
          aria-hidden="true"
        >
          <polygon
            points="50,4 93,25 93,75 50,96 7,75 7,25"
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
          />
        </svg>
        666
      </span>
    </div>
  );
}