import { AnimatePresence, motion, useReducedMotion } from "motion/react";

export function EmailCopiedToast({ visible }: { visible: boolean }) {
  const reduce = useReducedMotion();

  return (
    <AnimatePresence>
      {visible ? (
        <motion.div
          role="status"
          aria-live="polite"
          className="pointer-events-none fixed bottom-5 left-1/2 z-[70] -translate-x-1/2 rounded-full bg-ink px-4 py-2.5 text-sm font-medium text-background shadow-float"
          initial={{ opacity: 0, y: reduce ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: reduce ? 0 : 8 }}
          transition={{ duration: reduce ? 0 : 0.2 }}
        >
          Email copied · opening Gmail
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
