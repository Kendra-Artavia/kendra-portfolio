import { motion, useReducedMotion } from "motion/react";
import type { CSSProperties } from "react";
import { site } from "../../config/site";
import { CodeWindow } from "./CodeWindow";
import { PhotoBinderWindow } from "./PhotoBinderWindow";

const stage = { w: 640, h: 620 };

function Star({ className, size = 16 }: { className?: string; size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" className={className} aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 .4c.45 5 2.3 7.4 6.8 8.2-4.5.8-6.35 3.2-6.8 8.2-.45-5-2.3-7.4-6.8-8.2C9.7 7.8 11.55 5.4 12 .4z"
      />
    </svg>
  );
}

function floatTransition(reduce: boolean, duration: number, delay = 0) {
  if (reduce) return { duration: 0 };
  return { duration, delay, repeat: Infinity, ease: "easeInOut" as const };
}

export function HeroVisual() {
  const reduce = useReducedMotion();
  const style = {
    "--stage-w": `${stage.w}px`,
    "--stage-h": `${stage.h}px`,
  } as CSSProperties;

  return (
    <motion.div
      className="hero-stage"
      style={style}
      initial={{ opacity: 0, y: reduce ? 0 : 18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduce ? 0 : 0.7, delay: reduce ? 0 : 0.12, ease: "easeOut" }}
    >
      <div className="hero-stage-frame">
        <div className="hero-stage-canvas" aria-hidden="true">
          <div
            className="absolute rounded-full"
            style={{
              width: 580,
              height: 580,
              left: 24,
              top: 8,
              background:
                "radial-gradient(circle, var(--blob) 0%, var(--blob-deep) 46%, transparent 72%)",
            }}
          />
          <div
            className="absolute rounded-full border border-primary/20"
            style={{ width: 470, height: 470, left: 78, top: 58 }}
          />
          <div
            className="absolute"
            style={{
              left: 0,
              top: 455,
              width: 168,
              height: 140,
              backgroundImage: "radial-gradient(circle, var(--primary) 1.25px, transparent 1.35px)",
              backgroundSize: "11px 11px",
              opacity: 0.55,
              maskImage: "radial-gradient(circle at 35% 45%, black 20%, transparent 74%)",
              WebkitMaskImage: "radial-gradient(circle at 35% 45%, black 20%, transparent 74%)",
            }}
          />

          <motion.div
            className="absolute"
            style={{ left: 86, top: 16, width: 404 }}
            animate={reduce ? undefined : { y: [0, -8, 0] }}
            transition={floatTransition(Boolean(reduce), 7)}
          >
            <CodeWindow />
          </motion.div>

          <motion.ul
            className="absolute flex w-[124px] flex-col gap-2"
            style={{ left: 444, top: 14 }}
            animate={reduce ? undefined : { y: [0, -6, 0] }}
            transition={floatTransition(Boolean(reduce), 6.4, 0.2)}
          >
            {site.hero.pills.map((label) => (
              <li
                key={label}
                className="shadow-soft flex items-center gap-2 rounded-full border border-ink/8 bg-card px-3 py-1.5 text-[12.5px] font-semibold text-ink"
              >
                <span className="size-1.5 rounded-full bg-primary" />
                {label}
              </li>
            ))}
          </motion.ul>

          <div className="absolute" style={{ left: 496, top: 162, width: 136 }}>
            <svg viewBox="0 0 36 28" className="mb-0.5 ml-1 h-6 w-7 text-primary" aria-hidden="true">
              <path
                d="M30 5C24 8 16 12 10 20"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
              />
              <path
                d="M8 16.5 6 24l8-2"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.4"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="font-hand text-[17px] leading-[1.05] text-primary">{site.hero.annotation}</p>
          </div>

          <motion.div
            className="absolute"
            style={{ left: 8, top: 252, width: 512 }}
            animate={reduce ? undefined : { y: [0, 7, 0] }}
            transition={floatTransition(Boolean(reduce), 8, 0.15)}
          >
            <PhotoBinderWindow />
          </motion.div>

          <span className="absolute text-primary" style={{ left: 78, top: 198 }}>
            <Star size={16} />
          </span>
          <span className="absolute text-primary" style={{ left: 34, top: 214 }}>
            <Star size={14} />
          </span>
          <span className="absolute text-primary/80" style={{ left: 470, top: 292 }}>
            <Star size={12} />
          </span>

          <motion.div
            className="shadow-soft absolute flex items-center gap-2.5 rounded-2xl border border-white/80 bg-card px-3.5 py-2.5"
            style={{ left: 408, top: 528 }}
            animate={reduce ? undefined : { y: [0, 5, 0] }}
            transition={floatTransition(Boolean(reduce), 7.2, 0.3)}
          >
            <svg viewBox="0 0 36 28" className="h-7 w-8 text-primary" aria-hidden="true">
              <rect x="2" y="14" width="7" height="12" rx="1.5" fill="currentColor" opacity="0.35" />
              <rect x="14" y="8" width="7" height="18" rx="1.5" fill="currentColor" opacity="0.62" />
              <rect x="26" y="2" width="7" height="24" rx="1.5" fill="currentColor" />
            </svg>
            <span>
              <span className="block font-display text-[15px] leading-none font-extrabold text-ink">
                {site.hero.cardsCollected}
              </span>
              <span className="text-[11px] font-medium text-muted">Cards collected</span>
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
