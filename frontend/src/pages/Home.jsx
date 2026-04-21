import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "../components/Button";
import profileImg from "../assets/sanjay-profile.png";

export function Home() {
  const fullText = "Web Developer | MERN Stack";
  const [typedText, setTypedText] = useState("");

  useEffect(() => {
    let index = 0;
    let deleting = false;

    const timer = setInterval(() => {
      if (!deleting) {
        index += 1;
        setTypedText(fullText.slice(0, index));
        if (index >= fullText.length) {
          deleting = true;
        }
      } else {
        index -= 1;
        setTypedText(fullText.slice(0, index));
        if (index <= 0) {
          deleting = false;
        }
      }
    }, 110);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="grid items-center gap-10 py-8 md:grid-cols-2">
      <Helmet>
        <title>Sanjay Purty | MERN Developer</title>
      </Helmet>
      <motion.div initial={{ opacity: 0, x: -24 }} animate={{ opacity: 1, x: 0 }}>
        <p className="text-neon-cyan">Hello, I am</p>
        <h1 className="mt-2 text-4xl font-bold md:text-6xl">Sanjay Purty</h1>
        <p className="mt-3 text-xl text-slate-600 dark:text-slate-300">
          {typedText}
          <motion.span
            className="ml-1 inline-block text-neon-cyan"
            animate={{ opacity: [0, 1, 0] }}
            transition={{ duration: 0.9, repeat: Infinity, ease: "linear" }}
          >
            |
          </motion.span>
        </p>
        <p className="mt-5 max-w-lg text-slate-600 dark:text-slate-300">
          I build responsive and scalable full-stack applications with immersive UI experiences, robust API architecture, and clean maintainable code.
        </p>
        <div className="mt-7 flex gap-3">
          <Link to="/projects">
            <Button>View Projects</Button>
          </Link>
          <Link to="/contact">
            <Button variant="ghost">Contact Me</Button>
          </Link>
        </div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 24 }} animate={{ opacity: 1, x: 0 }} className="relative justify-self-center mt-10 md:mt-0 p-4 xl:mr-8">
        {/* Glow Aura */}
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan to-neon-blue rounded-[3rem] opacity-10 blur-3xl dark:opacity-30"></div>
        
        {/* Outer offset frame */}
        <motion.div 
          animate={{ y: [-5, 5, -5], rotate: [2, 1, 2] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-4 rounded-[2.5rem] border-2 border-neon-cyan/40 dark:border-neon-cyan/20 z-0 bg-gradient-to-tr from-neon-cyan/5 to-transparent shadow-[0_0_30px_rgba(0,229,255,0.15)]" 
        />
        
        {/* Floating Badge 1 (Top Right) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -right-2 sm:-right-8 top-12 z-20 flex items-center gap-3 rounded-2xl bg-white/90 dark:bg-navy-800/90 backdrop-blur-xl border border-slate-200 dark:border-navy-700 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neon-cyan/10">
            <svg className="w-5 h-5 text-neon-blue dark:text-neon-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
            </svg>
          </div>
          <div className="pr-2">
            <p className="text-[0.65rem] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Specialty</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Web Developer</p>
          </div>
        </motion.div>

        {/* Floating Badge 2 (Bottom Left) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -left-2 sm:-left-8 bottom-16 z-20 flex items-center gap-3 rounded-2xl bg-white/90 dark:bg-navy-800/90 backdrop-blur-xl border border-slate-200 dark:border-navy-700 p-3 shadow-[0_10px_30px_rgba(0,0,0,0.08)] dark:shadow-[0_10px_30px_rgba(0,0,0,0.5)]"
        >
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neon-blue/10">
             <span className="text-lg font-black text-neon-blue dark:text-neon-cyan">15+</span>
          </div>
          <div className="pr-2">
            <p className="text-[0.65rem] uppercase tracking-wider font-bold text-slate-500 dark:text-slate-400">Projects</p>
            <p className="text-sm font-bold text-slate-900 dark:text-white">Completed</p>
          </div>
        </motion.div>
        
        {/* Main Image Container */}
        <div className="relative z-10 mx-auto overflow-hidden rounded-[2.5rem] border border-slate-200 dark:border-white/10 bg-white dark:bg-navy-900 p-2 shadow-2xl transition-transform duration-500 hover:scale-[1.02]">
          <img
            src={profileImg}
            alt="Sanjay Purty"
            className="h-72 w-72 rounded-[2rem] object-cover md:h-[26rem] md:w-[22rem] filter contrast-[1.05]"
          />
        </div>
      </motion.div>
    </section>
  );
}
