import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

export function Skills() {
  const categories = [
    {
      title: "Frontend",
      subtitle: "Modern and responsive user interfaces",
      skills: [
      { name: "React", value: 92 },
      { name: "Tailwind CSS", value: 95 },
      { name: "JavaScript (ES6+)", value: 90 },
      ],
    },
    {
      title: "Backend",
      subtitle: "Scalable APIs and business logic",
      skills: [
      { name: "Node.js", value: 88 },
      { name: "Express", value: 86 },
      { name: "MongoDB", value: 82 },
      ],
    },
    {
      title: "Tools",
      subtitle: "Workflow, testing, and deployment support",
      skills: [
      { name: "Git", value: 85 },
      { name: "Postman", value: 80 },
      { name: "Vite", value: 88 },
      ],
    },
  ];

  return (
    <section className="space-y-8">
      <Helmet>
        <title>Skills | Sanjay Purty</title>
      </Helmet>
      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} className="card p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.2em] text-neon-cyan">My Skills</p>
        <h2 className="mt-2 text-3xl font-bold md:text-4xl">Building complete digital products end-to-end</h2>
        <p className="mt-4 max-w-3xl text-slate-600 dark:text-slate-300">
          I focus on clean frontend engineering, robust backend architecture, and practical tooling to deliver real-world applications.
        </p>
      </motion.div>

      <div className="grid gap-6 md:grid-cols-3">
        {categories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.07 * index }}
            className="card p-6"
          >
            <h3 className="text-xl font-semibold">{category.title}</h3>
            <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">{category.subtitle}</p>
            <div className="space-y-4">
              {category.skills.map((skill) => (
                <div key={skill.name} className="mt-4">
                  <div className="mb-1 flex justify-between text-sm text-slate-700 dark:text-slate-200">
                    <span>{skill.name}</span>
                    <span className="text-neon-cyan">{skill.value}%</span>
                  </div>
                  <div className="h-2 rounded-full bg-black/10 shadow-inner dark:bg-white/10">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      viewport={{ once: true, amount: 0.6 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                      className="h-2 rounded-full bg-gradient-to-r from-neon-blue to-neon-cyan"
                    />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="card p-6 md:p-8">
        <h3 className="text-2xl font-semibold">Also Comfortable With</h3>
        <div className="mt-4 flex flex-wrap gap-2">
          {["REST APIs", "JWT Auth", "Responsive Design", "SEO Basics", "Debugging", "Deployment"].map((item) => (
            <span key={item} className="rounded-xl bg-black/10 px-3 py-1.5 text-sm text-slate-700 dark:bg-white/10 dark:text-slate-200">
              {item}
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
