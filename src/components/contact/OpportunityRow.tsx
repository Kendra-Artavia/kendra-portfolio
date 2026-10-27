import { ChevronRight, Code2, Layers, MonitorSmartphone } from "lucide-react";
import type { Opportunity } from "../../config/site";

const icons = {
  code: Code2,
  automation: Layers,
  fullstack: MonitorSmartphone,
} as const;

type OpportunityRowProps = {
  opportunity: Opportunity;
};

export function OpportunityRow({ opportunity }: OpportunityRowProps) {
  const Icon = icons[opportunity.icon];

  return (
    <div className="flex items-center gap-3 py-4 first:pt-0 last:pb-0">
      <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-secondary text-primary">
        <Icon size={18} strokeWidth={1.85} />
      </span>
      <span className="min-w-0 flex-1">
        <span className="block font-display text-[15px] leading-snug font-bold text-ink">
          {opportunity.title}
        </span>
        <span className="mt-0.5 block text-[12.5px] leading-snug text-muted">
          {opportunity.description}
        </span>
      </span>
      <span
        className="grid size-8 shrink-0 place-items-center rounded-full bg-secondary text-primary"
        aria-hidden="true"
      >
        <ChevronRight size={15} strokeWidth={2.25} />
      </span>
    </div>
  );
}
