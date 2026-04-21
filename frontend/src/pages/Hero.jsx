import { motion } from "framer-motion";
import profileImg from "../assets/sanjay-profile.png";

export function Hero() {
  return (
    <section id="hero" className="relative flex min-h-[calc(100vh-80px)] w-full items-center overflow-hidden z-10">
      {/* Main Layout Container */}
      <div className="mx-auto flex w-full max-w-7xl items-stretch justify-between px-4 sm:px-6 lg:px-8 h-full relative">
        
        {/* Left Side: Socials Navigation */}
        <div className="hidden lg:flex w-24 flex-col items-center justify-center border-r border-black/5 py-12 mr-10 z-30 dark:border-white/5">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="flex flex-col items-center gap-12"
          >
            <div className="text-neon-cyan font-display tracking-widest -rotate-90 origin-center whitespace-nowrap mb-12 text-sm">
              SANJAY PURTY
            </div>
            <div className="flex flex-col gap-6">
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-slate-500 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all dark:border-white/10 dark:text-[#A0AEC0]">in</a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-slate-500 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all dark:border-white/10 dark:text-[#A0AEC0]">gh</a>
              <a href="#" className="flex h-10 w-10 items-center justify-center rounded-full border border-black/10 text-slate-500 hover:border-neon-cyan hover:text-neon-cyan hover:shadow-[0_0_15px_rgba(0,229,255,0.4)] transition-all dark:border-white/10 dark:text-[#A0AEC0]">x</a>
            </div>
          </motion.div>
        </div>

        {/* Center/Left: The Offset Image & Blob */}
        <div className="relative flex w-full max-w-[400px] sm:max-w-md lg:max-w-[450px] items-center justify-center lg:ml-[5%]">
            <motion.div 
               animate={{ rotate: [0, 4, 0], scale: [1, 1.03, 1] }}
               transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
               className="absolute inset-0 z-0 flex items-center justify-center -translate-x-[15%]"
            >
               <svg viewBox="0 0 200 200" className="w-[140%] text-navy-800 lg:w-[160%] shadow-lg shadow-neon-cyan/5 drop-shadow-xl" xmlns="http://www.w3.org/2000/svg">
                <path fill="currentColor" d="M48.2,-73.4C63.6,-66.9,78.2,-57.4,85.5,-43.3C92.8,-29.2,92.8,-10.5,90.4,7.4C88,25.3,83.2,42.4,72.4,54.8C61.6,67.2,44.8,74.9,27.7,81C10.6,87.1,-6.8,91.6,-22.7,87.5C-38.6,83.4,-53,70.7,-64.5,56.8C-76,42.9,-84.6,27.8,-87.3,11.8C-90,-4.2,-86.8,-19.4,-78.9,-32C-71,-44.6,-58.4,-54.6,-44.9,-61.7C-31.4,-68.8,-17,-73,-1.3,-71.2C14.4,-69.4,28.8,-61.6,48.2,-73.4Z" transform="translate(100 100) shrink(1)"/>
               </svg>
            </motion.div>
            
            <motion.img
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 1 }}
              src={profileImg}
              onError={(e) => {
                e.target.src = "https://ui-avatars.com/api/?name=SP&size=600&background=111827&color=00E5FF";
              }}
              alt="Sanjay Purty"
              className="relative z-10 w-[85%] max-w-[320px] rounded-full object-cover lg:max-w-[400px] contrast-110 transition-all duration-700 shadow-[0_0_40px_rgba(0,0,0,0.8)]"
            />
        </div>

        {/* Large Typography overlapping the right side of the image */}
        <div className="absolute left-[50%] z-20 hidden lg:block xl:left-[45%] pointer-events-none self-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2 }}
              className="flex flex-col"
            >
              <h1 className="text-[5.5rem] font-display font-bold leading-[0.9] tracking-tight text-slate-900 drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] xl:text-[7rem] dark:text-white dark:drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">
                FULL STACK
              </h1>
              <h2 className="mt-1 text-[3.5rem] font-display font-bold tracking-[0.22em] text-slate-500 xl:text-[4.5rem] dark:text-[#A0AEC0]/90">
                DEVELOPER
              </h2>
              <p className="mt-4 text-xl font-sans font-semibold tracking-[0.15em] text-neon-cyan uppercase drop-shadow-md whitespace-nowrap xl:text-2xl lg:mt-5 text-glow">
                Modern MERN Architect
              </p>
            </motion.div>
        </div>
          
        {/* Mobile Header Overlays */}
        <div className="absolute bottom-10 left-0 right-0 z-20 flex flex-col items-center text-center drop-shadow-xl lg:hidden px-4">
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <h1 className="text-5xl font-display font-bold leading-none text-slate-900 drop-shadow-[0_5px_15px_rgba(0,0,0,0.2)] sm:text-6xl dark:text-white dark:drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)]">FULL STACK</h1>
              <h2 className="mt-1 text-2xl font-display font-bold tracking-[0.15em] text-slate-500 sm:text-4xl dark:text-[#A0AEC0]/95">DEVELOPER</h2>
              <p className="mt-3 text-sm font-sans font-semibold tracking-[0.2em] text-neon-cyan uppercase text-glow whitespace-nowrap">Modern MERN Architect</p>
            </motion.div>
        </div>

      </div>
    </section>
  );
}
