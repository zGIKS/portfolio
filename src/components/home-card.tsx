import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, FileText } from "lucide-react";
import { GithubIcon } from "@/components/icons/github";
import { LinkedinIcon } from "@/components/icons/linkedin";
import { PeruFlag } from "@/components/icons/peru";
import { getDictionary } from "@/lib/dictionaries";
import { type Locale } from "@/lib/i18n";
import { allStackItems } from "@/lib/stack-data";

interface HomeCardProps {
  locale: Locale;
}

export function HomeCard({ locale }: HomeCardProps) {
  const t = getDictionary(locale);
  const aboutParagraphs = t.section2.about.paragraphs;

  const menuItems = [
    {
      label: t.section2.titles.projects,
      href: `/${locale}/projects`,
      count: 4,
      kind: "link" as const,
    },
    {
      label: t.section3.techStackTitle,
      href: `/${locale}/stack`,
      count: allStackItems.length,
      kind: "link" as const,
    },
    {
      label: "Resume",
      kind: "static" as const,
      badge: "PDF",
    },
    {
      label: t.section2.titles.blog,
      href: `/${locale}/blog`,
      kind: "link" as const,
    },
    {
      label: t.section3.linksTitle,
      href: "#quick-links",
      count: 4,
      kind: "anchor" as const,
    },
  ];

  return (
    <section className="relative z-10 w-full px-4 py-6 md:px-0 md:py-12">
      <div className="relative mx-auto w-full max-w-6xl overflow-hidden rounded-3xl border border-white/10 bg-black/40 shadow-2xl shadow-black/40 backdrop-blur-2xl">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.08),transparent_45%),radial-gradient(circle_at_bottom_right,rgba(255,255,255,0.04),transparent_50%)]" />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent" />

        <div className="relative grid min-h-[calc(100vh-11rem)] gap-8 p-5 md:p-8 lg:grid-cols-[minmax(0,1fr)_20rem] lg:gap-10 lg:p-10">
          <div className="flex min-w-0 flex-col">
            <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
              <div className="relative h-28 w-28 shrink-0 overflow-hidden rounded-full border border-white/15 bg-white/5 shadow-lg shadow-black/30">
                <Image
                  src="/me.webp"
                  alt="Mateo Aleman profile photo"
                  fill
                  sizes="112px"
                  className="object-cover object-center"
                  priority
                />
              </div>

              <div className="min-w-0">
                <p className="mb-2 text-xs tracking-[0.22em] text-white/55 uppercase">
                  giks / portfolio
                </p>
                <h1 className="text-3xl font-semibold tracking-tight text-white md:text-5xl">
                  Mateo Aleman
                </h1>
                <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
                  <span>Software Engineering Student</span>
                  <span className="hidden text-white/25 sm:inline">|</span>
                  <span className="inline-flex items-center gap-2">
                    <PeruFlag className="h-3.5 w-[18px]" />
                    {t.section1.country}
                  </span>
                </div>
              </div>
            </div>

            <div className="mt-8 h-px w-full bg-gradient-to-r from-white/30 via-white/10 to-transparent" />

            <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm text-white/70">
              <a
                href="mailto:mateo.aleman.romano@gmail.com"
                className="underline decoration-white/25 underline-offset-4 transition-colors hover:text-white hover:decoration-white/60"
              >
                mateo.aleman.romano@gmail.com
              </a>
              <span className="text-white/25">|</span>
              <span>discord: @asphanyx</span>
              <span className="hidden text-white/25 md:inline">|</span>
              <span className="hidden md:inline">Backend / Infra / Security</span>
            </div>

            <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-white/85 md:text-lg">
              <p>{aboutParagraphs[0]}</p>
              <p className="text-white/72">{aboutParagraphs[1]}</p>
            </div>

            <div
              id="quick-links"
              className="mt-10 grid gap-3 sm:grid-cols-2 xl:max-w-3xl"
            >
              <Link
                href="https://github.com/zGIKS"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <span className="inline-flex items-center gap-2">
                  <GithubIcon className="h-4 w-4" />
                  GitHub
                </span>
                <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>

              <a
                href="mailto:mateo.aleman.romano@gmail.com"
                className="group flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/80 transition hover:border-white/25 hover:bg-white/10 hover:text-white"
              >
                <span>Email</span>
                <ArrowUpRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </a>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                <span className="inline-flex items-center gap-2">
                  <LinkedinIcon className="h-4 w-4 text-[#0A66C2]" />
                  LinkedIn
                </span>
                <span className="text-xs text-white/45">pending</span>
              </div>

              <div className="flex items-center justify-between rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white/75">
                <span>Discord</span>
                <code className="text-xs text-white/55">@asphanyx</code>
              </div>
            </div>
          </div>

          <aside className="flex flex-col justify-start lg:pt-2">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-3 backdrop-blur-xl">
              <p className="px-3 pb-2 text-xs tracking-[0.22em] text-white/45 uppercase">
                Navigation
              </p>

              <div className="space-y-2">
                {menuItems.map((item) => {
                  const content = (
                    <div className="group flex w-full items-center justify-between gap-4 rounded-xl border border-white/10 bg-black/25 px-4 py-3 text-left transition hover:border-white/20 hover:bg-white/10">
                      <div className="flex items-center gap-2">
                        <span className="text-base font-medium tracking-tight text-white md:text-lg">
                          {item.label}
                        </span>
                        {"badge" in item ? (
                          <span className="rounded-md border border-white/15 bg-white/10 px-1.5 py-0.5 text-[10px] font-medium tracking-[0.14em] text-white/70 uppercase">
                            {item.badge}
                          </span>
                        ) : null}
                      </div>

                      <div className="flex items-center gap-3">
                        {typeof item.count === "number" ? (
                          <span className="text-xl font-semibold leading-none text-white/65">
                            {item.count}
                          </span>
                        ) : null}
                        {item.kind !== "static" ? (
                          <ArrowUpRight className="h-4 w-4 text-white/40 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white/75" />
                        ) : (
                          <FileText className="h-4 w-4 text-white/35" />
                        )}
                      </div>
                    </div>
                  );

                  if (item.kind === "static") {
                    return <div key={item.label}>{content}</div>;
                  }

                  if (item.kind === "anchor") {
                    return (
                      <a key={item.label} href={item.href}>
                        {content}
                      </a>
                    );
                  }

                  return (
                    <Link key={item.label} href={item.href}>
                      {content}
                    </Link>
                  );
                })}
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}
