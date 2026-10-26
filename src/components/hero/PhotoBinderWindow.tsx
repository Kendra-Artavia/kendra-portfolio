import { Folder, Heart, Image as ImageIcon, Search, Settings } from "lucide-react";
import { site, type PhotocardSlot } from "../../config/site";
import { PhotocardArt } from "./PhotocardArt";

const sidebar = [
  { label: "My Collection", icon: ImageIcon, active: true },
  { label: "Albums", icon: Folder, active: false },
  { label: "Favorites", icon: Heart, active: false },
  { label: "Statistics", icon: "chart" as const, active: false },
  { label: "Settings", icon: Settings, active: false },
];

function MiniBars() {
  return (
    <svg viewBox="0 0 16 16" className="size-3.5" aria-hidden="true">
      <rect x="1" y="9" width="3" height="6" rx="1" fill="currentColor" opacity="0.4" />
      <rect x="6.5" y="5" width="3" height="10" rx="1" fill="currentColor" opacity="0.7" />
      <rect x="12" y="2" width="3" height="13" rx="1" fill="currentColor" />
    </svg>
  );
}

function CardFace({ slot, index }: { slot: PhotocardSlot; index: number }) {
  return (
    <div className="relative overflow-hidden rounded-[14px] bg-secondary shadow-[0_8px_16px_-12px_rgba(53,35,49,0.45)] ring-1 ring-white/70">
      {slot.src ? (
        <img src={slot.src} alt={slot.alt} className="h-full w-full object-cover" />
      ) : (
        <PhotocardArt variant={(index % 4) as 0 | 1 | 2 | 3} />
      )}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/25 via-transparent to-transparent" />
    </div>
  );
}

export function PhotoBinderWindow() {
  return (
    <div className="shadow-float overflow-hidden rounded-[24px] border border-white/70 bg-card">
      <div className="flex items-center gap-3 border-b border-ink/8 px-3.5 py-3">
        <div className="flex min-w-0 items-center gap-2">
          <span className="grid size-8 shrink-0 place-items-center rounded-xl bg-primary text-on-primary">
            <ImageIcon size={15} strokeWidth={2} />
          </span>
          <span className="truncate font-display text-[15px] font-extrabold tracking-[-0.03em] text-ink">
            {site.hero.projectName}
          </span>
        </div>
        <div className="ml-auto flex h-8 w-[168px] items-center gap-1.5 rounded-full bg-secondary px-3 text-[11px] text-muted">
          <Search size={12} strokeWidth={2} />
          <span className="truncate">{site.hero.searchPlaceholder}</span>
        </div>
      </div>

      <div className="flex gap-2.5 p-3">
        <ul className="w-[118px] shrink-0 space-y-1">
          {sidebar.map((item) => {
            const Icon = item.icon === "chart" ? null : item.icon;
            return (
              <li key={item.label}>
                <div
                  className={`flex items-center gap-1.5 rounded-xl px-2 py-1.5 text-[11px] ${
                    item.active
                      ? "bg-primary/12 font-semibold text-primary"
                      : "font-medium text-muted"
                  }`}
                >
                  {Icon ? <Icon size={13} strokeWidth={1.75} /> : <MiniBars />}
                  <span className="truncate">{item.label}</span>
                </div>
              </li>
            );
          })}
        </ul>

        <div className="grid h-[214px] flex-1 grid-cols-2 grid-rows-2 gap-2">
          {site.hero.photocards.map((slot, index) => (
            <CardFace key={`${slot.alt}-${index}`} slot={slot} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
