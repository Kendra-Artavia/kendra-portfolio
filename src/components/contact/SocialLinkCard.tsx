import { ChevronRight, Mail } from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import { socialHref } from "../../config/site";
import { useEmailAction } from "../../context/EmailActionProvider";
import { GithubIcon, LinkedinIcon } from "../icons/SocialIcons";

type SocialKind = "github" | "linkedin" | "email";

type SocialLinkCardProps = {
  kind: SocialKind;
  title: string;
  subtitle: string;
};

function SocialIcon({ kind }: { kind: SocialKind }) {
  if (kind === "github") return <GithubIcon size={20} />;
  if (kind === "linkedin") return <LinkedinIcon size={20} />;
  return <Mail size={20} strokeWidth={1.75} />;
}

export function SocialLinkCard({ kind, title, subtitle }: SocialLinkCardProps) {
  const reduce = useReducedMotion();
  const href = socialHref(kind);
  const { prepareEmail } = useEmailAction();

  const content = (
    <>
      <span className="grid size-10 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
        <SocialIcon kind={kind} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[15px] leading-tight font-bold text-ink">{title}</span>
        <span className="mt-0.5 block text-[12.5px] leading-tight text-muted">{subtitle}</span>
      </span>
      <span className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary transition-colors group-hover:bg-primary group-hover:text-on-primary">
        <ChevronRight size={16} strokeWidth={2.25} />
      </span>
    </>
  );

  const className =
    "group shadow-soft focus-ring flex w-full items-center gap-3 rounded-[22px] border border-ink/6 bg-card p-3.5 transition-[transform,box-shadow,border-color] duration-300 hover:-translate-y-0.5 hover:border-primary/25 hover:shadow-float motion-reduce:transform-none";

  if (!href) {
    return (
      <div className={`${className} cursor-default opacity-80`} aria-label={`${title}, link coming soon`}>
        {content}
      </div>
    );
  }

  return (
    <motion.a
      href={href}
      aria-label={`${title}: ${subtitle}`}
      className={className}
      whileHover={reduce ? undefined : { y: -2 }}
      transition={{ duration: 0.2 }}
      target="_blank"
      rel="noopener noreferrer"
      onClick={kind === "email" ? () => void prepareEmail() : undefined}
    >
      {content}
    </motion.a>
  );
}
