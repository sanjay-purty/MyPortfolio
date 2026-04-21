import { useDarkMode } from "../hooks/useDarkMode";

export function ThemeToggle() {
  const { darkMode, toggleTheme } = useDarkMode();
  return (
    <button className="btn-ghost px-3 py-2 text-xs" onClick={toggleTheme}>
      {darkMode ? "Light" : "Dark"}
    </button>
  );
}
