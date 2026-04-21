import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export function About() {
  const journey = [
    {
      year: "Start",
      title: "Frontend Foundation",
      description: "Started with HTML, CSS, and JavaScript, building responsive interfaces and learning design systems.",
    },
    {
      year: "Growth",
      title: "MERN Full-Stack Development",
      description: "Expanded into API design, MongoDB data modeling, and complete React + Node project architecture.",
    },
    {
      year: "Now",
      title: "Production Mindset",
      description: "Focused on scalable code, clean UX, performance, and real-world project delivery for clients and teams.",
    },
  ];

  const highlights = [
    "Hackathon participant with rapid problem-solving experience",
    "Strong focus on clean UI/UX and maintainable architecture",
    "Comfortable with end-to-end development and deployment",
  ];

  return (
    <section className="space-y-8">
      <Helmet>
        <title>About | Sanjay Purty</title>
      </Helmet>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="card p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-neon-cyan">About Me</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Crafting impactful digital experiences</h2>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          I am Sanjay Purty, a Web Developer specializing in the MERN stack. I enjoy turning ideas into fast, modern, and
          user-focused products with thoughtful design and reliable backend systems.
        </p>
      </motion.div>

      <div className="grid gap-6 lg:grid-cols-3">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} className="card p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">Projects Built</p>
          <p className="mt-2 text-4xl font-bold text-neon-cyan">15+</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} className="card p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">Hackathons</p>
          <p className="mt-2 text-4xl font-bold text-neon-cyan">3+</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.15 }} className="card p-6">
          <p className="text-sm text-slate-500 dark:text-slate-400">Core Stack</p>
          <p className="mt-2 text-4xl font-bold text-neon-cyan">MERN</p>
        </motion.div>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card p-6 md:p-8">
          <h3 className="text-2xl font-semibold">My Journey</h3>
          <div className="mt-6 space-y-5">
            {journey.map((step) => (
              <div key={step.title} className="relative border-l border-black/15 pl-5 dark:border-white/15">
                <span className="absolute -left-[5px] top-1 h-2.5 w-2.5 rounded-full bg-neon-cyan" />
                <p className="text-xs uppercase tracking-wide text-neon-cyan">{step.year}</p>
                <h4 className="mt-1 font-semibold text-slate-900 dark:text-white">{step.title}</h4>
                <p className="mt-1 text-sm text-slate-600 dark:text-slate-300">{step.description}</p>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.25 }} className="card p-6 md:p-8">
          <h3 className="text-2xl font-semibold">Highlights</h3>
          <ul className="mt-6 space-y-3 text-slate-600 dark:text-slate-300">
            {highlights.map((point) => (
              <li key={point} className="rounded-xl border border-black/10 bg-black/5 p-3 dark:border-white/10 dark:bg-white/5">
                {point}
              </li>
            ))}
          </ul>

          <h3 className="mt-7 text-2xl font-semibold">Skills Snapshot</h3>
          <div className="mt-4 flex flex-wrap gap-2">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind", "JavaScript", "Git", "REST APIs"].map((skill) => (
              <span key={skill} className="rounded-xl bg-black/10 px-3 py-1.5 text-sm dark:bg-white/10">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
