import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { site, socialHref } from "../../config/site";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";
import { HeroVisual } from "./HeroVisual";

function SocialControl({
  href,
  label,
  external,
  children,
}: {
  href: string | null;
  label: string;
  external?: boolean;
  children: ReactNode;
}) {
  const className =
    "focus-ring grid size-10 place-items-center rounded-full border border-ink/15 text-ink transition-colors hover:border-primary hover:text-primary disabled:cursor-default disabled:text-ink disabled:opacity-100";

  if (!href) {
    return (
      <button type="button" disabled className={className} aria-label={`${label}, link coming soon`}>
        {children}
      </button>
    );
  }

  return (
    <a
      href={href}
      aria-label={label}
      className={className}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      {children}
    </a>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const item = {
    hidden: { opacity: 0, y: reduce ? 0 : 16 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <section className="mx-auto w-full max-w-7xl px-5 pt-8 pb-16 sm:px-8 lg:px-10 lg:pt-10 lg:pb-24">
      <div className="grid w-full items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.02fr)] lg:gap-8">
        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: { transition: { staggerChildren: reduce ? 0 : 0.1, delayChildren: reduce ? 0 : 0.04 } },
          }}
        >
          <motion.p
            variants={item}
            className="mb-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-[10.5px] font-semibold tracking-[0.16em] text-muted uppercase sm:text-[11px] sm:tracking-[0.18em]"
          >
            <span>{site.role}</span>
            <span aria-hidden="true">·</span>
            <span>{site.location}</span>
            <span aria-hidden="true" className="hidden h-px w-12 bg-primary/35 sm:block" />
          </motion.p>

          <motion.h1
            variants={item}
            className="font-display text-[1.68rem] leading-[1.08] font-extrabold tracking-[-0.04em] text-ink min-[360px]:text-[1.9rem] min-[400px]:text-[2.15rem] sm:text-[2.7rem] lg:text-[2.85rem] xl:text-[3.2rem]"
          >
            <span className="block text-primary">{site.hero.greeting}</span>
            <span className="block">{site.hero.line}</span>
            <span className="block">
              <span className="text-primary">{site.hero.emphasis}</span> {site.hero.closing}
            </span>
          </motion.h1>

          <motion.p
            variants={item}
            className="mt-5 max-w-md text-[15px] leading-7 text-muted sm:text-base sm:leading-7"
          >
            {site.hero.description}
          </motion.p>

          <motion.div variants={item} className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              href={site.hero.workHref}
              className="focus-ring btn-shift group inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold text-on-primary shadow-[0_14px_28px_-16px_rgba(173,100,133,0.95)] transition-colors hover:bg-primary-hover sm:w-auto"
            >
              {site.hero.primaryCta}
              <ArrowRight
                size={16}
                strokeWidth={2.25}
                className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
              />
            </a>

            {site.resumeUrl ? (
              <a
                href={site.resumeUrl}
                download
                className="focus-ring btn-shift inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-primary/70 bg-card px-6 text-[15px] font-semibold text-ink transition-colors hover:border-primary hover:bg-secondary sm:w-auto"
              >
                <Download size={16} strokeWidth={2} />
                {site.hero.secondaryCta}
              </a>
            ) : (
              <button
                type="button"
                disabled
                aria-label="Download résumé, file coming soon"
                className="focus-ring inline-flex h-12 w-full cursor-default items-center justify-center gap-2 rounded-full border border-primary/70 bg-card px-6 text-[15px] font-semibold text-ink disabled:opacity-100 sm:w-auto"
              >
                <Download size={16} strokeWidth={2} />
                {site.hero.secondaryCta}
              </button>
            )}
          </motion.div>

          <motion.div variants={item} className="mt-7 flex items-center justify-center gap-3 sm:justify-start">
            <SocialControl href={socialHref("github")} label="GitHub" external>
              <GithubIcon />
            </SocialControl>
            <SocialControl href={socialHref("linkedin")} label="LinkedIn" external>
              <LinkedinIcon />
            </SocialControl>
            <SocialControl href={socialHref("email")} label="Email">
              <Mail size={18} strokeWidth={1.75} />
            </SocialControl>
          </motion.div>
        </motion.div>

        <div>
          <p className="sr-only">
            Illustrative preview of a code editor and the PhotoBinder interface. The photocards are provisional
            artwork and can be replaced with real images later.
          </p>
          <HeroVisual />
        </div>
      </div>
    </section>
  );
}
