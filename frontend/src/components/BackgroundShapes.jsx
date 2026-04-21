import { motion } from "framer-motion";
import { useMemo } from "react";

export function BackgroundShapes() {
  // Generate a random set of glitters only once on mount
  const glitters = useMemo(() => {
    return Array.from({ length: 40 }).map((_, i) => {
      const size = Math.random() * 3 + 1; // 1px to 4px
      return {
        id: i,
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        size: size,
        delay: Math.random() * 4,
        duration: Math.random() * 3 + 2, // 2s to 5s
        color: ["bg-white", "bg-neon-cyan", "bg-neon-blue", "bg-cyan-200"][
          Math.floor(Math.random() * 4)
        ],
      };
    });
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[-1] overflow-hidden bg-transparent">
      {/* Subtle ambient light blobs */}
      <motion.div 
        animate={{ scale: [1, 1.2, 1], opacity: [0.05, 0.1, 0.05] }} 
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-neon-cyan blur-[100px]" 
      />
      <motion.div 
        animate={{ scale: [1, 1.3, 1], opacity: [0.05, 0.15, 0.05] }} 
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute top-1/2 -right-20 h-80 w-80 rounded-full bg-neon-blue blur-[120px]" 
      />

      {/* The Glitters */}
      {glitters.map((glitter) => (
        <motion.div
          key={glitter.id}
          className={`absolute rounded-full ${glitter.color} shadow-[0_0_8px_rgba(255,255,255,0.8)]`}
          style={{
            left: glitter.left,
            top: glitter.top,
            width: glitter.size,
            height: glitter.size,
          }}
          animate={{
            opacity: [0, 1, 0],
            scale: [0.5, 1.2, 0.5],
          }}
          transition={{
            duration: glitter.duration,
            repeat: Infinity,
            delay: glitter.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}
