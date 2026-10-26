const themes = [
  {
    bgA: "#F8C6D6",
    bgB: "#E592B0",
    hair: "#24161C",
    skin: "#F6D0C1",
    top: "#FFF9FB",
    lip: "#C96B84",
  },
  {
    bgA: "#F4D4E8",
    bgB: "#C9A4DE",
    hair: "#7A4636",
    skin: "#F3C6B0",
    top: "#2C1E28",
    lip: "#B85C78",
  },
  {
    bgA: "#FBE0EA",
    bgB: "#F0B3C9",
    hair: "#1C1218",
    skin: "#F7D3C5",
    top: "#FFFFFF",
    lip: "#D27890",
  },
  {
    bgA: "#F3D0E2",
    bgB: "#E7A4C6",
    hair: "#4A2E38",
    skin: "#F1C4B4",
    top: "#AD6485",
    lip: "#A85A74",
  },
] as const;

type PhotocardArtProps = {
  variant: 0 | 1 | 2 | 3;
};

export function PhotocardArt({ variant }: PhotocardArtProps) {
  const theme = themes[variant];
  const mirrored = variant % 2 === 1;
  const gradientId = `photocard-bg-${variant}`;

  return (
    <svg viewBox="0 0 160 210" preserveAspectRatio="xMidYMid slice" className="h-full w-full" aria-hidden="true">
      <defs>
        <linearGradient id={gradientId} x1="20" y1="0" x2="150" y2="210" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor={theme.bgA} />
          <stop offset="1" stopColor={theme.bgB} />
        </linearGradient>
      </defs>
      <rect width="160" height="210" fill={`url(#${gradientId})`} />
      <circle cx="118" cy="36" r="28" fill="#fff" opacity="0.16" />
      <circle cx="36" cy="168" r="22" fill="#fff" opacity="0.1" />
      <g transform={mirrored ? "translate(160 0) scale(-1 1)" : undefined}>
        <path
          d="M36 112c-6-36 8-74 44-80 40-6 60 26 58 66-1 20-8 36-18 46-8 4-10 8-22 10H64c-16-2-22-12-28-42z"
          fill={theme.hair}
        />
        <path d="M18 212c8-52 30-78 62-78s54 26 62 78" fill={theme.top} />
        <path d="M66 128h28c2 12 2 22 0 34H66c-2-12-2-22 0-34z" fill={theme.skin} />
        <ellipse cx="80" cy="98" rx="29" ry="33" fill={theme.skin} />
        <path
          d="M48 98C50 62 66 44 82 42c22-2 38 14 40 40-10 0-16-12-28-13-8 0-14 7-22 8-9 2-16 8-20 16-2 3-4 5-4 5z"
          fill={theme.hair}
        />
        <path d="M50 102c-8 18-8 40-2 56 9-10 12-26 10-40-1-6-3-12-8-16z" fill={theme.hair} />
        <path d="M110 100c8 16 8 38 0 56-8-12-10-28-8-42 1-6 3-10 8-14z" fill={theme.hair} />
        <path d="M62 90c5-4 10-4 14-1" fill="none" stroke={theme.hair} strokeWidth="1.6" strokeLinecap="round" />
        <path d="M86 89c5-3 10-2 14 1" fill="none" stroke={theme.hair} strokeWidth="1.6" strokeLinecap="round" />
        <ellipse cx="68" cy="102" rx="3.1" ry="3.6" fill="#2A1A22" />
        <ellipse cx="94" cy="102" rx="3.1" ry="3.6" fill="#2A1A22" />
        <circle cx="69.2" cy="100.6" r="1.05" fill="#fff" />
        <circle cx="95.2" cy="100.6" r="1.05" fill="#fff" />
        <path d="M72 116c4 5 13 5 17 0" fill="none" stroke={theme.lip} strokeWidth="1.7" strokeLinecap="round" />
        <ellipse cx="58" cy="112" rx="6.5" ry="3" fill="#F0A0B4" opacity="0.5" />
        <ellipse cx="104" cy="112" rx="6.5" ry="3" fill="#F0A0B4" opacity="0.5" />
        <g transform="translate(112 112) rotate(12)">
          <rect x="0" y="-20" width="6.5" height="24" rx="3.2" fill={theme.skin} />
          <rect x="8.5" y="-17" width="6.5" height="21" rx="3.2" fill={theme.skin} />
          <ellipse cx="7.5" cy="8" rx="12" ry="8.5" fill={theme.skin} />
        </g>
      </g>
      {variant === 0 ? (
        <path
          d="M128 30c1.6 5.4 3.4 7.4 8.2 9.2-4.8 1.8-6.6 3.8-8.2 9.2-1.6-5.4-3.4-7.4-8.2-9.2 4.8-1.8 6.6-3.8 8.2-9.2z"
          fill="#fff"
        />
      ) : null}
      {variant === 2 ? (
        <path
          d="M30 34c.8 2.6 1.8 3.6 4 4.6-2.2 1-3.2 2-4 4.6-.8-2.6-1.8-3.6-4-4.6 2.2-1 3.2-2 4-4.6z"
          fill="#fff"
        />
      ) : null}
      {variant === 3 ? (
        <path
          d="M126 156c3.2 1.2 5.2 3.2 6.4 6.4 1.2-3.2 3.2-5.2 6.4-6.4-3.2-1.2-5.2-3.2-6.4-6.4-1.2 3.2-3.2 5.2-6.4 6.4z"
          fill="#fff"
          opacity="0.9"
        />
      ) : null}
    </svg>
  );
}
