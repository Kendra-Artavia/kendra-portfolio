import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { site } from "../../config/site";
import { useEmailAction } from "../../context/EmailActionProvider";
import { ContactIllustration, MiniEnvelope } from "./ContactIllustration";
import { OpportunityRow } from "./OpportunityRow";
import { SocialLinkCard } from "./SocialLinkCard";

function Star({ className = "", size = 14 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .4c.45 5 2.3 7.4 6.8 8.2-4.5.8-6.35 3.2-6.8 8.2-.45-5-2.3-7.4-6.8-8.2C9.7 7.8 11.55 5.4 12 .4z"
      />
    </svg>
  );
}

export function Contact() {
  const reduce = useReducedMotion();
  const { href: emailHref, prepareEmail } = useEmailAction();
  const resumeUrl = site.resumeUrl;

  const reveal = {
    hidden: { opacity: 0, y: reduce ? 0 : 22 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: reduce ? 0 : 0.55, ease: "easeOut" as const },
    },
  };

  return (
    <section
      id="contact"
      aria-labelledby="contact-heading"
      className="scroll-mt-[5.25rem] border-t border-ink/6"
    >
      <div className="mx-auto w-full max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-24">
        <div className="grid items-start gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)] lg:gap-10 xl:gap-14">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={{
              hidden: {},
              show: {
                transition: {
                  staggerChildren: reduce ? 0 : 0.1,
                  delayChildren: reduce ? 0 : 0.04,
                },
              },
            }}
          >
            <motion.p
              variants={reveal}
              className="mb-5 flex items-center gap-3 text-[10.5px] font-semibold tracking-[0.18em] text-muted uppercase sm:text-[11px]"
            >
              <span>{site.contact.eyebrow}</span>
              <span aria-hidden="true" className="h-px w-10 bg-primary/45 sm:w-14" />
            </motion.p>

            <motion.h2
              id="contact-heading"
              variants={reveal}
              className="font-display text-[2rem] leading-[1.08] font-extrabold tracking-[-0.04em] text-ink min-[380px]:text-[2.35rem] sm:text-[2.75rem] lg:text-[3rem]"
            >
              <span className="block text-primary">{site.contact.titleLead}</span>
              <span className="block">{site.contact.titleRest}</span>
            </motion.h2>

            <motion.p
              variants={reveal}
              className="mt-5 max-w-xl text-[15px] leading-7 text-muted sm:text-base"
            >
              {site.contact.description}
            </motion.p>

            <motion.div
              variants={reveal}
              className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap"
            >
              {emailHref ? (
                <a
                  href={emailHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => void prepareEmail()}
                  className="focus-ring btn-shift group inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold text-on-primary shadow-[0_14px_28px_-16px_rgba(173,100,133,0.95)] transition-colors hover:bg-primary-hover sm:w-auto"
                >
                  <Mail size={16} strokeWidth={2} />
                  {site.contact.emailCta}
                  <ArrowRight
                    size={16}
                    strokeWidth={2.25}
                    className="transition-transform duration-200 group-hover:translate-x-0.5 motion-reduce:transform-none"
                  />
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-label="Send me an email, address coming soon"
                  className="focus-ring inline-flex h-12 w-full cursor-default items-center justify-center gap-2 rounded-full bg-primary px-6 text-[15px] font-semibold text-on-primary disabled:opacity-100 sm:w-auto"
                >
                  <Mail size={16} strokeWidth={2} />
                  {site.contact.emailCta}
                  <ArrowRight size={16} strokeWidth={2.25} />
                </button>
              )}

              {resumeUrl ? (
                <a
                  href={resumeUrl}
                  download
                  className="focus-ring btn-shift inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-primary/70 bg-card px-6 text-[15px] font-semibold text-ink transition-colors hover:border-primary hover:bg-secondary sm:w-auto"
                >
                  <Download size={16} strokeWidth={2} />
                  {site.contact.resumeCta}
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  aria-label="Download résumé, file coming soon"
                  className="focus-ring inline-flex h-12 w-full cursor-default items-center justify-center gap-2 rounded-full border border-primary/70 bg-card px-6 text-[15px] font-semibold text-ink disabled:opacity-100 sm:w-auto"
                >
                  <Download size={16} strokeWidth={2} />
                  {site.contact.resumeCta}
                </button>
              )}
            </motion.div>

            <motion.div
              variants={reveal}
              className="mt-8 grid gap-3 sm:grid-cols-2"
            >
              {site.contact.socialCards.map((card, index) => (
                <motion.div
                  key={card.kind}
                  variants={reveal}
                  custom={index}
                  className="min-w-0"
                >
                  <SocialLinkCard
                    kind={card.kind}
                    title={card.title}
                    subtitle={card.subtitle}
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, y: reduce ? 0 : 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: reduce ? 0 : 0.65, delay: reduce ? 0 : 0.08, ease: "easeOut" }}
          >
            <div
              className="pointer-events-none absolute top-1/2 left-1/2 h-[120%] w-[120%] -translate-x-1/2 -translate-y-1/2 rounded-full"
              style={{
                background:
                  "radial-gradient(circle, var(--blob) 0%, var(--blob-deep) 38%, transparent 68%)",
              }}
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute right-2 bottom-6 h-28 w-36 opacity-45"
              style={{
                backgroundImage:
                  "radial-gradient(circle, var(--primary) 1.15px, transparent 1.25px)",
                backgroundSize: "11px 11px",
                maskImage: "radial-gradient(circle at 60% 40%, black 20%, transparent 75%)",
                WebkitMaskImage:
                  "radial-gradient(circle at 60% 40%, black 20%, transparent 75%)",
              }}
              aria-hidden="true"
            />
            <Star className="pointer-events-none absolute top-8 left-4 text-primary/70" size={14} />
            <Star
              className="pointer-events-none absolute right-8 bottom-16 text-primary/55"
              size={12}
            />
            <MiniEnvelope className="pointer-events-none absolute -bottom-1 left-3 h-8 w-11 opacity-80 sm:left-6" />

            <div className="shadow-float relative overflow-hidden rounded-[28px] border border-ink/6 bg-card p-6 sm:rounded-[32px] sm:p-8">
              <div className="absolute top-5 right-5 sm:top-6 sm:right-6">
                <ContactIllustration />
              </div>

              <div className="inline-flex items-center gap-2 rounded-full bg-secondary px-3 py-1.5 text-[12px] font-semibold text-primary">
                <span className="size-1.5 rounded-full bg-primary" aria-hidden="true" />
                {site.contact.badge}
              </div>

              <h3 className="mt-5 max-w-[15ch] pr-24 font-display text-[1.35rem] leading-snug font-extrabold tracking-[-0.03em] text-ink sm:max-w-[16ch] sm:pr-28 sm:text-[1.55rem]">
                {site.contact.cardTitle}
              </h3>

              <p className="mt-3 max-w-md text-[14px] leading-6 text-muted sm:text-[15px] sm:leading-7">
                {site.contact.cardDescription}
              </p>

              <div className="mt-6 divide-y divide-primary/12 border-t border-primary/12 pt-2">
                {site.contact.opportunities.map((opportunity) => (
                  <OpportunityRow key={opportunity.title} opportunity={opportunity} />
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
