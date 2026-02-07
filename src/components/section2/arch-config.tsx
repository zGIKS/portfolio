import Image from "next/image";

export function ArchConfig() {
  return (
    <div className="mt-4 bg-primary px-3 py-2">
      <h3 className="mb-2 text-xs font-semibold uppercase tracking-wide text-primary-foreground/70">
        My Arch Linux configuration
      </h3>
      <div className="relative w-full overflow-hidden">
        <Image
          src="/arch-config.png"
          alt="Arch config"
          className="h-auto w-full"
          width={1200}
          height={800}
          sizes="(max-width: 768px) 100vw, 800px"
        />
      </div>
    </div>
  );
}
