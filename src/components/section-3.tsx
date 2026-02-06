export function Section3() {
  return (
    <section className="min-h-screen w-32 bg-gray-200 text-black md:w-[13.875rem]">
      <div className="pt-6">
        <div className="mb-4 py-2 pl-4 text-sm font-medium uppercase tracking-wide text-cyan-600">
          Currently Online
        </div>
        <div className="flex items-center gap-2 pl-4 text-xs font-medium uppercase tracking-wide text-black/60">
          <span>Contact</span>
          <span className="text-base font-semibold text-black">4</span>
        </div>
        <div className="mt-3 grid grid-cols-4 gap-2 px-4">
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded bg-black text-white"
            aria-label="X"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M18.3 3H21l-6.6 7.5L22 21h-6.2l-4-5.1L6.7 21H4l7.1-8.1L2 3h6.3l3.6 4.6L18.3 3Zm-1.1 16h1.7L8.8 5H7.1l10.1 14Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded bg-black text-white"
            aria-label="GitHub"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M12 2C6.5 2 2 6.6 2 12.3c0 4.6 2.9 8.5 7 9.9.5.1.7-.2.7-.5v-1.9c-2.9.7-3.5-1.4-3.5-1.4-.5-1.3-1.2-1.6-1.2-1.6-1-.7.1-.7.1-.7 1.1.1 1.7 1.2 1.7 1.2 1 1.8 2.7 1.3 3.3 1 .1-.7.4-1.3.7-1.6-2.3-.3-4.7-1.2-4.7-5.2 0-1.1.4-2 1-2.7-.1-.3-.4-1.4.1-2.9 0 0 .9-.3 2.9 1.1.8-.2 1.7-.3 2.6-.3.9 0 1.8.1 2.6.3 2-.1 2.9-1.1 2.9-1.1.5 1.5.2 2.6.1 2.9.6.7 1 1.6 1 2.7 0 4.1-2.4 4.9-4.7 5.2.4.4.8 1.1.8 2.2v3.2c0 .3.2.6.7.5 4.1-1.4 7-5.3 7-9.9C22 6.6 17.5 2 12 2Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded bg-black text-white"
            aria-label="LinkedIn"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M20.4 20.4h-3.4v-5.3c0-1.3 0-3-1.8-3-1.8 0-2.1 1.4-2.1 2.9v5.4H9.8V9.8h3.2v1.5h.1c.4-.8 1.5-1.7 3.2-1.7 3.5 0 4.1 2.3 4.1 5.3v5.5ZM5.9 8.3a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM4.2 20.4h3.4V9.8H4.2v10.6Z"
              />
            </svg>
          </button>
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded bg-black text-white"
            aria-label="Email"
          >
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                fill="currentColor"
                d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2Zm0 2v.2l8 5 8-5V7H4Zm16 10V10l-8 5-8-5v7h16Z"
              />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
