export function ArchConfig() {
  return (
    <div className="mt-4 bg-primary px-3 py-2">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
        My Arch Linux configuration
      </h3>
      <img
        src="/arch-config.png"
        alt="Arch config"
        className="h-auto w-full"
        loading="lazy"
      />
    </div>
  );
}
