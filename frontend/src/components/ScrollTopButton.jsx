import { useEffect, useState } from "react";

export function ScrollTopButton() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  return (
    <button
      className="fixed bottom-6 right-6 z-50 rounded-full bg-neon-cyan px-4 py-2 text-black shadow-lg"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
    >
      Top
    </button>
  );
}
