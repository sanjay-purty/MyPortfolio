import { motion } from "framer-motion";
import profileImg from "../assets/sanjay-profile.png";

export function IntroScreen({ onComplete }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.98 }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      className="fixed inset-0 z-50 flex h-dvh w-full flex-col items-center justify-center bg-gradient-to-br from-[#0A0E18] via-[#101826] to-[#111827] px-6"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        className="relative mb-8 flex h-52 w-52 items-center justify-center rounded-full bg-white/5 shadow-2xl"
      >
        <div className="absolute inset-0 rounded-full border border-neon-cyan/40" />
        <img
          src={profileImg}
          alt="Sanjay Purty"
          className="h-48 w-48 rounded-full object-cover"
          onError={(e) => {
            e.target.src = "https://ui-avatars.com/api/?name=Sanjay+Purty&size=200&background=0B0F19&color=00E5FF";
          }}
        />
      </motion.div>

      <motion.h1
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.45 }}
        className="font-display text-3xl font-bold tracking-wide text-white md:text-4xl"
      >
        Sanjay Purty
      </motion.h1>

      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.55 }}
        className="mt-3 text-center font-sans text-sm text-slate-300 md:text-base"
      >
        Personal Portfolio
      </motion.p>

      <motion.button
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.75 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
        onClick={onComplete}
        className="btn-primary mt-8 rounded-2xl px-8 py-4 font-sans text-base font-semibold text-navy-900 hover:shadow-[0_0_35px_rgba(0,229,255,0.5)]"
      >
        View Portfolio
      </motion.button>

      <motion.p
        initial={{ y: 16, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="mt-5 font-sans text-sm text-[#9ca3af] tracking-wide md:text-base"
      >
        Web Developer | MERN Stack
      </motion.p>
    </motion.div>
  );
}
