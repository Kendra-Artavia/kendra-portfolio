import { Moon, Sun } from "lucide-react";
import { useTheme } from "../../context/ThemeProvider";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const isDark = theme === "dark";

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-pressed={isDark}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="focus-ring grid size-10 cursor-pointer place-items-center rounded-full bg-secondary text-primary transition-colors duration-300 hover:bg-primary/15"
    >
      {isDark ? <Sun size={18} strokeWidth={1.75} /> : <Moon size={18} strokeWidth={1.75} />}
    </button>
  );
}
