import { motion, useReducedMotion } from "motion/react";

export function ContactIllustration({ className = "" }: { className?: string }) {
  const reduce = useReducedMotion();

  return (
    <motion.div
      className={`pointer-events-none relative h-[88px] w-[108px] ${className}`}
      aria-hidden="true"
      animate={reduce ? undefined : { y: [0, -5, 0] }}
      transition={
        reduce
          ? { duration: 0 }
          : { duration: 5.5, repeat: Infinity, ease: "easeInOut" }
      }
    >
      <svg viewBox="0 0 108 88" className="h-full w-full" fill="none">
        <ellipse cx="54" cy="78" rx="28" ry="5" fill="currentColor" className="text-primary/15" />
        <path
          d="M18 34c0-7.2 5.8-13 13-13h46c7.2 0 13 5.8 13 13v24c0 7.2-5.8 13-13 13H31c-7.2 0-13-5.8-13-13V34z"
          className="fill-primary"
        />
        <path
          d="M22 36.5 54 56l32-19.5V34c0-5-4-9-9-9H31c-5 0-9 4-9 9v2.5z"
          className="fill-primary-hover"
        />
        <path
          d="M24 58.5 42 46.5"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M84 58.5 66 46.5"
          stroke="white"
          strokeOpacity="0.35"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <rect x="34" y="12" width="40" height="34" rx="4" className="fill-card" />
        <rect x="40" y="20" width="28" height="2.5" rx="1.25" className="fill-primary/35" />
        <rect x="40" y="27" width="20" height="2.5" rx="1.25" className="fill-primary/25" />
        <rect x="40" y="34" width="24" height="2.5" rx="1.25" className="fill-primary/20" />
        <circle cx="86" cy="18" r="12" className="fill-secondary" />
        <circle cx="86" cy="18" r="12" className="stroke-primary/25" strokeWidth="1.5" fill="none" />
        <path
          d="M80.5 18.5h5.5v5.5"
          className="stroke-primary"
          strokeWidth="1.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M86 13.5v5"
          className="stroke-primary"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M16 18c.7 2.4 1.6 3.3 3.6 4.2-2 1-2.9 1.8-3.6 4.2-.7-2.4-1.6-3.3-3.6-4.2 2-.9 2.9-1.8 3.6-4.2z"
          className="fill-primary/70"
        />
        <path
          d="M96 48c.55 1.8 1.2 2.5 2.7 3.2-1.5.7-2.15 1.4-2.7 3.2-.55-1.8-1.2-2.5-2.7-3.2 1.5-.7 2.15-1.4 2.7-3.2z"
          className="fill-primary/55"
        />
      </svg>
    </motion.div>
  );
}

export function MiniEnvelope({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 56 40" className={className} fill="none" aria-hidden="true">
      <rect x="4" y="8" width="48" height="28" rx="5" className="fill-primary/80" />
      <path d="M8 12 28 24 48 12" className="stroke-card" strokeWidth="2.2" strokeLinejoin="round" />
      <path
        d="M44 6c.5 1.7 1.1 2.3 2.5 3-1.4.7-2 1.3-2.5 3-.5-1.7-1.1-2.3-2.5-3 1.4-.7 2-1.3 2.5-3z"
        className="fill-primary"
      />
    </svg>
  );
}
